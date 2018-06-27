fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, fn) {
      let counter = 0;
      let values = Object.values(arr);
      while (counter < values.length) {
        fn(values[counter], counter, arr);
        counter++;
      }
      return arr;
    },

    map: function(collection, iteratee) {

      let counter = 0;
      let newArr = [];
      let values = Object.values(collection);
      while (counter < values.length) {
        newArr.push(iteratee(values[counter], counter, collection));
        counter++;
      }

      return newArr;
    },

    reduce: function(collection, iteratee, acc) {

      let counter = 0;
      let sum = acc;
      let values = Object.values(collection);
      while (counter < values.length) {
        sum = iteratee(sum, values[counter], collection)
        counter++;
      }
      return sum;
    },

    find: function(collection, predicate) {

      let counter = 0;
      let values = Object.values(collection);
      while (counter < values.length) {
        if (predicate(values[counter])){
          return values[counter]
        };
        counter++;
      };
    },

    filter: function(collection, predicate) {

      let counter = 0;
      let newArr = [];
      let values = Object.values(collection);
      while (counter < values.length) {
        if (predicate(values[counter])) {
          newArr.push(values[counter]);
        };
        counter++;
      };
      return newArr;
    },

    size: function(collection) {

      return Object.values(collection).length
    },

    first: function(array, n) {

      if (n != null) {
        let counter = 0;
        let newArr = [];
        let values = Object.values(array);
        while (counter < n) {
          newArr.push(values[counter]);
          counter++;
        }
        return newArr;
      } else {
        return array[0];
      }
    },

    last: function(array, n) {

      if (n != null) {
        // return array.slice(-n)
        let counter = array.length - n ;
        let newArr = [];
        let values = Object.values(array);
        while (counter <= n) {
          newArr.push(values[counter]);
          counter++;
        }
        return newArr;
      } else {
        return array[array.length - 1];
      }
    },

    compact: function(collection) {

      let counter = 0;
      let newArr = [];
      let values = Object.values(collection);
      while (counter < values.length) {
        if (values[counter]) {
          newArr.push(values[counter]);
        };
        counter++;
      };
      return newArr;
    },

    sortBy: function(array, iteratee) {
      let counter = 0;
      let newArr = [];
      let values = Object.values(array);

      while (counter < values.length) {
        newArr.push(iteratee(values[counter], counter, array));
        counter++;
      }
      return newArr.sort(function (a, b) {
        return a - b;
      });
    },

    uniq: function(collection, isSorted, iteratee) {

      let counter = 0;
      let newArr = [];
      let iterateeResults = [];
      let values = Object.values(collection);
      while (counter < values.length) {
        debugger;
        if (newArr.includes(values[counter]) || iterateeResults.includes(iteratee(values[counter]))) {

        } else {

          newArr.push(values[counter]);
        }
        iterateeResults.push(iteratee(values[counter]));
        counter++;
      };

      return newArr;
    },



    functions: function() {

    },


  }
})()

fi.libraryMethod()
