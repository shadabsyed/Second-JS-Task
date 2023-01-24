let string = "";
let buttons = document.querySelectorAll(".row--btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "=":
        string = eval(string.replace("×", "*").replace("÷", "/"));
        break;

      case "C":
        string = "";
        break;

      case "AC":
        string = string.slice(0, -1);
        break;

      default:
        string += e.target.innerHTML;
        break;
    }
    document.querySelector("input").value = string;
  });
});
