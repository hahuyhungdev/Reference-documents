const switches = localStorage.getItem('switches')
export const stateSwitch = {
  switchGridView: switches ? JSON.parse(switches).switchGridView : false,
  switchAnchorView: switches ? JSON.parse(switches).switchAnchorView : false,
  switchHistorical: switches ? JSON.parse(switches).switchHistorical : false
}
