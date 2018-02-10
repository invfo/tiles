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
});

const mainReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_BACKGROUND') {
    return state.setIn(['rows', action.row, action.column], action.backgroundId);
  } else if (action.type === 'CHANGE_NUMBER_OF_COLUMNS') {
    return state.set('numberOfColumns', action.numberOfColumns);
  }
  return state;
};

export default mainReducer;
export { initialState }
