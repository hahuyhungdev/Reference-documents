export interface DeviceType {
  id: number
  deviceName: string
  description: string
  createdDate: string
  updatedDate: string
  tagId: string
  tagName: string
  id_tag?: string
  status: number
  typeId?: number
  typeName: string
  // name?: string
}
export interface CreateUpdateDeviceType {
  tagId: number
  typeId: number
  name: string
  description: string
}
export interface DeviceHistoryType {
  position: {
    x: number
    y: number
    value: number
  }[]
  id_tag: string
}
export interface TagType {
  id: number
  id_tag: string
  name: string
  status: number
  description: string
  createdDate: string
  updatedDate: string
}
export interface UpdateTagType extends Omit<TagType, 'id' | 'createdDate' | 'updatedDate'> {}

// interface TypeType
export interface IType {
  id: number
  name: string
  createdDate: string
  updatedDate: string
}

export type dataOptions = {
  value: number | string
  label: string
}

export type dataHeatmap = {
  x: number
  y: number
  value: number
}
