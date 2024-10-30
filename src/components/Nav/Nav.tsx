import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar text-green-500">
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
          <img src="/home_7828207.png" alt="Home icon" />
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
              to="/cv"
            >
              CV-Resume
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
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/AaronNadelman?tab=repositories"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" className="p-7" alt="GitHub icon" />
        </a>
      </div>
    </nav>
  )
}

export default Nav
