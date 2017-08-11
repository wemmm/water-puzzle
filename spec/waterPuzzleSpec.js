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

  it('can fill either jug to its maximum capacity', function() {
    puzzle.fillJug(puzzle.threeLitreJug)
    puzzle.fillJug(puzzle.fiveLitreJug)
    expect(puzzle.fiveLitreJug.current_capacity).toEqual(5)
    expect(puzzle.threeLitreJug.current_capacity).toEqual(3)
  })

  it('can empty either jug', function() {
    puzzle.emptyJug(puzzle.threeLitreJug)
    puzzle.emptyJug(puzzle.fiveLitreJug)
    expect(puzzle.threeLitreJug.current_capacity).toEqual(0)
    expect(puzzle.fiveLitreJug.current_capacity).toEqual(0)
  })

  it('pour the contents of one jug into the other', function() {
    puzzle.fillJug(puzzle.threeLitreJug)
    puzzle.pourInto(puzzle.threeLitreJug, puzzle.fiveLitreJug)
    expect(puzzle.threeLitreJug.current_capacity).toEqual(0)
    expect(puzzle.fiveLitreJug.current_capacity).toEqual(3)
  })

  it('cannot add more water than a jug can hold', function() {
    puzzle.fillJug(puzzle.threeLitreJug)
    puzzle.fillJug(puzzle.fiveLitreJug)
    puzzle.pourInto(puzzle.fiveLitreJug, puzzle.threeLitreJug)
    expect(puzzle.fiveLitreJug.current_capacity).toEqual(5)
    expect(puzzle.threeLitreJug.current_capacity).toEqual(3)
  })

  it('cannot result in negative quanitities of water', function() {
    puzzle.fillJug(puzzle.threeLitreJug)
    puzzle.pourInto(puzzle.threeLitreJug, puzzle.fiveLitreJug)
    expect(puzzle.fiveLitreJug.current_capacity).toEqual(3)
    expect(puzzle.threeLitreJug.current_capacity).toEqual(0)
  })
})
