import { getMap } from 'apis/map.slice'
import Background from 'assets/images/bg.png'
import h337 from 'heatmap.js'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const HeatMap = ({ onData, icons }) => {
  const [instance, setInstance] = useState(null)
  const { switchGridView, switchAnchorView } = useSelector((state) => state.stateSwitch)
  const urlMap = useSelector((state) => state.map.url)
  const dispatch = useDispatch()
  const heatmapRef = useRef(null)
  useEffect(() => {
    const promise = dispatch(getMap())
    return () => {
      promise.abort()
    }
  }, [dispatch])
  useEffect(() => {
    var heatmapInstance = h337.create({
      container: document.querySelector('.heatmap'),
      radius: 12,
      maxOpacity: 0.5,
      minOpacity: 0,
      blur: 1
      // height: 500,
    })
    setInstance(heatmapInstance)
  }, [])
  // handle change data when change time ago
  useEffect(() => {
    instance &&
      instance.setData({
        max: 100,
        min: 0,
        data: onData
      })
  }, [instance, onData])

  const shouldDraw = switchGridView || switchAnchorView
  const drawGrid = () => {
    const canvas = heatmapRef.current
    const ctx = canvas.getContext('2d')
    const columnWidth = canvas.width / 10 // divide canvas width into 10 columns
    const rowHeight = canvas.height / 10 // divide canvas width into 10 columns

    // loop through each column and draw a line
    for (let i = 0; i < 10; i++) {
      const x = i * columnWidth + 0.5 // starting x coordinate of line
      const y = 0 // starting y coordinate of line
      const x1 = x // ending x coordinate of line
      const y1 = canvas.height + 0.5 // ending y coordinate of line
      ctx.beginPath()
      ctx.moveTo(x, y + 0.5)
      ctx.lineTo(x1, y1 + 0.5)
      ctx.strokeStyle = 'orange'
      ctx.lineWidth = 1
      ctx.stroke()
    }
    // loop through each row and draw a line
    for (let i = 0; i < 10; i++) {
      const x = 0
      const y = i * rowHeight + 0.5
      const x1 = canvas.width
      const y1 = y
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x1, y1)
      ctx.strokeStyle = 'orange'
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
          ctx.drawImage(iconImage, x, y, 10, 10)
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
        <div className='heatmap'>
          <canvas ref={heatmapRef} className='h-full w-full' />
        </div>
        <div className='tooltip'></div>
      </div>
    </div>
  )
}

export default HeatMap
