import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './screens/LoginPage';
import { HomePage } from './screens/HomePage';
import { ClientPage } from './screens/ClientPage'
import { CarPage } from './screens/CarPage'
import { ToolsPage } from './screens/ToolsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/clientpage" element={<ClientPage />} />
        <Route path="/carpage" element={<CarPage />} />
        <Route path="/toolspage" element={<ToolsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
