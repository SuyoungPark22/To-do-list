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

function addToDo(){
    if (!inputField.value)
        alert("Please write your to-do.")
    else
    {
        var list = document.createElement('p');
        var checkbox = document.createElement('input');
        var label = document.createElement('label');
        
        list.id = inputField.value;
        checkbox.type = "checkbox";
        checkbox.id = inputField.value;  
        checkbox.setAttribute("class", "checkbox");
        label.for = inputField.value;
        label.innerText = inputField.value;
        
        list.appendChild(checkbox);
        list.appendChild(label);

        toDoList.appendChild(list);

        inputField.value = '';
    }
}

