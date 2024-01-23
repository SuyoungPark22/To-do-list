let inputField = document.getElementById('inputField');
let addButton = document.getElementById('addButton');
let toDoList = document.getElementById('toDoList');
let checkboxes = document.getElementsByClassName('checkbox');

// for(var i=0; i<checkboxes.length; i++){
//     var checkbox = checkboxes.item(i);
//     checkbox.addEventListener('click', () => {
//         if (checkbox.checked)
//             toDoList.children[i].querySelector('label').style.textDecoration = 'line-through';
//             // checkbox.nextSibling.style.textDecoration = 'line-through';
//         else
//             toDoList.children[i].querySelector('label').style.textDecoration = 'none';
//             // checkbox.nextSibling.style.textDecoration = 'none';
//     })
// }

inputField.addEventListener('keyup', (event) => {
    if (event.code == 'Enter')
        addToDo();
})

addButton.addEventListener('click', () => {
    addToDo();
})

toDoList.addEventListener('change', (event) => {
    var button = event.target;
    var text = event.target.nextElementSibling;
    if (button.checked == true)
        text.style.textDecoration = 'line-through';
    else
        text.style.textDecoration = 'none';
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
        
        list.id = inputField.value;
        checkbox.type = "checkbox";
        checkbox.id = inputField.value;
        text.innerText = inputField.value;
        
        list.appendChild(checkbox);
        list.appendChild(text);

        toDoList.appendChild(list);

        inputField.value = '';
    }
}

