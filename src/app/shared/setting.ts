import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQL_SELECT_ALL_CREDENTIALS,Setting  } from '../shared/setting.interface';
import { DatabaseProvider } from '../shared/database';
/*
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingProvider {

  constructor(public http: HttpClient,private databaseService: DatabaseProvider) {
    console.log('Hello SettingProvider Provider');
  }

  getAll(): Promise<Setting[]> {
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(SQL_SELECT_ALL_CREDENTIALS, []).then((data) => {
                let settings: Setting[] = [];
                for (let i = 0; i < data.rows.length; i++) {
                    settings.push({
                        id: data.rows.item(i).id,
                        email: data.rows.item(i).email,
                        password: data.rows.item(i).password
                    });
                };
                return settings;
            });
        });
    }

}
