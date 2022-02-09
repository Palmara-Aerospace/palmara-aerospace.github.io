function $(selector) {
    var elements = document.querySelectorAll(selector);
    if (!elements || elements.length < 1) {
        return [];
    }
    var result = [];
    for (var index = 0; index < elements.length; index++) {
        var element = elements[index];
        result.push(element);
    }
    return result;
}
if ($("#mainNav")[0]) {
    new bootstrap.ScrollSpy($("body")[0], { target: "#mainNav", offset: 74 });
}
var toggle_nav = function () {
    $("#mobile-menu")[0].classList.remove("show");
};
for (var _i = 0, _a = $(".nav-link, .nav-link-custom, .navbar-brand"); _i < _a.length; _i++) {
    var nav_link = _a[_i];
    nav_link.addEventListener("click", toggle_nav, false);
}
window.setTimeout(function () {
    var delay = 150;
    var element = $("span#change-title-text")[0];
    function write_new_text() {
        var text = "Industry";
        var current = "";
        element.textContent = "";
        var interval_write_new_text = window.setInterval(function () {
            if (current.length >= (text.length - 1)) {
                window.clearInterval(interval_write_new_text);
                element.textContent = text;
                return undefined;
            }
            current += text[current.length];
            element.textContent = current + "|";
        }, delay);
    }
    var text = element.textContent;
    var interval_clear_new_text = window.setInterval(function () {
        if (text.length === 0) {
            window.clearInterval(interval_clear_new_text);
            write_new_text();
            return undefined;
        }
        text = text.slice(0, -1);
        element.textContent = ((text.length === 0) ? "" : text) + "|";
    }, delay);
}, 1500);
for (var _b = 0, _c = $("[data-background]"); _b < _c.length; _b++) {
    var background = _c[_b];
    var url = background.getAttribute("data-background");
    background.style.backgroundImage = "url(" + url + ")";
    background.classList.add("background");
}
