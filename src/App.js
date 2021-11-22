import "./App.css";
import About from "./components/about/About";
import Ads from "./components/ads/Ads";
import Banner from "./components/banner/Banner";
import Categories from "./components/categories/Categories";
import Dishes from "./components/dishes/Dishes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Order from "./components/order/Order";
import Popular from "./components/popular/Popular";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <About />
      <Popular />
      <Ads />
      <Dishes />
      <Order />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
