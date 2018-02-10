export const changeBackground = (row, column, backgroundId) => ({
  type: 'CHANGE_BACKGROUND',
  row,
  column,
  backgroundId,
});

export const switchBackground = (row, column, tile) => ({
  type: 'SWITCH_BACKGROUND',
  row,
  column,
  tile,
})
