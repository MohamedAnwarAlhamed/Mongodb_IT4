//1
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
//2
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
//3
db.restaurants.find(
    {"grades.score" :
       {$mod : [7,0]}
    },
       {"restaurant_id" : 1,"name":1,"grades":1}
  );
//4
db.restaurants.find(
    {"address.coord" : 
       {$type : 1}
    }
   );
//5
db.restaurants.find( 
    {
     "grades.date": ISODate("2014-08-11T00:00:00Z"), 
     "grades.grade":"A" , 
     "grades.score" : 9
    }, 
    {"restaurant_id" : 1,"name":1,"grades":1}
 );
//6
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
//7
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
//8
db.restaurants.find(
    {"borough" :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}},
    {
    "restaurant_id" : 1,
    "name":1,"borough":1,
    "cuisine" :1
    }
    )
//9_10
db.restaurants.find(
    {"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},
    {
    "restaurant_id" : 1,
    "name":1,"borough":1,
    "cuisine" :1
    }
    );
//11
db.restaurants.find(
    {name: /^Wil/},
    {
    "restaurant_id" : 1,
    "name":1,"borough":1,
    "cuisine" :1
    }
    );
//12
db.restaurants.find( {
    "cuisine" : {$ne : "American"},
    "grades.grade" :"A",
    "borough": {$ne : "Brooklyn"}
} 
).sort({"cuisine":-1});
// By:- Waleed makeen // Al-hikma University 
