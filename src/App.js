import Cookies from "./Components/Cookies";
import Navigation from "./Components/Navigation";
import Homepage from "./Components/Homepage";
import Vehicles from "./Components/Vehicles";
import Info from "./Components/Info";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div>
          <Cookies />
          <Navigation />
          <Homepage />
          <Vehicles />
          <Info />
          <Footer />
        </div>
    );
}

export default App;
