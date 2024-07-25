function addItem() {
    const itemList = document.getElementById('item-list');
    const inputItem = document.getElementById('input-item');
    const listItem = document.createElement('li');
    listItem.textContent = inputItem.value;
    itemList.appendChild(listItem);
    inputItem.value = '';
}