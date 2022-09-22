import {
    USER_LOGOUT,
} from '../reducers/LoginReducer'
import {
    USER_PROFILE_RESET,
} from '../reducers/UserReducer'

/**
 * @name login
 */

export const logout = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_PROFILE_RESET })
}