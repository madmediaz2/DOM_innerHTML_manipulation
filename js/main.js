var add = document.getElementById('add');
var remove = document.getElementById('remove');
var list = document.getElementById('list');

var text = 'dit is meer content'



add.addEventListener('click', function() {
    list.innerHTML += `<li>${text}</li>`;
    
});

remove.addEventListener('click', function() {
    list.removeChild(list.lastElementChild);
});

