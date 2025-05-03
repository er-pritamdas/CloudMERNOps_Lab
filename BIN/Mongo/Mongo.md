# MongoDB

## MongoDB follows this hierarchy:

- 1️⃣ Cluster → Contains multiple Databases
- 2️⃣ Database → Contains multiple Collections
- 3️⃣ Collection → Contains multiple Documents
- 4️⃣ Document → Stores actual data in BSON format

### MongoDB Query API

- The MongoDB Query API is the way you will interact with your data.
- The MongoDB Query API can be used in two ways:
  - `CRUD Operations`
  - `Aggregation Pipelines`

## How to connect to Database

```shell
Prita@hacker404 MINGW64 ~/Desktop/CloudMERNOps_Lab (main)
$ mongosh "mongodb+srv://pritam:OSQ0RH9ChfTth0IH@pulse.dg0ag.mongodb.net/?retryWrites=true&w=majority"
Current Mongosh Log ID: 67cf97cf041080c4e8b71235
Connecting to:          mongodb+srv://<credentials>@pulse.dg0ag.mongodb.net/?retryWrites=true&w=majority&appName=mongosh+2.4.2
Using MongoDB:          8.0.5
Using Mongosh:          2.4.2

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

Atlas atlas-o1jtku-shard-0 [primary] test>
```

## Show all Databases

- Databse which doesnt have collection will not be listed in show database
- Right now I am in test Database

```bash
Atlas atlas-o1jtku-shard-0 [primary] test> show dbs
admin  328.00 KiB
local   22.06 GiB
Atlas atlas-o1jtku-shard-0 [primary] test>
```

## Show all Collections

- as test DB doesnt have any collection, it also didnt appear in show dbs

```bash
Atlas atlas-o1jtku-shard-0 [primary] test> show collections

Atlas atlas-o1jtku-shard-0 [primary] test>
```

## Change to DB or Create a DB if not present

```bash
Atlas atlas-o1jtku-shard-0 [primary] test> use firstdb
switched to db firstdb
Atlas atlas-o1jtku-shard-0 [primary] firstdb> show dbs
admin  328.00 KiB
local   22.06 GiB
Atlas atlas-o1jtku-shard-0 [primary] firstdb> show collections

Atlas atlas-o1jtku-shard-0 [primary] firstdb>
```

## Create collection

- collection got automatically created when entering documents inside it

```bash
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.firstsb.insertOne({ from:"HDFC",
... to:"Investment",
... Amount:2000
... })
{
  acknowledged: true,
  insertedId: ObjectId('67cf9ba1041080c4e8b71237')
}
Atlas atlas-o1jtku-shard-0 [primary] firstdb> show dbs
firstdb   72.00 KiB
admin    328.00 KiB
local     22.06 GiB
Atlas atlas-o1jtku-shard-0 [primary] firstdb> show collections
firstsb
Atlas atlas-o1jtku-shard-0 [primary] firstdb>
```

- to create the collection

```bash
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.createCollection("Transactions")
{ ok: 1 }
Atlas atlas-o1jtku-shard-0 [primary] firstdb> show collections
firstsb
Transactions
Atlas atlas-o1jtku-shard-0 [primary] firstdb>
```

## View all the documents of a Collection

```bash
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.firstsb.find()
[
  { _id: ObjectId('67cf9b19041080c4e8b71236') },
  {
    _id: ObjectId('67cf9ba1041080c4e8b71237'),
    from: 'HDFC',
    to: 'Investment',
    Amount: 2000
  }
]
Atlas atlas-o1jtku-shard-0 [primary] firstdb>
```

## May ways of finding Data:

- find() takes two parameter, first is Filter, show only those data which has filter mentioned
- Second paramter is called Projection
- This parameter is an object that describes which fields to include in the results.
- 0 means exclude, 1means include
- you cannot have both, except \_id

```bash
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.find()
[
  {
    _id: ObjectId('67cf9dfd041080c4e8b71238'),
    from: 'HDFC',
    to: 'Investment',
    money: 200
  },
  {
    _id: ObjectId('67cf9dfd041080c4e8b71239'),
    from: 'SBI',
    to: 'Extra Spending',
    money: 300
  },
  {
    _id: ObjectId('67cf9e53041080c4e8b7123a'),
    from: 'HDFC',
    to: 'Family',
    money: 300
  }
]
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.findOne()
{
  _id: ObjectId('67cf9dfd041080c4e8b71238'),
  from: 'HDFC',
  to: 'Investment',
  money: 200
}
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.find({from:"HDFC"})
[
  {
    _id: ObjectId('67cf9dfd041080c4e8b71238'),
    from: 'HDFC',
    to: 'Investment',
    money: 200
  },
  {
    _id: ObjectId('67cf9e53041080c4e8b7123a'),
    from: 'HDFC',
    to: 'Family',
    money: 300
  }
]
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.find({from:"HDFC"},{money:1})
[
  { _id: ObjectId('67cf9dfd041080c4e8b71238'), money: 200 },
  { _id: ObjectId('67cf9e53041080c4e8b7123a'), money: 300 }
]
Atlas atlas-o1jtku-shard-0 [primary] firstdb>
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.find({from:"HDFC"},{money:1, _id:0})
[ { money: 200 }, { money: 300 } ]
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.find({from:"HDFC"},{money:1, _id:0, to:1})
[ { to: 'Investment', money: 200 }, { to: 'Family', money: 300 } ]
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.find({from:"HDFC"},{money:1, _id:0, to:0})
MongoServerError[Location31254]: Cannot do exclusion on field to in inclusion projection
Atlas atlas-o1jtku-shard-0 [primary] firstdb>
```

## Insert Data(Documents)

- Mainly Two Ways
  - insertMany()

```bash
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.insertMany({ from: "HDFC", to: "Investment", money: 200 })
MongoInvalidArgumentError: Argument "docs" must be an array of documents
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.insertMany([{ from: "HDFC", to: "Investment", money: 200 }, {from: "SBI", to: "Extra Spending", money:300}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67cf9dfd041080c4e8b71238'),
    '1': ObjectId('67cf9dfd041080c4e8b71239')
  }
}
Atlas atlas-o1jtku-shard-0 [primary] firstdb>
```

- insertOne()

```bash
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.insertOne({ from: "HDFC", to: "Family", money: 300 })
{
  acknowledged: true,
  insertedId: ObjectId('67cf9e53041080c4e8b7123a')
}
Atlas atlas-o1jtku-shard-0 [primary] firstdb>
```
## Update Document
- `updateOne()` Method
    - the first parameter takes to find the data
    - Second to change the data
    - use $set : {  {Changed Data}  }
```bash
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.findOne()
{
  _id: ObjectId('67cf9dfd041080c4e8b71238'),
  from: 'HDFC',
  to: 'Investment',
  money: 200
}
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.updateOne({$set : {money:10000}})
MongoInvalidArgumentError: Update document requires atomic operators
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.updateOne({from:"HDFC"},{$set : {money:10000}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.findOne()
{
  _id: ObjectId('67cf9dfd041080c4e8b71238'),
  from: 'HDFC',
  to: 'Investment',
  money: 10000
}
Atlas atlas-o1jtku-shard-0 [primary] firstdb>
```
- `updateMany()`
  - same as updateOne()
  - it will take first argument as {}, empty to mach all data
  - you can add data in set , if it is not found it will add the data
```bash
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.find()
[
  {
    _id: ObjectId('67cf9dfd041080c4e8b71238'),
    from: 'HDFC',
    to: 'Investment',
    money: 10000
  },
  {
    _id: ObjectId('67cf9dfd041080c4e8b71239'),
    from: 'SBI',
    to: 'Extra Spending',
    money: 300
  },
  {
    _id: ObjectId('67cf9e53041080c4e8b7123a'),
    from: 'HDFC',
    to: 'Family',
    money: 300
  }
]
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.updateMany({},{$set : {money:10000, category:"newData"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.find()
[
  {
    _id: ObjectId('67cf9dfd041080c4e8b71238'),
    from: 'HDFC',
    to: 'Investment',
    money: 10000,
    category: 'newData'
  },
  {
    _id: ObjectId('67cf9dfd041080c4e8b71239'),
    from: 'SBI',
    to: 'Extra Spending',
    money: 10000,
    category: 'newData'
  },
  {
    _id: ObjectId('67cf9e53041080c4e8b7123a'),
    from: 'HDFC',
    to: 'Family',
    money: 10000,
    category: 'newData'
  }
]
Atlas atlas-o1jtku-shard-0 [primary] firstdb>
```
## Delete Documents
- `deleteOne()`
  - this will search the data and delete the first data
- `deleteMany()`
  - This will delete all the data that matches th query
```bash
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.find()
[
  {
    _id: ObjectId('67cf9dfd041080c4e8b71238'),
    from: 'HDFC',
    to: 'Investment',
    money: 10000,
    category: 'newData',
    subCategory: 'subCat'
  },
  {
    _id: ObjectId('67cf9dfd041080c4e8b71239'),
    from: 'SBI',
    to: 'Extra Spending',
    money: 10000,
    category: 'newData'
  },
  {
    _id: ObjectId('67cf9e53041080c4e8b7123a'),
    from: 'HDFC',
    to: 'Family',
    money: 10000,
    category: 'newData'
  }
]
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.deleteOne()
MongoshInvalidInputError: [COMMON-10001] Missing required argument at position 0 (Collection.deleteOne)
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.deleteOne({from:"HDFC"})
{ acknowledged: true, deletedCount: 1 }
Atlas atlas-o1jtku-shard-0 [primary] firstdb> db.Transactions.find()
[
  {
    _id: ObjectId('67cf9dfd041080c4e8b71239'),
    from: 'SBI',
    to: 'Extra Spending',
    money: 10000,
    category: 'newData'
  },
  {
    _id: ObjectId('67cf9e53041080c4e8b7123a'),
    from: 'HDFC',
    to: 'Family',
    money: 10000,
    category: 'newData'
  }
]
Atlas atlas-o1jtku-shard-0 [primary] firstdb>
```

