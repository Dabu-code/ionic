## Agregar la plataforma Android
#### Ahora agreguemos la plataforma Android.

Para ello, primero instale el paquete:@capacitor/android
```code
npm install @capacitor/android
```
Después de eso, agregue la plataforma:
```code
npx cap add android
```
## Agregar la plataforma iOS
#### Instale el paquete: @capacitor/ios

npm install @capacitor/ios
Después de eso, agregue la plataforma:
```code
npx cap add ios
```
## Agregar el escáner de código de barras
### Instalar el plugin
Para usar el SDK de escaneo de código de barras del kit ML en el condensador, necesitamos el complemento de escaneo de código de barras del kit ML del capacitor:
```code
npm install @capacitor-mlkit/barcode-scanning
```
```code
npx ionic cap sync
```
#### En Android, 
Los SDK también requieren los siguientes permisos antes o después de la etiqueta:
#### AndroidManifest.xmlapplication
```code
<!-- To get access to the camera. -->
<uses-permission android:name="android.permission.CAMERA" />
<!-- To get access to the flashlight. -->
<uses-permission android:name="android.permission.FLASHLIGHT"/>
```
También debe agregar los siguientes metadatos en la etiqueta de su: 
#### applicationAndroidManifest.xml
```code
<meta-data android:name="com.google.mlkit.vision.DEPENDENCIES" android:value="barcode_ui"/>
```
#### En iOS, 
Agregue la clave al archivo, que le dice al usuario por qué la aplicación necesita usar la cámara:NSCameraUsageDescriptionios/App/App/Info.plist
```code
<key>NSCameraUsageDescription</key>
<string>The app enables the scanning of various barcodes.</string>
```

## Ejecución
### Sincronizar el proyecto
```code
npx ionic cap sync
```
### Abrir en android 
```code
npx ionic cap open android
```


## Bibliografia

- [Articulo](https://ionic.io/blog/how-to-build-an-ionic-barcode-scanner-with-capacitor)