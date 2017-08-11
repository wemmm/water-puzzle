describe('waterPuzzle', function(){
  var puzzle;

  beforeEach(function(){
    puzzle = new waterPuzzle();
    jug1 = new fiveLitreJug();
    jug2 = new threeLitreJug();
  });

  it('has an empty five litre jug', function(){
    expect(puzzle.fiveLitreJug).toBeDefined
    expect(puzzle.fiveLitreJug.current_capacity).toEqual(0)
  });

  it('has an empty three litre jug', function(){
    expect(puzzle.threeLitreJug).toBeDefined
    expect(puzzle.threeLitreJug.current_capacity).toEqual(0)
  });

  it('can fill either jug to its maximum capacity', function() {
    puzzle.fillFromTap(jug1);
    puzzle.fillFromTap(jug2);
    expect(jug1.current_capacity).toEqual(5)
    expect(jug2.current_capacity).toEqual(3)
  })

  it('can empty either jug', function() {
    puzzle.empty(jug1);
    puzzle.empty(jug2);
    expect(jug1.current_capacity).toEqual(0)
    expect(jug2.current_capacity).toEqual(0)
  })
})
