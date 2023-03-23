import isUndefined from 'lodash/isUndefined'
import omitBy from 'lodash/omitBy'
import { TagListConfig } from 'types/tag.type'

import useQueryParams from './useQueryParams'

export type QueryConfig = {
  [key in keyof TagListConfig]: string
}

export default function useQueryConfig() {
  const queryParams: QueryConfig = useQueryParams()
  // Explain: hear, we use lodash to omit undefined value in queryParam.
  //Because we don't want to send undefined value to server
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit,
      name: queryParams.name
    },
    isUndefined
  )
  return queryConfig
}
