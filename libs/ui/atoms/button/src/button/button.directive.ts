import {Directive, HostBinding} from "@angular/core";

@Directive({
  selector: '[natButton]',
  standalone: true,
})
export class ButtonDirective {
  @HostBinding('class')
  private twClasses = 'bg-sky-500'
}
