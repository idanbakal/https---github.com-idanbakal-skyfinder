const hamburger = document.getElementById('hamburger');
const bar = document.getElementById("bar")


function myFunction() {
  
  if (bar !== null) {
    if (bar.style.display === 'none') {
      bar.style.display = 'block';
    } else {
      bar.style.display = 'none';
    }
  }
}



hamburger?.addEventListener("click", myFunction);

