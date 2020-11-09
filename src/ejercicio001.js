db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
    { item: "pencil", qty: 80, size: {h: 13, w: 2, uom: "cm"}, status: "B"}
    { item: "pen", qty: 68, size: {h: 13.5, w: 3, uom: "cm"}, status: "B"}
    { item: "book", qty: 55, size: {h: 25, w: 9, uom: "cm"}, status: "C"}
    { item: "pencil-case", qty: 96, size: {h: 20, w: 13, uom: "cm"}, status: "C"}
    { item: "rubber", qty: 57, size: {h: 4, w: 2, uom: "cm"}, status: "B"}
 ]);
 db.inventory.find( { status: "D" } )
 SELECT * FROM inventory WHERE status = "D"
 db.inventory.find( { status: { $in: [ "A", "D" ] } } )
 db.inventory.find( { status: "A", qty: { $lt: 30 } } )
 db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )
 SELECT * FROM inventory WHERE status = "A" OR qty < 30
 FROM inventory WHERE status = "A" OR qty < 30
 db.inventory.find( {
    status: "A",
    $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} )