import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Signup-Login/Login";
import Signup from "./Components/Signup-Login/Signup";
import Property from "./Components/property/Property";
import Protected from "./Components/Protected/protected";

<<<<<<< HEAD
function App() {
  return (
    <>
=======
export default function App() {
  return (
    <div>
>>>>>>> f20767b3 (Changes in Header , Property and Schema)
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/"
          element={
            <Protected>
              <Property />
            </Protected>
          }
        ></Route>
      </Routes>
<<<<<<< HEAD
    </>
  );
}

export default App;
=======
    </div>
  );
}
>>>>>>> f20767b3 (Changes in Header , Property and Schema)
