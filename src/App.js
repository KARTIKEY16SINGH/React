
import './App.css';


function Header(props) {
  console.log(props)
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  console.log(props)
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
    </section>
  );
}

function Footer(p) {
  console.log(p)
  return (
    <footer>
      <p>Copyright {p.year}</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Kartikey" />
      <Main adjective="amazing" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
