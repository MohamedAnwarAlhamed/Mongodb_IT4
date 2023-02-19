// Student name
//   رضوان محمد يحيى الثلاياء

/**
 * quesion :1
 * Write a MongoDB query to find the restaurant name, borough, longitude and
 * latitude and cuisine for those restaurants which contain 'Mad' as first three letters of its name.
 */

db.restaurand.find({name:{$regex: /^Mad/i,}},{"name":1,"borough":1,"address.coord":1,"cuisine":1});


/**
 * quesion :2
 * Write a MongoDB query to find the restaurant name, borough, longitude and
 * attitude and cuisine for those restaurants which contains 'mon' as three
 * letters somewhere in its name.
 */
db.restaurand.find({name:{$regex: "mon.*"}},{"name":1,"borough":1,"address.coord":1,"cuisine":1});


/**
 * quesion :3
 * Write a MongoDB query which will select the restaurant Id, name and grades
 * for those restaurants which returns 0 as a remainder after dividing the score
 * 
 */

db.restaurand.find({"grades.score":{$mod: [7,0]}},{"restaurant_id":1,"name":1,"grades":1});


/**
 * quesion :4
 * Write a MongoDB query which will select all documents in the restaurants
 * collection where the coord field value is double.
 * 
 */

db.restaurand.find({"address.coord":{$type: 1}});


/**
 * quesion :5
 * Write a MongoDB query to find the restaurant Id, name, and grades for those
 * restaurants where the 2nd element of grades array contains a grade of "A"
 * and score 9 on an ISODate "2014-08-11T00:00:00Z".
 */

db.restaurand.find(
  { "grades.1.grade":"A", "grades.1.score":9, "grades.1.date":ISODate("2014-08-11T00:00:00Z"),},
  { "restaurant_id":1,"name":1,"grades":1});


/**
 * quesion :6
 * Write a MongoDB query to find the restaurant Id, name, borough and cuisine
 * for those restaurants which prepared dish except 'American' and 'Chinees' or
 * restaurant's name begins with letter 'Wil'
 */

db.restaurand.find(
  { $or: [ {name: /^Wil/}, { $and:[ {"cuisine":{$ne:"American"}},{"cuisine":{$ne:"Chinese"}},]} ] },
  { "restaurant_id":1,"name":1,"borough":1,"cuisine":1});



/**
 * quesion :7
 * Write a MongoDB query to find the restaurant Id, name, borough and cuisine
 * for those restaurants which achieved a score which is not more than 10.
 */
db.restaurand.find(
  { "grades.score":{$not:{$gt:10}}},
  {"restaurant_id":1,"name":1,"cuisine":1,"grades.score":1});



/*
quesion :8
Write a MongoDB query to find the restaurant Id, name, borough and cuisine
for those restaurants which are not belonging to the borough Staten Island or
Queens or Bronxor Brooklyn.
*/

db.restaurand.find(
  {"borough": {$nin:["Staten Island","Queens","Bronx","Brooklyn"]}},
  {"restaurant_id":1,"name":1,"borough":1,"cuisine":1});

/*
quesion :9
Write a MongoDB query to find the restaurant Id, name, borough and cuisine
for those restaurants which belong to the borough Staten Island or Queens or
Bronxor Brooklyn.
*/
db.restaurand.find(
  {"borough": {$in:["Staten Island","Queens","Bronx","Brooklyn"]}},
  {"restaurant_id":1,"name":1,"borough":1,"cuisine":1});

/*
quesion :11
Write a MongoDB query to find the restaurant Id, name, borough and cuisine
for those restaurants which contain 'Wil' as first three letters for its name.
*/
db.restaurand.find(
  { name: /^Wil/},
  {"restaurant_id":1,"name":1,"borough":1,"cuisine":1});

/*
quesion :12
Write a MongoDB query to find the restaurants which do not prepare any
cuisine of 'American' and achieved a grade point 'A' not belongs to the
borough Brooklyn.The document must be displayed according to the cuisine
in descending order.
*/
db.restaurand.find(
  {"cuisine":{$ne:"American"},"grades.grade":"A","borough":{$ne:"Brooklyn"},}).sort({"cuisine":-1});
