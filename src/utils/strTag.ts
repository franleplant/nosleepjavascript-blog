/* simple function to remove newlines from a tagged tewplate string */
export function oneline(strings: TemplateStringsArray, ...rest: Array<any>) {
  let concat = "";
  strings.forEach((str, index) => {
    const dynChunk = rest[index] || "";
    concat += str + dynChunk;
  });
  //console.log(strings, rest, concat)
  return concat.replaceAll("\n", "").split(" ").filter(Boolean).join(" ");
}
