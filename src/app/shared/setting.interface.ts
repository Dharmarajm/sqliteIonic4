export interface Setting {
    id: number;
    email: string;
    password: string;
};

/*export const SQL_CREATE_SETTINGS_TABLE: string = "CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR UNIQUE, password VARCHAR)";
export const SQL_BATCH_INSERT_INTO_SETTINGS_TABLE: string[] =[
    "INSERT OR IGNORE INTO settings VALUES(NULL, 'key1', 'value1'); ",
    "INSERT OR IGNORE INTO settings VALUES(NULL, 'key2', 'value2'); ",
    "INSERT OR IGNORE INTO settings VALUES(NULL, 'keyX', 'valueX'); "
]*/
export const  SQL_SELECT_ALL_CREDENTIALS: string = "SELECT * FROM credentials;"

export const  SQL_SELECT_ALL_SETTINGS: string = "SELECT * FROM settings;"