import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Home/Instructors/Instructors";
import ClassesPage from "../pages/ClassesPage/ClassesPage";

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
        }
      ]
    },
  ]);