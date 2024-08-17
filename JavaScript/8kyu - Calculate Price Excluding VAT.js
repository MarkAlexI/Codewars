function excludingVatPrice(price) {
  const VAT = .15;
  return price != null ? Math.round(price * 100/(1 + VAT))/100 : -1;
}
