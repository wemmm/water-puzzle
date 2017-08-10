describe('waterPuzzle', function(){
  var puzzle;

  beforeEach(function(){
    puzzle = new waterPuzzle();
  });

  it('has an empty five litre jug', function(){
    expect(puzzle.fiveLitreJug).toBeDefined
    expect(puzzle.fiveLitreJug.current_capacity).toEqual(0)
  });

  it('has an empty three litre jug', function(){
    expect(puzzle.threeLitreJug).toBeDefined
    expect(puzzle.threeLitreJug.current_capacity).toEqual(0)
  });
})
