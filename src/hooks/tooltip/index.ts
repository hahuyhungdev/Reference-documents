var tooltip = document.createElement('tooltip')
// type x, y, value equal type updateTooltip of TooltipType
export const updateTooltip = (x: number, y: number, value: string) => {
  // + 15 for distance to cursor
  var transform = 'translate(' + (x + 15) + 'px, ' + (y + 15) + 'px)'
  tooltip.style.transform = transform /* One day, my pretty */
  tooltip.innerHTML = value
}
