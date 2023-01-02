import React from 'react';
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import Account from './account';

const accounteList = [
    {
    "title":"Checking (x8349)",
    "text":"Available Balance",
    "amount":2082.79
    },
    {
    "title":"Savings (x6712)",
    "text":"Available Balance",
    "amount":10928.42
    },
    {
    "title":"Credit Card (x8349)",
    "text":"Current Balance",
    "amount":184.30
    }
]
const prenom = "Gabriel"
const nom = "Mbappe"
function Transaction(props) {
    return(
        <div className="App">
            <Banner />
            <main className="main bg-dark">
            <div class="header">
                <h1>Welcome back<br />{prenom} {nom}!</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <h2 class="sr-only">Accounts</h2>
                {accounteList.map((element,index) => {
                    return <Account amount={element.amount} title={element.title} text={element.text} />
                })}
            </main>
            <Footer />
        </div>
    )
  }
  
  export default Transaction;
