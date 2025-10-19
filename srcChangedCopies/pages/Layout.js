import { Outlet, Link } from "react-router-dom";

// const langT = `Language
// Table`;

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top py-3 px-2">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item border-end">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item border-end">
              <Link className="nav-link" to="/Languages">
                Languages
              </Link>
            </li>
            <li className="nav-item border-end">
              <Link className="nav-link" to="/LangTable">
                {/* {langT} */} LangTable
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
