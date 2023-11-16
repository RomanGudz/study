'use strict'

{
  const personNalog = Number(prompt('введите свою зарплату для вычисления налога', ''));

  if (50000 <= personNalog) {
    const nalogThirty = ((personNalog - 50000) * 0.3) + (14999 * 0.13) + ((49999 - 15000) * 0.2);
    console.log(nalogThirty, 'three');
  }
  else if (15000 <= personNalog) {
    const nalogTwenty = ((personNalog - 15000) * 0.2) + (14999 * 0.13);
    console.log(nalogTwenty, 'twenty');
  };
  if (15000 > personNalog) {
    console.log(personNalog * 0.13);
  };
}