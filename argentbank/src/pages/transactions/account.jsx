import React from 'react'

function Account (props) {
  return (
    <section className='account' key={props.amount}>
      <div className='account-content-wrapper'>
        <h3 className='account-title'>Argent Bank {props.title}</h3>
        <p className='account-amount'>${props.amount}</p>
        <p className='account-amount-description'>{props.text}</p>
      </div>
      <div className='account-content-wrapper cta'>
        <button className='transaction-button'>View transactions</button>
      </div>
    </section>
  )
}

export default Account
