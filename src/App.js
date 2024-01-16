import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './screens/LoginPage';
import { HomePage } from './screens/HomePage';
import { ClientPage } from './screens/ClientPage'
import { CarPage } from './screens/CarPage'
import { ToolsPage } from './screens/ToolsPage'
import { CreateClientPage } from './screens/form/CreateClientPage';
import { CreateCarPage } from './screens/form/CreateCarPage';
import { CreateServicePage } from './screens/form/CreateServicePage';
import { CreateOrder } from './screens/form/CreateOrder';

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
        <Route path="/createservice" element={<CreateServicePage />} />
        <Route path="/createorder" element={<CreateOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
