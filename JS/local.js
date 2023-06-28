let txt =document.getElementById('txt');

if (localStorage.length >0 ){
    txt.value= localStorage.getItem('CompanyName')
}
txt.onkeyup= function(){
    localStorage.setItem('CompanyName' , txt.value)
}


/****************************/

let txt2 =document.getElementById('txt2');

if (localStorage.length >0 ){
    txt2.value= localStorage.getItem('txt2')
    txt2.value= localStorage.getItem('txt2')
}
txt2.onkeyup= function(){
    localStorage.setItem('txt2' , txt2.value)
    
}
/****************************/

let txt3 =document.getElementById('txt3');

if (localStorage.length >0 ){
    txt3.value= localStorage.getItem('txt3')
}
txt3.onkeyup= function(){
    localStorage.setItem('txt3' , txt3.value)
}



/****************************/
const OptionCompany = document.getElementById('txt4');

OptionCompany.addEventListener('change', (event) => {
  let currentOption = event.target.value;
  localStorage.setItem('companyNumber', currentOption);
});

if ( localStorage.getItem('companyNumber')) {
  OptionCompany.value = localStorage.getItem('companyNumber'); 
}
/****************************/






