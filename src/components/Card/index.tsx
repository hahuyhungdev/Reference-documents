import { FC, memo } from 'react'

interface ICardType {
  valueIncrease: number
  handleIncrease: () => void
}
export const Card: FC<ICardType> = ({ valueIncrease, handleIncrease }) => {
  return (
    <div className='card'>
      <div className='card__header'>
        <h3 className='card__title'>Card Title</h3>
        <div className='card__actions'>
          <button onClick={handleIncrease} className='card__action'>
            Action 1
          </button>
        </div>
      </div>
      <div className='card__body'>
        <p className='card__text'>{valueIncrease}</p>
      </div>
    </div>
  )
}
export default memo(Card)
