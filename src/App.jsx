import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { FrontPage } from './pages/FrontPage'
import { CategoryPage } from './pages/CategoryPage'
import { ProductPage } from './pages/ProductPage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { UserContextProvider } from './context/userContext'
import { NewListingPage } from './pages/NewListingPage'

function App() {

  return (
    <>
    <UserContextProvider>
    <Router>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path="/categories/:slug" element={<CategoryPage />} />
            <Route path="/product/:slug" element={<ProductPage />} /> {/* query parameter ":id" */}
            <Route path="/opret-annonce" element={<NewListingPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
      </UserContextProvider>
    </>
  )
}

export default App
