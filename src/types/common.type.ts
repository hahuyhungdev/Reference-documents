export interface DeviceType {
  id: number
  deviceName: string
  description: null
  createdDate: null
  updatedDate: null
  tagName: string
  status: number
  typeName: string
  tagId: number
  typeId?: number
  // name?: string
}
export interface CreateUpdateDeviceType {
  tagId: number
  typeId: number
  name: string
  description: string
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
export interface TypeType {
  id: number
  name: string
  createdDate: string
  updatedDate: string
}

export type dataOptions = {
  value: number
  label: string
}
