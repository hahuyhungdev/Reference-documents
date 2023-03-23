import { useEffect, useState } from 'react'

const classMap = [
  'NUL',
  'SOH',
  'STX',
  'ETX',
  'EOT',
  'ENQ',
  'ACK',
  'BEL',
  'BS',
  'HT',
  'LF',
  'VT',
  'FF',
  'CR',
  'SO',
  'SI',
  'DLE',
  'DC1',
  'DC2',
  'DC3',
  'DC4',
  'NAK',
  'SYN',
  'ETB',
  'CAN',
  'EM',
  'SUB',
  'ESC',
  'FS',
  'GS',
  'RS',
  'US'
]
classMap[127] = 'DEL'

export const AsciiInput = ({ id, value, placeholder, maxLength, interceptor, onChange }) => {
  const handleKeyDown = (e) => {
    if (interceptor && interceptor(e)) {
      return
    }
    return
  }

  return (
    <div className='ascii-input-wrap' id={id}>
      <pre dangerouslySetInnerHTML={{ __html: value }}></pre>
      <textarea
        id={`ascii-input-${id}`}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        spellCheck='false'
        autoCapitalize='off'
        autoComplete='off'
        autoCorrect='off'
        placeholder={placeholder}
        maxLength={maxLength}
      ></textarea>
    </div>
  )
}

export default AsciiInput
