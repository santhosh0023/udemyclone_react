import Navbar from './components/Navbar';
import './App.css';
import Categories from './components/Categories';
import Sales from './components/Sales';
import Recommended from './components/Recommended';
import Footer from './components/Footer';
import Topics from './components/Topics';
import Popular from './components/Popular';

function App(){
  return(
      <div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Sales></Sales>
    <Recommended></Recommended>
    <Topics></Topics>
    <Popular></Popular>
    <Footer></Footer>
</div>)}
export default App;
