import MainFrame from './components/layout/MainFrame'
import Header from './components/layout/Header'
import Main from './components/layout/main'
import Footer from './components/layout/footer'
import './App.css'

function App() {
  return (
    <>
      <div className="fullAppHeaderContainer">
        <MainFrame>
          <Header />
        </MainFrame>
      </div>
      <MainFrame>
        <Main />
        <Footer />
      </MainFrame>
    </>
  )
}

export default App