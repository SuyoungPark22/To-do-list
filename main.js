let inputField = document.getElementById('inputField');
let addToDo = document.getElementById('addToDo');
let toDoList = document.getElementById('toDoList');
 
addToDo.addEventListener('click', function(){
    if (!inputField.value)
        alert("Please write your to-do.");
    else
    {
        var list = document.createElement('p');
        var checkbox = document.createElement('input');
        var label = document.createElement('label');
        
        checkbox.type = "checkbox";
        checkbox.id = inputField.value;
        checkbox.class = "checkbox";
        label.for = inputField.value;
        label.innerText = inputField.value;
        
        list.appendChild(checkbox);
        list.appendChild(label);

        toDoList.appendChild(list);

        inputField.value = '';
    }
})