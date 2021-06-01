import Collection from "./pages/collection";
import Cart from "./pages/cart/index";
import Details from "./pages/detail/index"
import {Switch, Route} from 'react-router-dom'
import NotFound from './pages/notfound'
import Home from './pages/Home'
import Header from './pages/apBar'
import Checkout from './pages/checkout/checkoutPage'
import ApiCalling from "./pages/ApiCalling";


function App() {
  return (
    <div style={{marginLeft:"-1px"}}>
     
      <Header />
      <div style={{  height:"120px"}}></div>
      <Switch>
        {/* //exact keyword used for correct acurate path  */}
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/Collection">
          <Collection />
        </Route>
        <Route path="/ApiCalling">
          <ApiCalling/>
        </Route>
        <Route path="/Cart">
          <Cart/>
        </Route>
        <Route path="/Details/:placeholderId">
          <Details/>
        </Route>
        <Route path="/Checkout">
          <Checkout/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
