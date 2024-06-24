import classes from './App.module.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { pages } from './pages'
import Footer from './components/Home/components/Footer'

function App() {

  return (
      <BrowserRouter>
        <div className={classes.wrapper}>
          <Header />

          <Routes>
            {pages.map(page => {
              return <Route key={page.path} path={page.path} Component={page.component} />
            })}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App
