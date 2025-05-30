// 1 st query
db.employees.aggregate([
    {
        $sort: { salary: -1 }
    },
    {
        $limit: 3
    },
    {
        $project: {
            _id: 0,
            name: 1,
            salary: 1,
            email: 1
        }
    }
])
// 2 nd query
db.employees.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            email: 1,
            monthlySalary: "$salary",
            annualSalary: { $multiply: ["$salary", 12] }
        }
    }
])
// 3 rd query
