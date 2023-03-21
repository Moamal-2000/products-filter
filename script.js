"use strict";

const images = document.querySelectorAll('.portfolio .img')
const filters = document.querySelectorAll('.filters-container button')






filters.forEach(filter => {
  filter.addEventListener('click', () => {
    let filterName = filter.dataset.filter

    // Add active class and remove them from the rest buttons
    filters.forEach(filter => filter.classList.remove('active'))
    filter.classList.add('active')

    // if filter name was * display all the images
    if (filterName === '*') {
      images.forEach(img => {
        img.style.display = 'block'
        img.classList.remove('web-filter-img')
        img.classList.remove('app-filter-img')
      })
      return
    }


    images.forEach(img => {
      if (!(img.classList.contains(filterName))) {
        img.style.display = 'none'
      } else {
        img.style.display = 'block'
        img.classList.add(`${filterName}-img`)
      }
    })
  })
})