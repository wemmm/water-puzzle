describe('fiveLitreJug', function(){
  var jug;

  beforeEach(function(){
    jug = new fiveLitreJug();
  });

  it('has a maximum capacity of 5', function(){
    expect(jug.max_capacity).toEqual(5);
  });

  it('is empty at instantiation', function(){
    expect(jug.current_capacity).toEqual(0);
  });
})
