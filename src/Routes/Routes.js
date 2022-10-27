import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Course from "../Pages/Course/Course";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ.js";
import Login from "../Pages/Login/Login";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Signup from "../Pages/Signup/Signup";




export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [

            {
                path: '/' ,
                element: <Courses></Courses>,
            },
            {
                path: '/courses' ,
                element: <Courses></Courses>,
            },
            {
                path: '/course/:id' ,
                element: <Course></Course> ,
                // loader: ({params}) => fetch(`https://dragon-news-server-ishratzahan6102.vercel.app/news/${params.id}`)
            },
            {
                path: '/courses/:id' ,
                element: <Courses></Courses> ,

            },
            {
                path: '/category/:id' ,
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://dragon-news-server-ishratzahan6102.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id' ,
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`https://dragon-news-server-ishratzahan6102.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path:"*",
                element: <PageNotFound></PageNotFound>
            },
            {
                path:"/blog",
                element: <Blog></Blog>
            }

        ]
        
    }
])