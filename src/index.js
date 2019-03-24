/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var loveTriangles=0;
  var firstSpichonee;
  var secondSpichonee;
  var thirdSpichonee;

  for (var i = 0; i < preferences.length; i++) {
    firstSpichonee = preferences[i];
    secondSpichonee = preferences[firstSpichonee-1];
    thirdSpichonee = preferences[secondSpichonee-1];
    if ((thirdSpichonee-1 == i) && (firstSpichonee!=secondSpichonee) && (secondSpichonee!=thirdSpichonee))
    loveTriangles++;
  }

  return loveTriangles/3;
};