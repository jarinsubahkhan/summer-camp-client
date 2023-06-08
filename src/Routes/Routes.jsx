import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Home/Instructors/Instructors";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Private from "../pages/Shared/Private/Private";
import PrivateRoute from "./PrivateRoute";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'instructors',
            element:<Instructors></Instructors>
        },
        {
            path: 'classes',
            element: <ClassesPage></ClassesPage>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <SignUp></SignUp>
        },
        {
          path: 'private',
          element: <PrivateRoute><Private></Private></PrivateRoute>
        }
      ]
    },
  ]);