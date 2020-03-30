
var orm = require("../config/orm.js");

// this my orm that will interface with the database
var burger = {
	all: function (cb) {
		orm.selectAll("burger", function (res) {
			cb(res);
		});
	},
	// cols and values are arrays
	create: function (cols, vals, cb){
		orm.insertOne("burger", cols, vals, function(res){
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.updateOne("burger", objColVals, condition, function (res){
			cb(res);
		})
	}
}

module.exports = burger;