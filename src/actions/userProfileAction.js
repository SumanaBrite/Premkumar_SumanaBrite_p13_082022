import {
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
} from '../reducers/UserReducer'
import axios from 'axios'

/**
 * @name userProfile
 * @param {string} token
 */

export const userProfile = (token) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.post(
            'http://localhost:3001/api/v1/user/profile',
            { token },
            config
        )

        dispatch({ type: USER_PROFILE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload: error.message,
        })
    }
}