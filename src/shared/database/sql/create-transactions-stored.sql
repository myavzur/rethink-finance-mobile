DROP TABLE transactions;

CREATE TABLE transactions (
	id INTEGER PRIMARY KEY AUTOINCREMENT,

	created_at INTEGER NOT NULL DEFAULT(unixepoch('subsec') * 1000), -- UNIX timestamp в миллисекундах

	name TEXT NOT NULL,
	description TEXT,
	type TEXT NOT NULL,
	amount_value INTEGER NOT NULL,
	amount_currency TEXT NOT NULL,
	category_id INTEGER,

	FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE INDEX idx_transactions_created_at ON transactions(created_at);
CREATE INDEX idx_transactions_created_date ON transactions(created_date);

INSERT INTO transactions(name, type, amount_value, amount_currency)
VALUES('Test', 1, 150, 'RUB');

SELECT * FROM transactions;