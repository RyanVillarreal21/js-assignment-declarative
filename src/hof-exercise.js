/**********/
// EXAMPLES
/**********/

// numbers: [number]
const numbers = [1, 2, 3];

// pricedItem: {price: number, taxable: boolean}
const pricedItem = { price: 10, taxable: false };

// pricedItems: [{price: number, taxable: boolean}]
const pricedItems = [pricedItem, pricedItem];

// calculateTotalImperative: (items: [{price: number, taxable: boolean}], tax: number) -> number
const calculateTotalImperative = (items, tax) => {
  let result = 0;
  for (const item of items) {
    const { price, taxable } = item;
    if (taxable) {
      result += price * Math.abs(tax);
    }
    result += price;
  }
  return result;
};

/**********/
// ASSIGNMENT
/**********/

// prices: (items: [{price: number}]) -> [number]
const prices = (items) => items.map((item) => item.price);

//Sudo code
// const pricesEx(let i = 0; i < items.length; i++) {
//   let arr = []
//   arr.push(items.price[i]);
//   return arr;
// }

// sum: (numbers: [number]) -> number
const sum = (numbers) => numbers.reduce((accum, currVal) => accum + currVal, 0);

//Sudo code
// const sumEx(let i = 0; i < numbers.length; i++) {
//   let total = 0;
//   return total += numbers[i];
// }

// selectTaxable: (items: [{taxable: boolean}]) -> [{taxable: boolean}]
const selectTaxable = (items) => items.filter((item) => item.taxable);

//Sudo code
// const selTaxableEx(let i = 0; i < items.length; i++) {
//   let arr = []
//   return arr.push(items[i].taxable);
// }

// applyTax: (prices: [number], tax: number) -> [number]
const applyTax = (prices, tax) => prices.map((price) => price * tax);

//Sudo code
// const applyTaxEx(let i = 0; i < prices.length; i++) {
//   let arr = [];
//   let taxed = price[i] * tax;
//   return arr.push(taxed);
// }

// baseSum: (items: [{price: number}]) -> [number]
const baseSum = (items) => sum(prices(items));

//Sudo code
// const baseSumEx(items) {
//   let priceList = pricesEx(items);
//   let arr = []
//   return arr.push(sumEx(priceList));
// }

// taxSum: (items: [{prices: number}, {taxable: boolean}], tax: number) -> [number]
const taxSum = (items, tax) => sum(applyTax(prices(selectTaxable(items)), tax));

// //Sudo code
// const taxSumEx(items,tax) {
//   let arr = [];
//   return arr.push(sumEx(applyTaxEx(pricesEx(selTaxableEx(items))), tax));
// }

// calculateTotalDeclarative: (items: [{prices: number}, {taxable: boolean}], tax: number) -> [number]
const calculateTotalDeclarative = (items, tax) =>
  baseSum(items) + taxSum(items, Math.abs(tax));

//Sudo code
// const calculateTotalEx(items, tax) {
//   let arr = []
//   return arr.push(baseSumEx(items) + taxSumEx(items, MAth.abs(tax)));
// }

export default {
  prices,
  sum,
  selectTaxable,
  applyTax,
  baseSum,
  taxSum,
  calculateTotalDeclarative,
};
