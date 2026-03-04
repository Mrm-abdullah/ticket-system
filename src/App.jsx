import './App.css'
import Banner from './components/Navbar/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <header className='max-w-7xl mx-auto'>
        <Navbar></Navbar>
      </header>
      <main className='bg-[#F5F5F5]'>
        <div className='max-w-7xl mx-auto'>
          <Banner></Banner>
        </div>
      </main>
    </>
  )
}

export default App
