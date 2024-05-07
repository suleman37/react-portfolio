import React from "react";
import "./Style.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#about">
                  ABOUT ME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#exp">
                EXPERIENCE
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#edu">
                EDUCATION
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#skil">
                SKILLS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#pub">
                PUBLICATIONS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#re">
                CERTIFICATIONS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#pro">
                PROJECTS
                </a>
              </li>
              <li>
              <a class="nav-link active" aria-current="page" href="#re">
              RESEARCH
                </a>
              </li>
              <li>
              <a class="nav-link active" aria-current="page" href="#lan">
              LANGUAGE
                </a>
              </li>
              <li>
              <a class="nav-link active" aria-current="page" href="#gallery">
                GALLERY
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;