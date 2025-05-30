db.address.insertMany([
  {
    empId: ObjectId("68372992cd74be3ffc6c4bd0"),
    residence: {
      doorNum: "A-135",
      street: "Verdin Ct",
      city: "Columbus",
      state: "OH",
    },
  },
  {
    empId: ObjectId("683869b15ed1c2c3826c4bd3"),
    residence: {
      doorNum: "AH-320",
      street: "Bay Meadows",
      city: "Jacksonville",
      state: "FL",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "addr",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "addr",
    },
  },
  { $match: { email: "chastity@gmail.com" } },
  { $unwind: "$addr" },
  { $project: { name: 1, "addr.residence.city": 1 } },
]);