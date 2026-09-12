import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Applied from './components/Applied/Applied.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import FeatureJob from './components/FeatureJob/FeatureJob.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Blogs from './components/Bolgs/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <Applied></Applied>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json')

      },
      {
        path:'/jobs',
        element:<FeatureJob></FeatureJob>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }

      
    ]
  },
]);

//

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
