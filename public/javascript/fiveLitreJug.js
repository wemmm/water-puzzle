function fiveLitreJug() {
  this.max_capacity = 5
  this.current_capacity = 0
}

fiveLitreJug.prototype.fillFromTap = function () {
  this.current_capacity = this.max_capacity
};
