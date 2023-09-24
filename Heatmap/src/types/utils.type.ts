export interface ErrorResponse<Data> {
  data: Data
  message: string
}
export interface SuccessResponse<Data> {
  data: Data
  message: string
}
// syntax '-?' will remove property undefined of key optional
export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}
