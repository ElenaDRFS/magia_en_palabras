import React, {useState, useEffect} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import SearchPage from "./SearchPage/SearchPage"
import CreationForm from "./CreationForm/Form";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import EditionForm from "./EditionForm/EditionForm";
import Dashboard from "./AdminDashboard/AdminDashboard";
import AllTaleList from "./AllTalesList/AllTalesList";




const Main = () => {

  return (<main>
      <Routes>
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />

        {/* rutas cliente */}
        <Route path="/search" element={<SearchPage/>} />



        {/* rutas admin */}
        <Route path="/admin" element={<Dashboard/>} />
        <Route path="/allTales" element={<AllTaleList/>} />
        <Route path="/createTale" element={<CreationForm/>} />
        <Route path="/editTale" element={<EditionForm/>} />
        <Route path="/*" element={<Navigate to={"/login"} />} />
      </Routes>

   
      
    </main>)
};

export default Main;
