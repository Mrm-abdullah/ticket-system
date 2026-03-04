import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import TicketStatus from './components/TicketStatus/TicketStatus'

function App() {

  return (
    <>
      <header className='max-w-7xl mx-auto'>
        <Navbar></Navbar>
      </header>
      <main className='bg-[#F5F5F5]'>
        <div className='max-w-7xl mx-auto'>
          <Banner></Banner>
          <TicketStatus></TicketStatus>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
