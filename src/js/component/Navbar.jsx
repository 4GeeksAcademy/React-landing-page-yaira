import React from "react";


//create your first component
const NavBar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-dark px-5">
  <a class="navbar-brand text-white ms-5 ps-5" href="#">Start Bootstrap</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end me-5 pe-5" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-secondary" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-secondary" href="#">Service</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-secondary" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
	);
};

export default NavBar;