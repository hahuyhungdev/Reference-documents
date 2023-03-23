import { useEffect, useRef } from 'react'

const Map = ({ icons }) => {
  console.log('icons', icons)
  const canvasRef = useRef(null)
  // MQTT_LOCATION_RESPONSE
  useEffect(() => {
    const canvas = canvasRef.current
    const { offsetWidth, offsetHeight } = canvas
    // console.log('offsetWidth', offsetWidth, 'offsetHeight', offsetHeight)
    const ctx = canvas.getContext('2d')
    // Set canvas dimensions to match the image dimensions
    canvas.width = offsetWidth
    canvas.height = offsetHeight
    // Draw the map on the canvas
    // ...
    // Add icons on top of the canvas at specific x, y coordinates
    icons.forEach(({ x, y, image }) => {
      const iconImage = new Image()
      iconImage.src = image
      iconImage.onload = () => {
        ctx.drawImage(iconImage, x, y, iconImage.width, iconImage.height)
      }
    })
  }, [icons])
  return (
    <div className='App-heatmap'>
      <canvas ref={canvasRef} className='absolute h-full w-full border-2 border-solid border-red-500' />
    </div>
  )
}

export default Map
