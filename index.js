const togglebtn = document.getElementsByClassName("toggle-btn")[0];
const links = document.getElementsByClassName("navlinks")[0]; //get ul

const togglenavbar = () => {
  links.classList.toggle("active"); //if active class exist, remove it, if not , add it.
};
togglebtn.addEventListener("click", togglenavbar);
