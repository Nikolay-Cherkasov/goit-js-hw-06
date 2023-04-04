const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

// images.forEach((element) => {
//   galleryList.insertAdjacentHTML(
//     'beforeend',
//     `<li><img url='${element.url}' alt='${element.alt}'/></li>`
//   );
// });

const markup = images
  .map((img) => `<li><img src='${img.url}' alt='${img.alt}' width='350' height='150'/></li>`)
  .join('');
console.log(markup);

galleryList.insertAdjacentHTML('beforeend', markup);

galleryList.style.display = 'flex';
galleryList.style.justifyContent = 'center';
galleryList.style.gap = '10px';
galleryList.style.listStyle = 'none';

console.log(galleryList);
