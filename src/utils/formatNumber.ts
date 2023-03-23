export const dateStringsNumber = (dateStrings: string[]) => {
  return dateStrings.map((date) => {
    return Number(date.replace(/-/g, ''))
  })
}

export const convertDate = (date: string) => {
  // return Number(date.replace(/-/g, ""));
  return Number(date.substring(0, 10).replace(/-/g, ''))
}
