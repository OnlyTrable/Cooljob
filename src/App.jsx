import Header from './components/layout/Header'
import Main from './components/layout/main'
import Footer from './components/layout/footer'
import MainFrame from './components/layout/MainFrame'
import './App.css'

function App() {
  return (
    <MainFrame>
      <Header />
      <Main />
      <Footer />
    </MainFrame>
  )
}

export default App