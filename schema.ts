export class Schema{



public jsonSchema: any = {    "fields": [
  {
    "name": "hourlyFees",
    "path": "fieldName.hourlyFees",
    "count": 3,
    "types": [
      {
        "name": "String",
        "bsonType": "String",
        "path": "fieldName.hourlyFees",
        "count": 3,
        "values": [
          "7.00",
          "Hourly Charges",
          "Session Fees"
        ],
        "total_count": 0,
        "probability": 1,
        "unique": 3,
        "has_duplicates": false
      }
    ],
    "total_count": 3,
    "type": "String",
    "has_duplicates": false,
    "probability": 1
  },
  {
    "name": "tweentyHourfees",
    "path": "fieldName.tweentyHourfees",
    "count": 2,
    "types": [
      {
        "name": "String",
        "bsonType": "String",
        "path": "fieldName.tweentyHourfees",
        "count": 2,
        "values": [
          "Hourly Charges with 20 Hour ECE",
          "Session Fees for Over 3"
        ],
        "total_count": 0,
        "probability": 0.6666666666666666,
        "unique": 2,
        "has_duplicates": false
      },
      {
        "name": "Undefined",
        "type": "Undefined",
        "path": "fieldName.tweentyHourfees",
        "count": 1,
        "total_count": 0,
        "probability": 0.3333333333333333,
        "unique": 1,
        "has_duplicates": false
      }
    ],
    "total_count": 3,
    "type": [
      "String",
      "Undefined"
    ],
    "has_duplicates": false,
    "probability": 0.6666666666666666
  }
]}};