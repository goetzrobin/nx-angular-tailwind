import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[natButton]',
  standalone: true,
})
export class ButtonDirective {
  @HostBinding('class')
  public class = 'bg-sky-500'
}
