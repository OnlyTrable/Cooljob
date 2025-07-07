import Header from './components/layout/Header'
import Footer from './components/layout/footer'
import VacancyCardList from './components/features/VacancyCardList'
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