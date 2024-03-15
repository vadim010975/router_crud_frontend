import './App.css';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ViewPage from './pages/ViewPage';
import EditPage from './pages/EditPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter([
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
      {
        path: "/edit/:id",
        Component: EditPage,
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