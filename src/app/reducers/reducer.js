/**
*| Component      : Reducer
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import { combineReducers } from 'redux';
import auth from './authReducer';
import offtime from './offtimeReducer';

const Reducers = combineReducers({
    auth, offtime
});

export default Reducers
