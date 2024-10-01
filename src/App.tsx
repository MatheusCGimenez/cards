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
  img: string;
}

function App() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, [products]);

  return (
    <>
      <header>
        <h1 className="title">LISTA DE PRODUTOS</h1>
      </header>
      <main>
        <section>
          <div className="container">
            {products.length === 0 ? (
              <h1>Não há produtos!</h1>
            ) : (
              products.map((items) => (
                <Card
                  id={items.id}
                  name={items.name}
                  description={items.description}
                  price={items.price}
                  img={items.img}
                />
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
