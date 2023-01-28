import { render, screen } from "@testing-library/react";

import { api } from "./api";
import { Async } from "./Async";
import { Product } from "./types";

test("displays loading caption", async () => {
  render(
    <Async
      action={() =>
        api<Product>("https://api.storerestapi.com/products/running-sneaker")
      }
    >
      {(product) => <h1>{product.title}</h1>}
    </Async>
  );
  const loadingText = await screen.findByText("Ładowanie...");
  expect(loadingText).toBeInTheDocument();
});

test("stops displaying loading caption and displays data", async () => {
  render(
    <Async
      action={() =>
        api<Product>("https://api.storerestapi.com/products/running-sneaker")
      }
    >
      {(product) => <h1>{product.title}</h1>}
    </Async>
  );
  const loadingText = await screen.findByText("Ładowanie...");
  const productName = await screen.findByText("running sneaker");
  expect(productName).toBeInTheDocument();
  expect(loadingText).not.toBeInTheDocument();
});

test("displays error", async () => {
  window.alert = jest.fn();
  const alertSpy = jest.spyOn(window, "alert");
  render(
    <Async
      action={() =>
        api<Product>(
          "https://api.storerestapi.com/products/non-existent-product"
        ).finally(() => {
          expect(alertSpy).toHaveBeenCalledTimes(1);
          expect(alertSpy).toBeCalledWith("Error: Not Found");
        })
      }
    >
      {(product) => <h1>{product.title}</h1>}
    </Async>
  );
  (window.alert as jest.Mock).mockClear();
});
