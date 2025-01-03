import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
      <div className="container-fluid">
        <img
          className="navbar-brand"
          src="logo.webp"
          alt="Logo"
          style={{ height: "60px", width: "auto" }}
        />
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Hjem
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/guide">
                Guide
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sider
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Bsu</a></li>
                <li><a class="dropdown-item" href="#">Fond</a></li>
                <li><a class="dropdown-item" href="#">Formuegrense</a></li>
                <li><a class="dropdown-item" href="#">Generelle tips</a></li>
                <li><a class="dropdown-item" href="#">Inntekt</a></li>
                <li><a class="dropdown-item" href="#">Nettoformue</a></li>
                <li><a class="dropdown-item" href="#">Reisefradrag</a></li>
                <li><a class="dropdown-item" href="#">Rentefradrag</a></li>
                <li><a class="dropdown-item" href="#">Skattefri aksjegevinst</a></li>
                <li><a class="dropdown-item" href="#">Utgiftsfradrag</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
