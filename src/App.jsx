import Header from './components/header'
import Footer from './components/footer'
import VacancyCardList from './components/vacancyCardList'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <VacancyCardList />
      </main>
      <Footer />
    </div>
  )
}

export default App