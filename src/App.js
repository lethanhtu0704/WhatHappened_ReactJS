import './Reset.css'
import './App.css';
import Header from "./components/Header/Header"
import FirstBannner from "./components/Banner/FirstBannner"
import SecondBannner from "./components/Banner/SecondBanner"
import ProductBanner from "./components/Banner/ProductBanner"
import Product from './components/Product/Product';
import Story from './components/Story/Story';
import Issue from './components/Issue/Issue';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="wraper">
      <Header></Header>
      <FirstBannner></FirstBannner>
      <SecondBannner></SecondBannner>
      <ProductBanner></ProductBanner>
      <Product></Product>
      <Story></Story>
      <Issue></Issue>
      <Footer></Footer>

    </div>
  );
}

export default App;
