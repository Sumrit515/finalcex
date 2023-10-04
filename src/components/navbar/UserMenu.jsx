import Categories from "./Categories"
import {IoReorderThreeSharp} from 'react-icons/io5'

const UserMenu = () => {
return (
<>

<div className="
md:hidden
block
w-full
mr-8
">
    
    <div className="
    flex
    flex-row-reverse
    w-full
    items-center
    
    ">
    <IoReorderThreeSharp
    className="
   w-8
   h-8
    "
    />
  
  
    </div>
    
</div>
<div className="
    
    hidden
    md:block
    ">
<div className="
    flex
    flex-row
    gap-6
  
    
    ">        
        <Categories
        title="Market"
        link="/market"
        />
        <Categories
        title="Trade"
        link="/trade/BNB_USDT"
        />
        <Categories
        title="Transfer"
        link="transfer"
        />
        <Categories
        title="Transactions"
        link="transactions"
        />
        <Categories
        title="Dashboard"
        link="dashboard"
        />
        <Categories
        title="Deposit"
        link="deposit"
        />
        <Categories
        title="Withdraw"
        link="withdraw"
        />
     
    
        
    </div>
    </div>
</>

   
    
)
}

export default UserMenu