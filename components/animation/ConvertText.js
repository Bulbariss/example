function splitText(str) {
  return str.replace(/\w+[!"#$%&'()*+,\-./:;<=>?@[\\\]^_‘{|}~]?/g, splitting);
}

function splitting(match) {
  let middle = "";
  match.split("").map((char) => {
    return (middle += `<span class="letter">${char}</span>`);
  });
  return middle;
}

function convertText(text) {
  return splitText(text);
}

console.log(convertText("Lorem120  ads"));
