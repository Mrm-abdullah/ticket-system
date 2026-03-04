import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import TicketStatus from './components/TicketStatus/TicketStatus'
import { ToastContainer } from 'react-toastify';

const ticketPromise = fetch('ticket.json')
  .then(res => res.json())

function App() {

// console.log(ticketPromise)

const [inProgress, setInProgress] = useState(0)

const [resolved, setResolved] = useState(0)

  return (
    <>
      <header className='max-w-7xl mx-auto'>
        <Navbar></Navbar>
      </header>
      <main className='bg-[#F5F5F5]'>
        <div className='max-w-7xl mx-auto'>
          <Banner inProgress={inProgress} resolved={resolved}></Banner>
          <Suspense fallback={`Jhanker vai badite daoyat khabo...`}>
            <TicketStatus ticketPromise={ticketPromise} inProgress={inProgress} setInProgress={setInProgress} resolved={resolved} setResolved={setResolved}></TicketStatus>
          </Suspense>
        </div>
      </main>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
