import '../styles/globals.css'

 import { useState, useEffect } from 'react'
import {ThemeProvider} from 'next-themes'


import Navbar from '../components/navbar/Navbar'

import ToasterProvider from '../providers/ToasterProvider'

import { QueryClient, QueryClientProvider } from 'react-query';
import { SessionProvider, getSession } from 'next-auth/react'
import { Provider } from 'react-redux';
import { store } from '../store/store'

import { ClerkProvider } from '@clerk/nextjs'
import Footer from '../components/Footer'



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

//   hasSession = true

//   return {
//     props: {}
//   }
// }

const queryClient = new QueryClient();
export default function App({ Component, pageProps: {session, ...pageProps} }) {

  const [currentUser, setCurrentUser] = useState({});

  return (
    <ClerkProvider>

    <ToasterProvider/>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <SessionProvider session={session}>
      
    <ThemeProvider attribute="class">
    
    <Navbar/>
    
  <Component {...pageProps} />
   <Footer/>
  </ThemeProvider>

  </SessionProvider>
  </Provider>
  </QueryClientProvider>
  </ClerkProvider>
  )
}
