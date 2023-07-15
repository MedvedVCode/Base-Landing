const fileName = ['cart',
  'catalog',
  'index',
  'product',
  'registration'];

const currentPath = window.location.pathname;
const pathParts = currentPath.split('/');
pathParts.pop();
const newPath = pathParts.join('/');
const headerSearchInputEl = document.querySelector('.header__search-input');

headerSearchInputEl.addEventListener('change', () => {
  const searchQuery = headerSearchInputEl.value;
  console.log(searchQuery);
  if (fileName.includes(searchQuery)) {
    const protocol = window.location.protocol;
      const url = `${protocol}//${newPath}/${searchQuery}.html`;
    window.location.href = url;
  }
});