import { useEffect, useState } from "react";
import "./App.css";
import productsData from "./data/products.json";

// COMPONENTS
import Card from "./components/Card/Card";

interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
}

function App() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, [products]);

  return (
    <>
      <h1>LISTA DE PRODUTOS</h1>
      {products.length === 0 ? (
        <h1>Não há produtos disponíveis...</h1>
      ) : (
        products.map((item) => (
          <div className="container">
            {/* <Card
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
            /> */}
            <div className="">a</div>
          </div>
        ))
      )}
    </>
  );
}

export default App;
