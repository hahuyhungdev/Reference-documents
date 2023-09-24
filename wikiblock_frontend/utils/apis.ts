import queryString from 'query-string';

export const privateAPI = (url: string, params?: any) => {
  return `/private${url}${params ? '?' + queryString.stringify(params, { arrayFormat: 'bracket' }) : ''}`;
};

export const apis = {
  // user
  userList: (params: any) => privateAPI('/users', params),
};
