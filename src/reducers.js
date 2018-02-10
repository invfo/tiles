import { fromJS } from 'immutable';

const NUMBER_OF_TILES_IN_SET = 12;
const randomizedTiles = [...Array(NUMBER_OF_TILES_IN_SET).keys()].sort((e) => Math.random() - 0.5);

export const initialState = fromJS({
  rows: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
});

const mainReducer = (state = initialState, action) => {
  console.log('row', action.row, 'col', action.column);
  if (action.type === 'CHANGE_BACKGROUND') {
    return state.setIn(['rows', action.row, action.column], action.backgroundId);
  }
  return state;
};

export default mainReducer;
