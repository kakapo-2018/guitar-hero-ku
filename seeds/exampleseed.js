exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("knexTable").del()
    .then(function () {
      // Inserts seed entries
      return knex("knexTable").insert([
        {id: 1, // in an incrementing field, ID is optional (unless you refer to them in another seed)
        name: "Name1", 
        stringifiedThing: JSON.stringify({
          arr: [1,2,3],
          text: "Hello"
          })
        },
        {id: 2, 
        name: "Name2", 
        stringifiedThing: JSON.stringify({
          arr: [4,5,6],
          text: "Hi"
          })
        },
        {id: 3, 
        name: "Name3", 
        stringifiedThing: JSON.stringify({
          arr: [7,8,9],
          text: "Greetings"
          })
        },
      ]);
    });
};

