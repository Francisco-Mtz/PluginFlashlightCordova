import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private flashlight: Flashlight ) {
  }

  switchFlash( evento ) {

    const power: boolean = evento.target.checked;
    if (power) {
      console.log('On');
      this.flashlight.switchOn();
    } else {
      console.log('Off');
      this.flashlight.switchOff();
    }
  }

}
