(function() {
  /*
   * Scroll spy
   */
  // activate bootstrap scrollspy on the main nav element
  var main_nav = document.querySelector("#mainNav");
  if (main_nav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74
    });
  }
  /*
   * Navbar
   */
  // collapse navbar on nav click
  var nav_links = document.querySelectorAll(".nav-link, .nav-link-custom");
  var toggle_nav = function() {
    document.querySelector("#mobile-menu").classList.remove("show");
  };
  for (var i = 0; i < nav_links.length; i++) {
    var nav_link = nav_links[i];
    nav_link.onclick = toggle_nav;
  }
  /*
   * Header typing effect
   */
  // define constants
  var delay = 150;
  var element = document.querySelector("span#change-title-text");
  // wait to trigger animation
  window.setTimeout(clear_initial_text, 1500);
  // clear the initial text
  function clear_initial_text() {
    var text = element.textContent;
    var interval = window.setInterval(function() {
      if (text.length === 0) {
        window.clearInterval(interval);
        write_new_text();
        return false;
      }
      text = text.slice(0, -1);
      element.textContent = ((text.length === 0) ? "" : text) + "|";
    }, delay);
  }
  // write the new text
  function write_new_text() {
    var text = "Industry";
    var current = "";
    element.textContent = "";
    var interval_2 = window.setInterval(function() {
      if (current.length >= (text.length - 1)) {
        window.clearInterval(interval_2);
        element.textContent = text;
        return false;
      } else {
        current += text[current.length];
        element.textContent = current + "|";
      }
    }, delay);
  }
  /*
   * Insert background images
   */
  var backgrounds = document.querySelectorAll("[data-background]");
  for (var j = 0; j < backgrounds.length; j++) {
    var background = backgrounds[j];
    var url = background.getAttribute("data-background");
    background.style["background-image"] = "url(" + url + ")";
    background.classList.add("background");
  }
})();
