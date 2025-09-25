const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const progressFraction = document.getElementById("progress-fraction");
const progressBar = document.getElementById("progress-bar");


function addTask(){
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saver();
    updateProgress();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saver();
        updateProgress();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saver();
        updateProgress();
    }
},false);

function saver(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function displayTask(){
listContainer.innerHTML=localStorage.getItem("data");
updateProgress()
}
 displayTask();
 // Update progress bar

function updateProgress() {
    const tasks = listContainer.querySelectorAll("li");
    const completedTasks = listContainer.querySelectorAll("li.checked");

    const total = tasks.length;
    const completed = completedTasks.length;

    // Update progress text
    progressFraction.innerHTML = `Progress: ${completed}/${total}`;

    // Update <progress> element
    progressBar.max = total;
    progressBar.value = completed;
}