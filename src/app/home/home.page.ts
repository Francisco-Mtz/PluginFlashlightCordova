import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private flashlight: Flashlight) { }

  switchFlash( evento ) { /*Recivimos en evento (ion-Change) del componente ion-toggle*/

    const power: boolean = evento.target.checked; /*Declaramos una variable con el valor del estado de neustro toggle true/false*/
    if (power) { /*Condicion para activar y desactivar flash*/
      console.log('On');   /*Impresion en consola para comporbar estado*/
      this.flashlight.switchOn(); /*Accedemos a la funcion de encender flsh de nuestro objeto flashlight */
    } else {
      console.log('Off'); /*Impresion en consola para comporbar estado*/
      this.flashlight.switchOff(); /*Accedemos a la funcion de apagar flsh de nuestro objeto flashlight */
    }
  }

}
