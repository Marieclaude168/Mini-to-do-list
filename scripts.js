
const input = document.getElementById("taskInput");
const buton = document.getElementById("addBtn");
const list = document.getElementById("taskList");


buton.addEventListener("click", () => {
const title=input.value;
  

const li= document.createElement("li");
li.textContent=title;

const delBtn = document.createElement("button");
delBtn.textContent="Delete";
  delBtn.addEventListener("click", function() {
    li.remove(); 
  });



li.appendChild(delBtn);
      list.appendChild(li);
       input.value = "";
}); 