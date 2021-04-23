var textarea=document.getElementById("text")
var result=document.getElementById("result")
var select=document.getElementById("select")


textarea.addEventListener("input",()=>{
    resu();
})
select.addEventListener("change",()=>{
  resu()
})

function resu(){
    if (select.value=="decode"){
        result.value=window.atob(textarea.value) 
    }else if (select.value=="code") {
        result.value=window.btoa(textarea.value)
    }
}
