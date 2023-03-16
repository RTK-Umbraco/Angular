import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import {Md5} from 'ts-md5';

@Pipe({
  name: 'md5'
})
export class Md5Pipe implements PipeTransform {

  transform(value: string , ...args: unknown[]): string | Int32Array | undefined {
    const md5 = new Md5();

    return  md5.appendStr(value).end();
  }
}
