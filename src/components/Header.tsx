import Logo from '../assets/logo.png';
import './header.css';
import { useEffect, useState } from "react";

type Props = {}

export default function Header(props: Props) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'medium');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'medium', 'dark', 'gOne', 'gTwo', 'gThree');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate Logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span onClick={() => setTheme('light')} className={`light ${theme === 'light' ? 'activeTheme' : ''}`}></span>
        <span onClick={() => setTheme('medium')} className={`medium ${theme === 'medium' ? 'activeTheme' : ''}`}></span>
        <span onClick={() => setTheme('dark')} className={`dark ${theme === 'dark' ? 'activeTheme' : ''}`}></span>
        <span onClick={() => setTheme('gOne')} className={`gOne ${theme === 'gOne' ? 'activeTheme' : ''}`}></span>
        <span onClick={() => setTheme('gTwo')} className={`gTwo ${theme === 'gTwo' ? 'activeTheme' : ''}`}></span>
        <span onClick={() => setTheme('gThree')} className={`gThree ${theme === 'gThree' ? 'activeTheme' : ''}`}></span>
      </div>
    </header>
  )
}
