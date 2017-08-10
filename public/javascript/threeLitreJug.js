function threeLitreJug() {
  this.max_capacity = 3
  this.current_capacity = 0
}

threeLitreJug.prototype.fillFromTap = function () {
  this.current_capacity = this.max_capacity
};
