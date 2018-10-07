/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const length = nums1.length + nums2.length;
  const target = (length - 1) / 2;
  let idx = -1;
  let a, b, result;
  for (;;) {
    idx++;
    let current;
    if (nums1[0] === undefined) {
      current = nums2.shift();
    } else if (nums2[0] === undefined) {
      current = nums1.shift();
    } else {
      current = nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();
    }
    if (current === undefined) throw "no need continue";
    console.warn(idx, target - 0.5, target, target + 0.5, current);
    if (idx === target - 0.5) {
      a = current;
      console.warn("a", current);
      continue;
    } else if (idx === target + 0.5) {
      b = current;
      result = (a + b) / 2;

      console.warn("b", current, result, a, b);
      return result;
    } else if (idx === target) {
      result = current;
      return result;
    }
  }
  throw "should exit before";
};

module.exports = findMedianSortedArrays;
