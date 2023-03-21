"use strict";

const images = document.querySelectorAll(".portfolio .img");
const filters = document.querySelectorAll(".filters-container button");






function displayProduct(ele) {
  ele.style.display = "block";
  setTimeout(() => {
    ele.style.transform = "scale(1)";
    ele.style.height = "";
    ele.style.width = "";
  }, 0);
}


function handleFilter(filter) {
  let filterName = filter.dataset.filter;

  // Add active class on clicked button
  filters.forEach((filter) => filter.classList.remove("active"));
  filter.classList.add("active");

  // if filter name equal to * display all the products images
  if (filterName === "*") {
    images.forEach((img) => {
      displayProduct(img);
      img.classList.remove("web-filter-img");
      img.classList.remove("app-filter-img");
      img.classList.remove("card-filter-img");
    });
    return; // Stop reading any other line below
  }

  // handle filter products
  images.forEach((img) => {
    if (!img.classList.contains(filterName)) {
      img.style.transform = "scale(0)";
      img.style.height = "0";
      img.style.width = "0";

      setTimeout(() => {
        img.style.display = "none";
      }, 300);
    } else {
      displayProduct(img);
      img.classList.add(`${filterName}-img`);
    }
  });
}





filters.forEach((filter) => {
  filter.addEventListener("click", () => handleFilter(filter));
});
