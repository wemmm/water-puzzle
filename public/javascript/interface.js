$(document).ready(function() {
  var puzzle = new waterPuzzle;

  $('#threelitrestatus').text(puzzle.threeLitreJug.current_capacity)

  $('#fivelitrestatus').text(puzzle.fiveLitreJug.current_capacity)

  $('#fillthree').on('click', function() {
    puzzle.fillJug(puzzle.threeLitreJug)
    $('#threelitrestatus').text(puzzle.threeLitreJug.current_capacity)
  })

  $('#fillfive').on('click', function() {
    puzzle.fillJug(puzzle.fiveLitreJug)
    $('#fivelitrestatus').text(puzzle.fiveLitreJug.current_capacity)
  })

  $('#emptythree').on('click', function() {
    puzzle.emptyJug(puzzle.threeLitreJug)
    $('#threelitrestatus').text(puzzle.threeLitreJug.current_capacity)
  })

  $('#reset').on('click', function() {
    puzzle.emptyJug(puzzle.fiveLitreJug)
    puzzle.emptyJug(puzzle.threeLitreJug)
    $('#fivelitrestatus').text(puzzle.fiveLitreJug.current_capacity)
    $('#threelitrestatus').text(puzzle.threeLitreJug.current_capacity)
  })

  $('#emptyfive').on('click', function() {
    puzzle.emptyJug(puzzle.fiveLitreJug)
    $('#fivelitrestatus').text(puzzle.fiveLitreJug.current_capacity)
  })

  $('#pourintothree').on('click', function() {
    puzzle.pourInto(puzzle.fiveLitreJug, puzzle.threeLitreJug)
    $('#threelitrestatus').text(puzzle.threeLitreJug.current_capacity)
    $('#fivelitrestatus').text(puzzle.fiveLitreJug.current_capacity)
  })

  $('#pourintofive').on('click', function() {
    puzzle.pourInto(puzzle.threeLitreJug, puzzle.fiveLitreJug)
    $('#threelitrestatus').text(puzzle.threeLitreJug.current_capacity)
    $('#fivelitrestatus').text(puzzle.fiveLitreJug.current_capacity)
  })

  $('#weigh').click(function() {
    var n = $('#fivelitrestatus').text()
    if (n == 4) {
      $('#winpopup').toggle();
      $(this).addClass('open');
      return false;
    }
  })

  $('#instructions').on('click', function() {
    $('#helppopup').toggle();
    $(this).addClass('open');
  })

  $('#close').on('click', function() {
    $('#helppopup').toggle();
    $(this).removeClass('open');
  })

document.getElementById('timer').innerHTML = 05 + ":" + 01;
startTimer();
})
