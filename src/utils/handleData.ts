import { toast } from 'react-toastify'
import { ErrorResponse } from 'types/utils.type'

import { isAxiosUnprocessableEntityError } from './utils'

// response message is error form status 422
export const responseMessageError = (err: any) => {
  if (isAxiosUnprocessableEntityError<ErrorResponse<{}>>(err)) {
    const formError = err.response?.data
    toast.error(formError?.message)
  }
}
