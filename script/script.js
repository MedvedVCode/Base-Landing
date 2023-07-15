const fileName = ['cart',
  'catalog',
  'index',
  'product',
  'registration'];

const currentPath = window.location.href;
const pathParts = currentPath.split('/');
pathParts.pop();
const newPath = pathParts.join('/');
console.log(newPath);
const headerSearchInputEl = document.querySelector('.header__search-input');

headerSearchInputEl.addEventListener('change', () => {
  const searchQuery = headerSearchInputEl.value;
  if (fileName.includes(searchQuery)) {
    const url = `${newPath}/${searchQuery}.html`;
    window.location.href = url;
  }
});