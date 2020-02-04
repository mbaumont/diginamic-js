import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if(!args[0]) return value.slice(0,100);
    else return value;
  }

}
