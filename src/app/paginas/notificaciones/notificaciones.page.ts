import { Component, OnInit, ApplicationRef } from '@angular/core';
import { PushService } from '../../services/push.service';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  mensajes: OSNotificationPayload[] = [];

  constructor(public pushService: PushService,
              private applicationRef: ApplicationRef,
              public alertController: AlertController) { }

  ngOnInit() {
    this.pushService.pushListener.subscribe( noti => {
      this.mensajes.unshift( noti );
      this.applicationRef.tick();
    });
  }

  async ionViewWillEnter(){

    console.log('Will Enter = Cargar mensajes');  
    this.mensajes = await this.pushService.getMensajes();
  }

  async borrarMensajes(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Atención!',
      message: '¿Quieres borrar todas las <strong>notificaciones</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Borrar',
          handler: () => {
            this.pushService.borrarMensajes();
            this.mensajes = [];
            console.log('Confirm Okay');
            
          }
        }
      ]
    });

    await alert.present();
  }
  
}
