import React from 'react'
import AccountView from './AccountView';
import SecurityView from './SecurityView';
import IdentificationView from './IdentificationView';
import PaymentView from './PaymentView';
import SettingsView from './SettingsView';
import FundsView from './FundsView';

// interface ActiveComponentProps{
//     active : string;
// }

const ActiveComponent = ({
    active
}) => {

    let body = (
        <>
        </>
    )

    if(active === "account"){
        body = (
            <>
            <AccountView/>
            </>
        )
    }
    if(active === "funds"){
        body = (
            <>
            <FundsView/>
            </>
        )
    }
    if(active === "security"){
        body = (
            <>
            <SecurityView/>
            </>
        )
    }
    if(active === "identification"){
        body = (
            <>
            <IdentificationView/>
            </>
        )
    }
    if(active === "payment"){
        body = (
            <>
            <PaymentView/>
            </>
        )
    }
    if(active === "settings"){
        body = (
            <>
            <SettingsView/>
            </>
        )
    }

  return (
    <div
    className='
    flex
    flex-col
    '
    >{body}</div>
  )
}

export default ActiveComponent