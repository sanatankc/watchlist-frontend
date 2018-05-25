
const isAuthenticated = () => {
  const accessToken = localStorage.getItem('access_token')
  if (!accessToken || accessToken === '') {
    return false
  } else {
    return true
  }
}

export default isAuthenticated
