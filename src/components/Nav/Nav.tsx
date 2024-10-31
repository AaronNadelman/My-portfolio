import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Nav() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme('myDarkTheme')
    } else {
      setTheme('light')
    }
  }
  useEffect(() => {
    localStorage.setItem('theme', theme ?? 'light')
    const localTheme = localStorage.getItem('theme')
    document
      .querySelector('html')
      ?.setAttribute('data-theme', localTheme ?? 'light')
  }, [theme])

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 font-sans text-lg rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li> </li>
            <li>
              <Link
                to="/certificaciones"
                className="transition ease-in-out delay-120"
              >
                Certificaciones
              </Link>
            </li>
            <li>
              <Link to="/cv-resume">Cv / Resume</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src="src\assets\home_7828207.png" alt="Home icon" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              className="transition ease-in-out delay-75 btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-md"
              to="/certificaciones"
            >
              Certificaciones
            </Link>
          </li>
          <li>
            <Link
              className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-md"
              to="/sobre-mi"
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-md"
              to="/trayectoria"
            >
              Trayectoria
            </Link>
          </li>
          <li>
            <Link
              className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-md"
              to="/resume"
            >
              Contacto
            </Link>
          </li>
        </ul>
        <label id='toggle' className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                name='toggle'
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
                onChange={handleToggle}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/AaronNadelman?tab=repositories"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="src\assets\github.png" className="p-7" alt="GitHub icon" />
        </a>
      </div>
    </nav>
  )
}

export default Nav
