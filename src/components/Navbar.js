import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
  // Load context
  const contextTheme = useContext(ThemeContext)
  const { isLightTheme, light, dark } = contextTheme

  const contextAuth = useContext(AuthContext)
  const { isAuthenticated, toggleAuth } = contextAuth

  // Decide theme
  const navbarTheme = isLightTheme ? light : dark
  const { syntax, ui, bg } = navbarTheme
  const navbarStyle = {
    background: ui,
    color: syntax
  }

  // Return
  return (
    <nav style={navbarStyle}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged in' : 'Logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
  // ANOTHER WAY TO CONSUME SINGLE CONTEXT
  /* return (
    <ThemeContext.Consumer>
      {context => {
        // Load context and choose theme
        const { isLightTheme, light, dark } = context
        const navbarTheme = isLightTheme ? light : dark
        const { syntax, ui, bg } = navbarTheme
        const navbarStyle = {
          background: ui,
          color: syntax
        }

        return (
          <nav style={navbarStyle}>
            <h1>Context App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        )
      }}
    </ThemeContext.Consumer>
  ) */
  // CONSUME MULTIPLE CONTEXTS, ANOTHER WAY
  /* return (
    <AuthContext.Consumer>
      {authContext => (
        <ThemeContext.Consumer>
          {themeContext => {
            // Load authContext
            const { isAuthenticated, toggleAuth } = authContext

            // Load themeContext and choose theme
            const { isLightTheme, light, dark } = themeContext
            const navbarTheme = isLightTheme ? light : dark
            const { syntax, ui, bg } = navbarTheme
            const navbarStyle = {
              background: ui,
              color: syntax
            }

            return (
              <nav style={navbarStyle}>
                <h1>Context App</h1>
                <div onClick={toggleAuth}>
                  {isAuthenticated ? 'Logged in' : 'Logged out'}
                </div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            )
          }}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  ) */
}
export default Navbar
