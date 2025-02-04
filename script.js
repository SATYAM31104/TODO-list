const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');
function addTask(){
    if(inputBox.value===''){
        alert("you must write something");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00D7';
        li.appendChild(span);
    }
    inputBox.value='';
    savedata();
}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.style.display='none';
    }
});
function savedata(){
    localStorage.setItem('listContainer',listContainer.innerHTML);
}
function showtask(){
    listContainer.innerHTML=localStorage.getItem('listContainer');
}
showtask();