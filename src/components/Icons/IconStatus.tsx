import React from 'react'

export const IconStatus = (props: any) => {
  return (
    <svg
      className={props.className}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.03987 2.90903C4.18984 3.05906 4.2741 3.2625 4.2741 3.47463C4.2741 3.68677 4.18984 3.89021 4.03987 4.04023C3.5198 4.56025 3.10725 5.17761 2.82579 5.85707C2.54433 6.53654 2.39946 7.26478 2.39946 8.00023C2.39946 8.73568 2.54433 9.46393 2.82579 10.1434C3.10725 10.8229 3.5198 11.4402 4.03987 11.9602C4.11628 12.034 4.17722 12.1223 4.21915 12.2199C4.26108 12.3175 4.28314 12.4225 4.28407 12.5287C4.28499 12.6349 4.26475 12.7403 4.22452 12.8386C4.1843 12.9369 4.1249 13.0262 4.04978 13.1013C3.97467 13.1765 3.88535 13.2359 3.78703 13.2761C3.68871 13.3163 3.58337 13.3366 3.47715 13.3356C3.37092 13.3347 3.26595 13.3126 3.16834 13.2707C3.07074 13.2288 2.98246 13.1678 2.90867 13.0914C2.24008 12.4229 1.70972 11.6291 1.34788 10.7556C0.986041 9.88203 0.799805 8.94576 0.799805 8.00023C0.799805 7.05471 0.986041 6.11844 1.34788 5.24489C1.70972 4.37134 2.24008 3.57762 2.90867 2.90903C3.05869 2.75906 3.26214 2.6748 3.47427 2.6748C3.6864 2.6748 3.88985 2.75906 4.03987 2.90903ZM11.9599 2.90903C12.1099 2.75906 12.3133 2.6748 12.5255 2.6748C12.7376 2.6748 12.941 2.75906 13.0911 2.90903C13.7597 3.57762 14.29 4.37134 14.6519 5.24489C15.0137 6.11844 15.1999 7.05471 15.1999 8.00023C15.1999 8.94576 15.0137 9.88203 14.6519 10.7556C14.29 11.6291 13.7597 12.4229 13.0911 13.0914C13.0173 13.1678 12.929 13.2288 12.8314 13.2707C12.7338 13.3126 12.6288 13.3347 12.5226 13.3356C12.4164 13.3366 12.311 13.3163 12.2127 13.2761C12.1144 13.2359 12.0251 13.1765 11.95 13.1013C11.8748 13.0262 11.8154 12.9369 11.7752 12.8386C11.735 12.7403 11.7147 12.6349 11.7157 12.5287C11.7166 12.4225 11.7387 12.3175 11.7806 12.2199C11.8225 12.1223 11.8835 12.034 11.9599 11.9602C12.4799 11.4402 12.8925 10.8229 13.1739 10.1434C13.4554 9.46393 13.6003 8.73568 13.6003 8.00023C13.6003 7.26478 13.4554 6.53654 13.1739 5.85707C12.8925 5.17761 12.4799 4.56025 11.9599 4.04023C11.8099 3.89021 11.7256 3.68677 11.7256 3.47463C11.7256 3.2625 11.8099 3.05906 11.9599 2.90903ZM6.30307 5.17143C6.45304 5.32146 6.5373 5.5249 6.5373 5.73703C6.5373 5.94916 6.45304 6.15261 6.30307 6.30263C6.08016 6.5255 5.90334 6.79009 5.78271 7.0813C5.66207 7.37251 5.59998 7.68463 5.59998 7.99983C5.59998 8.31504 5.66207 8.62716 5.78271 8.91837C5.90334 9.20958 6.08016 9.47417 6.30307 9.69703C6.37734 9.77136 6.43625 9.85959 6.47643 9.95669C6.51661 10.0538 6.53727 10.1578 6.53723 10.2629C6.53719 10.368 6.51646 10.472 6.47621 10.5691C6.43597 10.6662 6.377 10.7544 6.30267 10.8286C6.22834 10.9029 6.14011 10.9618 6.04301 11.002C5.94592 11.0422 5.84186 11.0628 5.73678 11.0628C5.63171 11.0628 5.52766 11.042 5.4306 11.0018C5.33353 10.9615 5.24534 10.9026 5.17107 10.8282C4.42118 10.0781 3.99992 9.06089 3.99992 8.00023C3.99992 6.93958 4.42118 5.92234 5.17107 5.17223C5.24537 5.09785 5.3336 5.03885 5.43071 4.99859C5.52783 4.95833 5.63194 4.9376 5.73707 4.9376C5.8422 4.9376 5.9463 4.95833 6.04342 4.99859C6.14054 5.03885 6.22877 5.09785 6.30307 5.17223V5.17143ZM9.69667 5.17143C9.77097 5.09705 9.8592 5.03805 9.95632 4.99779C10.0534 4.95753 10.1575 4.9368 10.2627 4.9368C10.3678 4.9368 10.4719 4.95753 10.569 4.99779C10.6661 5.03805 10.7544 5.09705 10.8287 5.17143C11.2002 5.54288 11.4949 5.98388 11.696 6.46926C11.8971 6.95463 12.0006 7.47486 12.0006 8.00023C12.0006 8.52561 11.8971 9.04584 11.696 9.53121C11.4949 10.0166 11.2002 10.4576 10.8287 10.829C10.6786 10.9791 10.475 11.0635 10.2627 11.0635C10.0504 11.0635 9.84678 10.9791 9.69667 10.829C9.54656 10.6789 9.46222 10.4753 9.46222 10.263C9.46222 10.0507 9.54656 9.84715 9.69667 9.69703C10.1466 9.24697 10.3994 8.63663 10.3994 8.00023C10.3994 7.36384 10.1466 6.7535 9.69667 6.30343C9.62229 6.22914 9.56328 6.1409 9.52302 6.04379C9.48276 5.94667 9.46204 5.84257 9.46204 5.73743C9.46204 5.6323 9.48276 5.5282 9.52302 5.43108C9.56328 5.33396 9.62229 5.24573 9.69667 5.17143ZM7.99987 7.20023C8.21204 7.20023 8.41552 7.28452 8.56555 7.43455C8.71558 7.58458 8.79987 7.78806 8.79987 8.00023V8.00823C8.79987 8.22041 8.71558 8.42389 8.56555 8.57392C8.41552 8.72395 8.21204 8.80823 7.99987 8.80823C7.78769 8.80823 7.58421 8.72395 7.43418 8.57392C7.28415 8.42389 7.19987 8.22041 7.19987 8.00823V8.00023C7.19987 7.78806 7.28415 7.58458 7.43418 7.43455C7.58421 7.28452 7.78769 7.20023 7.99987 7.20023Z'
        fill={props.fill || '#C17115'}
      />
    </svg>
  )
}
