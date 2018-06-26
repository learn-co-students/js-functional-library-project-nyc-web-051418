fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      let newCollect = (collection instanceof(Array)) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollect.length; i++) {
        iteratee(newCollect[i]) }
      return collection;
    },

    map: function(collection, iteratee) {
      let newCollect = (collection instanceof(Array)) ? collection.slice() : Object.values(collection)
      newArr = [];
      for (let i = 0; i < newCollect.length; i++){
        newArr.push(iteratee(newCollect[i]))
      }
      return newArr;
    },

    reduce: function(collection, iteratee, acc) {
      accum = acc
      for (let i = 0; i < collection.length; i++) {
        accum = iteratee(accum, collection[i], collection)
      }
      return accum;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof(Array)))
        collection = Object.values(collection)

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i]))
          return collection[i]
      return undefined
    },

    filter: function(collection, predicate) {
      newArr = [];

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            newArr.push(collection[i])
          }
        }
          return newArr;
    },

    size: function(collection) {
      let newCollect = (collection instanceof(Array)) ? collection.slice() : Object.values(collection)

      return newCollect.length;
    },

    first: function(collection, n) {
      if (n) {
        return collection.slice(0, n)
      } else { return collection[0]; }
    },

    last: function(collection, n) {
      if (n) {
        return collection.slice(-n)
      } else { return collection[collection.length-1]; }
    },

    compact: function(collection) {
      newArr = [];
      for (let i = 0; i < collection.length; i++){
        if (collection[i]){
          newArr.push(collection[i])
        };
      }
      return newArr;
    },


    sortBy: function(collection, iteratee) {
      sortedArr = [];
      if (iteratee){
        for (let i = 0; i < collection.length; i++){
          sortedArr.push(iteratee(collection[i]))
          sortedArr.sort((a,b) => (a-b))
        };
      };
      sortedArr = [...collection];
      return sortedArr.sort((a,b) => (a-b));
    },


  }
})()

fi.libraryMethod()
