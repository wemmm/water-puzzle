function scales() {
}

scales.prototype.evaluateWaterQuantity = function (jug) {
  if (jug.capacity == 4) {
    return true;
  } else {
    return false;
  }
};
