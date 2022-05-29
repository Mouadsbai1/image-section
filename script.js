let lists = document.querySelectorAll("ul .list");
let box = document.querySelectorAll(".images .item-box");
lists.forEach((list) => {
  list.addEventListener("click", function () {
    lists.forEach((e) => {
      e.classList.remove("active");
    });
    list.classList.add("active");
    for (let i = 0; i < box.length; i++) {
      box[i].classList.remove("hidd");
      if (list.dataset.filter === "all") {
        box[i].classList.remove("hidd");
      } else if (box[i].dataset.item !== list.dataset.filter) {
        box[i].classList.add("hidd");
      }
    }
  });
});
