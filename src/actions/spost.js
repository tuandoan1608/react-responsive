import * as type from '../actions/type'
export const  getSuccess = (payload) =>({
    type:type.GET_SUCCESS,
    payload
})
export const getFailed = () =>({
    type:type.GET_FAILED,
    
})