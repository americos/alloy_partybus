exports.definition = {
    config: {
        columns: {
            name: "TEXT",
            email: "TEXT",
            phone: "TEXT",
            checked: "INT",
            state: "TEXT",
            city: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "guest"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("guest", exports.definition, [ function(migration) {
    migration.name = "guest";
    migration.id = "201307201144456";
    migration.up = function(migrator) {
        migrator.db.execute("ALTER TABLE " + migrator.table + " ADD COLUMN checked INT");
    };
    migration.down = function(migrator) {
        var db = migrator.db;
        var table = migrator.table;
        db.execute("CREATE TEMPORARY TABLE guest_backup(name,email,phone,alloy_id);");
        db.execute("INSERT INTO guest_backup SELECT name,email,phone,alloy_id FROM " + table + ";");
        migrator.dropTable();
        migrator.createTable({
            columns: {
                name: "TEXT",
                email: "TEXT",
                phone: "TEXT",
                checked: "INT"
            }
        });
        db.execute("INSERT INTO " + table + " SELECT name,email,phone,alloy_id FROM guest_backup;");
        db.execute("DROP TABLE guest_backup;");
    };
}, function(migration) {
    migration.name = "guest";
    migration.id = "201307230151471";
    migration.up = function(migrator) {
        migrator.db.execute("ALTER TABLE " + migrator.table + " ADD COLUMN state TEXT");
        migrator.db.execute("ALTER TABLE " + migrator.table + " ADD COLUMN city TEXT");
    };
    migration.down = function(migrator) {
        var db = migrator.db;
        var table = migrator.table;
        db.execute("CREATE TEMPORARY TABLE guest_backup(name,email,phone,checked,alloy_id);");
        db.execute("INSERT INTO guest_backup SELECT name,email,phone,checked,alloy_id FROM " + table + ";");
        migrator.dropTable();
        migrator.createTable({
            columns: {
                name: "TEXT",
                email: "TEXT",
                phone: "TEXT",
                checked: "INT",
                state: "TEXT",
                city: "TEXT"
            }
        });
        db.execute("INSERT INTO " + table + " SELECT name,email,phone,checked,alloy_id FROM guest_backup;");
        db.execute("DROP TABLE guest_backup;");
    };
} ]);

collection = Alloy.C("guest", exports.definition, model);

exports.Model = model;

exports.Collection = collection;