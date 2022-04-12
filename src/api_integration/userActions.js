import * as Api from './userApi';

export function getUsers() {
    return function(dispatch) {
        return Api.getUsers()
        .then((result) => {
            return dispatch({
                type: 'LOAD_ALL_USERS',
                data: result.data.results
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'LOADING_ALL_USERS_FAILED',
                data: 'Fetching all users failed due to' + error
            });
        })
    }
}