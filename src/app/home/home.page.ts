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

  ionViewDidEnter() {
    // this.credential=[{"id":1,"email":"dharmaraj@gmail.com","password":"123456"},{"id":2,"email":"dharmaraj23@gmail.com","password":"123456"}]
    this.settingService.getAll()
      .then((settings: Setting[]) => {
        this.credential = settings;
        console.log(this.credential)
      })
      .catch(error => console.log(error));

  }


  add(){
   
    this.database.createCredential(this.email,this.password).then((res)=>{
      console.log(res)
    },(error)=>{
      console.log(error)
    })

  }

  get(){

     this.ionViewDidEnter();

  }

  update(){

    this.database.updateCredential(this.email,this.password,this.id).then((res)=>{
      console.log(res)
    },(error)=>{
      console.log(error)
    })

  }

  delete(id){

    this.database.deleteCredential(id).then((res)=>{
      console.log(res)
    },(error)=>{
      console.log(error)
    })

  }

  edit(data){
   this.id=data.id;
   this.email=data.email;
   this.password=data.password;
   alert(JSON.stringify(data))
  }
}
