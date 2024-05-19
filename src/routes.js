import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Routes do react-routes-dom 6
// Switch do react-routes-dom 5

import Home from './container/home'
import Users from "./container/users";

const myRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Users" element={<Users />} />
            </Routes>
        </Router>
    )
}
export default myRoutes;