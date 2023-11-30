
import React, {useEffect, useState} from 'react'
import OrderBook from './components/OrderBook'
import Ticker from './components/Ticker'
import HeaderTicker from './components/HeaderTicker'

import PairList from './components/PairList'
import Trades from './components/Trades'
import styled from 'styled-components'
import useScreenWidth from '../../hooks/useScreenWidth'
import Chart from './components/Chart'
import PlaceOrder from './components/PlaceOrder'
import TradeHistory from './components/TradeHistory'
import OrderBookMain from './components/OrderBookMain'
import 'bootstrap/dist/css/bootstrap.css'



// interface TadingViewProps {
//     tradeSymbol? : string;
//     tradeSymbolFirst?: string;
//     tradeSymbolSecond?: string;
// }

const TradingView = ({
tradeSymbol,
tradeSymbolFirst,
tradeSymbolSecond
}) => {
    const Wrapper = styled.div`
    padding: 5px;
    border: 1px solid #d1d4dc;
    border-radius: 5px;
    margin: 5px;
    `

    const STEPS = {
        CHART : 0,
        ORDERBOOK : 1,
        TRADEBOOK : 2,
    }

    
    const [step, setStep] = useState(STEPS.CHART)

let bodyContent = (
    <Chart
    tradeSymbol={tradeSymbol}
    tradeSymbolFirst={tradeSymbolFirst}
    tradeSymbolSecond={tradeSymbolSecond}
    />
)

if(step === STEPS.ORDERBOOK){
    bodyContent= (
        <div>
               <OrderBookMain />
        </div>
    )
}
if(step === STEPS.TRADEBOOK){
    bodyContent= (
        <div className='
    p-4
    
        w-full
        '>
        <Trades/>
        </div>
    )
}

    const isWindow = typeof window !== 'undefined';
    const [showSellBook, setShowSellBook] = useState(true)
    const [showBuyBook, setShowBuyBook] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)
    const [isLaptop, setIsLaptop] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

const currentWidth = useScreenWidth()

useEffect(() => {
if(
    isWindow
){
    if(currentWidth > 1040) {
        setIsDesktop(true)
        setIsLaptop(false)
        setIsMobile(false)
        setIsTablet(false)
    } else if (currentWidth > 800 && currentWidth <=1040){
        setIsDesktop(false)
        setIsLaptop(true)
        setIsTablet(false)
        setIsMobile(false)
    } else if(currentWidth > 550 && currentWidth <=800){
        setIsTablet(true)
        setIsDesktop(false)
        setIsLaptop(false)
        setIsMobile(false)
    } else {
        setIsDesktop(false)
        setIsLaptop(false)
        setIsTablet(false)
        setIsMobile(true)
    }
    console.log(tradeSymbolFirst)
    console.log(tradeSymbolSecond)

}

}, [currentWidth, isWindow, tradeSymbol,tradeSymbolFirst, tradeSymbolSecond])

// if(isDesktop) {
    return (
      
        <div className='flex flex-col'>
               <div  class="container-fluid mtb15 no-fluid">
        <div  class="row sm-gutters">
            <div className='col-md-9' >
            <div  class="row sm-gutters">
            <div className='
            col-md-12
                      
                       mb15
                        '>
                            <div className='order-book flex
                      flex-row
                      justify-between
                      items-center'>
                            <div className='
                            
                            block
                            w-full'>
                            <HeaderTicker
                            tradeSymbol={tradeSymbol}/>
                            </div>
                       
            
            <div className='
            p-2
            text-sm
            '>
                Spot Tutorials
            </div>
            </div>
                            </div>
            <div  class="col-sm-12 col-md-4">
              
              <div  class="market-pairs pt-0">
                
                  <div>
                              
                              {showBuyBook && showSellBook && (
                                      <div className=' flex flex-col'>
                                      <div>
                                  <OrderBook 
                                  tradeSymbolFirst={tradeSymbolFirst}
                                  tradeSymbolSecond={tradeSymbolSecond}
                                  count={7}/>
                                  </div>
                                  <div>
                                      <Ticker/>
                                      </div>
                                  <div>
                                  <OrderBook 
                                   tradeSymbolFirst={tradeSymbolFirst}
                                   tradeSymbolSecond={tradeSymbolSecond}
                                  count={7}
                                  isSell/>
                                  </div>
                                          </div>
                                  )
                              }
                     {!showSellBook &&     <div>
                                  <OrderBook 
                                    tradeSymbolFirst={tradeSymbolFirst}
                                    tradeSymbolSecond={tradeSymbolSecond}
                                  count={7}/>
                                  </div>}
              {!showBuyBook &&   <OrderBook 
                                   tradeSymbolFirst={tradeSymbolFirst}
                                   tradeSymbolSecond={tradeSymbolSecond}
                                 count={7}
                                 isSell/> }
                          </div>
                  
                  
              </div>
        
      </div>
      <div  class="col-sm-12 col-md-8">
         
        
              <div class="market-trade  mb-4">
            

          <Chart 
          tradeSymbol={tradeSymbol}
          tradeSymbolFirst={tradeSymbolFirst}
          tradeSymbolSecond={tradeSymbolSecond}
          />
         
              </div>

              {/* <div class="market-trade">
                  <ul id="myTab" role="tablist" class="nav nav-tabs">
                      <li role="presentation" class="nav-item"><button id="limit-tab" data-bs-toggle="tab" data-bs-target="#limit" type="button" role="tab" aria-controls="limit" aria-selected="true" class="nav-link active"> Market </button></li>
                      <li role="presentation" class="nav-item"><button id="market-tab" data-bs-toggle="tab" data-bs-target="#market" type="button" role="tab" aria-controls="market" aria-selected="false" class="nav-link" tabindex="-1"> Market </button></li>
                      <li role="presentation" class="nav-item"><button id="stop-limit-tab" data-bs-toggle="tab" data-bs-target="#stop-limit" type="button" role="tab" aria-controls="stop-limit" aria-selected="false" class="nav-link" tabindex="-1"> Stop Limit </button></li>
                      <li role="presentation" class="nav-item"><button id="stop-market-tab" data-bs-toggle="tab" data-bs-target="#stop-market" type="button" role="tab" aria-controls="stop-market" aria-selected="false" class="nav-link" tabindex="-1"> Stop Limit </button></li>
                  </ul>
                  <div id="myTabContent" class="tab-content">
                      <div id="limit" role="tabpanel" aria-labelledby="limit-tab" class="tab-pane fade show active">
                          <div class="d-flex justify-content-between">
                              <div class="market-trade-buy">
                                  <form>
                                      <div class="input-group">
                                          <input type="number" placeholder="Price" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">BTC</span></div>
                                      </div>
                                      <div class="input-group">
                                          <input type="number" placeholder="Amount" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">ETH</span></div>
                                      </div>
                                     
                                      <p>Available: <span>0 BTC = 0 USD</span></p>
                                     
                                      <button type="submit" class="btn buy">Buy</button>
                                  </form>
                              </div>
                              <div class="market-trade-sell">
                                  <form>
                                      <div class="input-group">
                                          <input type="number" placeholder="Price" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">BTC</span></div>
                                      </div>
                                      <div class="input-group">
                                          <input type="number" placeholder="Amount" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">ETH</span></div>
                                      </div>
                                     
                                      <p>Available: <span>0 BTC = 0 USD</span></p>
                                      
                                      <button class="btn sell">Sell</button>
                                  </form>
                              </div>
                          </div>
                      </div>
                      <div id="market" role="tabpanel" aria-labelledby="market-tab" class="tab-pane fade">
                          <div class="d-flex justify-content-between">
                              <div class="market-trade-buy">
                                  <form>
                                      <div class="input-group">
                                          <input type="number" placeholder="Price" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">BTC</span></div>
                                      </div>
                                      <div class="input-group">
                                          <input type="number" placeholder="Amount" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">ETH</span></div>
                                      </div>
                                      <ul class="market-trade-list">
                                          <li><a href="#">25%</a></li>
                                          <li><a href="#">50%</a></li>
                                          <li><a href="#">75%</a></li>
                                          <li><a href="#">100%</a></li>
                                      </ul>
                                      <p>Available: <span>0 BTC = 0 USD</span></p>
                                      <p>Volume: <span>0 BTC = 0 USD</span></p>
                                      <p>Margin: <span>0 BTC = 0 USD</span></p>
                                      <p>Fee: <span>0 BTC = 0 USD</span></p>
                                      <button type="submit" class="btn buy">Buy</button>
                                  </form>
                              </div>
                              <div class="market-trade-sell">
                                  <form>
                                      <div class="input-group">
                                          <input type="number" placeholder="Price" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">BTC</span></div>
                                      </div>
                                      <div class="input-group">
                                          <input type="number" placeholder="Amount" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">ETH</span></div>
                                      </div>
                                      <ul class="market-trade-list">
                                          <li><a href="#">25%</a></li>
                                          <li><a href="#">50%</a></li>
                                          <li><a href="#">75%</a></li>
                                          <li><a href="#">100%</a></li>
                                      </ul>
                                      <p>Available: <span>0 BTC = 0 USD</span></p>
                                      <p>Volume: <span>0 BTC = 0 USD</span></p>
                                      <p>Margin: <span>0 BTC = 0 USD</span></p>
                                      <p>Fee: <span>0 BTC = 0 USD</span></p>
                                      <button class="btn sell">Sell</button>
                                  </form>
                              </div>
                          </div>
                      </div>
                      <div id="stop-limit" role="tabpanel" aria-labelledby="stop-limit-tab" class="tab-pane fade">
                          <div class="d-flex justify-content-between">
                              <div class="market-trade-buy">
                                  <form>
                                      <div class="input-group">
                                          <input type="number" placeholder="Price" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">BTC</span></div>
                                      </div>
                                      <div class="input-group">
                                          <input type="number" placeholder="Amount" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">ETH</span></div>
                                      </div>
                                      <ul class="market-trade-list">
                                          <li><a href="#">25%</a></li>
                                          <li><a href="#">50%</a></li>
                                          <li><a href="#">75%</a></li>
                                          <li><a href="#">100%</a></li>
                                      </ul>
                                      <p>Available: <span>0 BTC = 0 USD</span></p>
                                      <p>Volume: <span>0 BTC = 0 USD</span></p>
                                      <p>Margin: <span>0 BTC = 0 USD</span></p>
                                      <p>Fee: <span>0 BTC = 0 USD</span></p>
                                      <button type="submit" class="btn buy">Buy</button>
                                  </form>
                              </div>
                              <div class="market-trade-sell">
                                  <form>
                                      <div class="input-group">
                                          <input type="number" placeholder="Price" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">BTC</span></div>
                                      </div>
                                      <div class="input-group">
                                          <input type="number" placeholder="Amount" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">ETH</span></div>
                                      </div>
                                      <ul class="market-trade-list">
                                          <li><a href="#">25%</a></li>
                                          <li><a href="#">50%</a></li>
                                          <li><a href="#">75%</a></li>
                                          <li><a href="#">100%</a></li>
                                      </ul>
                                      <p>Available: <span>0 BTC = 0 USD</span></p>
                                      <p>Volume: <span>0 BTC = 0 USD</span></p>
                                      <p>Margin: <span>0 BTC = 0 USD</span></p>
                                      <p>Fee: <span>0 BTC = 0 USD</span></p>
                                      <button class="btn sell">Sell</button>
                                  </form>
                              </div>
                          </div>
                      </div>
                      <div id="stop-market" role="tabpanel" aria-labelledby="stop-market-tab" class="tab-pane fade">
                          <div class="d-flex justify-content-between">
                              <div class="market-trade-buy">
                                  <form>
                                      <div class="input-group">
                                          <input type="number" placeholder="Price" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">BTC</span></div>
                                      </div>
                                      <div class="input-group">
                                          <input type="number" placeholder="Amount" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">ETH</span></div>
                                      </div>
                                      <ul class="market-trade-list">
                                          <li><a href="#">25%</a></li>
                                          <li><a href="#">50%</a></li>
                                          <li><a href="#">75%</a></li>
                                          <li><a href="#">100%</a></li>
                                      </ul>
                                      <p>Available: <span>0 BTC = 0 USD</span></p>
                                      <p>Volume: <span>0 BTC = 0 USD</span></p>
                                      <p>Margin: <span>0 BTC = 0 USD</span></p>
                                      <p>Fee: <span>0 BTC = 0 USD</span></p>
                                      <button type="submit" class="btn buy">Buy</button>
                                  </form>
                              </div>
                              <div class="market-trade-sell">
                                  <form>
                                      <div class="input-group">
                                          <input type="number" placeholder="Price" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">BTC</span></div>
                                      </div>
                                      <div class="input-group">
                                          <input type="number" placeholder="Amount" required="" class="form-control"/>
                                          <div class="input-group-append"><span class="input-group-text">ETH</span></div>
                                      </div>
                                      <ul class="market-trade-list">
                                          <li><a href="#">25%</a></li>
                                          <li><a href="#">50%</a></li>
                                          <li><a href="#">75%</a></li>
                                          <li><a href="#">100%</a></li>
                                      </ul>
                                      <p>Available: <span>0 BTC = 0 USD</span></p>
                                      <p>Volume: <span>0 BTC = 0 USD</span></p>
                                      <p>Margin: <span>0 BTC = 0 USD</span></p>
                                      <p>Fee: <span>0 BTC = 0 USD</span></p>
                                      <button class="btn sell">Sell</button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>  */}
                <PlaceOrder
                                    tradeSymbolFirst={tradeSymbolFirst}
                                    tradeSymbolSecond={tradeSymbolSecond}
                                    />
         
      </div>
      </div>
            </div>
            
            <div  class="col-md-3">
               
                    <div class="order-book mb15">
                        <h2 class="heading">Market Overview</h2>
                        
                        <PairList/>
                    </div>
               
              
                    <div class="order-book mb15">
                        <h2 class="heading">Market Trades</h2>
                        <Trades
                    tradeSymbolFirst={tradeSymbolFirst}
                    tradeSymbolSecond={tradeSymbolSecond}
                    />
                        
                    </div>
                
            </div>


            <div className='col-md-12'>

            <div className='row'>
                        <div className='col-md-12'>
                        <div class="table-responsive">
                                {/* <table class="table"> */}
                        <TradeHistory/>
                        {/* </table> */}
                        </div>
                            
                       </div>
                    </div>
              </div>
           
        </div>
    </div>
            <div className='flex flex-row'>
                <div className=' flex flex-col w-full'>
             
                   <div className='container-fluid'>
                    
                   </div>

                   
                    

                            <div className='
                            flex
                            flex-row
                            
                            '>
                               
                              
                                <div className='
                                w-full
                            flex
                            flex-col
                            col-md-6
                                '>
                                    
                                  
                                    <Wrapper className='
                                    h-full
                                    grow
                                    '>
                                    <PlaceOrder
                                    tradeSymbolFirst={tradeSymbolFirst}
                                    tradeSymbolSecond={tradeSymbolSecond}
                                    />
                                    </Wrapper>
                                       
                                    
                        
                        </div>
                            </div>
            
            
                    </div>
       
            
            
                
                    </div>
         
         
        
            
            </div>
      )
// }
 
// else if(isLaptop) {
//     return (
//       <div className='
//       flex
//       flex-col
//       w-full
//       '>
//             <div>
//               <HeaderTicker
//               tradeSymbol={tradeSymbol}
//               />
//             </div>
//             <div className='
//             flex
            
//             p-2
//             '>
//                             <div className='
//                             flex-1
                            
//                             bg-blue-200
//                             '>
                               
//                 <div className='
//                 flex
//                 flex-row
//                 gap-2
//                 '>
//                 <Trades
//                 tradeSymbolFirst={tradeSymbolFirst}
//                 tradeSymbolSecond={tradeSymbolSecond}
//                 />
//                 <div>
//                 <OrderBook
//                   tradeSymbolFirst={tradeSymbolFirst}
//                   tradeSymbolSecond={tradeSymbolSecond}
//                 count={5}
//                 />
//                 <Ticker/>
//                 <OrderBook
//                   tradeSymbolFirst={tradeSymbolFirst}
//                   tradeSymbolSecond={tradeSymbolSecond}
//                 count={5}
//                 />    
//                 </div>
                    
//                 </div>
//                             </div>
//                             <div className='
                            
//                             min-w-[320px]
//                             bg-green-200
//                             '>
// <PlaceOrder
// tradeSymbolFirst={tradeSymbolFirst}
// tradeSymbolSecond={tradeSymbolSecond}
// />
//                                 </div>      
//             </div>
//         </div>
//       )
// }
 
// else if(isTablet){
//     return (
      
//         <div className='
//        flex
//        flex-row
     
//         '>
//             <div className='
//             flex
//             flex-col
//             w-full
//             '>
//                 <div className='
//                 flex
//                 flex-row
//                 items-center
//                 '>
//                 <HeaderTicker
//                 tradeSymbol={tradeSymbol}
//                 />
    
//     <div className='
//     p-2
//     text-sm
//     '>
//         Spot Tutorials
//     </div>
//                     </div>
//                     <div className='
//                     flex
//                     flex-row
//                     '>
//                         <div>
//                         <div >
//             <div>
//            <OrderBook
//              tradeSymbolFirst={tradeSymbolFirst}
//              tradeSymbolSecond={tradeSymbolSecond}
//            count={7}
//            />
//            </div>
//            <div>
//             <Ticker/>
//             </div>
//            <div>
//            <OrderBook
//              tradeSymbolFirst={tradeSymbolFirst}
//              tradeSymbolSecond={tradeSymbolSecond}
//            count={7}
//            />
//            </div>
//                 </div>
            
//                         </div>
//                         <div>
//                     Chart
//                 </div>
//                     </div>
     
       
//             </div>
    
//         <div className='
//         px-8
//         max-w-[320px]
//         '>
//         <div className='
    
//            '>
//                <PairList/>
//            </div>
//            <hr 
//            className='
         
//            pb-4
//            '
//            />
//            <div
//            className='
//            ml-6
//            w-full
//            '
//            >
    
          
//            <div className='
           
//            '>
//             Market Trades
//             </div>
//             <div className='
//             w-full
//             '>
//             <Trades
//             tradeSymbolFirst={tradeSymbolFirst}
//             tradeSymbolSecond={tradeSymbolSecond}
//             />
//                 </div>
//                 </div>  
//         </div>
        
            
//             </div>
//       )
// }

// else{
//     return (
      
//         <>
//         <div>

//         <Wrapper>
//             <HeaderTicker
//             tradeSymbol={tradeSymbol}
//             />
//         </Wrapper>

//         <div>
//             <div className='
//             grid
//             font-bold
//             grid-cols-3
//             mb-4
//             place-items-center
//             '>
//                 <div 
//                 onClick={() => setStep(STEPS.CHART)}
//                 className='
//                 focus:text-purple-500
//                 hover:cursor-pointer
//                 '>
//                     Chart
//                     </div>
//                 <div
//                 onClick={() => setStep(STEPS.ORDERBOOK)}
//                 className='
//                 focus:text-purple-500
//                 hover:cursor-pointer
//                 '
//                 >
//                     Order Book
//                     </div>
//                 <div
//                 onClick={() => setStep(STEPS.TRADEBOOK)}
//                 className='
//                 focus:text-purple-500
//                 hover:cursor-pointer
//                 '
//                 >
//                     Trade Book
//                     </div>

//                 </div>
//                 <div>
//                     {bodyContent}
//                     </div>
            
//             </div>
        
            
//             <Wrapper>
//                 <TradeHistory/>
//             </Wrapper>
//             </div>
//         </>
//       )
// }
  
}

export default TradingView


// import React, {useEffect, useState} from 'react'
// import OrderBook from './components/OrderBook'
// import Ticker from './components/Ticker'
// import HeaderTicker from './components/HeaderTicker'

// import PairList from './components/PairList'
// import Trades from './components/Trades'
// import styled from 'styled-components'
// import useScreenWidth from '../../hooks/useScreenWidth'
// import Chart from './components/Chart'
// import PlaceOrder from './components/PlaceOrder'
// import TradeHistory from './components/TradeHistory'
// import OrderBookMain from './components/OrderBookMain'



// // interface TadingViewProps {
// //     tradeSymbol? : string;
// //     tradeSymbolFirst?: string;
// //     tradeSymbolSecond?: string;
// // }

// const TradingView = ({
// tradeSymbol,
// tradeSymbolFirst,
// tradeSymbolSecond
// }) => {
//     const Wrapper = styled.div`
//     padding: 5px;
//     border: 1px solid #d1d4dc;
//     border-radius: 5px;
//     margin: 5px;
//     `

//     const STEPS = {
//         CHART : 0,
//         ORDERBOOK : 1,
//         TRADEBOOK : 2,
//     }

    
//     const [step, setStep] = useState(STEPS.CHART)

// let bodyContent = (
//     <Chart
//     tradeSymbol={tradeSymbol}
//     tradeSymbolFirst={tradeSymbolFirst}
//     tradeSymbolSecond={tradeSymbolSecond}
//     />
// )

// if(step === STEPS.ORDERBOOK){
//     bodyContent= (
//         <div>
//                <OrderBookMain />
//         </div>
//     )
// }
// if(step === STEPS.TRADEBOOK){
//     bodyContent= (
//         <div className='
//     p-4
    
//         w-full
//         '>
//         <Trades/>
//         </div>
//     )
// }

//     const isWindow = typeof window !== 'undefined';
//     const [showSellBook, setShowSellBook] = useState(true)
//     const [showBuyBook, setShowBuyBook] = useState(true)
//     const [isMobile, setIsMobile] = useState(false)
//     const [isTablet, setIsTablet] = useState(false)
//     const [isLaptop, setIsLaptop] = useState(false)
//     const [isDesktop, setIsDesktop] = useState(false)

// const currentWidth = useScreenWidth()

// useEffect(() => {
// if(
//     isWindow
// ){
//     if(currentWidth > 1040) {
//         setIsDesktop(true)
//         setIsLaptop(false)
//         setIsMobile(false)
//         setIsTablet(false)
//     } else if (currentWidth > 800 && currentWidth <=1040){
//         setIsDesktop(false)
//         setIsLaptop(true)
//         setIsTablet(false)
//         setIsMobile(false)
//     } else if(currentWidth > 550 && currentWidth <=800){
//         setIsTablet(true)
//         setIsDesktop(false)
//         setIsLaptop(false)
//         setIsMobile(false)
//     } else {
//         setIsDesktop(false)
//         setIsLaptop(false)
//         setIsTablet(false)
//         setIsMobile(true)
//     }
//     console.log(tradeSymbolFirst)
//     console.log(tradeSymbolSecond)

// }

// }, [currentWidth, isWindow, tradeSymbol,tradeSymbolFirst, tradeSymbolSecond])

// if(isDesktop) {
//     return (
//         <div className='flex flex-col'>
//         <div  class="container-fluid mtb15 no-fluid">
//  <div  class="row sm-gutters">
//      <div className='col-md-9' >
//      <div  class="row sm-gutters">
//      <div className='
//      col-md-12
               
//                 mb15
//                  '>
//                      <div className='order-book flex
//                flex-row
//                justify-between
//                items-center'>
//                      <div className='
                     
//                      block
//                      w-full'>
//                      <HeaderTicker
//                      tradeSymbol={tradeSymbol}/>
//                      </div>
                
     
//      <div className='
//      p-2
//      text-sm
//      '>
//          Spot Tutorials
//      </div>
//      </div>
//                      </div>
//      <div  class="col-sm-12 col-md-4">
       
//        <div  class="market-pairs pt-0">
         
//            <div>
                       
//                        {showBuyBook && showSellBook && (
//                                <div className=' flex flex-col'>
//                                <div>
//                            <OrderBook 
//                            tradeSymbolFirst={tradeSymbolFirst}
//                            tradeSymbolSecond={tradeSymbolSecond}
//                            count={7}/>
//                            </div>
//                            <div>
//                                <Ticker/>
//                                </div>
//                            <div>
//                            <OrderBook 
//                             tradeSymbolFirst={tradeSymbolFirst}
//                             tradeSymbolSecond={tradeSymbolSecond}
//                            count={7}
//                            isSell/>
//                            </div>
//                                    </div>
//                            )
//                        }
//               {!showSellBook &&     <div>
//                            <OrderBook 
//                              tradeSymbolFirst={tradeSymbolFirst}
//                              tradeSymbolSecond={tradeSymbolSecond}
//                            count={7}/>
//                            </div>}
//        {!showBuyBook &&   <OrderBook 
//                             tradeSymbolFirst={tradeSymbolFirst}
//                             tradeSymbolSecond={tradeSymbolSecond}
//                           count={7}
//                           isSell/> }
//                    </div>
           
           
//        </div>
 
// </div>
// <div  class="col-sm-12 col-md-8">
  
 
//        <div class="market-trade  mb-4">
     

//    <Chart 
//    tradeSymbol={tradeSymbol}
//    tradeSymbolFirst={tradeSymbolFirst}
//    tradeSymbolSecond={tradeSymbolSecond}
//    />
  
//        </div>

//        <div class="market-trade">
//            <ul id="myTab" role="tablist" class="nav nav-tabs">
//                <li role="presentation" class="nav-item"><button id="limit-tab" data-bs-toggle="tab" data-bs-target="#limit" type="button" role="tab" aria-controls="limit" aria-selected="true" class="nav-link active"> Limit </button></li>
//                <li role="presentation" class="nav-item"><button id="market-tab" data-bs-toggle="tab" data-bs-target="#market" type="button" role="tab" aria-controls="market" aria-selected="false" class="nav-link" tabindex="-1"> Market </button></li>
//                <li role="presentation" class="nav-item"><button id="stop-limit-tab" data-bs-toggle="tab" data-bs-target="#stop-limit" type="button" role="tab" aria-controls="stop-limit" aria-selected="false" class="nav-link" tabindex="-1"> Stop Limit </button></li>
//                <li role="presentation" class="nav-item"><button id="stop-market-tab" data-bs-toggle="tab" data-bs-target="#stop-market" type="button" role="tab" aria-controls="stop-market" aria-selected="false" class="nav-link" tabindex="-1"> Stop Limit </button></li>
//            </ul>
//            <div id="myTabContent" class="tab-content">
//                <div id="limit" role="tabpanel" aria-labelledby="limit-tab" class="tab-pane fade show active">
//                    <div class="d-flex justify-content-between">
//                        <div class="market-trade-buy">
//                            <form>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Price" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">BTC</span></div>
//                                </div>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Amount" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">ETH</span></div>
//                                </div>
                              
//                                <p>Available: <span>0 BTC = 0 USD</span></p>
                              
//                                <button type="submit" class="btn buy">Buy</button>
//                            </form>
//                        </div>
//                        <div class="market-trade-sell">
//                            <form>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Price" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">BTC</span></div>
//                                </div>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Amount" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">ETH</span></div>
//                                </div>
                              
//                                <p>Available: <span>0 BTC = 0 USD</span></p>
                               
//                                <button class="btn sell">Sell</button>
//                            </form>
//                        </div>
//                    </div>
//                </div>
//                <div id="market" role="tabpanel" aria-labelledby="market-tab" class="tab-pane fade">
//                    <div class="d-flex justify-content-between">
//                        <div class="market-trade-buy">
//                            <form>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Price" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">BTC</span></div>
//                                </div>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Amount" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">ETH</span></div>
//                                </div>
//                                <ul class="market-trade-list">
//                                    <li><a href="#">25%</a></li>
//                                    <li><a href="#">50%</a></li>
//                                    <li><a href="#">75%</a></li>
//                                    <li><a href="#">100%</a></li>
//                                </ul>
//                                <p>Available: <span>0 BTC = 0 USD</span></p>
//                                <p>Volume: <span>0 BTC = 0 USD</span></p>
//                                <p>Margin: <span>0 BTC = 0 USD</span></p>
//                                <p>Fee: <span>0 BTC = 0 USD</span></p>
//                                <button type="submit" class="btn buy">Buy</button>
//                            </form>
//                        </div>
//                        <div class="market-trade-sell">
//                            <form>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Price" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">BTC</span></div>
//                                </div>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Amount" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">ETH</span></div>
//                                </div>
//                                <ul class="market-trade-list">
//                                    <li><a href="#">25%</a></li>
//                                    <li><a href="#">50%</a></li>
//                                    <li><a href="#">75%</a></li>
//                                    <li><a href="#">100%</a></li>
//                                </ul>
//                                <p>Available: <span>0 BTC = 0 USD</span></p>
//                                <p>Volume: <span>0 BTC = 0 USD</span></p>
//                                <p>Margin: <span>0 BTC = 0 USD</span></p>
//                                <p>Fee: <span>0 BTC = 0 USD</span></p>
//                                <button class="btn sell">Sell</button>
//                            </form>
//                        </div>
//                    </div>
//                </div>
//                <div id="stop-limit" role="tabpanel" aria-labelledby="stop-limit-tab" class="tab-pane fade">
//                    <div class="d-flex justify-content-between">
//                        <div class="market-trade-buy">
//                            <form>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Price" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">BTC</span></div>
//                                </div>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Amount" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">ETH</span></div>
//                                </div>
//                                <ul class="market-trade-list">
//                                    <li><a href="#">25%</a></li>
//                                    <li><a href="#">50%</a></li>
//                                    <li><a href="#">75%</a></li>
//                                    <li><a href="#">100%</a></li>
//                                </ul>
//                                <p>Available: <span>0 BTC = 0 USD</span></p>
//                                <p>Volume: <span>0 BTC = 0 USD</span></p>
//                                <p>Margin: <span>0 BTC = 0 USD</span></p>
//                                <p>Fee: <span>0 BTC = 0 USD</span></p>
//                                <button type="submit" class="btn buy">Buy</button>
//                            </form>
//                        </div>
//                        <div class="market-trade-sell">
//                            <form>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Price" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">BTC</span></div>
//                                </div>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Amount" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">ETH</span></div>
//                                </div>
//                                <ul class="market-trade-list">
//                                    <li><a href="#">25%</a></li>
//                                    <li><a href="#">50%</a></li>
//                                    <li><a href="#">75%</a></li>
//                                    <li><a href="#">100%</a></li>
//                                </ul>
//                                <p>Available: <span>0 BTC = 0 USD</span></p>
//                                <p>Volume: <span>0 BTC = 0 USD</span></p>
//                                <p>Margin: <span>0 BTC = 0 USD</span></p>
//                                <p>Fee: <span>0 BTC = 0 USD</span></p>
//                                <button class="btn sell">Sell</button>
//                            </form>
//                        </div>
//                    </div>
//                </div>
//                <div id="stop-market" role="tabpanel" aria-labelledby="stop-market-tab" class="tab-pane fade">
//                    <div class="d-flex justify-content-between">
//                        <div class="market-trade-buy">
//                            <form>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Price" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">BTC</span></div>
//                                </div>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Amount" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">ETH</span></div>
//                                </div>
//                                <ul class="market-trade-list">
//                                    <li><a href="#">25%</a></li>
//                                    <li><a href="#">50%</a></li>
//                                    <li><a href="#">75%</a></li>
//                                    <li><a href="#">100%</a></li>
//                                </ul>
//                                <p>Available: <span>0 BTC = 0 USD</span></p>
//                                <p>Volume: <span>0 BTC = 0 USD</span></p>
//                                <p>Margin: <span>0 BTC = 0 USD</span></p>
//                                <p>Fee: <span>0 BTC = 0 USD</span></p>
//                                <button type="submit" class="btn buy">Buy</button>
//                            </form>
//                        </div>
//                        <div class="market-trade-sell">
//                            <form>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Price" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">BTC</span></div>
//                                </div>
//                                <div class="input-group">
//                                    <input type="number" placeholder="Amount" required="" class="form-control"/>
//                                    <div class="input-group-append"><span class="input-group-text">ETH</span></div>
//                                </div>
//                                <ul class="market-trade-list">
//                                    <li><a href="#">25%</a></li>
//                                    <li><a href="#">50%</a></li>
//                                    <li><a href="#">75%</a></li>
//                                    <li><a href="#">100%</a></li>
//                                </ul>
//                                <p>Available: <span>0 BTC = 0 USD</span></p>
//                                <p>Volume: <span>0 BTC = 0 USD</span></p>
//                                <p>Margin: <span>0 BTC = 0 USD</span></p>
//                                <p>Fee: <span>0 BTC = 0 USD</span></p>
//                                <button class="btn sell">Sell</button>
//                            </form>
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </div>
  
// </div>
// </div>
//      </div>
     
//      <div  class="col-md-3">
        
//              <div class="order-book mb15">
//                  <h2 class="heading">Market Overview</h2>
                 
//                  <PairList/>
//              </div>
        
       
//              <div class="order-book mb15">
//                  <h2 class="heading">Market Trades</h2>
//                  <Trades
//              tradeSymbolFirst={tradeSymbolFirst}
//              tradeSymbolSecond={tradeSymbolSecond}
//              />
                 
//              </div>
         
//      </div>


//      <div className='col-md-12'>

//      <div className='row'>
//                  <div className='col-md-12'>
//                  <div class="table-responsive">
//                          <table class="table">
//                  <TradeHistory/>
//                  </table>
//                  </div>
                     
//                 </div>
//              </div>
//        </div>
    
//  </div>
// </div>
//      <div className='flex flex-row'>
//          <div className=' flex flex-col w-full'>
      
//             <div className='container-fluid'>
             
//             </div>

            
             

//                      <div className='
//                      flex
//                      flex-row
                     
//                      '>
                        
                       
//                          <div className='
//                          w-full
//                      flex
//                      flex-col
//                      col-md-6
//                          '>
                             
                           
//                              <Wrapper className='
//                              h-full
//                              grow
//                              '>
//                              <PlaceOrder
//                              tradeSymbolFirst={tradeSymbolFirst}
//                              tradeSymbolSecond={tradeSymbolSecond}
//                              />
//                              </Wrapper>
                                
                             
                 
//                  </div>
//                      </div>
     
     
//              </div>

     
     
         
//              </div>
  
  
 
     
//      </div>
// //         <div className='
// //        flex
// //        flex-col
     
// //         '>
// //                     <div className='
// //                     flex
// //                     flex-row
// //                     '>

// //                     <div className='
// //                     flex
// //                     flex-col
// //                     w-full
// //                     '>
// //                         <Wrapper>
// //                         <div className='
// //                       flex
// //                       flex-row
// //                       justify-between
// //                       items-center
// //                         '>
// //                             <div className='
// //                             block
// //                             w-full'>
// //                             <HeaderTicker
// //                             tradeSymbol={tradeSymbol}/>
// //                             </div>
                       
            
// //             <div className='
// //             p-2
// //             text-sm
// //             '>
// //                 Spot Tutorials
// //             </div>
// //                             </div>
// //                         </Wrapper>
                        

// //                             <div className='
// //                             flex
// //                             flex-row
                            
// //                             '>
// //                                 <Wrapper>
// //                                 <div className='
                                
// //                                 '>
// //                                     {/* <div 
// //                                     className='
// //                                     grid
// //                                     grid-cols-2
// //                                 mb-4
// //                                 ml-2    
// //                                     '
// //                                     >
// //                                         <div className='
// //                                         flex
// //                                         flex-row
// //                                         gap-8
// //                                         '>
// //                                         <div
// //                                         className={
// //                                             `
// //                                             p-1
// //                                             hover:rounded-lg
// //                                             hover:cursor-pointer
// //                                             hover:bg-purple-400
// //                                             hover:text-white
// //                                             `
// //                                         }
// //                                         onClick={() => {
// //                                             setShowSellBook(false)
// //                                             setShowBuyBook(true)
// //                                         }}
// //                                         >
// //                                         o1    
// //                                         </div>
// //                                         <div
// //                                           className={
// //                                             `
// //                                             p-1
// //                                             hover:rounded-lg
// //                                             hover:cursor-pointer
// //                                             hover:bg-purple-400
// //                                             hover:text-white
// //                                             `
// //                                         }
// //                                          onClick={() => {
// //                                             setShowSellBook(true)
// //                                             setShowBuyBook(false)
// //                                          }}
// //                                         >
// // o2
// //                                         </div>
// //                                         <div 
// //                                           className={
// //                                             `
// //                                             p-1
// //                                             hover:rounded-lg
// //                                             hover:cursor-pointer
// //                                             hover:bg-purple-400
// //                                             hover:text-white
// //                                             `
// //                                         }
// //                                         onClick={() => 
// //                                         {
// //                                             setShowBuyBook(true)
// //                                             setShowSellBook(true)
// //                                         }}>
// // o3
// //                                         </div>
// //                                         </div>
// //                                         <div className='
// //                                         place-self-center
// //                                         '>
// //                                             0.11
// //                                         </div>
                                  
// //                                     </div> */}
// //                                     {
// //                                         showBuyBook && showSellBook && (
// //                                             <div className='
// //                                             flex
// //                                             flex-col
                                           
// //                                             '>
// //                                             <div>
// //                                         <OrderBook 
// //                                         tradeSymbolFirst={tradeSymbolFirst}
// //                                         tradeSymbolSecond={tradeSymbolSecond}
// //                                         count={7}/>
// //                                         </div>
// //                                         <div>
// //                                             <Ticker/>
// //                                             </div>
// //                                         <div>
// //                                         <OrderBook 
// //                                          tradeSymbolFirst={tradeSymbolFirst}
// //                                          tradeSymbolSecond={tradeSymbolSecond}
// //                                         count={7}
// //                                         isSell/>
// //                                         </div>
// //                                                 </div>
// //                                         )
// //                                     }
// //                            {!showSellBook &&     <div>
// //                                         <OrderBook 
// //                                           tradeSymbolFirst={tradeSymbolFirst}
// //                                           tradeSymbolSecond={tradeSymbolSecond}
// //                                         count={7}/>
// //                                         </div>}
// //                     {!showBuyBook &&   <OrderBook 
// //                                          tradeSymbolFirst={tradeSymbolFirst}
// //                                          tradeSymbolSecond={tradeSymbolSecond}
// //                                        count={7}
// //                                        isSell/> }
// //                                 </div>
// //                                 </Wrapper>
                              
// //                                 <div className='
// //                                 w-full
// //                             flex
// //                             flex-col
// //                                 '>
// //                                     <Wrapper>
// //                                     <Chart
// //                                     tradeSymbol={tradeSymbol}
// //                                     tradeSymbolFirst={tradeSymbolFirst}
// //                                     tradeSymbolSecond={tradeSymbolSecond}
// //                                     />
// //                                     </Wrapper>
                                  
// //                                     <Wrapper className='
// //                                     h-full
// //                                     grow
// //                                     '>
// //                                     <PlaceOrder
// //                                     tradeSymbolFirst={tradeSymbolFirst}
// //                                     tradeSymbolSecond={tradeSymbolSecond}
// //                                     />
// //                                     </Wrapper>
                                       
                                    
                        
// //                         </div>
// //                             </div>
            
            
// //                     </div>
       
// //             <div className='
                
                
// //                 '>
// //                 <div className='
// //             h-[600px]
// //             overflow-hidden
// //             overflow-x-hidden
// //                 '>
// //                     <PairList/>
// //                 </div>
// //                 <hr 
// //                 className='
                
// //                 pb-4
// //                 '
// //                 />
// //                 <div
// //                 className='
               
// //                 w-full
// //                 '
// //                 >
            
                
// //                 <div className='
                
// //                 '>
// //                     Market Trades
// //                     </div>
// //                     <div className='
// //                     w-full
                    
// //                     '>
// //                     <Trades
// //                     tradeSymbolFirst={tradeSymbolFirst}
// //                     tradeSymbolSecond={tradeSymbolSecond}
// //                     />
// //                         </div>
// //                         </div>  
// //                 </div>
            
                
// //                     </div>
         
// //          <Wrapper>
// //             <TradeHistory/>
// //          </Wrapper>
        
            
// //             </div>
//       )
// }
 
// else if(isLaptop) {
//     return (
//       <div className='
//       flex
//       flex-col
//       w-full
//       '>
//             <div>
//               <HeaderTicker
//               tradeSymbol={tradeSymbol}
//               />
//             </div>
//             <div className='
//             flex
            
//             p-2
//             '>
//                             <div className='
//                             flex-1
                            
//                             bg-blue-200
//                             '>
//                                 <div className='
//                                 mb-4
//                                 '>

//                 <Chart 
//                 tradeSymbol={tradeSymbol}
//                 tradeSymbolFirst={tradeSymbolFirst}
//                 tradeSymbolSecond={tradeSymbolSecond}
//                 />
//                 </div>
//                 <div className='
//                 flex
//                 flex-row
//                 gap-2
//                 '>
//                 <Trades
//                 tradeSymbolFirst={tradeSymbolFirst}
//                 tradeSymbolSecond={tradeSymbolSecond}
//                 />
//                 <div>
//                 <OrderBook
//                   tradeSymbolFirst={tradeSymbolFirst}
//                   tradeSymbolSecond={tradeSymbolSecond}
//                 count={5}
//                 />
//                 <Ticker/>
//                 <OrderBook
//                   tradeSymbolFirst={tradeSymbolFirst}
//                   tradeSymbolSecond={tradeSymbolSecond}
//                 count={5}
//                 />    
//                 </div>
                    
//                 </div>
//                             </div>
//                             <div className='
                            
//                             min-w-[320px]
//                             bg-green-200
//                             '>
// <PlaceOrder
// tradeSymbolFirst={tradeSymbolFirst}
// tradeSymbolSecond={tradeSymbolSecond}
// />
//                                 </div>      
//             </div>
//         </div>
//       )
// }
 
// else if(isTablet){
//     return (
      
//         <div className='
//        flex
//        flex-row
     
//         '>
//             <div className='
//             flex
//             flex-col
//             w-full
//             '>
//                 <div className='
//                 flex
//                 flex-row
//                 items-center
//                 '>
//                 <HeaderTicker
//                 tradeSymbol={tradeSymbol}
//                 />
    
//     <div className='
//     p-2
//     text-sm
//     '>
//         Spot Tutorials
//     </div>
//                     </div>
//                     <div className='
//                     flex
//                     flex-row
//                     '>
//                         <div>
//                         <div >
//             <div>
//            <OrderBook
//              tradeSymbolFirst={tradeSymbolFirst}
//              tradeSymbolSecond={tradeSymbolSecond}
//            count={7}
//            />
//            </div>
//            <div>
//             <Ticker/>
//             </div>
//            <div>
//            <OrderBook
//              tradeSymbolFirst={tradeSymbolFirst}
//              tradeSymbolSecond={tradeSymbolSecond}
//            count={7}
//            />
//            </div>
//                 </div>
            
//                         </div>
//                         <div>
//                     Chart
//                 </div>
//                     </div>
     
       
//             </div>
    
//         <div className='
//         px-8
//         max-w-[320px]
//         '>
//         <div className='
    
//            '>
//                <PairList/>
//            </div>
//            <hr 
//            className='
         
//            pb-4
//            '
//            />
//            <div
//            className='
//            ml-6
//            w-full
//            '
//            >
    
          
//            <div className='
           
//            '>
//             Market Trades
//             </div>
//             <div className='
//             w-full
//             '>
//             <Trades
//             tradeSymbolFirst={tradeSymbolFirst}
//             tradeSymbolSecond={tradeSymbolSecond}
//             />
//                 </div>
//                 </div>  
//         </div>
        
            
//             </div>
//       )
// }

// else{
//     return (
      
//         <>
//         <div>

//         <Wrapper>
//             <HeaderTicker
//             tradeSymbol={tradeSymbol}
//             />
//         </Wrapper>

//         <div>
//             <div className='
//             grid
//             font-bold
//             grid-cols-3
//             mb-4
//             place-items-center
//             '>
//                 <div 
//                 onClick={() => setStep(STEPS.CHART)}
//                 className='
//                 focus:text-purple-500
//                 hover:cursor-pointer
//                 '>
//                     Chart
//                     </div>
//                 <div
//                 onClick={() => setStep(STEPS.ORDERBOOK)}
//                 className='
//                 focus:text-purple-500
//                 hover:cursor-pointer
//                 '
//                 >
//                     Order Book
//                     </div>
//                 <div
//                 onClick={() => setStep(STEPS.TRADEBOOK)}
//                 className='
//                 focus:text-purple-500
//                 hover:cursor-pointer
//                 '
//                 >
//                     Trade Book
//                     </div>

//                 </div>
//                 <div>
//                     {bodyContent}
//                     </div>
            
//             </div>
        
            
//             <Wrapper>
//                 <TradeHistory/>
//             </Wrapper>
//             </div>
//         </>
//       )
// }
  
// }

// export default TradingView