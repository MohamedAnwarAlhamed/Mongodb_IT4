//afnan saed 

1

db.restaurand.find({name:{$regex: /^Mad/i,}},{"name":1,"borough":1,"address.coord":1,"cuisine":1});

2
db.restaurand.find({name:{$regex: "mon.*"}},{"name":1,"borough":1,"address.coord":1,"cuisine":1});

3
db.restaurand.find({"grades.score":{$mod: [7,0]}},{"restaurant_id":1,"name":1,"grades":1});

4
db.restaurand.find({"address.coord":{$type: 1}});

5
db.restaurand.find(
    {
      "grades.1.grade":"A",
      "grades.1.score":9,
      "grades.1.date":ISODate("2014-08-11T00:00:00Z"),
    },
    {
      "restaurant_id":1,
      "name":1,
      "grades":1
    });

6
db.restaurand.find(
    {
      $or: [ {name: /^Wil/},
        {
          $and:
          [
            {"cuisine":{$ne:"American"}},
            {"cuisine":{$ne:"Chinese"}},
          ]}
      ]
    },
    {
      "restaurant_id":1,
      "name":1,
      "borough":1,
      "cuisine":1
    });

7
db.restaurand.find(
    {
      "grades.score":{$not:{$gt:10}}
    },
    {
      "restaurant_id":1,
      "name":1,
      "cuisine":1,
      "grades.score":1
    });
8
db.restaurand.find(
    {
      $and:[
        {"borough":{$ne:"Bronx"}},
        {"borough":{$ne:"Brooklyn"}},
        {"borough":{$ne:"Staten Island"}},
        {"borough":{$ne:"Queens"}},
      ]
    },
    {
      "restaurant_id":1,
      "name":1,
      "borough":1,
      "cuisine":1,
    });

9
db.restaurand.find(
    {
      $or:[
        {"borough":"Bronx"},
        {"borough":"Brooklyn"},
        {"borough":"Staten Island"},
        {"borough":"Queens"},
      ]
    },
    {
      "restaurant_id":1,
      "name":1,
      "borough":1,
      "cuisine":1,
    });

10
db.restaurand.find(
    {
      $or:[
        {"borough":"Bronx"},
        {"borough":"Brooklyn"},
        {"borough":"Staten Island"},
        {"borough":"Queens"},
      ]
    },
    {
      "restaurant_id":1,
      "name":1,
      "borough":1,
      "cuisine":1,
    });


11
db.restaurand.find(
    {
      name: /^Wil/
    },
    {
      "restaurant_id":1,
      "name":1,
      "borough":1,
      "cuisine":1
    });

12
db.restaurand.find(
    {
      "cuisine":{$ne:"American"},
      "grades.grade":"A",
      "borough":{$ne:"Brooklyn"},
    }).sort({"cuisine":-1});
