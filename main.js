
function addmessger(messger){
    return ` <div class="flex gap-3 w-full p-1 transition-colors items-center">
    <button  onclick="cekTask(this)"class="bg-slate-100 w-10 h-10 rounded-full"> <i class="fa-solid fa-check text-xl  color-slate-100"></i></button>
    <p class="grow">${messger}</p>
    <div class="gap-1">
       <button onclick="updateTask(this)" class=" hover:bg-cyan-500 hover:text-white rounded-full w-10 h-10 text-cyan-600 border bg-white transition-colors "><i class="fa-solid fa-pen"></i></button>
     <button   onclick="deleteTask(this)" class=" hover:bg-cyan-500 hover:text-white rounded-full w-10 h-10 text-cyan-600 border bg-white transition-colors "><i class="fa-solid fa-trash"></i></button>
    </div>
    </div>
    `
    }

function  add(){
    const input=document.querySelector('input')
    if(input.value==""){
       alert("donner un messger");
}else {
    const tasklist =document.querySelector(".list22");
    tasklist.innerHTML +=addmessger(input.value);
    input.value=" ";
}


}
function deleteTask(target){
target.parentElement.parentElement.remove();



}



function updateTask(target) {
    const text = target.parentElement.previousElementSibling.
    innerText 
    target.parentElement.previousElementSibling.innerHTML=
`<input type="text" class=" update-input" onblur="saveInput(this)" value="${text}"/>`

}


function saveInput(target) {
    target.parentElement.innerHTML=`<p class="grow">${target.value}</p>`;


}
function cekTask(target) {
    if(target.classList.contains('bg-slate-100')){
        target.classList.remove('bg-slate-100')
        target.classList.add('bg-green-600')
        target.children[0].classList.remove('text-slate-100 ')
        target.children[0].classList.add('text-white ')
    
    }else{
        target.classList.remove('bg-green-600')
        target.classList.add('bg-slate-100')
        target.children[0].classList.remove('text-white-100 ')
        target.children[0].classList.add('text-slate ')
    
    }
 


}