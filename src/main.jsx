import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('/jobs.json')//do not  laod all data
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/blog",
        element: <Blog></Blog>
      },
      {
        path: "/footer",
        element: <Footer></Footer>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
