import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";


const arr = [
  {name: 'Муские Кроссовки Nike Blazer Mid Suede', price: 12999, },
  {name: 'Мужские Кроссовки Nike Air Max 2019', price: 8499, },
  {name: 'Мужские Кроссовки Puma Cross Fit 4', price: 9999, },
  {name: 'Мужские Кроссовки Adidas Run 2019', price: 4599, }

];

function App() {
  return (
    <div className="wrapper clear">
      <Header />

      <Cart />

      <div className="content p-40">
        <div className="d-flex justify-between align-center">
          <h1>Все кроссовки</h1>

          <div className="search-block">
            <img src="../img/Search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
