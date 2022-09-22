import {
    USER_PROFILE_FAIL,
    USER_PROFILE_UPDATE,
} from '../reducers/UserReducer'
import axios from 'axios'
/**
 * @name updateProfile
 * @param {string} token 
 * @param {string} newFirstName 
 * @param {string} newLastName 
 * @returns {JSON} 
 */

export const updateProfile =
    (token, newFirstName, newLastName) => async (dispatch) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }

            const { data } = await axios.put(
                'http://localhost:3001/api/v1/user/profile',
                { firstName: newFirstName, lastName: newLastName },
                config
            )

            dispatch({ type: USER_PROFILE_UPDATE, payload: data })
        } catch (error) {
            dispatch({
                type: USER_PROFILE_FAIL,
                payload: error.message

            })
        }
    }