// converts masterdeck and relic strings into actual arrays
export const arrayConverter = (arr) => {
  return arr
    .substr(1, arr.length - 2)
    .split(", ")
    .map((card) => card);
};
