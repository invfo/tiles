import { connect } from 'react-redux';

import App from './App.component';


const mapStateToProps = state => ({
  layout: state.get('rows').toJS(),
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
