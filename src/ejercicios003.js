db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);
 "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5fabb11d8bd9b05513c6dfba"),
                ObjectId("5fabb11d8bd9b05513c6dfbb"),
                ObjectId("5fabb11d8bd9b05513c6dfbc"),
                ObjectId("5fabb11d8bd9b05513c6dfbd"),
                ObjectId("5fabb11d8bd9b05513c6dfbe")
        ]}


        db.inventory.insertOne({ item: "pen", qty: 99, size: { h: 12, w: 2, uom: "cm" }, status: "B" })
"acknowledged" : true,
        "insertedId" : ObjectId("5fabde0ea0c4f682aad56412")
        
        db.inventory.insertMany([
                { item: "book", qty: 19, size: { h: 23, w: 7, uom: "cm" }, status: "A" },
                { item: "rubber", qty: 59, size: { h: 2, w: 4, uom: "cm" }, status: "B" },
                { item: "pencil", qty: 99, size: { h: 13, w: 2, uom: "cm" }, status: "C" },
             ]);
             {
                "acknowledged" : true,
                "insertedIds" : [
                        ObjectId("5fabdfbaa0c4f682aad56413"),
                        ObjectId("5fabdfbaa0c4f682aad56414"),
                        ObjectId("5fabdfbaa0c4f682aad56415")
                ]
        }
        
        
        db.inventory.find( { status: "D" } )
        { "_id" : ObjectId("5f9c472e90bdab6a4075f6dc"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }
{ "_id" : ObjectId("5f9c472e90bdab6a4075f6dd"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
{ "_id" : ObjectId("5f9c4b57aea5fc1d2fd25363"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }
{ "_id" : ObjectId("5f9c4b57aea5fc1d2fd25364"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
{ "_id" : ObjectId("5f9c4b84aea5fc1d2fd25368"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }
{ "_id" : ObjectId("5f9c4b84aea5fc1d2fd25369"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }


db.inventory.find( { status: { $in: [ "A", "D" ] } } )
{ "_id" : ObjectId("5f9c4b84aea5fc1d2fd25366"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9c4b84aea5fc1d2fd25367"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f9c4b84aea5fc1d2fd25368"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }
{ "_id" : ObjectId("5f9c4b84aea5fc1d2fd25369"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
{ "_id" : ObjectId("5f9c4b84aea5fc1d2fd2536a"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5fabdfbaa0c4f682aad56413"), "item" : "book", "qty" : 19, "size" : { "h" : 23, "w" : 7, "uom" : "cm" }, "status" : "A" }


db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )
{ "_id" : ObjectId("5f9c4b84aea5fc1d2fd25366"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9c4b84aea5fc1d2fd25367"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f9c4b84aea5fc1d2fd2536a"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5fabdfbaa0c4f682aad56413"), "item" : "book", "qty" : 19, "size" : { "h" : 23, "w" : 7, "uom" : "cm" }, "status" : "A" }


db.inventory.find( { $nor: [ { status: "D" }, { qty: { $lt: 50 } } ] } )
{ "_id" : ObjectId("5f9c472e90bdab6a4075f6db"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f9c4b57aea5fc1d2fd25362"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f9c4b84aea5fc1d2fd25367"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5fabde0ea0c4f682aad56412"), "item" : "pen", "qty" : 99, "size" : { "h" : 12, "w" : 2, "uom" : "cm" }, "status" : "B" }
{ "_id" : ObjectId("5fabdfbaa0c4f682aad56414"), "item" : "rubber", "qty" : 59, "size" 
: { "h" : 2, "w" : 4, "uom" : "cm" }, "status" : "B" }
{ "_id" : ObjectId("5fabdfbaa0c4f682aad56415"), "item" : "pencil", "qty" : 99, "size" 
: { "h" : 13, "w" : 2, "uom" : "cm" }, "status" : "C" }
