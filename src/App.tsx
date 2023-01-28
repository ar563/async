import { Async } from "./Async";
import { api } from "./api";
import { Product } from "./types";

export const App = () => {
  return (
    <Async
      action={() =>
        api<Product>("https://api.storerestapi.com/products/running-sneaker")
      }
    >
      {(product) => <h1>{product.title}</h1>}
    </Async>
  );
};
