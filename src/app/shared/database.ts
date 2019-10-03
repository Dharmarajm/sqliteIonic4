import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

//import { SQL_CREATE_SETTINGS_TABLE, SQL_BATCH_INSERT_INTO_SETTINGS_TABLE } from './../../shared/setting.interface';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const DATA_BASE_NAME = 'vCare4U.db';


@Injectable()
export class DatabaseProvider {
  
  database: SQLiteObject;
  ready: Promise<void>;

  constructor(public http: HttpClient,public sqlite: SQLite, private platform: Platform) {
    console.log('Hello DatabaseProvider Provider');
    this.ready = this.platform.ready()
            .then(() => this.initializeDatabase())
            .then(() => this.bootstrapTables())
            //.then(() => this.bootstrapData())
  }


  /*private bootstrapData(): Promise<void> {
        return this.database.sqlBatch(SQL_BATCH_INSERT_INTO_SETTINGS_TABLE).then(() => {
            console.log("Data bootstrapped: " + SQL_BATCH_INSERT_INTO_SETTINGS_TABLE);
        });
    }*/

   /* private bootstrapTables(): Promise<void> {
        return this.database.executeSql(SQL_CREATE_SETTINGS_TABLE, []).then(() => {
            console.log("Table boostrapped: " + SQL_CREATE_SETTINGS_TABLE);
        });
    }*/

    bootstrapTables() {
        
    }

    initializeDatabase() {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db: SQLiteObject) => {
           let sql = 'CREATE TABLE IF NOT EXISTS credentials(id INTEGER PRIMARY KEY,email TEXT, password TEXT)';
           return db.executeSql(sql, []);  
        })
    }

    getDatabase() {
        return this.ready.then(() => {
            return this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then((db: SQLiteObject) => {
                return db;
            })
        });
    }

    createCredential(email,password) {
        console.log(email,password)
        //let sql = 'INSERT INTO credentials(NULL,email,password) VALUES (?,?,?)';
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db: SQLiteObject) => {
         let sql = 'INSERT INTO credentials VALUES (NULL,?,?)';
         return db.executeSql(sql,[email,password]);
        })
    }

    updateCredential(email,password,id){
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db: SQLiteObject) => {
          let sql = 'UPDATE credentials SET email = ?, password = ? WHERE id = ?';
          return db.executeSql(sql,[email,password,id]);
        })
    }

    deleteCredential(id){
       return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db: SQLiteObject) => { 
          let sql = 'DELETE FROM credentials WHERE id = ?';
          return db.executeSql(sql,[id]);
        })
    }

}
