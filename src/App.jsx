import './App.css'
import { useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx'
import { TechStackFooter } from './components/TechStackFooter.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { ResumePage } from './pages/ResumePage.jsx'
import { ProjectsPage } from './pages/ProjectsPage.jsx'

function routerBasename() {
  const base = import.meta.env.BASE_URL || '/'
  if (base === '/') return undefined
  return base.replace(/\/$/, '')
}

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useLayoutEffect(() => {
    const root = document.documentElement
    if (isHome) root.classList.add('route-home')
    else root.classList.remove('route-home')
    return () => root.classList.remove('route-home')
  }, [isHome])

  return (
    <div className={`shell${isHome ? ' shell--home' : ''}`}>
      <ScrollToTop />
      <Navbar />
      <div className={`shell-inner${isHome ? ' shell-inner--home' : ''}`}>
        <main className={isHome ? 'main--home' : undefined}>
          <Outlet />
        </main>
      </div>
      {isHome && <TechStackFooter />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename={routerBasename()}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
