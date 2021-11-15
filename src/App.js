import './App.css';
import Header from './components/Header';
import MidSection from './components/MidSection';

function App() {
  return (
    <div className="App">
        <Header 
          menu="Menu"
          headingOne="Is Your Enterprise"
          headingTwo="Future Ready?"
        />
        <MidSection
          paragraphOne="We're a group of designers and developers who treats our own company as a product. How we work today is the result of a decade of iterations on our processes and tools. We work in small teams, using the latest tools to create a transparent and collaborative space."
          paragraphTwo="We transform organisations from within. We work directly with executives at large organisations to reimagine their future. Together, we define a single Northstar based on business priorities to design better processes, products and services."
          image="https://thinkgestalt.com/wp-content/uploads/2021/03/thinkgestalt.png"
          imageTwo="https://thinkgestalt.com/wp-content/uploads/2021/03/what_we_do.png"
        />
    </div>
  );
}

export default App;
