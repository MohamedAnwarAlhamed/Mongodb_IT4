use restaurantdb
// 1) يوسف المقرني
db.restaurants.find({name: /^Mad.*/},{name: 1, borough: 1, "address.coord": 1, cuisine: 1, _id: 0})

// 2)
db.restaurants.find({name: /mon/},{name: 1, borough: 1, "address.coord": 1, cuisine: 1, _id: 0})

// 3)
db.restaurants.find({"grades.score": {$mod : [7,0]}},{name: 1, grades: 1, restaurant_id: 1, _id: 0})

// 4)
db.restaurants.find({"address.coord": {$type : 1}})
db.restaurants.find({"address.coord": {$type : "double"}}) // same solution

// 5)
db.restaurants.find({$and:[{"grades.1.grade": 'A'},{"grades.1.score": 9},{"grades.1.date":ISODate("2014-08-11T00:00:00Z")}]},{name: 1, grades: 1, restaurant_id: 1, _id: 0})

// 6)
db.restaurants.find({$or:[{cuisine: {$nin: ["American ", "Chinese"]}},{name: /^Wil/}]},{name: 1, borough: 1, restaurant_id: 1, cuisine: 1, _id: 0})

// 7)
db.restaurants.find({"grades.score": {$lte : 10}},{name: 1, borough: 1, restaurant_id: 1, cuisine: 1, _id: 0})

// 8)
db.restaurants.find({borough: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{name: 1, borough: 1, restaurant_id: 1, cuisine: 1, _id: 0})

// 9)
db.restaurants.find({borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{name: 1, borough: 1, restaurant_id: 1, cuisine: 1, _id: 0})

// 10)
db.restaurants.find({borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{name: 1, borough: 1, restaurant_id: 1, cuisine: 1, _id: 0})

// 11)
db.restaurants.find({name: /^Wil/},{name: 1, borough: 1, restaurant_id: 1, cuisine: 1, _id: 0})

// 12)
db.restaurants.find({$and: [{cuisine: {$not: /^Americ.*/}}, {"grades.grade": 'A'}, {borough: {$ne: "Brooklyn"}}]}).sort({ "cuisine": -1 })