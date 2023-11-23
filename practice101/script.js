const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === ''){
        alert("Please enter a value.");
    }
    else{
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();

}

//delete rows

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.none();
        saveDate();
    }
    
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    saveData();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); 
