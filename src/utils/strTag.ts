/* simple function to remove newlines from a tagged tewplate string */
export function oneline(strings: TemplateStringsArray, ...rest: Array<string>) {
  let concat = "";
  strings.forEach((str, index) => {
    const dynChunk = rest[index] || "";
    concat += str + dynChunk;
  });
  return concat.replace(/\n/g, "").split(" ").filter(Boolean).join(" ");
}
