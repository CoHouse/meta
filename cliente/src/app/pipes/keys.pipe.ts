import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform( value: any ): any {
    let keys = [];

    for ( let _id in value ){
      keys.push( _id )
    }

    return keys;
  }

}
