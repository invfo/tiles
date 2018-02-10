import { connect } from 'react-redux';

import { changeNumberOfColumns } from './actions';
import App from './App.component';


const mapStateToProps = state => ({
  layout: state.get('rows').toJS(),
  numberOfRows: state.get('numberOfRows'),
  numberOfColumns: state.get('numberOfColumns'),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => {
    dispatch(changeNumberOfColumns(parseInt(event.target.value)));
  }
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
