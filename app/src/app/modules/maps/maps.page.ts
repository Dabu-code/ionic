import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapsService } from './maps.service';
import { GoogleMap } from '@capacitor/google-maps';



declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  position: any = {
    lat: -1.667482,
    lng: -78.660008,
  }
  label: any = {
    title: 'Ubicación',
    subtitle: 'Mi ubicación'
  }
  maps: any;
  marker: any;
  info_window: any;
  position_set: any;
  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: any,
    private modalController: ModalController,
    private mapsService: MapsService,
    private element: ElementRef,
  ) { }

  ngOnInit() {
    //this.createMap();


  }
  ngAfterViewInit() {
    console.log("afterinit");
    
   // this.initMap()
   /* navigator.geolocation.getCurrentPosition((position) => {
    this.center = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
  }); */

/*
  E  Authorization failure.  Please see https://developers.google.com/maps/documentation/android-sdk/start for how to correctly set up the map.
  2023-09-13 13:37:32.844  7285-7448  Google Android Maps SDK io.ionic.starter                     E  In the Google Developer Console (https://console.developers.google.com)
                                                                                                      Ensure that the "Maps SDK for Android" is enabled.
                                                                                                      Ensure that the following Android Key exists:
                                                                                                        API Key: AIzaSyDqYNE5_9HL1NPVRRuNc3VOuwjGJIPm35E
                                                                                                        Android Application (<cert_fingerprint>;<package_name>): D6:CF:5B:43:8F:2B:08:79:46:6E:7C:8F:C2:E1:EB:FF:B8:D9:61:83;io.ionic.starter*/
  }


  async initMap(): Promise<void> {
    let map: google.maps.Map;
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map") as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }


  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: "AIzaSyDqYNE5_9HL1NPVRRuNc3VOuwjGJIPm35E",
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }


  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
 

}
