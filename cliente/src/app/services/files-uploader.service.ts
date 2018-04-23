/*Angular no cuenta con ninguna instrucción que tome un archivo y lo suba al servidor, por lo que en este caso la programación de esta funcionalidad se hará con Javascript puro. */

import { Injectable } from '@angular/core';
import { Ruta } from '../global_route';

@Injectable()
export class FilesUploaderService {

  constructor() { }

    uploadFile( file:File, id:string ){

      //Se crea como una promesa para que de esta forma los demás elementos "sepan" cuando ha finalizado la ejecución y qué es lo que devuelve la misma.
      return new Promise( ( resolve, reject ) =>{
          // 1. Crear el formdata que es lo que se le enviará a la petición por Ajax, este es el payload que se enviará a subir.
          let formdata = new FormData();

          // 2. Inicializar la petición Ajax.
          let xhr = new XMLHttpRequest();

          // 3. Hacer la confirguración del formdata.
          formdata.append( 'attached', file, file.name );

          // 4. Configurar la petición Ajax
          xhr.onreadystatechange = function(){

          if( xhr.readyState === 4 ){

            if( xhr.status === 200 ){
              // 5. Si el archivo sube exitosamente se llama al resolve de la promesa y se envía una respuesta.
              resolve( xhr.response );
            }else{
              // 6. Cualquier cosa que no sea un estatus 200 se envía como resultado el reject igualmente con la respuesta.
              reject( xhr.response );
            }
          }
        };

        // 7. Definir la url a la que se le hará la petición.
        let url = Ruta.url + 'upload/lab/' + id;

        // 8. Preparar la petición Ajax
        xhr.open( 'PUT', url, true );

        // 9. Ejecutar la petición Ajax
        xhr.send( formdata );

      });

    }

}
