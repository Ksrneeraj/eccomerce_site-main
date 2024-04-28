import RootLayout from "./RootLayout";
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { NumberProvider } from "./components/contextProvider/CustomContextProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import Categ_seeds from "./components/categ_seeds/Categ_seeds";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import Productdetails from "./components/productdetails/Productdetails";
import Profile from "./components/profile/Profile";
import SideMenu from "./components/side_menu/SideMenu";
import User from "./User";
import WishList from "./components/wishlist/WishList";
import Productlist from "./components/productlist/Productlist"
import Search from "./components/search/Search";
import Order from "./components/myorders/MyOrders"
import TrackOrder from "./components/trackorder/TrackOrder";
import SearchResults from "./components/searchresults/SearchResults"
function App() {

  const routerobj=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout></RootLayout>,
      children:[
        {
          path:'/',
          element:<Header></Header>
        },
        {
          path:"/categ_seeds",
          element:<Categ_seeds></Categ_seeds>
        },
        {
          path:"/pr",
          element:<Productlist></Productlist>  
        },
       
        {
          path:"/cart",
          element:<Cart></Cart>
        },
        {
          path:"/pd/:id",
          element:<Productdetails></Productdetails>
        },
        {
          path:"/searchresults/:search",
          element:<SearchResults></SearchResults>
        },
        {
          path:"/wishlist",
          element:<WishList></WishList>
        }
      ]
    },
    {
      path:"user/",
      element:<User></User>,
      children:[
        {
          path:"",
          element:<Profile></Profile>
        },
        {
          path:"myorders",
          element:<Order></Order>
        },
        {
          path:"trackorder",
          element:<TrackOrder></TrackOrder>
        },
        {
          path:"wishlist",
          element:<WishList></WishList>
        }
        
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={routerobj}>
      
      </RouterProvider>
     
    </div>
  );
}

export default App;
