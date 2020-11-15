//Script for toggling dark and light mode
let toggle;

 const toggleColorDark = () => {
  toggle = document.querySelector('html');
  toggle.classList.remove('dark');
  toggle.classList.add('light');
  document.querySelector('.toggleText').innerHTML = "Dark Mode";
  document.querySelector(".modeDark").style.display = "none";
  document.querySelector(".modeLight").style.display = "inline";
};

const toggleColorLight = () => {
  toggle = document.querySelector('html');
  toggle.classList.remove('light');
  toggle.classList.add('dark');
  document.querySelector('.toggleText').innerHTML = "Light Mode";
  document.querySelector(".modeDark").style.display = "inline";
  document.querySelector(".modeLight").style.display = "none";
}
