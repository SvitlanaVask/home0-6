const itemsRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsRef.length}`);


const headerRef = document.querySelectorAll('h2');
const innerListref = document.querySelectorAll('.item > ul')

console.log(`Category: ${headerRef[0].textContent}`);
console.log(`Elements: ${innerListref[0].children.length}`);

console.log(`Category: ${headerRef[1].textContent}`);
console.log(`Elements: ${innerListref[1].children.length}`);

console.log(`Category: ${ headerRef[2].textContent }`);
console.log(`Elements: ${innerListref[2].children.length}`);

