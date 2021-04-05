import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => [
      {
        id: 1,
        title: "Transaction 1",
        type: "deposit",
        value: "R$ 1200.00",
        category: "Food",
        createdAt: new Date(),
      },
    ]);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
