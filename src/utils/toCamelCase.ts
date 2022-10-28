export function toCamelCase(str: string) : string{
  let newStr = "";
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  if (str) {
    str = str.replace(/[^a-zA-Zà-úÀ-Ú0-9]/gi, "-");
    const wordArr = str.split(/[-_]/g);

    let i: string;
    for (i in wordArr) {
      newStr += capitalize(wordArr[i]);
    }
  } else {
    return capitalize(newStr);
  }
  return capitalize(newStr);
}