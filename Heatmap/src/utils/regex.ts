const REGEX_PANID = /(?<=panid=)[\w\d]{5}/
const REGEX_ADDR = /(?<=addr=\w{13})\w{4}/
const REGEX_LABEL = /(?<=label=)[^\s]{8}/

// factory function regex for getPanid and getAddr
const factoryRegex = (regex: RegExp) => (value: string) => {
  const matches = value.match(regex)
  return matches ? matches[0] : null
}

export const getPanid = (panName: string) => factoryRegex(REGEX_PANID)(panName)
export const getAddr = (value: string) => factoryRegex(REGEX_ADDR)(value)
export const getLabel = (value: string) => factoryRegex(REGEX_LABEL)(value)
