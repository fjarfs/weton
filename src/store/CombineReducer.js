import {combineReducers} from 'redux';
import GlobalReducer from './reducer/reducer';

export default combineReducers({
  defaultReducer: () => [],
  globalReducer: GlobalReducer,
});
