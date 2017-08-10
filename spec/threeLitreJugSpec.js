describe('threeLitreJug', function(){
  var jug;

  beforeEach(function(){
    jug = new threeLitreJug();
  });

  it('has a maximum capacity of 3', function(){
    expect(jug.max_capacity).toEqual(3);
  });

  it('is empty at instantiation', function(){
    expect(jug.current_capacity).toEqual(0);
  });

  it('can be filled', function(){
    jug.fillFromTap()
    expect(jug.current_capacity).toEqual(3);
  });
})
