import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class PushService {


  mensajes: OSNotificationPayload[] = [
    /* {
      title: 'Titulo de la push',
      body: 'Este es el body de la push',
      date: new Date()
    }  */
   ]; 

   userId: string;

   pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(private oneSignal: OneSignal,
              private storage: Storage) { 


                this.cargarMensajes();


              }

              async getMensajes() {
                await this.cargarMensajes();
                return [...this.mensajes];
              }           

              
  configuracionInicial(){
    this.oneSignal.startInit('42eb8ef6-4563-4ad8-b820-db0eeaa760f3', '880201360196');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe(( noti ) => {
    // do something when notification is received
    console.log('Notificacion recibida', noti);
    this.notificacionRecibida( noti );
    });

    this.oneSignal.handleNotificationOpened().subscribe( async ( noti ) => {
      // do something when a notification is opened 
      console.log('Notificacion abierta', noti);
      await this.notificacionRecibida( noti.notification );
    });


    //obtener el Id del suscriptor
    this.oneSignal.getIds().then( info => {
      this.userId = info.userId;
      console.log(this.userId);
    });

    this.oneSignal.endInit();
  }

  async notificacionRecibida( noti: OSNotification ){
    await this.cargarMensajes();

    const payload = noti.payload;
    const existePush = this.mensajes.find( mensaje => mensaje.notificationID === payload.notificationID);

  if( existePush ){
    return;
  }

  this.mensajes.unshift( payload );
  this.pushListener.emit( payload );

  await this.guardarMensajes();
  }

  guardarMensajes(){
    this.storage.set('mensajes', this.mensajes );
  }
  
  async cargarMensajes(){

   
    this.mensajes = await this.storage.get('mensajes') || [];
    return this.mensajes;
  }

  async borrarMensajes(){
    await this.storage.clear();
    this.mensajes = [];
    this.guardarMensajes();
  }

}
