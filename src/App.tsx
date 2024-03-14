import './App.css';
// import Menu from './components/Menu';
// import DriftPage from './components/DriftPage';
// import ForzaPage from './components/ForzaPage';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ViewPage from './pages/ViewPage';
// import TimeAttackPage from './components/TimeAttackPage';
import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/new",
        Component: AddPage,
      },
      {
        path: "/:id",
        Component: ViewPage,
      },
    ],
  },
]);


export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>



  );
}