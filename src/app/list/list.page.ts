import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {

  // storageValue;
  storageArray:any[] = [];
  showEmptyFlag:boolean = false;
  // imgSrc;
  term;
  date;


  constructor(private storage: Storage,
    public alertController: AlertController,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.storageGetValue();
  }

  async storageGetValue() {

    // this.storage.get('search').then((val) => {
    //   if (val != null) {
    //     this.storageValue = val;
    //     this.imgSrc = this.storageValue.image;
    //     console.log('Suuuuuuuuuuuuuuuuuuuuuuuccesssssssss');
    //     console.log(val);
    //   } else {
    //     console.log(this.storageValue);
    //     this.storageValue = val;
    //     this.imgSrc = val;
    //     console.log('nuuuuuuuuuuuuuuuuuuuuuuullll');
    //   }
    // }, (err) => {
    //   console.error(err);
    // });
    this.storageArray = [];

    await this.storage.forEach((val, key, index) => {
      console.log('forEach:::::::::::::::::::::::');
      console.log(val);
      console.log(key);
      console.log(index);
      this.storageArray.push(val);

    }).then(() => {
      console.log(this.storageArray);
      if (this.storageArray === undefined || this.storageArray.length == 0) {
        // array empty or does not exist
        console.log('empty ');
        this.showEmptyFlag = true;
      }else{
        this.showEmptyFlag = false;
      }
    }).catch((err) => {
      console.error(err);
    });
  }

  storageClear() {
    this.storage.clear();
  }


  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Delete all search history',
      message: 'Do you want to <strong>delete all</strong> your search history?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Confirm Okay');
            this.storageClear();
            // this.doRefresh(event);
            // this.nav();
          }
        }]
    });

    await alert.present();
  }

  // nav() {
  //   this.router.navigateByUrl('list');
  // }

  async doRefresh(event) {
    console.log('Begin async operation');
    await this.storageGetValue();



    setTimeout(() => {
      event.target.complete();
      console.log('Async operation has ended');
    }, 1500);
  }

  nav(keyword) {
    // this.navController.navigateForward('detail', true, {name : "Charles"});
    let url = '/detail/' + keyword;
    this.router.navigateByUrl(url);

  }

}
