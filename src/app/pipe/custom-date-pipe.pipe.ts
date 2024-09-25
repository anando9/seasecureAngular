import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDatePipe',
  standalone: true,
})
export class CustomDatePipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    let c = ''
    value.split(',').forEach(
      (e:any, i:any) => {
        c = c + (i == 0 ? e : (', '+ e.toLowerCase()))
      }
    )
    return c
  }

}
