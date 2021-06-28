let btn=document.getElementById('connect');
let band=true;
let settime1,settime2,settime3,settime4,settime5,settime6;

btn.addEventListener('click',function () {

if(band==true){
    band=false;
    cambiar_params('CONNECT','disconnet','connect');
    peso();
}else{
    cambiar_params('DISCONNECT','connect','disconnet');
    document.querySelector('.menu_text').classList.remove('toggle');
    clearTimeout(settime1);
    clearTimeout(settime2);
    clearTimeout(settime3);
    clearTimeout(settime4);
    clearTimeout(settime5);
    clearTimeout(settime6);
    band=true;
}

document.querySelector('#peso').classList.toggle("activa_");
});

let menu=document.querySelector('.menu');

menu.addEventListener('click',function () {
    if(document.querySelector('#connect').textContent=='CONNECT'){ 
    document.querySelector('.menu_text').classList.toggle('toggle');
    }
});
    
function cambiar_params(text_name,class1_,class2_) {
    document.querySelector('#connect').textContent=text_name;
    document.querySelector('#connect').classList.replace(class1_,class2_);
}


function peso() {
    
    settime1=setTimeout(() => {
        document.querySelector('.peso_text').textContent='0';
     }, 2000);

      settime2=setTimeout(() => {
         document.querySelector('.peso_text').textContent='10';
      }, 6000);

      settime3=setTimeout(() => {
         document.querySelector('.peso_text').textContent='20';
      }, 10000);

      settime4=setTimeout(() => {
         document.querySelector('.peso_text').textContent='30';
      }, 12000);

      settime5=setTimeout(() => {
         document.querySelector('.peso_text').textContent='40';
      }, 16000);

      settime6=setTimeout(() => {
         document.querySelector('.peso_text').textContent='50';
      }, 18000);

}


// MODAL
function modal_save(){

    document.getElementById("modal_save").classList.add('active');
    document.getElementById("modal_save").innerHTML = `
    <!-- modal social -->
    <div class="container_modal">
    <div class="modal_icon"><i class="far fa-check-circle"></i></div>
        
          <div class="modal_body">
        <p>¡Gracias!</p>
        <span>Hiciste clic en guardar datos</span>
        <div class="modal_exit" onclick="exit_modal()">
        <span>Atrás</span><i class="fas fa-arrow-right "></i>
        </div>
        </div>
    </div>`;

}

function exit_modal() {
       document.getElementById("modal_save").classList.remove('active');
}