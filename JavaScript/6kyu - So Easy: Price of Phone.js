function costPriceToSalePrice(match) {
  let newPrice = parseInt(match.slice(1)) * 1.15;
  newPrice - (~~newPrice) < .45 ? newPrice = ~~newPrice : void 0;
  newPrice = Math.ceil(newPrice) + (Math.ceil(newPrice) % 5 ? 5 - (Math.ceil(newPrice) % 5) : 0);
  return `$${Math.floor(newPrice)}`;
}

function salePrice(cost) {
  return cost
             .replace(/cost/g, 'sale')
             .replace(/\$\d*/g, costPriceToSalePrice);
}
