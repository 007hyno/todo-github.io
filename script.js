let input = document.getElementById('input');
let btn = document.getElementById('btn');
let table = document.getElementById('main');

btn.addEventListener('click', function(event){
    var row = document.createElement('tr');
    var l = document.createElement('li');
    var todo = document.createElement('td');
    var time = document.createElement('td');
    // alert(`This is ${row.innerText}`);
    var d = new Date();
    todo.innerText = input.value;
    time.innerText = d.toLocaleTimeString();
    if(input.value == ""){
        alert("Todo is empty !!!");
    }
    else{
        table.appendChild(row);
        row.appendChild(todo);
        row.appendChild(time);
    }
    input.value = "";
    row.addEventListener('click', function(){
        row.style.backgroundColor = "#fafafa";
        todo.style.textDecoration = "line-through";
        todo.style.color = "#949494";
        todo.style.fontStyle = "italic";
        time.style.textDecoration = "line-through";
        time.style.color = "#949494";
        time.style.fontSize = "italic";
    })
    row.addEventListener('dblclick', function(){
        table.removeChild(row);
    })
    event.preventDefault();
})