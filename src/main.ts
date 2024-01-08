import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

function dadesJugador() {

}

dadesJugador() ;{
  // @ts-ignore
  this.router.navigate(['/game']);

  // @ts-ignore
  let nom = document.getElementById("campJugador").value;
  localStorage.setItem("nom", nom)

  // @ts-ignore
  let punts = document.getElementById("campPunts").value;

  if(punts === ""){
    punts = 0;
  }

  localStorage.setItem("punts", punts)
}
