db.restaurants.find(
    { name :
      { $regex : /^Mad/i, }
    },
        {
          "name":1,
          "borough":1,
          "address.coord":1,
          "cuisine" :1
         }
    );

/////////////////////////////////////

db.restaurants.find(
    { name :
      { $regex : "mon.*", $options: "i" }
    },
        {
          "name":1,
          "borough":1,
          "address.coord":1,
          "cuisine" :1
         }
    );

/////////////////////////////////////

db.restaurants.find(
       {"grades.score" :
          {$mod : [7,0]}
       },
          {"restaurant_id" : 1,"name":1,"grades":1}
     );

/////////////////////////////////////
db.restaurants.find(
     {"address.coord" :
        {$type : 1}
     }
    );
/////////////////////////////////////
db.restaurants.find(
       { "grades.1.date": ISODate("2014-08-11T00:00:00Z"),
         "grades.1.grade":"A" ,
         "grades.1.score" : 9
       },
        {"restaurant_id" : 1,"name":1,"grades":1}
    );

/////////////////////////////////////

db.restaurants.find(
{$or: [
{name: /^Wil/},
{"$and": [
{"cuisine" : {$ne :"American "}},
{"cuisine" : {$ne :"Chinees"}}
]}
]}
,{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1}
);
/////////////////////////////////////

db.restaurants.find(
{"grades.score" :
{ $not:
{$gt : 10}
}
},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

/////////////////////////////////////
db.restaurants.find(
{"borough" :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

/////////////////////////////////////

db.restaurants.find(
{"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);
/////////////////////////////////////



/////////////////////////////////////


db.restaurants.find(
{name: /^Wil/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

/////////////////////////////////////

db.restaurants.find( {
              "cuisine" : {$ne : "American"},
              "grades.grade" :"A",
              "borough": {$ne : "Brooklyn"}
        }
     ).sort({"cuisine":-1});



