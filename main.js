let inputField = document.getElementById('inputField');
let addButton = document.getElementById('addButton');
let toDoList = document.getElementById('toDoList');
let checkboxes = document.getElementsByClassName('checkbox');

function initToDo(){
    var jsonDict = JSON.parse(localStorage.getItem('json'));
    if (jsonDict !== null){
        for (var key in jsonDict){
            var list = document.createElement('p');
            var checkbox = document.createElement('input');
            var text = document.createElement('span');
            var delButton = document.createElement('button');
            
            list.id = key;
            checkbox.type = "checkbox";
            checkbox.id = key;
            checkbox.checked = jsonDict[key];
            text.innerText = key;
            if (jsonDict[key] == true)
                text.style.textDecoration = 'line-through';
            else
                text.style.textDecoration = 'none';
            delButton.setAttribute('class', 'delButton');
            delButton.innerText = "x";
            
            list.appendChild(checkbox);
            list.appendChild(text);
            list.appendChild(delButton);

            toDoList.appendChild(list);
        }
    }
}

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

        var jsonDict = JSON.parse(localStorage.getItem('json'));
        if (jsonDict == null)
            jsonDict = {};
        jsonDict[inputField.value] = false;
        localStorage.setItem('json', JSON.stringify(jsonDict));
        console.log(jsonDict);

        inputField.value = '';
    }
}

function delToDo(event){
    if (event.target.getAttribute('class') == 'delButton'){
        var delButton = event.target;
        var list = delButton.parentElement;
        var text = delButton.previousElementSibling;
        var jsonDict = JSON.parse(localStorage.getItem('json'));

        list.remove();
        delete jsonDict[text.innerText];

        localStorage.setItem('json', JSON.stringify(jsonDict));
        console.log(jsonDict);
    }
    event.stopPropagation();
}

function isChecked(event){
    var checkbox = event.target;
    var text = event.target.nextElementSibling;
    var jsonDict = JSON.parse(localStorage.getItem('json'));
    if (checkbox.checked == true)
    {
        text.style.textDecoration = 'line-through';
        jsonDict[text.innerText] = true;
    }
    else
    {
        text.style.textDecoration = 'none';
        jsonDict[text.innerText] = false;
    }
    localStorage.setItem('json', JSON.stringify(jsonDict));
    console.log(jsonDict);
    event.stopPropagation();
}



initToDo();

inputField.addEventListener('keyup', (event) => {
    if (event.code == 'Enter')
        addToDo();
})

addButton.addEventListener('click', () => {
    addToDo();
})

toDoList.addEventListener('change', isChecked, false)

toDoList.addEventListener('click', delToDo, false)