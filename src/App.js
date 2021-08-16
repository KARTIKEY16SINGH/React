
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
      <ul style={{ textAlign: "left" }}>
        {
          props.dishes.map((dish) => (
            <li key={dish.id}>
              {dish.title}
            </li>
          ))
        }
      </ul>
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

const dishes = [
  "Pizza",
  "Samosa",
  "Pasta",
  "Burger",
  "Naan",
  "Maggi",
  "Ice-cream"
];

const dishObject = dishes.map((dish, i) => ({ id: i, title: dish }));

function App() {
  return (
    <div className="App">
      <Header name="Kartikey" />
      <Main adjective="amazing" dishes={dishObject} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
