const div = document.querySelector(".box");

// Define an array of colors
const colors = ["blue", "yellow", "red"];

let i = 0;

div.onclick = () => {
  div.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length; // Loop back to the start
};

