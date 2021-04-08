import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moment',
  pure: false
})
export class MomentPipe implements PipeTransform {

  transform(m: moment.Moment, format: string = 'MMMM YYYY'): any {
    return m.format(format);
  }

}
