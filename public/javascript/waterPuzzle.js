function waterPuzzle() {
  this.fiveLitreJug = new fiveLitreJug;
  this.threeLitreJug = new threeLitreJug;
  this.scales = new scales;
}

waterPuzzle.prototype.fillJug = function (jug) {
  jug.current_capacity = jug.max_capacity
};

waterPuzzle.prototype.fillFiveLitreJug = function () {
  this.fiveLitreJug.current_capacity = this.fiveLitreJug.max_capacity
};

waterPuzzle.prototype.fillThreeLitreJug = function () {
  this.threeLitreJug.current_capacity = this.threeLitreJug.max_capacity
};

waterPuzzle.prototype.emptyFiveLitreJug = function () {
  this.fiveLitreJug.current_capacity = 0
};

waterPuzzle.prototype.emptyThreeLitreJug = function () {
  this.threeLitreJug.current_capacity = 0
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
