const setUsername = "SET_USERNAME"

export const onChangeUsername = (dispatch, username) => {
      dispatch({type: setUsername, username})
}
