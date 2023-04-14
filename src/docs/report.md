# Done task

**Functionality**

- [x] Giao diện website các pages ( dashboard, quản lý trạng thái thông tin Device, Tag, Report )
- [x] Quản lý, tích hợp API vào trang web.
- [x] Thể hiện heatmap
- [x] Giao tiếp với server ( serial port ), backend thông qua API và socket
- [x] Config dự án theo Vite + Typescript + Prettierrc + Eslint 6
- [x] Tối ưu hóa thực hiện get, hiển thị các API
      **API Integration**
- Device

|        | successful management                            | unmanaged (problem?) | Note                                       |
| ------ | ------------------------------------------------ | -------------------- | ------------------------------------------ |
| GET    | ✅ Get all, getDeviceId, Search, History Heatmap |                      | timestamp đang phải nhân 1000 match với BE |
| POST   | ✅ Post Device, Delete Many                      |                      |
| PUT    | ✅ Update DeviceId                               |                      |
| DELETE | ✅ Delete DeviceId                               |                      |

- Tag

|        | successful management        | unmanaged (problem?) | Note                                          |
| ------ | ---------------------------- | -------------------- | --------------------------------------------- |
| GET    | ✅ Get all, getTagId, Search |                      |
| POST   | ✅ Post Tag, Delete Many     |                      | Nếu có device đang sử dụng thì không được xóa |
| PUT    | ✅ Update TagId              |                      |
| DELETE | ✅ Delete TagId              |                      | Tương tự như `Note` của POST                  |

- Type

|        | successful management     | unmanaged (problem?) | Note |
| ------ | ------------------------- | -------------------- | ---- |
| GET    | ✅ Get all, getTypegId    |                      |
| POST   | ✅ Post Type, Delete Many |                      |
| PUT    | ✅ Update TypeId          |                      |
| DELETE | ✅ Delete TypeId          |                      |

- Map

|      | successful management | unmanaged (problem?) | Note                |
| ---- | --------------------- | -------------------- | ------------------- |
| GET  | ✅ Get Map            |                      |
| POST | ✅ Upload Map         |                      | multipart/form-data |

- Anchor

|        | successful management           | unmanaged (problem?) | Note |
| ------ | ------------------------------- | -------------------- | ---- |
| GET    | ✅ Get all, getAnchorId, Search |                      |
| POST   | ✅ Post Tag                     |                      |
| PUT    | ✅ Update AnchorId              |                      |
| DELETE | ✅ Delete AnchorId              |                      |

# Stuck

- Chưa xử lí match mapsize trên client với map thực tế
- Gắn ảnh cho các thiết bị trên map
