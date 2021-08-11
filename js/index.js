/*
var item_arr=document.querySelectorAll(".list li");
var content=document.querySelector(".content");
var show=document.querySelector(".show");
var price=document.querySelector(".price");
var pricTotal=0;
item_arr.forEach(function(item){
    item.onclick=function(){
        console.log(item);
        content.innerHTML+=item.textContent;
        pricTotal+=parseInt(item.getAttribute('price'));
        console.log(item.getAttribute('price'));
        if (content.innerHTML != ''){
            show.style.display='block';
        }
    }
});

console.log(item_arr);

function showq() {
    price.innerHTML=pricTotal
}
*/
/*
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    console.log(this.readyState);
    if (this.readyState==4 && this.status==200){
        var tt=JSON.parse(this.responseText);
        console.log(tt[0]);
        console.log(tt[0].login);
    }
};
xhttp.open("GET","https://api.github.com/users/hadley/orgs",true);
xhttp.send();

document.querySelector(".content").innerHTML="Eile";
*/

var text=document.querySelector('.input');
var content=document.querySelector('.content');
var txt='';
var read_index=0;
var xhttp=new XMLHttpRequest();
window.addEventListener("load",key);
text.addEventListener("keyup",key);
function key(){
    xhttp.onreadystatechange=function(){
        read_index=text.value.length-1;
        content.innerHTML='';
        if (this.readyState==4 && this.status==200){
            txt=JSON.parse(this.responseText);
            if(text.value.length==0){
                txt.forEach(element => {
                    content.innerHTML+=element.login+"<br>";
                });
            }else{
                txt.forEach(ele=>{
                        if (ele.login[read_index]!==undefined){
                        if (ele.login[read_index].toLowerCase()===text.value[read_index].toLowerCase()){
                            if(content.innerHTML=='not found')
                                content.innerHTML=ele.login+"<br>";
                            else
                                content.innerHTML+=ele.login+"<br>";
                        }else{
                            if (content.innerHTML==''){
                                content.innerHTML='not found';
                            }
                        }
                    }
                    });    
                }
        }
    }

    /*
        http://ergast.com/api/f1/2004/1/results.json 
        https://api.github.com/users/hadley/orgs     
    */
    xhttp.open("GET","https://api.github.com/users/hadley/orgs",true);
    xhttp.send();
}

/*
function key(){
    xhttp.onreadystatechange=function(){
        read_index=text.value.length-1;
        content.innerHTML='';
        if (this.readyState==4 && this.status==200){
            txt=JSON.parse(this.responseText);
            if(text.value.length==0){
                txt.forEach(element => {
                    content.innerHTML+=element.login+"<br>";
                });
            }else{
                for (i=0;i<txt.length;i++){
                    if (txt[i].login[read_index].toLowerCase()==text.value[read_index].toLowerCase()){
                        if(content.innerHTML=='not found')
                            content.innerHTML=txt[i].login+"<br>";
                        else
                            content.innerHTML+=txt[i].login+"<br>";
                    }else{
                        if (content.innerHTML==''){
                            content.innerHTML='not found';
                        }
                    }
                }
            }    
        }
    }
*/