fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

      //iteratee has three args: (element, index, collection)
    each: function(collection, iteratee) {

      objectToIterate = Array.isArray(collection) ? collection : Object.values(collection)

      // objectToIterate.forEach(function(element) {
      //   return iteratee(element, objectToIterate.indexOf(element), objectToIterate)
      //   alert(element);
      // });

      for (let i = 0; i < objectToIterate.length; i++) {
      //  alert(iteratee(objectToIterate[i], i, objectToIterate));
      }
      return collection;
    },

    map: function(collection,iteratee) {
      mappedArray = [];
      objectToIterate = Array.isArray(collection) ? collection : Object.values(collection)

      // objectToIterate.forEach(function(element) {
      //   value = iteratee(element, objectToIterate.indexOf(element), objectToIterate)
      //   mappedArray.push(value);
      //   //
      // });

      for (let i = 0; i < objectToIterate.length; i++) {
        value = iteratee(objectToIterate[i], i, objectToIterate);
        mappedArray.push(value);
      }

      return mappedArray;
    },

    reduce: function(collection, iteratee, acc) {

      for (let i = 0; i < collection.length; i++) {
        acc = iteratee(acc, collection[i], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {

      for (let i = 0; i < collection.length; i++) {
        if ( predicate(collection[i]) ) {
          // debugger
          return collection[i];
          break;
        }
      }

    },

    filter: function(collection, predicate) {

      let filteredCollection = [];
      for (let i = 0; i < collection.length; i++) {
          if ( predicate(collection[i]) ) {
            filteredCollection.push(collection[i]);
          };
      };
      return filteredCollection;
    },


    size: function(collection) {
        objectToIterate = Array.isArray(collection) ? collection : Object.values(collection)
        return objectToIterate.length;
    },

    first: function(collection, n) {
      objectToIterate = Array.isArray(collection) ? collection : Object.values(collection)

      if (n === undefined) {
        return objectToIterate[0];
      } else {
        return objectToIterate.slice(0, n)
      };
    },

    last: function(collection, n) {
      objectToIterate = Array.isArray(collection) ? collection : Object.values(collection)

      if (n === undefined) {
        return objectToIterate[objectToIterate.length - 1];
      } else {
        return objectToIterate.slice(-n)
      };
    },

    compact: function(collection) {
      newArray = []
      for(let i=0; i < collection.length; i++) {
        if (!!collection[i]) {
          newArray.push(collection[i])
        }
      }
      return newArray;
    },


    sortBy: function(collection,iteratee) {
      sortedArray = [...collection];

      sorting_algorithim = (function (a,b) {
        return (iteratee(a) - iteratee(b));
      });

      return sortedArray.sort(sorting_algorithim);
      },
      // if (typeof collection[i] === "number") {
      //   collection.sort(function (a,b) {
      //     return iteratee(a) > iteratee(b);
      //   })
      //   // difference = iteratee(collection[i] - collection[i+1])
      //   // return collection.sort(difference )
      // }
      // else if (typeof collection[i] === "string") {
      //   collection.sort(function (a,b) {
      //     return collection(a.localeCompare(b));
      //   });
      //   // return collection[i].localeCompare(collection[i+1])
      //   }
      //   return sortedArray;







    // flatten: function(collection) {
    //
    // },


    uniq: function(array, isSorted, iteratee) {
        let uniqArray = [];

        if (isSorted === true) {
            for (let i = 0; i < array.length; i++) {
              if (array[i] !== array[i + 1]){
                uniqArray.push(array[i]);
              }
            }
        }

        else if (iteratee) {
          for (let i = 0; i < array.length; i++) {
            if ( uniqArray.indexOf(iteratee(array[i])) === -1 ) {
              uniqArray.push(array[i])
            };
          };
        }

        else {
          for (let i = 0; i < array.length; i++) {
            if ( uniqArray.indexOf(array[i]) === -1 ) {
              uniqArray.push(array[i])
            };
          };

        }
        return uniqArray;


        // uniqArray = [...array];
        //
        // // let uniqArray = [];
        // // for(let i =0 ; i < collection.length; i++)
        // check_for_dup = (function (a,b) {
        //   return (iteratee(a) == iteratee(b));
        // });

    },

    keys: function(collection) {

      let keyArray = [];
      for (const key in collection) {
        //
        keyArray.push(key);
      }

      return keyArray;
    },

    values: function(collection) {

      let keyArray = [];
      for (const key in collection) {
        //
        keyArray.push(collection[key]);
      }

      return keyArray;
    },

    functions: function(collection) {
      let sortedCollection = [];
      for (const key in collection) {
        if (typeof collection[key] ===  "function") {
          sortedCollection.push(collection[key]);
        }
      }
      return sortedCollection;
    },

  }
})()

fi.libraryMethod()
