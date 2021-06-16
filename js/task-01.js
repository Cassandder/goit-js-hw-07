const items = document.querySelectorAll('.item');
console.log(`В списке ${items.length} категории.`);

items.forEach(item => {
  const h2Elem = item.querySelector('h2');
  const liElem = item.querySelectorAll('li');
  console.log(`Категория: ${h2Elem.textContent}
  Количество элементов: ${liElem.length}
  `)
    
})
