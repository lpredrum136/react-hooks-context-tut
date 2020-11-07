import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  // State
  const [themeSettings, setThemeSettings] = useState({
    isLightTheme: true,
    light: {
      syntax: '#555',
      ui: '#ddd',
      bg: '#eee'
    },
    dark: {
      syntax: '#ddd',
      ui: '#333',
      bg: '#555'
    }
  })

  // Function to toggle theme
  const toggleTheme = () => {
    setThemeSettings({
      ...themeSettings,
      isLightTheme: !themeSettings.isLightTheme
    })
  }

  // All context data to pass around
  const themeContextData = {
    ...themeSettings,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
