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

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
