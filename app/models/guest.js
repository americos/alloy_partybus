exports.definition = {
	config: {
		columns: {
		    "name": "TEXT",
		    "email": "TEXT",
		    "phone": "TEXT",
		    "checked": "INTEGER",
		    "state": "TEXT",
		    "city": "TEXT"
		},
		adapter: {
			type: "sql",
			collection_name: "guest"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};