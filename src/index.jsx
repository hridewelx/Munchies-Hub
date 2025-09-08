import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../Component/Home';
import RestaurantsOnlineDelivery from '../Component/RestaurantsOnlineDelivery';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/restaurants" element={<RestaurantsOnlineDelivery />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);