(function(){
  console.log('쓸내용');
})();

var one = document.getElementById('one');
console.log(one);
var two = document.getElementById('two');
var plus = document.getElementById('plus');
var equal = document.getElementById('equal');
var input = document.querySelector('.up');
console.log(input);
one.addEventListener('click', function() {
  input.innerHTML += 1;
});
two.addEventListener('click', function() {
  input.innerHTML += 2;
});plus.addEventListener('click', function() {
  input.innerHTML += '+';
});
equal.addEventListener('click',function() {
  input.innerHTML = eval(input.innerHTML);
})
