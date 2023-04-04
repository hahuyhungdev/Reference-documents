import { getMap } from 'apis/map.slice'
import Background from 'assets/images/bg.png'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const HeatMap = ({ icons }) => {
  const { switchGridView, switchAnchorView } = useSelector((state) => state.stateSwitch)
  const urlMap = useSelector((state) => state.map.url)
  console.log('urlMap', urlMap)
  const dispatch = useDispatch()
  useEffect(() => {
    const promise = dispatch(getMap())
    return () => {
      promise.abort()
    }
  }, [dispatch])

  const heatmapRef = useRef(null)

  const shouldDraw = switchGridView || switchAnchorView
  console.log('shouldDraw', shouldDraw)

  // Draw the grid lines on the canvas
  const drawGrid = () => {
    const canvas = heatmapRef.current
    const ctx = canvas.getContext('2d')
    const columnWidth = canvas.width / 10 // divide canvas width into 10 columns
    const rowHeight = canvas.height / 10 // divide canvas width into 10 columns

    // loop through each column and draw a line
    for (let i = 0; i < 10; i++) {
      const x = i * columnWidth // starting x coordinate of line
      const y = 0 // starting y coordinate of line
      const x1 = x // ending x coordinate of line
      const y1 = canvas.height // ending y coordinate of line
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x1, y1)
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 1
      ctx.stroke()
    }
    // loop through each row and draw a line
    for (let i = 0; i < 10; i++) {
      const x = 0
      const y = i * rowHeight
      const x1 = canvas.width
      const y1 = y
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x1, y1)
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 1
      ctx.stroke()
    }
  }

  useEffect(() => {
    const canvas = heatmapRef.current
    const { offsetWidth, offsetHeight } = canvas
    let ctx = canvas.getContext('2d')
    const drawImages = () => {
      const ctx = heatmapRef.current.getContext('2d')
      icons.forEach(({ x, y, image }) => {
        const iconImage = new Image()
        iconImage.src = image
        iconImage.onload = () => {
          ctx.drawImage(iconImage, x, y, iconImage.width, iconImage.height)
        }
      })
    }
    if (shouldDraw) {
      if (switchGridView) {
        drawGrid()
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
      if (switchAnchorView) {
        drawImages()
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawGrid()
      }
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [switchGridView, icons, shouldDraw, switchAnchorView])

  return (
    <div className='App-heatmap'>
      <div
        className='demo-wrapper'
        style={{
          backgroundImage: urlMap === '' ? `url(${Background})` : `url(${urlMap})`
        }}
      >
        <canvas className='heatmap' ref={heatmapRef} />
      </div>
    </div>
  )
}

export default HeatMap
