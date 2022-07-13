const URL = 'https://phisix-api.appspot.com/stocks.json';

class Stocks {
  #url;
  constructor() {
    this.#url =
      'https://eodhistoricaldata.com/api/eod/MAC.PSE?from=2021-07-13&to=2022-07-13&period=d&api_token=62cec46d5fbf98.32533468&fmt=json';
    this.stockSymbols = []; //array of objects
    this.getData(this.#url);
    this.getSymbol();
  }

  async getSymbol() {
    const url =
      'https://eodhistoricaldata.com/api/exchange-symbol-list/PSE.XPHS?api_token=62cec46d5fbf98.32533468';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  async getData(url) {
    const response = await fetch(this.#url);
    const data = await response.json();
    // const symbols = Object.values(data.stock).map((stock) => stock.symbol);
    // this.stockSymbols.push(symbols);
    // console.log(data);
  }
}

const psei = new Stocks();

// PSE	XPHS

// https://eodhistoricaldata.com/api/eod/XPHS.PSE?api_token=62cec46d5fbf98.32533468&json&period=d&order=a
