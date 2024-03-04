
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";

function App() {
  

  return (
    <div className=" bg-black">
      <Navbar />
      <Work />
      <Stripes />
      <Products/>
      <Marquees/>
      <Cards/>
    </div>
  );
}

export default App;
