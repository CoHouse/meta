import { Component, OnInit } from '@angular/core';
import { Post } from '../../../interfaces/post.interface';
import { PostService } from '../../../services/post.service';
import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {

  public categories;
  private blogPost:Post = {
    _id:"",
    title: "Título de prueba",
    subtitle: "subtítulo de prueba",
    image: "/assets/img/f.jpg",
    date: "05/03/18 13:00",
    author: "MBC Crew",
    category: "Ejercicios",
    visibleLevel: "V",
    text: "<p style=\"text-align: justify;\">Muchas de las dudas más recurrentes de los usuarios menos experimentados son relacionadas a los trades, wallets y en general las herramientas para comprar y vender criptomonedas, hoy haremos una guía en relación a al sitio de trading más famoso de México (aunque no opera exclusivamente en dicho país).</p>\r\n\r\n<h2 style=\"text-align: justify;\">Bitso</h2>\r\n<p style=\"text-align: justify;\">Algún experto nos ha comentado que Bitso es un sitio seguro para tener ahí nuestras criptomonedas (Bitcoin, Ether y Ripple), además de que la interfaz es realmente sencilla de entender, sobretodo si vamos empezando en estos menesteres.</p>\r\n<p style=\"text-align: justify;\">Lo que se puede hacer es realmente básico, no esperes muchas funciones o miles de criptomonedas aunque en mi opinión, esto es una ventaja ya que es la sencillez de la interfaz lo que hace de este sitio un ideal para comenzar en un mundo tan complicado.</p>\r\n\r\n<h2>Creando una cuenta en Bitso</h2>\r\nLo primer es ir a la <a href=\"https://bitso.com/\" target=\"_blank\" rel=\"noopener noreferrer\">página de inicio dando clic aquí</a>. A penas entrar a la página, puedes ver un llamativo botón que pone \"ABRE TU CUENTA Y COMPRA BITCOIN\" es ahí en donde daremos clic para iniciar el proceso de creación de cuenta."
  }

  // constructor( private _postService:PostService, private _activatedRoute:ActivatedRoute ){  }
  constructor( public _post:PostService ){
    this._post.getCategories().subscribe( result => {
      this.categories = console.log(result.showBlogCategories);
    }, error => {
      var errorMessage = <any>error;
    });
 }

  ngOnInit() { }

}

// public categories;
//
// constructor( public _blog:BlogService ) {
//   this._blog.getCategories().subscribe( result => {
//     this.categories = result.showBlogCategories;
//   }, error => {
//     var errorMessage = <any>error;
//   });
// }
