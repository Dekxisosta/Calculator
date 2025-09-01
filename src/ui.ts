function pressKey(val) {
  console.log("Pressed:", val);
}

function createCalcKey(label: string) {
  const btn = document.createElement("button");

  return btn;
}

const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

document.addEventListener("DOMContentLoaded", () => {
  const keypad = document.getElementById("keypad")!;
  keypad.innerHTML = keys.map(createCalcKey).join("");
});

class Tite{
  
}