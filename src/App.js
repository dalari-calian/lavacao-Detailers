import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './screens/LoginPage';
import { HomePage } from './screens/HomePage';
import { ClientPage } from './screens/ClientPage'
import { CarPage } from './screens/CarPage'
import { ToolsPage } from './screens/ToolsPage'
import { CreateClientPage } from './screens/form/CreateClientPage';
import { CreateCarPage } from './screens/form/CreateCarPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/clientpage" element={<ClientPage />} />
        <Route path="/carpage" element={<CarPage />} />
        <Route path="/toolspage" element={<ToolsPage />} />
        <Route path="/createclient" element={<CreateClientPage />} />
        <Route path="/createcar" element={<CreateCarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
