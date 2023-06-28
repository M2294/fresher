
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

// console.log(tabsArray);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele);
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
  });
});
/********************************/
var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }
};
/********************************/
let pagination = document.querySelectorAll(" .pagination li");
let pagArray = Array.from(pagination);
let divss = document.querySelectorAll(".information > div");
let divssArray = Array.from(divss);

pagArray .forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele);
    pagArray .forEach((ele) => {
      ele.classList.remove("active2");
    });
    e.currentTarget.classList.add("active2");
    divssArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
  });
});

/********************************/
list.addEventListener('click', function(e){
  //delete 
  if(e.target.classList.contains('delete')){
      const span = e.target.parentElement;
      const li = span.parentElement;
      li.classList.add('hide');
      //use time out to give css animation time
      setTimeout(() => {
          list.removeChild(li)
      }, 600);
     
  }else if(e.target.classList.contains('edit')){
      //if user click on edit
      //add to input text the border line
      //allow update input text by change readOnly
      const span = e.target.parentElement;
      const li = span.parentElement;
      const inputText = li.querySelector('.name input[type=text]');
      const saveInfo = li.querySelector('.name .saveInfo');
      inputText.classList.add('input-border');
      inputText.style.cursor = "text";
      saveInfo.style.display = "block";
      inputText.readOnly = false;

      //save by press enter btn
      inputText.addEventListener('keypress', function(e){
          var key = e.which || e.keyCode;
          if (key === 13) { // 13 is enter
              inputText.readOnly = true;
              inputText.style.cursor = "context-menu";
              inputText.classList.remove('input-border');
              saveInfo.style.display = "none";
          }
      })
  }
});

const formAdd = document.forms['form-add'];
    formAdd.addEventListener('submit', function(e){
        e.preventDefault();
        let insertedData = formAdd.querySelector('input[type=text]').value;
        insertedData = `<li>
        <span class="name">
        <input type="text" value="${insertedData}" readonly="readonly"> 
        <p class="saveInfo">Press "Enter" to save</p>
        </span>
        <span class="action">
       
        <i class=" edit bi bi-pencil-square"></i>
        <i class=" delete bi bi-trash3"></i>            
         </span>
    
        </li>`;
        list.insertAdjacentHTML('afterbegin', insertedData);
        formAdd.querySelector('input[type=text]').value = "";
    });
 

/********************************/
list2.addEventListener('click', function(e){
  //delete 
  if(e.target.classList.contains('delete')){
      const span = e.target.parentElement;
      const li = span.parentElement;
      li.classList.add('hide');
      //use time out to give css animation time
      setTimeout(() => {
          list2.removeChild(li)
      }, 600);
     
  }else if(e.target.classList.contains('edit')){
      //if user click on edit
      //add to input text the border line
      //allow update input text by change readOnly
      const span = e.target.parentElement;
      const li = span.parentElement;
      const inputText = li.querySelector('.name input[type=text]');
      const saveInfo = li.querySelector('.name .saveInfo');
      inputText.classList.add('input-border');
      inputText.style.cursor = "text";
      saveInfo.style.display = "block";
      inputText.readOnly = false;

      //save by press enter btn
      inputText.addEventListener('keypress', function(e){
          var key = e.which || e.keyCode;
          if (key === 13) { // 13 is enter
              inputText.readOnly = true;
              inputText.style.cursor = "context-menu";
              inputText.classList.remove('input-border');
              saveInfo.style.display = "none";
          }
      })
  }
});

const formAdd2 = document.forms['form-add2'];
    formAdd2.addEventListener('submit', function(e){
        e.preventDefault();
        let insertedData = formAdd2.querySelector('input[type=text]').value;
        insertedData = `<li>
        <span class="name">
        <input type="text" value="${insertedData}" readonly="readonly"> 
        <p class="saveInfo">Press "Enter" to save</p>
        </span>
        <span class="action">
       
        <i class=" edit bi bi-pencil-square"></i>
        <i class=" delete bi bi-trash3"></i>            
         </span>
    
        </li>`;
        list2.insertAdjacentHTML('afterbegin', insertedData);
        formAdd2.querySelector('input[type=text]').value = "";
    });
 
/********************************/
list3.addEventListener('click', function(e){
  //delete 
  if(e.target.classList.contains('delete')){
      const span = e.target.parentElement;
      const li = span.parentElement;
      li.classList.add('hide');
      //use time out to give css animation time
      setTimeout(() => {
          list3.removeChild(li)
      }, 600);
     
  }else if(e.target.classList.contains('edit')){
      //if user click on edit
      //add to input text the border line
      //allow update input text by change readOnly
      const span = e.target.parentElement;
      const li = span.parentElement;
      const inputText = li.querySelector('.name input[type=text]');
      const saveInfo = li.querySelector('.name .saveInfo');
      inputText.classList.add('input-border');
      inputText.style.cursor = "text";
      saveInfo.style.display = "block";
      inputText.readOnly = false;

      //save by press enter btn
      inputText.addEventListener('keypress', function(e){
          var key = e.which || e.keyCode;
          if (key === 13) { // 13 is enter
              inputText.readOnly = true;
              inputText.style.cursor = "context-menu";
              inputText.classList.remove('input-border');
              saveInfo.style.display = "none";
          }
      })
  }
});

const formAdd3 = document.forms['form-add3'];
    formAdd3.addEventListener('submit', function(e){
        e.preventDefault();
        let insertedData = formAdd3.querySelector('input[type=text]').value;
        insertedData = `<li>
        <span class="name">
        <input type="text" value="${insertedData}" readonly="readonly"> 
        <p class="saveInfo">Press "Enter" to save</p>
        </span>
        <span class="action">
       
        <i class=" edit bi bi-pencil-square"></i>
        <i class=" delete bi bi-trash3"></i>            
         </span>
    
        </li>`;
        list3.insertAdjacentHTML('afterbegin', insertedData);
        formAdd3.querySelector('input[type=text]').value = "";
    });
 
/********************************/

list4.addEventListener('click', function(e){
  //delete 
  if(e.target.classList.contains('delete')){
      const span = e.target.parentElement;
      const li = span.parentElement;
      li.classList.add('hide');
      //use time out to give css animation time
      setTimeout(() => {
          list4.removeChild(li)
      }, 600);
     
  }else if(e.target.classList.contains('edit')){
      //if user click on edit
      //add to input text the border line
      //allow update input text by change readOnly
      const span = e.target.parentElement;
      const li = span.parentElement;
      const inputText = li.querySelector('.name input[type=text]');
      const saveInfo = li.querySelector('.name .saveInfo');
      inputText.classList.add('input-border');
      inputText.style.cursor = "text";
      saveInfo.style.display = "block";
      inputText.readOnly = false;

      //save by press enter btn
      inputText.addEventListener('keypress', function(e){
          var key = e.which || e.keyCode;
          if (key === 13) { // 13 is enter
              inputText.readOnly = true;
              inputText.style.cursor = "context-menu";
              inputText.classList.remove('input-border');
              saveInfo.style.display = "none";
          }
      })
  }
});

const formAdd4 = document.forms['form-add4'];
    formAdd4.addEventListener('submit', function(e){
        e.preventDefault();
        let insertedData = formAdd4.querySelector('input[type=text]').value;
        insertedData = `<li>
        <span class="name">
        <input type="text" value="${insertedData}" readonly="readonly"> 
        <p class="saveInfo">Press "Enter" to save</p>
        </span>
        <span class="action">
       
        <i class=" edit bi bi-pencil-square"></i>
        <i class=" delete bi bi-trash3"></i>            
         </span>
    
        </li>`;
        list4.insertAdjacentHTML('afterbegin', insertedData);
        formAdd4.querySelector('input[type=text]').value = "";
    });

/********************************/

list5.addEventListener('click', function(e){
  //delete 
  if(e.target.classList.contains('delete')){
      const span = e.target.parentElement;
      const li = span.parentElement;
      li.classList.add('hide');
      //use time out to give css animation time
      setTimeout(() => {
          list5.removeChild(li)
      }, 600);
     
  }else if(e.target.classList.contains('edit')){
      //if user click on edit
      //add to input text the border line
      //allow update input text by change readOnly
      const span = e.target.parentElement;
      const li = span.parentElement;
      const inputText = li.querySelector('.name input[type=text]');
      const saveInfo = li.querySelector('.name .saveInfo');
      inputText.classList.add('input-border');
      inputText.style.cursor = "text";
      saveInfo.style.display = "block";
      inputText.readOnly = false;

      //save by press enter btn
      inputText.addEventListener('keypress', function(e){
          var key = e.which || e.keyCode;
          if (key === 13) { // 13 is enter
              inputText.readOnly = true;
              inputText.style.cursor = "context-menu";
              inputText.classList.remove('input-border');
              saveInfo.style.display = "none";
          }
      })
  }
});

const formAdd5 = document.forms['form-add5'];
    formAdd5.addEventListener('submit', function(e){
        e.preventDefault();
        let insertedData = formAdd5.querySelector('input[type=text]').value;
        insertedData = `<li>
        <span class="name">
        <input type="text" value="${insertedData}" readonly="readonly"> 
        <p class="saveInfo">Press "Enter" to save</p>
        </span>
        <span class="action">
       
        <i class=" edit bi bi-pencil-square"></i>
        <i class=" delete bi bi-trash3"></i>            
         </span>
    
        </li>`;
        list5.insertAdjacentHTML('afterbegin', insertedData);
        formAdd5.querySelector('input[type=text]').value = "";
    });


/********************************/

list6.addEventListener('click', function(e){
  //delete 
  if(e.target.classList.contains('delete')){
      const span = e.target.parentElement;
      const li = span.parentElement;
      li.classList.add('hide');
      //use time out to give css animation time
      setTimeout(() => {
          list6.removeChild(li)
      }, 600);
     
  }else if(e.target.classList.contains('edit')){
      //if user click on edit
      //add to input text the border line
      //allow update input text by change readOnly
      const span = e.target.parentElement;
      const li = span.parentElement;
      const inputText = li.querySelector('.name input[type=text]');
      const saveInfo = li.querySelector('.name .saveInfo');
      inputText.classList.add('input-border');
      inputText.style.cursor = "text";
      saveInfo.style.display = "block";
      inputText.readOnly = false;

      //save by press enter btn
      inputText.addEventListener('keypress', function(e){
          var key = e.which || e.keyCode;
          if (key === 13) { // 13 is enter
              inputText.readOnly = true;
              inputText.style.cursor = "context-menu";
              inputText.classList.remove('input-border');
              saveInfo.style.display = "none";
          }
      })
  }
});

const formAdd6 = document.forms['form-add6'];
    formAdd6.addEventListener('submit', function(e){
        e.preventDefault();
        let insertedData = formAdd6.querySelector('input[type=text]').value;
        insertedData = `<li>
        <span class="name">
        <input type="text" value="${insertedData}" readonly="readonly"> 
        <p class="saveInfo">Press "Enter" to save</p>
        </span>
        <span class="action">
       
        <i class=" edit bi bi-pencil-square"></i>
        <i class=" delete bi bi-trash3"></i>            
         </span>
    
        </li>`;
        list6.insertAdjacentHTML('afterbegin', insertedData);
        formAdd6.querySelector('input[type=text]').value = "";
    });

/********************************/

list7.addEventListener('click', function(e){
  //delete 
  if(e.target.classList.contains('delete')){
      const span = e.target.parentElement;
      const li = span.parentElement;
      li.classList.add('hide');
      //use time out to give css animation time
      setTimeout(() => {
          list7.removeChild(li)
      }, 600);
     
  }else if(e.target.classList.contains('edit')){
      //if user click on edit
      //add to input text the border line
      //allow update input text by change readOnly
      const span = e.target.parentElement;
      const li = span.parentElement;
      const inputText = li.querySelector('.name input[type=text]');
      const saveInfo = li.querySelector('.name .saveInfo');
      inputText.classList.add('input-border');
      inputText.style.cursor = "text";
      saveInfo.style.display = "block";
      inputText.readOnly = false;

      //save by press enter btn
      inputText.addEventListener('keypress', function(e){
          var key = e.which || e.keyCode;
          if (key === 13) { // 13 is enter
              inputText.readOnly = true;
              inputText.style.cursor = "context-menu";
              inputText.classList.remove('input-border');
              saveInfo.style.display = "none";
          }
      })
  }
});

const formAdd7 = document.forms['form-add7'];
    formAdd7.addEventListener('submit', function(e){
        e.preventDefault();
        let insertedData = formAdd7.querySelector('input[type=text]').value;
        insertedData = `<li>
        <span class="name">
        <input type="text" value="${insertedData}" readonly="readonly"> 
        <p class="saveInfo">Press "Enter" to save</p>
        </span>
        <span class="action">
       
        <i class=" edit bi bi-pencil-square"></i>
        <i class=" delete bi bi-trash3"></i>            
         </span>
    
        </li>`;
        list7.insertAdjacentHTML('afterbegin', insertedData);
        formAdd7.querySelector('input[type=text]').value = "";
    });

/********************************/

list8.addEventListener('click', function(e){
  //delete 
  if(e.target.classList.contains('delete')){
      const span = e.target.parentElement;
      const li = span.parentElement;
      li.classList.add('hide');
      //use time out to give css animation time
      setTimeout(() => {
          list8.removeChild(li)
      }, 600);
     
  }else if(e.target.classList.contains('edit')){
      //if user click on edit
      //add to input text the border line
      //allow update input text by change readOnly
      const span = e.target.parentElement;
      const li = span.parentElement;
      const inputText = li.querySelector('.name input[type=text]');
      const saveInfo = li.querySelector('.name .saveInfo');
      inputText.classList.add('input-border');
      inputText.style.cursor = "text";
      saveInfo.style.display = "block";
      inputText.readOnly = false;

      //save by press enter btn
      inputText.addEventListener('keypress', function(e){
          var key = e.which || e.keyCode;
          if (key === 13) { // 13 is enter
              inputText.readOnly = true;
              inputText.style.cursor = "context-menu";
              inputText.classList.remove('input-border');
              saveInfo.style.display = "none";
          }
      })
  }
});

const formAdd8 = document.forms['form-add8'];
    formAdd8.addEventListener('submit', function(e){
        e.preventDefault();
        let insertedData = formAdd8.querySelector('input[type=text]').value;
        insertedData = `<li>
        <span class="name">
        <input type="text" value="${insertedData}" readonly="readonly"> 
        <p class="saveInfo">Press "Enter" to save</p>
        </span>
        <span class="action">
       
        <i class=" edit bi bi-pencil-square"></i>
        <i class=" delete bi bi-trash3"></i>            
         </span>
    
        </li>`;
        list8.insertAdjacentHTML('afterbegin', insertedData);
        formAdd8.querySelector('input[type=text]').value = "";
    });




  