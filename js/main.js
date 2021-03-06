class cat {
  constructor(catName, altText, img){
    this.catName = catName;
    this.altText = altText;
    this.img = img;
    this.clickCount = 0;
  }
}

const cat1 = new cat('Littly', 'Little white kitten with interested expresion', 'img/kitty-cat-kitten-pet-45201.jpeg');
const cat2 = new cat('Bigby', 'Grown-up cat with bored expresion', 'img/animal-sitting-animals-inside.jpg');
const cat3 = new cat('Mrs Grey', 'Grey cat standing on two legs', 'img/Grey Kitten On Floor.jpeg');
const cat4 = new cat('Snowzy', 'Sadly exited cat', 'img/pexels-photo-156934.jpeg');
const cat5 = new cat('Scare-cat', 'Scared cat face', 'img/pexels-photo-399647.jpeg');
const cats = [cat1, cat2, cat3, cat4, cat5];

// Function to load selected cat
function loadCat(c) {
  const container = $('.cat-container');

  container.html('');

  container.append(function() {
    const disCounter = `<p class="click-count">${c.clickCount}</p>`;
    const disName = `<p class="cat-name">${c.catName}</p>`;
    const disImg = `<img src="${c.img}" alt="${c.altText}">`
    return `${disCounter}, ${disName}, ${disImg}`;
  });

  // counting and displaying clicks
  container.find('img').on('click', function() {
    c.clickCount +=1;
    $('.click-count').text(c.clickCount);
  });
}

// Loop to create cats links
$(function() {
  const list = $('.cat-list');
  let catId = 0;

  for (let cat of cats) {
    list.append(`<li><a href="#" data-id="${catId}">${cat.catName}</a></li>`);
    catId +=1;
  }

  // Adds event listener and passes function argument by HTML data-id attribute
  list.on('click', 'a', function() {
    loadCat(cats[$(this).data('id')]);
  });

}());


//*** OLD CODE ***//
// const cats = $('.cat');
//
// // Separates cat imgs in separate div and names them
// cats.each(function(i) {
//   catNames = ['Littly', 'Bigby'];
//   $(this).wrap(`<div class="cat-section"></div>`);
//   $(this).before(`<p class="cat-name">${catNames[i]}</p>`)
// });
//
//
// // Click counter event
// let clickCount = 0;
//
// cats.click(function clickCounter() {
//   clickCount +=1;
//   $('.click-count').text(clickCount);
// });
