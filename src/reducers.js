import { fromJS } from 'immutable';

const NUMBER_OF_TILES_IN_SET = 12;
const randomizedTiles = [...Array(NUMBER_OF_TILES_IN_SET).keys()].sort((e) => Math.random() - 0.5);

const INITIAL_NUMBER_OF_COLUMNS = 4;
const INITIAL_NUMBER_OF_ROWS = 3;

const MAX_NUMBER_OF_COLUMNS = 8;
const MAX_NUMBER_OF_ROWS = 3;


export const initialState = fromJS({
  rows: Array(MAX_NUMBER_OF_ROWS)
    .fill(
      Array(MAX_NUMBER_OF_COLUMNS).fill(0)
    ),
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
