import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

interface ServerSchema {
  transaction: any;
}

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Transaction",
          type: "deposit",
          category: "Food",
          amount: 6000,
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Transaction",
          type: "withdraw",
          category: "Rent",
          amount: 1000,
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      data.id = Date.now();
      data.createdAt = new Date();
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
