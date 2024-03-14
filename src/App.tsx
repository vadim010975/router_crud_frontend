import Menu from './components/Menu';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import HomePage from './pages/HomePage';
import TimeAttackPage from './components/TimeAttackPage';
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

    ],
  },
]);


export default function App() {
  return <RouterProvider router={router} />;
}