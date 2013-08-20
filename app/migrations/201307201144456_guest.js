//Based on: http://docs.appcelerator.com/titanium/3.0/#!/guide/Alloy_Sync_Adapters_and_Migrations

/*
 * migrator
 * 	- db
 * 	- table
 */

migration.up = function(migrator) {
	migrator.db.execute('ALTER TABLE ' + migrator.table + ' ADD COLUMN checked INT');
};

migration.down = function(migrator) {
	var db = migrator.db;
    var table = migrator.table;
    db.execute('CREATE TEMPORARY TABLE guest_backup(name,email,phone,alloy_id);');
    db.execute('INSERT INTO guest_backup SELECT name,email,phone,alloy_id FROM ' + table + ';');
    migrator.dropTable();
    migrator.createTable({
        columns: {
            "name": "TEXT",
		    "email": "TEXT",
		    "phone": "TEXT",
		    "checked": "INT"
        },
    });
    db.execute('INSERT INTO ' + table + ' SELECT name,email,phone,alloy_id FROM guest_backup;');
    db.execute('DROP TABLE guest_backup;');
};
