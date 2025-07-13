import MainFrame from './components/layout/MainFrame'
import Header from './components/layout/Header'
import Main from './components/layout/main'
import TopMain from './components/features/topMain'
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
      <div className="fullTopMainFrameContainer">
        <MainFrame>
          <TopMain />
        </MainFrame>
      </div>
      <div className="fullMainFrameContainer">      
      <MainFrame>
        <Main />
      </MainFrame>
      </div>
      <div className="fullAppFooterContainer">
        <MainFrame>
          <Footer />
        </MainFrame>
      </div>
    </>
  )
}

export default App