import React from 'react'
import {MarketView} from '../../views/MarketView'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'

// export async function getServerSideProps(context: NextPageContext) {
//   const session = await getSession(context);

//   if(!session) {
//     return {
//       redirect: {
//         destination: '/auth',
//         permanent: false
//       }
//     }
//   }

//   return{
//     props: {}
//   }
// }

const index = () => {
  return (
    <div>
        <MarketView/>
    </div>
  )
}

export default index