/*  
Filename: sophisticated_code.js  
Description: This code is a simulation of a stock trading system with various functionalities such as account management, stock buying/selling, portfolio tracking, and market analysis. It includes complex algorithms and data structures to ensure efficient processing and accurate data representation. */

// Stock class
class Stock {
  constructor(name, symbol, price) {
    this.name = name;
    this.symbol = symbol;
    this.price = price;
  }

  updatePrice(newPrice) {
    this.price = newPrice;
  }
}

// Portfolio class
class Portfolio {
  constructor(name) {
    this.name = name;
    this.stocks = {};
  }

  addStock(stock, quantity) {
    if (this.stocks[stock.symbol]) {
      this.stocks[stock.symbol].quantity += quantity;
    } else {
      this.stocks[stock.symbol] = { stock, quantity };
    }
    console.log(quantity + " shares of " + stock.symbol + " added to portfolio.");
  }

  removeStock(stock, quantity) {
    if (!this.stocks[stock.symbol]) {
      console.log("No shares of " + stock.symbol + " in portfolio.");
      return;
    }

    if (this.stocks[stock.symbol].quantity - quantity < 0) {
      console.log("Insufficient shares of " + stock.symbol + " in portfolio.");
      return;
    }

    this.stocks[stock.symbol].quantity -= quantity;
    console.log(quantity + " shares of " + stock.symbol + " removed from portfolio.");
  }
}

// User class
class User {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
    this.portfolio = new Portfolio(this.name + "'s Portfolio");
  }

  buyStock(stock, quantity) {
    if (stock.price * quantity > this.balance) {
      console.log("Insufficient balance to buy " + quantity + " shares of " + stock.symbol);
      return;
    }

    this.balance -= stock.price * quantity;
    this.portfolio.addStock(stock, quantity);
    console.log(
      this.name +
        " has bought " +
        quantity +
        " shares of " +
        stock.symbol +
        " at $" +
        stock.price.toFixed(2) +
        " each."
    );
  }

  sellStock(stock, quantity) {
    if (!this.portfolio.stocks[stock.symbol]) {
      console.log("No shares of " + stock.symbol + " in portfolio to sell.");
      return;
    }

    if (this.portfolio.stocks[stock.symbol].quantity < quantity) {
      console.log(
        "Insufficient shares of " +
          stock.symbol +
          " in portfolio. You only have " +
          this.portfolio.stocks[stock.symbol].quantity +
          " shares."
      );
      return;
    }

    this.balance += stock.price * quantity;
    this.portfolio.removeStock(stock, quantity);
    console.log(
      this.name +
        " has sold " +
        quantity +
        " shares of " +
        stock.symbol +
        " at $" +
        stock.price.toFixed(2) +
        " each."
    );
  }
}

// Market class
class Market {
  constructor() {
    this.stocks = {};
  }

  addStock(stock) {
    this.stocks[stock.symbol] = stock;
  }

  updateStockPrice(symbol, newPrice) {
    if (!this.stocks[symbol]) {
      console.log("Stock with symbol " + symbol + " does not exist in the market.");
      return;
    }

    this.stocks[symbol].updatePrice(newPrice);
    console.log("Price of " + symbol + " updated to $" + newPrice.toFixed(2) + ".");
  }
}

// Helper function to generate random price between min and max values
function generateRandomPrice(min, max) {
  return Math.random() * (max - min) + min;
}

// Create a market and add some sample stocks
const market = new Market();
market.addStock(new Stock("Apple Inc.", "AAPL", generateRandomPrice(100, 200)));
market.addStock(new Stock("Microsoft Corporation", "MSFT", generateRandomPrice(150, 250)));
market.addStock(new Stock("Amazon.com, Inc.", "AMZN", generateRandomPrice(2000, 3000)));

// Create some users and perform stock buying/selling operations
const user1 = new User("John", 10000);
const user2 = new User("Emily", 5000);

user1.buyStock(market.stocks["AAPL"], 10);
user2.buyStock(market.stocks["AMZN"], 5);
user1.sellStock(market.stocks["AAPL"], 5);
user2.sellStock(market.stocks["AMZN"], 10);

// Update stock prices and perform more transactions
market.updateStockPrice("AAPL", generateRandomPrice(100, 200));
market.updateStockPrice("MSFT", generateRandomPrice(150, 250));

user1.buyStock(market.stocks["MSFT"], 8);
user2.buyStock(market.stocks["AAPL"], 3);
user1.sellStock(market.stocks["MSFT"], 3);
user2.sellStock(market.stocks["AAPL"], 5);

// Print user portfolios
console.log(user1.portfolio);
console.log(user2.portfolio);