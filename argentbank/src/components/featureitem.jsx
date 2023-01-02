import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Featureitem() {
    return (<div className="feature-item">
    <img
      src="./img/icon-security.png"
      alt="Chat Icon"
      className="feature-icon"
    />
    <h3 className="feature-item-title">Security you can trust</h3>
    <p>
      We use top of the line encryption to make sure your data and money
      is always safe.
    </p>
  </div>);
}

export default Featureitem;
