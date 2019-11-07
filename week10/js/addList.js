function addList(){
  userText = document.querySelector('#newItem').value;
  newItem = document.createElement('li');
  newItem.textContent = userText;
  var theList = document.querySelector('#myList');
  theList.appendChild(newItem);
  document.getElementById('newItem').value = "";

}
