document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("nav-bar");

  //Hide
  let lastScrollTop = -10;

  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      navbar.classList.add("hidden");
    } else if (scrollTop === 0) {
      navbar.classList.remove("hidden");
    } else {
      console.log("Error Hiding Nav Bar");
    }
    console.log(scrollTop);
    lastScrollTop = scrollTop;
  });

  //Display
  let mouseTop = 0;

  document.addEventListener("mousemove", (e) => {
    if (e.clientY < 100) {
      navbar.classList.add("drop-down-nav");
      mouseTop = true;
      console.log(mouseTop);
    } else if (!e.clientY < 100) {
      navbar.classList.remove("drop-down-nav");
      mouseTop = false;
      console.log(mouseTop);
    } else {
      console.log("Display has chrashed ");
    }
  });
});
