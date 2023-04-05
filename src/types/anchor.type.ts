export interface IAnchor {
  id: number
  name: string
  status: number
  x: number
  y: number
  z: number
  id_anchor: string
  description: string
  createdDate: string
  updatedDate: string
}
export interface UpdateIAnchor extends Omit<IAnchor, 'id' | 'createdDate' | 'updatedDate'> {}
export interface IAnchorConfig {
  page: number
  limit: number
}
