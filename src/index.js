const { getDate } = require("./getDate");
const { getTime } = require("./getTime");

import "./styles.css";

const date = getDate();
const time = getTime();

document.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  div.textContent = `Поточна дата та час: ${date} ${time}`;
  div.className = "date-time";
  document.body.appendChild(div);
});
