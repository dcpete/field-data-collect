export const SET_MOTD = "SET_MOTD"

export const setMotd = (screen) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_MOTD,
      payload: screen
    })
  }
}