import { connect } from 'react-redux';

import App from './App.component';


const mapStateToProps = state => ({
  layout: state.get('rows').toJS(),
  numberOfRows: state.get('numberOfRows'),
  numberOfColumns: state.get('numberOfColumns'),
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
