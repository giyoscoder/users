import style from "./App.module.scss";
import { instance } from "./Utils/axiosIntance";
import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { SingleUser } from "./Pages/singleUser/SingleUser";
import { AllUsers } from "./Pages/allUsers/allUsers";
import { EditUser } from "./Pages/editUser/editUser";

function App() {
  return (
    <>
      <h1 className={style.title}>Part of Users</h1>
      <Routes>
        <Route path="/users" element={<AllUsers />} />
        <Route path="/users/:id" element={<SingleUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
