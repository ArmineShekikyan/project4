import { Newsletter } from './newsletter';
import Home from './components';
import About from './about';
import Newsletter from './Newsletter';
export const routes =  [ 
    [ 
        {
          path: "/",
          element: <Home />,
        },
        {
          children: 
            { path: "/about", element: <About /> },
            
        },
        {
          path: "/Newsletter",
          element: <Newsletter/>,
        },
        {
          path: "*",
          element: <>Not found</>,
        }
      ]
    ]