migration.up = function(migrator) {
	migrator.db.execute('ALTER TABLE ' + migrator.table + ' ADD COLUMN state TEXT');
	migrator.db.execute('ALTER TABLE ' + migrator.table + ' ADD COLUMN city TEXT');
};

migration.down = function(migrator) {
	var db = migrator.db;
    var table = migrator.table;
    db.execute('CREATE TEMPORARY TABLE guest_backup(name,email,phone,checked,alloy_id);');
    db.execute('INSERT INTO guest_backup SELECT name,email,phone,checked,alloy_id FROM ' + table + ';');
    migrator.dropTable();
    migrator.createTable({
        columns: {
            "name": "TEXT",
		    "email": "TEXT",
		    "phone": "TEXT",
		    "checked": "INT",
		    "state": "TEXT",
		    "city": "TEXT"
        },
    });
    db.execute('INSERT INTO ' + table + ' SELECT name,email,phone,checked,alloy_id FROM guest_backup;');
    db.execute('DROP TABLE guest_backup;');
};
