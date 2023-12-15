import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import TaleList from "./TaleList/TaleList";
import CreationForm from "./CreationForm/Form";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import Search from "./Search/Search";
import Card from "./TaleList/TaleCard/TaleCard";
import EditionForm from "./EditionForm/EditionForm";
import Dashboard from "./AdminDashboard/AdminDashboard";



const Main = () => {
  return (<main>
      <Routes>
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        {/* rutas cliente */}
        <Route path="/search" element={<Search/>} />
        <Route path="/search/:character" element={<TaleList/>} />
        <Route path="/search/:character/:title" element={<Card/>} />
        {/* rutas admin */}
        <Route path="/admin" element={<Dashboard/>} />
        <Route path="/createTale" element={<CreationForm/>} />
        <Route path="/editTale" element={<EditionForm/>} />
        <Route path="/*" element={<Navigate to={"/login"} />} />
      </Routes>
    </main>)
};

export default Main;
