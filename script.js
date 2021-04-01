var scores,toss,random,dice,value,activePlayer,gameplaying;

init();


document.querySelector('.btn-submit').addEventListener('click',function(){

    // user input

    value = document.getElementById("p--0").value;


    // ui user input

    document.getElementById('current--0').innerHTML = value;
    scores[activePlayer] = value;

    document.querySelector('.btn--roll').addEventListener('click',function(){

if (gameplaying){
    //    1. Random Number
    dice = Math.floor(Math.random() *2 ) + 1 ;

    //    2. display the output
    var diceDom = document.querySelector('.dice');
    document.querySelector('.dice').style.display = "block";
    diceDom.src = 'dice-' + dice + '.png';

    if(value == dice){

        document.querySelector('.player--0').classList.add('player--winner');
        document.querySelector('#name--0').textContent = 'Winner!!';
        document.querySelector('.player--0').classList.toggle('player-active');
        gameplaying = false;

    }else{

        document.querySelector('.player--1').classList.toggle('player-active');
        document.querySelector('.player--1').classList.add('player--winner');
        document.querySelector('#name--1').textContent = 'Winner!!';
        gameplaying = false;
    }
    // 3. data match
}
    });

});


// for 2nd player
document.querySelector('.submit2').addEventListener('click',function(){

    // user input

    value = document.getElementById("p--1").value;

    // ui user input

    document.getElementById('current--1').innerHTML = value;
    scores[activePlayer] = value;

    document.querySelector('.btn--roll').addEventListener('click',function(){

      if (gameplaying){
          //    1. Random Number
          dice = Math.floor(Math.random() *2 ) + 1 ;

          //    2. display the output
          var diceDom = document.querySelector('.dice');
          document.querySelector('.dice').style.display = "block";
          diceDom.src = 'dice-' + dice + '.png';

          if(value == dice){
              document.querySelector('#name--1').textContent = 'Winner!!';
              document.querySelector('.player--1').classList.add('player--winner');
              document.querySelector('.player--1').classList.toggle('player-active');
              gameplaying = false;
          }else{
              document.querySelector('#name--0').textContent = 'Winner!!';
              document.querySelector('.player--0').classList.add('player--winner');
              document.querySelector('.player--0').classList.toggle('player-active');
              gameplaying = false;
          }
          // 3. data match
      }

    });

});

document.querySelector('.btn--new').addEventListener('click',init);

function init(){
dice = 0;
scores = [0,0];
random = 0;
value = 0;
activePlayer = 0;
gameplaying = true;

document.querySelector('.dice').style.display = 'none';

document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.getElementById('name--0').textContent = 'Player-1';
document.getElementById('name--1').textContent = 'Player-2';

document.getElementById('p--0').value = '';
document.getElementById('p--1').value = '';


document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');

document.querySelector('.player--0').classList.remove('player-active');
document.querySelector('.player--1').classList.remove('player-active');


}