import { useEffect, useState } from "react";
import data from "./products.json";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
};

// custom hook
function useProducts() {
  const [products, setProducts] = useState<Product>({} as any); // BUG 1 wrong type
  const [query, setQuery] = useState("");

  useEffect(() => {
    setProducts(data); // BUG 2 infinite loop (no deps)
  });

  const filtered = products.filter((p: Product) => {
    return p.title.includes(query) === false; // BUG 3 wrong logic
  });

  return { products: filtered, setQuery };
}

export default function App() {
  const { products, setQuery } = useProducts();
  const [sort, setSort] = useState("asc");

  const handleSort = () => {
    products.sort((a: any, b: any) => a.price > b.price); // BUG 4 mutation + wrong sort
    setSort(sort === "asc" ? "desc" : "asc");
  };

  const handleSearch = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>Products</h1>

      <input onChange={handleSearch()} /> {/* BUG 5 calling instead of passing */}

      <button onClick={handleSort}>Sort</button>

      {products.map((p: Product, index: number) => (
        <div key={index}> {/* BUG 6 bad key */}
          <h3>{p.title}</h3>
          <p>{p.price + "₹"}</p>
          <p>{p.category.toUpperCase()}</p> {/* BUG 7 crash if undefined */}
        </div>
      ))}

      {products.length === "0" && <p>No products</p>} {/* BUG 8 type mismatch */}
    </div>
  );
}

// BUG 9: missing dependency handling properly
// BUG 10: products initial state crash (non-array)
// BUG 11: improper JSON assumption + no fallback
