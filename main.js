let inputField = document.getElementById('inputField');
let addButton = document.getElementById('addButton');
let toDoList = document.getElementById('toDoList');
let checkboxes = document.getElementsByClassName('checkbox');

inputField.addEventListener('keyup', (event) => {
    if (event.code == 'Enter')
        addToDo();
})

addButton.addEventListener('click', () => {
    addToDo();
})

toDoList.addEventListener('change', (event) => {
    var checkbox = event.target;
    var text = event.target.nextElementSibling;
    if (checkbox.checked == true)
        text.style.textDecoration = 'line-through';
    else
        text.style.textDecoration = 'none';
    event.stopPropagation();
}, false)

toDoList.addEventListener('click', (event) => {
    if (event.target.getAttribute('class') == 'delButton'){
        var delButton = event.target;
        var list = delButton.parentElement;
        list.remove();
    }
    event.stopPropagation();
}, false)

function addToDo(){
    if (!inputField.value)
        alert("Please write your to-do.")
    else
    {
        var list = document.createElement('p');
        var checkbox = document.createElement('input');
        var text = document.createElement('span');
        var delButton = document.createElement('button');
        
        list.id = inputField.value;
        checkbox.type = "checkbox";
        checkbox.id = inputField.value;
        text.innerText = inputField.value;
        delButton.setAttribute('class', 'delButton');
        delButton.innerText = "x";
        
        list.appendChild(checkbox);
        list.appendChild(text);
        list.appendChild(delButton);

        toDoList.appendChild(list);

        inputField.value = '';
    }
}

