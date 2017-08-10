describe('threeLitreJug', function(){
  var jug;

  beforeEach(function(){
    jug = new threeLitreJug();
  });

  it('has a capacity of 3', function(){
    expect(jug.capacity).toEqual(3);
  });
})
