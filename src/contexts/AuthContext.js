import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  // State
  const [isAuthenticated, setAuthentication] = useState(false)
  const toggleAuth = () => {
    setAuthentication(!isAuthenticated)
  }

  // Context data
  const authContextData = {
    isAuthenticated,
    toggleAuth
  }

  // Context return
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
