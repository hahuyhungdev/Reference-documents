<!-- ### `active socket` -->

## CÁCH HOẠT ĐỘNG CỦA FILE `Heatmap.js`

**Note: Cần đọc file này để biết được cách thức hoạt động của socket và get data realtime**

1 : Khi vào trang web, react gọi hàm `componentDidMount()` trong file `Heatmap.js` để kết nối socket

- Vì socket là 1 biến toàn cục nên khi kết nối socket, nó sẽ được lưu vào state `locationData` trên redux store với tên gọi là `state.iotSocket`

```jsx
socketInstance.socket.on('connect', () => {
  socketInstance.socket.emit('connect_mqtt', { id: 'bandata' })
  dispatch(setSocketConnected(true))
})
```

Lúc này socket đã emit và connect đến server mqtt, để get data realtime từ server mqtt ta cần `socket.on` để lắng nghe đúng event mà server mqtt emit ra

```jsx
socketInstance.socket.on('MQTT_LOCATION_RESPONSE', (data) => {
  dispatch(setLocationData(data))
})
```

Sự kiện `MQTT_LOCATION_RESPONSE` là sự kiện mà server mqtt emit ra khi có data mới, khi có data mới thì ta sẽ dispatch action `setLocationData` để lưu data mới vào redux store

**Note: Tuy nhiên vì 1 lí do nào đấy mà clean up function ở đây lại không hoạt động như chúng ta mong muốn, nên mình đã tạo ra 1 class để quản lí tốt hơn**

- Đầu tiên khai báo class SocketClass với 1 biến socket đúng type của socket.io-client. Sau đấy khởi tạo biến socket trong constructor của class

  - Hàm `createNewSocket()` sẽ tạo ra 1 socket mới và trả về socket đó
  - Hàm `close()` sẽ đóng socket hiện tại và tạo ra 1 socket mới nếu tham số truyền vào là true. Như mình đã nói ở trên thì `clean up socket.close()` có vẻ như nó sẽ phải chờ 1 khoảng trước khi nó hoạt động tiếp.
    - callback trong useEffect chạy lần 1 , lắng nghe socket( có vẻ nó cần thời gian)
    - useEffect chạy lần 2, socket emit data, nhưng lúc này socket bị close rồi nên nó không nhận được data
    - Nên khi tạo cái class này, mình sẽ tạo ra 1 socket mới khi socket cũ bị close. Nhưng để quản lí tốt hơn nên mình có để nó nhận 1 đối số với trạng thái mặc định là true, nếu muốn tắt socket thì truyền vào false

```js
export class SocketClass {
  socket: Socket
  constructor() {
    this.socket = this.createNewSocket()
  }
  createNewSocket() {
    return io(url, {
      transports: ['websocket'],
      reconnection: false
    })
  }
  close(createNew: boolean = true) {
    this.socket.close()
    if (createNew) {
      this.socket = this.createNewSocket()
    }
  }
}
export const socketInstance = new SocketClass()
```

<br/>

---

# version 2: thay đổi cách tiếp cận data từ backend lên client

## Group button Off

Lúc này data từ dưới server sẽ bắn lên theo dạng mảng. có các thông tin như

```jsx
interface data {
  position: {
    x: number,
    y: number,
    value: number
  };
  tag_id: string;
}
```

Theo như cách thống nhất với bên backend tới thời điểm này ( 4/11/2023) thì data sẽ bắn lên theo dạng mảng (`REALTIME`), mỗi phần tử trong mảng sẽ là 1 object có các thông tin như trên. Ở trên client thì khi ta checked trên table ( vehicle) ở dashboard thì sẽ có 2 thông tin ta nhận được

- 1: id row được checked
- 2: data được checked
  > Quan trọng: ở đây data bắn lên có thêm "tag_id" và trong data của device thì cũng sẽ có field "tag_id". Vì vậy khi ta checked thì ta sẽ phải compare "tag_id" của data được checked với "tag_id" của data bắn lên từ server. Nếu 2 cái này trùng nhau thì ta sẽ hiển thị data đó lên heatmap

Đây là 1 ví dụ cho cách thức hoạt động

```jsx
// data được trả realtime từ backend lên với object
const dataRecived ={
    position: [
      { x: 1, y: 2, value: 3 },
      { x: 2, y: 3, value: 4 }
    ],
    tag_id: 'A'
  }
// data được checked trên table
const deviceTypes = [
  { id: 1, tag_id: "A", typeId: 100, deviceName: "Device A" },
  { id: 2, tag_id: "B", typeId: 200, deviceName: "Device B" }
];
function findDataByTagId(data, deviceTypes) {
  const deviceType = deviceTypes.find(d => d.tag_id === data.tag_id);
  if (deviceType) {
    return data;
  }
  return null;
}
const result = findDataByTagId(dataRecived, deviceTypes);
console.log(result)
{
  position: [ { x: 1, y: 2, value: 3 }, { x: 2, y: 3, value: 4 } ],
  tag_id: 'A'
}
```

> Giải thích: ở đây ta sẽ lọc ra những data có tag_id trùng với tag_id của device được checked với hàm `filterDataByTagId()`.

- Format data của heatmap

```jsx
const convertData = (data) => {
  return data.position.map(({ x, y, value }) => ({ x, y, value }))
}
console.log(convertData(result))
```

## Group button Line trace và Group button Heatmap

### Cách thức hoạt động

Mặc định thì Historical Data ( button treen client) sẽ là default và data thay vì là `REALTIME` thì lúc này nó dùng API và socket sẽ bị đóng.

### Cách thức Data được bắn lên từ server

Về các trả data từ server lên client thì cũng tương tự như trên, nhưng ở đây ta sẽ có 1 số điểm khác biệt

- Giao thức: `API` lúc này thì tiến hành truyền các tham số query để lấy data từ server, hiện tại có các fiedls như sau

```jsx
 {
      start,
      end,
      id_tag
    }: {
      start: number
      end: number
      id_tag: string
    },
```

với start và end là thời gian bắt đầu và kết thúc, id_tag là id của device được checked. Time được format qua timestamp
