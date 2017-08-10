describe('scales', function(){
  var s;

  beforeEach(function(){
    s = new scales();
    jug = new fiveLitreJug();
  });

  it('returns false if a jug does not contain four litres of water', function(){
    expect(s.evaluateWaterQuantity(jug)).toEqual(false)
  });
})
