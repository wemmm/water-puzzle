function waterPuzzle() {
  this.fiveLitreJug = new fiveLitreJug;
  this.threeLitreJug = new threeLitreJug;
  this.scales = new scales;
}

waterPuzzle.prototype.fillFromTap = function (jug) {
  jug.current_capacity = jug.max_capacity
};

waterPuzzle.prototype.empty = function (jug) {
  jug.current_capacity = 0
};
