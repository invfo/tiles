import { fromJS } from 'immutable';

const NUMBER_OF_TILES_IN_SET = 12;
const randomizedTiles = [...Array(NUMBER_OF_TILES_IN_SET).keys()].sort((e) => Math.random() - 0.5);

const INITIAL_NUMBER_OF_COLUMNS = 4;
const INITIAL_NUMBER_OF_ROWS = 3;

const MAX_NUMBER_OF_COLUMNS = 8;
const MAX_NUMBER_OF_ROWS = 3;

const rows = [];
for (let r = 0; r < MAX_NUMBER_OF_ROWS; r++) {
  let row = [];
  for (let c = 0; c < MAX_NUMBER_OF_COLUMNS; c++) {
    if (r < INITIAL_NUMBER_OF_ROWS && c < INITIAL_NUMBER_OF_COLUMNS) {
      row.push(randomizedTiles[INITIAL_NUMBER_OF_COLUMNS * r + c]);
    } else {
      row.push(Math.floor(12 * Math.random()));
    }
  }
  rows.push(row);
}


let initialState = fromJS({
  rows,
  numberOfRows: INITIAL_NUMBER_OF_ROWS,
  numberOfColumns: INITIAL_NUMBER_OF_COLUMNS,
  swapping: false,
  swapRow: null,
  swapColumn: null,
  swapTile: null,
});

const mainReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_BACKGROUND') {
    return state.setIn(['rows', action.row, action.column], action.backgroundId);
  } else if (action.type === 'CHANGE_NUMBER_OF_COLUMNS') {
    return state.set('numberOfColumns', action.numberOfColumns);
  } else if (action.type === 'SWITCH_BACKGROUND') {
    if (state.get('swapping') === false) {
      return state
        .set('swapping', true)
        .set('swapRow', action.row)
        .set('swapColumn', action.column)
        .set('swapTile', action.tile);
    } else {
      return state
        .setIn(
          ['rows', state.get('swapRow'), state.get('swapColumn')],
          state.getIn(['rows', action.row, action.column])
        )
        .setIn(
          ['rows', action.row, action.column],
          state.get('swapTile')
        )
        .set('swapping', false)
        .set('swapRow', null)
        .set('swapColumn', null)
        .set('swapTile', null);
    }
  }
  return state;
};

export default mainReducer;
export { initialState }
