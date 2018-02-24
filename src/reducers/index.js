import {combineReducers} from 'redux';
import kimlikDogrulamaReducers from './kimlikDogrulamaReducers';
import StudentsCreateReducers from './StudentsCreateReducers';
import studentsDataReducers from './StudentDataReducers';
import studentsUpdateReducers from './StudentUpdateReducers';

export default combineReducers({
    kimlikDogrulamaResponse : kimlikDogrulamaReducers,
    studentsListResponse:StudentsCreateReducers,
    studentsDataResponse:studentsDataReducers,
    studentsUpdateResponse:studentsUpdateReducers
});