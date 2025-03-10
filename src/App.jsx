import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { FrontPage } from './pages/FrontPage'
import { CategoryPage } from './pages/CategoryPage'
import { ProductPage } from './pages/ProductPage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} /> {/* query parameter ":id" */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
