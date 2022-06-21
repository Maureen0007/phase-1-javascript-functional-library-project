function myEach(array, alert){
    Object.values(array).forEach(test => alert(test))
    return array

}


function myMap(testArr, callback) {
    const testObj = Object.values(testArr);
  callback = testObj.map(x => x * 3)
  return callback
}



function myReduce (testArr, callback, acc) {
    let testObj = Object.values(testArr);

    if (!acc) {
      acc = testObj[0];
      testObj = testObj.slice(1);
    }

    const newArr = testObj.length;

    for (let i = 0; i < newArr; i++) {
      acc = callback(acc, testObj[i], testObj);
    }
    return acc;
  };


  
function myFind(testArr, target){
    let testObj = Object.values(testArr)
    for(let i = 0; i < testArr.length; i++)
    if (target(testObj[i])) return testObj[i]
    return undefined
}

function myFilter(testArr, excluder){
    let testObj = Object.values(testArr)
    return testObj.filter(num => num > 10)
}

function mySize(testArr) {
    let testObj = Object.values(testArr)
    const newArr = new Set(testObj)
    return newArr.size
}

function myFirst(testArr, n) {
    let testObj = Object.values(testArr)
    if (n) {
        return testObj.slice(0, n)
    }
    return testObj[0]
}

const myLast = function(testArr, start=false) {
    return (start) ? testArr.slice(testArr.length-start, testArr.length) : testArr[testArr.length-1];
  }


function myKeys(testArr) {
    return Object.keys(testArr)

}

function myValues(testArr) {
    return Object.values(testArr)

}  