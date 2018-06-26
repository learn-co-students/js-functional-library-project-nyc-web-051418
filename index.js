fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(testArr, alert) {
      if (!Array.isArray(testArr)) {
        for(const key in testArr) {
          alert(testArr[key], key, testArr)
        }
      }
      else {
        for(i = 0; i < testArr.length; i++) {
          alert(testArr[i]);
        }
      }
      return testArr;
    },

    map: function(array, fnc) {
      let newArray = [];
      if (!Array.isArray(array)) {
        for(const key in array) {
          newArray.push(fnc(array[key], key, array));
        }
      }
      else {
        for(i = 0; i < array.length; i++) {
          newArray.push(fnc(array[i], i, array));
        }
      }
      return newArray;
    },

    reduce: function(array, fnc, acc) {
      if (typeof acc === "undefined") {
        acc = 0;
      }
      for(i = 0; i < array.length; i++) {
        acc = fnc(acc, array[i], array);
      }
      return acc;
    },

    find: function(collection, fnc) {
      for(i = 0; i < collection.length; i++) {
        if (fnc(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, fnc) {
      newArray = [];
      for(i = 0; i < collection.length; i++) {
        if (fnc(collection[i])) {
          newArray.push(collection[i]);
        }
      }
      return newArray;
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      }
      else {
        return Object.keys(collection).length;
      }
    },

    first: function(array, n) {
      if(typeof n === "undefined") {
        return array[0];
      }
      else {
        newArray = [];
        for(i=0; i<n; i++) {
          newArray.push(array[i]);
        }
        return newArray;
      }
    },

    last: function(array, n) {
      if(typeof n === "undefined") {
        return array[array.length-1];
      }
      else {
        newArray = array.slice(array.length-(n), array.length);
        return newArray;
      }
    },

    compact: function(array) {
      newArray = [];
      for(i = 0; i < array.length; i++) {
        if(array[i]) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    },

    sortBy: function(array, fnc) {
      newArray = Object.assign([], array);
      if (typeof newArray !== "string") {
        newArray.sort(function (a, b) {
          return fnc(a) >= fnc(b);
        });
      }
      //this must now be a string
      else {
        newArray.sort(function (a, b) {
          return fnc(a.localCompare(b));
        });
      }
      for(i = 0; i < array.length; i++) {
        newArray[i] = fnc(newArray[i]);
      }
      return newArray;
    },


    uniq: function(array, isSorted, fnc) {

    

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
