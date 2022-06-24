import './App.css';
import { Helmet } from "react-helmet"
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Helmet>
        <script src="/JS/script.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
      </Helmet>

      <Navbar />
      <Header />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
