import { NBPResponse, Rate } from "./Models";

class AccessNBP {
  rates!: Rate[];

  constructor() {}

  getCurrencies() {
    if (this.rates) {
      return this.rates.map(function (item) {
        return item.currency;
      });
    } else {
      return [];
    }
  }

  getRate(currency: string) {
    if (this.rates) {
      return this.rates.filter(function (item) {
        if (item.currency === currency) {
          return item.ask;
        }
      })[0];
    } else {
      return 1;
    }
  }
}
