import Background from 'assets/images/bg.png'
import h337 from 'heatmap.js'
import { setLocationData, setSocketConnected, socketInstance } from 'pages/dashboard/socket.slice'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const HeatMap = ({ usersData, icons }) => {
  const [instance, setInstance] = useState(null)

  const { locationData } = useSelector((state) => state.iotSocket)
  console.log(locationData)
  const heatmapRef = useRef(null)
  //let ctx = null
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   console.log('connect socket')
  //   socketInstance.socket.on('connect', () => {
  //     socketInstance.socket.emit('connect_mqtt', { id: 'hungban' })
  //     dispatch(setSocketConnected(true))
  //   })
  //   socketInstance.socket.on('MQTT_LOCATION_RESPONSE', (data) => {
  //     dispatch(setLocationData(data))
  //   })
  //   socketInstance.socket.on('error', (error) => {
  //     console.error('Socket connection error:', error)
  //     dispatch(setSocketConnected(false))
  //   })
  //   return () => {
  //     socketInstance.close(false)
  //   }
  // }, [dispatch])

  useEffect(() => {
    const { offsetWidth, offsetHeight } = heatmapRef.current
    console.log(offsetWidth, offsetHeight)
    var heatmapInstance = h337.create({
      container: document.querySelector('.heatmap'),
      radius: 12,
      maxOpacity: 0.5,
      minOpacity: 0,
      blur: 1,
      height: offsetHeight,
      width: offsetWidth
    })
    console.log('render heatmap')
    setInstance(heatmapInstance)
  }, [])
  // handle change data when change time ago
  useEffect(() => {
    // instance && instance.addData(locationData)
    instance &&
      instance.setData({
        max: 1000,
        min: -1000,
        data: locationData
      })
    // instance && instance.setData({ max: 100, min: 0, data: usersData.map((item) => item.logs).flat() })
  }, [usersData, instance, locationData])

  useEffect(() => {
    const canvas = heatmapRef.current
    let ctx = canvas.getContext('2d')

    const columnWidth = canvas.width / 10 // divide canvas width into 10 columns
    const rowHeight = canvas.height / 10 // divide canvas width into 10 columnsclgh

    // loop through each column and draw a line
    for (let i = 0; i < 10; i++) {
      const x = i * columnWidth // starting x coordinate of line
      const y = 0 // starting y coordinate of line
      const x1 = x // ending x coordinate of line
      const y1 = canvas.height // ending y coordinate of line
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x1, y1)
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // loop through each row and draw a line
    for (let i = 0; i < 10; i++) {
      const x = 0
      const y = i * rowHeight
      const x1 = canvas.width
      const y1 = y
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x1, y1)
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 1
      ctx.stroke()
    }
  }, [])

  return (
    <div className='App-heatmap'>
      <div
        className='demo-wrapper'
        style={{
          backgroundImage: `url(${Background})`
        }}
      >
        <canvas className='heatmap' ref={heatmapRef} />
        {/* <div className='tooltip'></div> */}
      </div>
    </div>
  )
}

export default HeatMap
