function waterPuzzle() {
  this.fiveLitreJug = new fiveLitreJug;
  this.threeLitreJug = new threeLitreJug;
}

waterPuzzle.prototype.fillJug = function (jug) {
  jug.current_capacity = jug.max_capacity
};

waterPuzzle.prototype.emptyJug = function (jug) {
  jug.current_capacity = 0
};

waterPuzzle.prototype.pourInto = function (fromJug, toJug) {
  var availableSpace = (toJug.max_capacity - toJug.current_capacity)
  var availableWater = (fromJug.current_capacity)
  if (availableWater > availableSpace) {
    toJug.current_capacity = toJug.max_capacity;
    fromJug.current_capacity = (fromJug.current_capacity - availableSpace)
  } else {
    toJug.current_capacity += availableWater;
    fromJug.current_capacity = 0
  }
};
