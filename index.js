let flag;

function calcExpression(expression) {
  try {
    const result = eval(expression);
    return result;
  } catch (error) {
    console.error(`Error: ${error}`);
    return 0;
  }
}

const keyPressed = (key) => {
  if (flag) {
    document.getElementById("expression").innerText = "";
    flag = false;
  }
  const expression = document.getElementById("expression").innerText;
  document.getElementById("expression").innerText = expression + key;
};

const clearAll = () => {
  document.getElementById("expression").innerText = "";
  document.getElementById("result").innerText = "0";
  console.log("clear");
};

const deleteLast = () => {
  const expression = document.getElementById("expression").innerText;
  if (expression.length === 0) return;
  document.getElementById("expression").innerText = expression.slice(0, -1);
};

const clacResult = () => {
  const expression = document.getElementById("expression").innerText;
  console.log(expression);
  const result = calcExpression(expression);
  document.getElementById("result").innerText = result;

  if (result !== 0) {
    flag = true;
  }
};
