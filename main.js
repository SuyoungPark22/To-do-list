let inputField = document.getElementById('inputField');
let addToDo = document.getElementById('addToDo');
let toDoList = document.getElementById('toDoList');
 
addToDo.addEventListener('click', function(){
    if (!inputField.value)
        alert("Please write your to-do.");
    else
    {
        var list = document.createElement('li');
        list.innerText = inputField.value;
        toDoList.appendChild(list);
        inputField.value = '';
    }
})