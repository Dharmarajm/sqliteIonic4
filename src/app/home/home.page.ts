import { Component } from '@angular/core';
import { Setting } from '../shared/setting.interface';
import { SettingProvider } from '../shared/setting';
import { DatabaseProvider } from '../shared/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  credential: Setting[];
  email:string;
  password:string;

  constructor(private settingService: SettingProvider,public database:DatabaseProvider) {
  }

  ionViewWillLoad() {

    this.settingService.getAll()
      .then((settings: Setting[]) => {
        this.credential = settings;
        console.log(this.credential)
      })
      .catch(error => console.log(error));

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad HomePage');
    
  }

  add(){
   
    this.database.createCredential(this.email,this.password).then((res)=>{
      console.log(res)
    },(error)=>{
      console.log(error)
    })

  }

  get(){

     this.ionViewWillLoad();

  }

  update(){

    this.database.updateCredential(this.email,this.password,1).then((res)=>{
      console.log(res)
    },(error)=>{
      console.log(error)
    })

  }

  delete(){

    this.database.deleteCredential(1).then((res)=>{
      console.log(res)
    },(error)=>{
      console.log(error)
    })

  }
}
