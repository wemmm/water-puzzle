describe('fiveLitreJug', function(){
  var jug;

  beforeEach(function(){
    jug = new fiveLitreJug();
  });

  it('has a capacity of 5', function(){
    expect(jug.capacity).toEqual(5);
  });
})
