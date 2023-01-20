import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';


function App() {
  return (
    <div >
        <RouterProvider router={routes}></RouterProvider>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>npm 
    </div>
  );
}


export default App;
