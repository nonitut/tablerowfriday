document.addEventListener("DOMContentLoaded", function() {
// Получаем ссылки на наши элементы по селектору 
let weekinput = document.querySelector("input[name='week']");
let nameinput = document.querySelector("input[name='name']");
let dateinput = document.querySelector("input[name='date']");

let diskselect = document.querySelector("select[name='disk']");
let typeselect = document.querySelector("select[name='type']");

let newrowbutton = document.querySelector("#new_row button");
let tablebody = document.querySelector("table tbody");

newrowbutton.addEventListener("click", function(){
    let week = weekinput.value;
    let name = nameinput.value;
    let date = dateinput.value;
    let disk = diskselect.value;
    let type = typeselect.value;

    let nextrow = document.createElement("tr");
    nextrow.innerHTML = '<td>'+week+'</td><td>'+name+'</td><td>'+date+'</td> <td><div class="sp_red>'+disk+'</div></td> <td><div class="sp_red>'+type+'</div></td>';
    tablebody.appendChild(nextrow);
})
});
