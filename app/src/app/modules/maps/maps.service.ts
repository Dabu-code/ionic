import { Injectable, Renderer2 } from '@angular/core';

declare var google: any;
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  apiKey: string = "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg";
  isLoaded: boolean = false;

  constructor() { }

  public init(renderer: Renderer2, document: any): Promise<any> {

    return new Promise<boolean>((resolve, reject) => {
      if (this.isLoaded) {
        console.log('google is preview loaded')
        resolve(true);
        return;
      }
      const script = renderer.createElement('script');
      script.id = 'googleMaps';
      /* window['mapInit'] = () => {
        this.isLoaded = true;
        resolve(true);
      } */
      if (this.apiKey)
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey+'&callback=initMap' ;
      //else script.src = "https://maps.googleapis.com/maps/api/js?&callback=initMap"
      else script.src = 'https://maps.googleapis.com/maps/api/js&callback=initMap';
      renderer.appendChild(document.body, script);
      /* 
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg_KEY&callback=initMap"
      <script>(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly"});</script>
      */

    })

  }
}
