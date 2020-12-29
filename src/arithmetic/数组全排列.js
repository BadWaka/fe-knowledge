function fullArrayArrangement(arr) {
    let res = [];
    if (!arr) {
        return res;
    }
    if (!Array.isArray(arr)) {
        return res;
    }
    if (arr.length === 0) {
        return res;
    }
    if (arr.length === 1) {
        res = arr.slice();
        return res;
    }
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        let nextArr = arr.slice();
        nextArr.splice(i, 1);
        // console.log('nextArr', nextArr);
        let nextRes = fullArrayArrangement(nextArr);
        console.log('nextRes', nextRes);
        nextRes.unshift(cur);
        console.log('nextRes2', nextRes);
        res.push(nextRes);
    }
    return res;
}

function fullpermutate(str) {
    var result = [];
    if (str.length > 1) {
        //遍历每一项
        for (var m = 0; m < str.length; m++) {
            //拿到当前的元素
            var left = str[m];
            //除当前元素的其他元素组合
            var rest = str.slice(0, m) + str.slice(m + 1, str.length);
            // console.log('rest', rest);
            //上一次递归返回的全排列
            var preResult = fullpermutate(rest);
            // console.log('preResult', preResult);
            //组合在一起
            for (var i = 0; i < preResult.length; i++) {
                var tmp = left + preResult[i]
                result.push(tmp);
            }
        }
    } else if (str.length == 1) {
        result.push(str);
    }
    return result;
}

let arr = [1, 2, 3];
let str = '123';
let res = fullArrayArrangement(arr);
console.log('res', res);

// let res2 = fullpermutate(str);
// console.log('res2', res2);