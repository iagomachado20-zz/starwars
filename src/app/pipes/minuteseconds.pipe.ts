import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinutesecondsPipe implements PipeTransform {

  transform(t){

    let minutes, seconds;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;

    if (t%60 == 0) {
      seconds = '00'
    }
    else if (t%60 < 10) {
      seconds = `0${t% 60}`;
    }
    else {
      seconds = t%60;
    }
    
    return [
      minutes,
      seconds
    ].join(':');

  }
}
