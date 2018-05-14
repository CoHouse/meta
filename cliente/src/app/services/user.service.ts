import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import { User } from '../interfaces/user.interface';
import { FilesUploaderService } from '../services/files-uploader.service';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  public url :string;
  public user: User;

  constructor( public _http:HttpClient, public _uploader:FilesUploaderService ){ }

  getUser(){
    this.user = {
      inquest: {
        generals:{
          userName: null,
          age: null,
          email: localStorage.getItem("email"),
          completedFlag: null
        },
        background:{
          completedFlag: null
        },
        anthropometric:{
          completedFlag: null
        },
        biochemicals:{
          completedFlag: null
        },
        clinical:{
          completedFlag: null
        },
        dietetics:{
          completedFlag: null
        }
      },
      completedInquestFlag:null,
      plan:{
        alimentary:{
          sendByDietist: null
        },
        exercise:{
          sendByPlanner: null
        }
      }
    }

    this.url = Ruta.url + "getUser/";
    let body = JSON.stringify( this.user );

    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( res => res );
  }

  sendUser( user:User ){
    this.url = Ruta.url + "saveUser/";
    let body = JSON.stringify( user );

    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( res => res );
  }

  updateUser( user:User, _id:string ){
    this.url = Ruta.url + "updateUser/" + _id;
    let body = JSON.stringify( user );
    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );
    return this._http.put( this.url, body, { headers } ).map( res => res );
  }

  saveFileUser( file:File, _id:string, fileName:string ){
    this._uploader.uploadFile( file, "lab" , _id, fileName )
    .then( resp =>{
      console.log( "Archivo guardado correctamente para el usuario " + _id );
    }).catch( resp => {
      console.log(resp);
      return;
    });
  }

}
