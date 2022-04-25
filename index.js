let text = document.getElementById("text-area");

document.getElementById("lorem").addEventListener("click", function () {
  text.value =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam augue ipsum, semper eu accumsan vitae, tincidunt at nisl. Fusce porta sodales sodales. Duis lacus ante, rhoncus in auctor ut, tempus sed lorem. Praesent rhoncus lobortis blandit. Nunc sed ligula ex. Cras in interdum nulla, nec mattis nulla. Suspendisse non magna ut velit dictum tempor. Vivamus nunc ligula, faucibus sit amet nisi cursus, blandit dictum erat. Nunc lobortis libero sit amet blandit mattis. Donec a convallis est, et fermentum arcu. Pellentesque ipsum lacus, interdum sit amet fermentum viverra, congue id dui. Suspendisse nec vulputate tellus.";
});

document.getElementById("upper-case").addEventListener("click", (event) => {
  text.value = text.value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", (event) => {
  text.value = text.value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", (event) => {
  text.value = text.value
    .toLowerCase()
    .replace(/^\w|\s\w/g, (m) => m.toUpperCase());
});

document.getElementById("sentence-case").addEventListener("click", (event) => {
  text.value = text.value
    .toLowerCase()
    .replace(/^\w|\.\s+\w/g, (m) => m.toUpperCase());
});
