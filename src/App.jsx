import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from './layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { EstatesPage } from './pages/EstatesPage';
import { DetailPage } from './pages/DetailPage';
import { LoginPage } from './pages/LoginPage';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={`/estates`} element={<EstatesPage />} />
            <Route path={`/estates/:id`} element={<DetailPage />} />
            <Route path={`/login`} element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
