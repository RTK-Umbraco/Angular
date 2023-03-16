import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'md5'
})
export class Md5Pipe implements PipeTransform {

  transform(value: string , ...args: unknown[]): string {

    //MISSING MD5 pipe
    return ""

  }
}
