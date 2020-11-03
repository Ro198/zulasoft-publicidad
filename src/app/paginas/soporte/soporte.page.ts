import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx'; 
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: ['./soporte.page.scss'],
})
export class SoportePage implements OnInit {

  constructor(private callNumber: CallNumber,
              private emailComposer: EmailComposer) { }

  ngOnInit() {
  }

  slidesOptions = {
    slidesPerView: 1.5
  }
  
  llamada(){
    this.callNumber.callNumber("3521531486", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  mensaje(){
    this.emailComposer.addAlias("gmail", "com.google.android.gm");

    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        //Now we know we can send
      }
    });

    let email = {
      to: "contacto@zulasoft.com",
      //from: 'mipet@grandpet.com',
      //cc: 'info@grandpet.com',
      attachments: [ 
        /* "file://img/mipet.png" */
        //'res://petchico.png',
        //'base64:pet.png//iVBORw0KGgoAAAANSUhEUg...',
      ],
      subject: "Asunto",
      body:
        "Hola buen día. <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> ¡Este mensaje se ha enviado desde la aplicación de Zulasoft!",
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }
}
