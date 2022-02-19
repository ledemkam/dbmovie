import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Favoriten" element={<UserList />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
