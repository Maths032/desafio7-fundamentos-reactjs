const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(
    value,
  ); // TODO
// new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(numero)

export default formatValue;
