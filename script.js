function muestras(){
document.querySelector('.muestra').style.color = 'green';
}
muestras();

const today = new Date();
const hourNow = today.getHours();
let greenting;

if(hourNow > 18){
  greenting = 'Good evening!'
} else if(hourNow > 12){
  greenting = 'Good afternoon!';
} else if(hourNow > 0){
 greenting = 'Good morning!';
} else{
  greenting = 'welcome';
}
const extra = 'We have a good discount call us today!';
document.getElementById('mas').textContent = greenting + ' ' + extra;