export function formaterCurrency(currency) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  })
    .format(currency)
    .replace(/\s+/g, "");
}

export function calculateTotalPayment(amount, term) {
  let total;

  if (amount < 5000) {
    total = amount * 1.5;
  } else if (amount >= 5000 && amount < 10000) {
    total = amount * 1 * 4;
  } else if (amount >= 10000 && amount < 15000) {
    total = amount * 1.3;
  } else {
    total = amount * 1.2;
  }

  if (term === 6) {
    total *= 1.1;
  } else if (term === 12) {
    total *= 1.2;
  } else {
    total *= 1.3;
  }

  return total;
}
