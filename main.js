//var btns=document.querySelectorAll(".Buttons");


//for(i=0;i<btns.length;i++){
// btns[i]=addEventListener("onclick", manageCatClasses);
//console.log(btns[i].innerHTML);
//}


var cat=document.getElementsByClassName("cat")[0];
console.log(cat);

function manageCatClasses(){

	

if(document.activeElement.getAttribute("data-add"))
{
	//alert("blue eyes");
	console.log(document.activeElement.getAttribute("data-add"));
	cat.classList.add(document.activeElement.getAttribute("data-add"));
	
}
if (document.activeElement.getAttribute("data-remove"))
{
	console.log(document.activeElement.getAttribute("data-remove"));
	cat.classList.remove(document.activeElement.getAttribute("data-remove"));
}

}