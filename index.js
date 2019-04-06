setInterval(() => {

    var first = document.querySelector("li:first-child");
    var last = document.querySelector("li:last-child");
    var ul = document.querySelector("ul");
    var li = document.querySelectorAll("li");

    for(var i = 0; i < li.length; i++) {
        li[i].style.background = "white";
    }

    var diff = last.offsetTop - first.offsetTop + last.offsetHeight;

    last.style.top = `-${diff}px`;
    ul.style.top = `${last.offsetHeight}px`;
    ul.style.removeProperty("transition");
    last.style.background = "PowderBlue";

    setTimeout(() => {
        first.insertAdjacentElement("beforebegin", last);
        last.style.removeProperty("top");
        ul.style.removeProperty("top");
        ul.style.transition = "none";
    }, 2000);

}, 4000);