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
                <li><a class="dropdown-item" href="bsusparing">Bsu</a></li>
                <li><a class="dropdown-item" href="fond">Fond</a></li>
                <li><a class="dropdown-item" href="formuegrense">Formuegrense</a></li>
                <li><a class="dropdown-item" href="generelle-tips">Generelle tips</a></li>
                <li><a class="dropdown-item" href="inntektsgrense">Inntektsgrense</a></li>
                <li><a class="dropdown-item" href="nettoformue">Nettoformue</a></li>
                <li><a class="dropdown-item" href="reise-fradrag">Reisefradrag</a></li>
                <li><a class="dropdown-item" href="rente-fradrag">Rentefradrag</a></li>
                <li><a class="dropdown-item" href="skattefritt-aksjer">Skattefri aksjegevinst</a></li>
                <li><a class="dropdown-item" href="utgiftsfradrag">Utgiftsfradrag</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
