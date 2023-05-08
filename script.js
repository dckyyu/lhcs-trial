function rotateValve() {
    var button = document.querySelector('.cta');
    button.classList.toggle('active');
    var valves = document.querySelectorAll('.valve');
    valves[0].classList.toggle('rotate');
    changeColor(valves[0]);
      if (document.querySelector('.cta').innerHTML === 'open valve') {
        document.querySelector('.cta').innerHTML = 'close valve';
        } else {
      document.querySelector('.cta').innerHTML = 'open valve';
        }
    setTimeout(function() {
    valves[1].classList.toggle('rotate');
    changeColor(valves[1]);
    valves[2].classList.toggle('rotate');
    changeColor(valves[2]);
      }, 3000);
  }

    function changeColor(valve) {
      var squares = valve.querySelectorAll('.square');
      if (squares[1].style.backgroundColor === '' || squares[1].style.backgroundColor === 'red') {
      squares[1].style.backgroundColor = 'green';
      squares[2].style.backgroundColor = 'green';
    } else {
      squares[1].style.backgroundColor = 'red';
      squares[2].style.backgroundColor = 'red';
      }
    }
