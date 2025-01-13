import { useContext } from "react"
import { ThemeContext } from "../ThemeContext";

function ThemeChild() {

    const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
        <h3>Theme Child</h3>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Toggle Theme</button>
    </div>
  )
}

export default ThemeChild
