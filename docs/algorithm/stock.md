# 如何购买股票
股票有涨有跌, 需确定哪个区间段抛售股票获得最大利益. 犹如计算一组数字, 有正数(涨), 也有负数(跌).

下面是两种算法, 可以求取数组中最大和的子数组.
数组:
~~~Js
const list = [13, 2, -20, 4, 5, -2, 3]
~~~
## Divide-and-Conque(分治策略)
~~~Js
function findMaxCrossSubarray(list, low, mid, high) {
    let leftSum = Number.NEGATIVE_INFINITY;
    let sum = 0;
    let maxLeft;
    for (let i = mid; i >= low; i--) {
        sum = sum + list[i];
        if (sum >= leftSum) {
            leftSum = sum;
            maxLeft = i;
        }
    }
    let rightSum = Number.NEGATIVE_INFINITY;
    sum = 0;
    let maxRight;
    for (let j = mid + 1; j <= high; j++) {
        sum = sum + list[j];
        if (sum >= rightSum) {
            rightSum = sum;
            maxRight = j;
        }
    }
    return [maxLeft, maxRight, leftSum + rightSum]
}
/**
 * @param {number[]} list
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 **/
function findMaxSubarray(list, low, high) {
    // 若数组长度为1, 则返回[最小下标值, 最大下标值, 最大和值]
    // 在递归算法中, 必须得设置一个基线值, 跳出循环. high === low便是该基线值.
    if (high === low) return [low, high, list[low]];
    let mid = Math.floor((low + high) / 2);
    let [leftLow, leftHigh, leftSum] = findMaxSubarray(list, low, mid);
    let [rightLow, rightHigh, rightSum] = findMaxSubarray(list, mid + 1, high);
    let [crossLow, crossHigh, crossSum] = findMaxCrossSubarray(list, low, mid, high)

    if (leftSum >= rightSum && leftSum >= crossSum) {
        return [leftLow, leftHigh, leftSum];
    } else if (rightSum >= leftSum && rightSum >= crossSum) {
        return [rightLow, rightHigh, rightSum];
    } else {
        return [crossLow, crossHigh, crossSum];
    }

}
~~~

## 动态规划（Kadane's Algorithm）
~~~Js
var maxSubArray = function (nums) {
    let max_sum = cur_max = nums[0];
    for (let i = 1, len = nums.length; i < len; i++) {
        // 每一小块中，求取当前最大值，循环递归，最后必将是最大和的子数组
        cur_max = Math.max(nums[i], nums[i] + cur_max);
        max_sum = Math.max(cur_max, max_sum);
    }
    return max_sum;
}
~~~

