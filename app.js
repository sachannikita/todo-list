let listContainer=document.getElementById('list-container')
let head = document.querySelector('head')
let inputBox=document.getElementById('input-box')


function addTask(){
    if(inputBox.value==''){
        alert('please enter the text')
    }
    else{
        const task=document.createElement('li')
        task.textContent= inputBox.value;
        listContainer.appendChild(task)
        let span = document.createElement('span')
        span.textContent="\u00d7"
        task.appendChild(span)
        span.style.right = '0px';
    }
    inputBox.value = '';
    SaveData()
}
listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask()



