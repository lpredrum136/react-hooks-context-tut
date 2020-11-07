import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  // Load context
  const context = useContext(ThemeContext)
  const { toggleTheme } = context

  return <button onClick={toggleTheme}>Toggle the theme</button>
}

export default ThemeToggle
