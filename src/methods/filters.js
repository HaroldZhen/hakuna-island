export function currency(num) {
  const n = parseInt(num, 10);
  return `$${n
    .toFixed(0)
    .replace(/./g, (c, i, a) => (i && c !== '.' && (a.length - i) % 3 === 0 ? `, ${c}`.replace(/\s/g, '') : c))}`;
}

export function date(time) {
  // const localDate = new Date(time * 1000);
  // return localDate.toLocaleDateString();
  const localDate = new Date(Number(time) * 1000);
  const Year = localDate.getFullYear();
  const Month = localDate.getMonth() + 1 < 10 ? `0${localDate.getMonth() + 1}` : localDate.getMonth() + 1;
  const Day = localDate.getDate() < 10 ? `0${localDate.getDate()}` : localDate.getDate();
  const Hours = localDate.getHours() < 10 ? `0${localDate.getHours()}` : localDate.getHours();
  const Minutes = localDate.getMinutes() < 10 ? `0${localDate.getMinutes()}` : localDate.getMinutes();
  return `${Year}-${Month}-${Day} ${Hours}:${Minutes}`;
}

export function dateToTimestamp(theDate) {
  return Math.floor(new Date(theDate) / 1000);
}
