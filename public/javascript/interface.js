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
})
