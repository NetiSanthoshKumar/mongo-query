// 1
db.employees.updateOne(
  { name: "John Smith" },
  { $set: { email: "john@outlook.com" } }
);
// 2
db.employees.find().sort({ salary: -1 }).limit(3);
// 3
db.employees.updateMany({}, { $inc: { salary: 1000 } });
// 4
db.employees.insertOne({
  name: "New Admin",
  email: "admin@company.com",
  department: "admin",
  salary: 3000,
  location: ["NY", "CA"],
  date: new Date()
});
// 5
db.employees.deleteMany({ department: "admin" });


