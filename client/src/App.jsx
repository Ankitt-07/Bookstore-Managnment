
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddBooks from "./components/AddBooks";
import AddStudent from "./components/AddStudent";
import Logout from "./components/Logout";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
import {  useEffect,useState } from "react";
import axios from "axios";


function App() {
  const [role, setRole] = useState('')

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001/auth/verify')
    .then(res => {
      if(res.data.login) {
        setRole(res.data.role)
      } else {
       setRole('') 
      }
      console.log(res)
    }).catch(err => console.log(err))
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Books' element={<Books />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/AddStudent' element={<AddStudent />}></Route>
        <Route path='/AddBooks' element={<AddBooks />}></Route>
        <Route path="/book/:id" element={<EditBook />}></Route>
        <Route path="/delete/:id" element={<DeleteBook />}></Route>
        <Route path="/logout" element={<Logout setRole = {setRole}/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
