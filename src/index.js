import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import CreateSession from "./components/CreateSession";
import ShowActiveSession from "./components/ShowActiveSession";
import TerminateActiveSession from "./components/TerminateActiveSession";
import ShowAllUsers from "./components/ShowAllUsers";
import ShowSessionUser from "./components/ShowSessionUser";
import AddUser from "./components/AddUser";
import AddRestaurant from "./components/AddRestaurant";
import ShowSelectedRestaurant from "./components/ShowSelectedRestaurant";
import { createRoot } from "react-dom/client";
import JoinSession from "./components/JoinSession";
import UserError from "./components/UserError";
import SessionError from "./components/SessionError";
import Home from "./components/Home";
import ResetApp from "./components/ResetApp";
import Error from "./components/Error";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/resetApp" element={<ResetApp />}></Route>
      <Route path="/createSession" element={<CreateSession />}></Route>
      <Route path="/showActiveSession" element={<ShowActiveSession />}></Route>
      <Route path="/joinSession" element={<JoinSession />}></Route>
      <Route
        path="/terminateActiveSession"
        element={<TerminateActiveSession />}
      ></Route>
      <Route path="/showAllUsers" element={<ShowAllUsers />}></Route>
      <Route path="/showSessionUser" element={<ShowSessionUser />}></Route>
      <Route path="/addUser" element={<AddUser />}></Route>
      <Route path="/addRestaurant" element={<AddRestaurant />}></Route>
      <Route
        path="/showSelectedRestaurant"
        element={<ShowSelectedRestaurant />}
      ></Route>
      <Route path="/userError" element={<UserError />}></Route>
      <Route path="/sessionError" element={<SessionError />}></Route>
      <Route path="/error" element={<Error />}></Route>
    </Routes>
  </Router>
);

