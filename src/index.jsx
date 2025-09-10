import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../Component/Home';
import RestaurantsOnlineDelivery from '../Component/Restaurants/RestaurantsList/RestaurantsOnlineDelivery';
import { BrowserRouter, Route, Routes } from 'react-router';
import RestaurantMenu from '../Component/Restaurants/IndividualRestaurant/RestaurantMenu';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/restaurants" element={<RestaurantsOnlineDelivery />} />
                <Route path="/city/delhi/:id/" element={<RestaurantMenu />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);