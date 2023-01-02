import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import Iconchat from '../assets/icon-chat.png'
import Iconmoney from '../assets/icon-money.png'
import Iconsecurity from '../assets/icon-security.png'

const featureList = [
  {
  "icon":Iconchat,
  "alt-text":"Chat Icon",
  "title":"You are our #1 priority",
  "text":"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
  },
  {
  "icon":Iconmoney,
  "alt-text":"Money Icon",
  "title":"More savings means higher rates",
  "text":"The more you save with us, the higher your interest rate will be!"
  },
  {
  "icon":Iconsecurity,
  "alt-text":"Security Icon",
  "title":"Security you can trust",
  "text":"We use top of the line encryption to make sure your data and money is always safe."
  }
]

function Sections() {
  return(
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featureList.map((element,index) => {
        return (
          <div key={index} className="feature-item">
            <img src={  element.icon } alt={element['alt-text']} className="feature-icon" />
            <h3 className="feature-item-title">{element.title}</h3>
            <p>{element.text}</p>
          </div>
        );
      })
      }
    </section>
  );
}

export default Sections;
