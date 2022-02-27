export const SET_IS_DARK_MODE = "SET_IS_DARK_MODE"

export const setIsDarkMode = (isDarkMode) => {
  return {
    type: SET_IS_DARK_MODE,
    payload: isDarkMode
  }
}