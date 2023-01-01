import React from 'react';
import Logo from '../assets/argentBankLogo.png'

function Banner() {
    return (<nav class="main-nav">
    <a class="main-nav-logo" href="./index.html">
      <img
      src={Logo}
        class="main-nav-logo-image"
        alt="Argent Bank Logo"
      />
      <h1 class="sr-only">Argent Bank</h1>
    </a>
    <div>
      <a class="main-nav-item" href="./sign-in.html">
        <i class="fa fa-user-circle"></i>
        Sign In
      </a>
    </div>
  </nav>);
}

export default Banner;
