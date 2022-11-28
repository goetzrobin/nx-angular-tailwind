import {Directive, HostBinding} from "@angular/core";

const base = 'inline-flex items-center rounded-md border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
const size = 'px-4 py-2 text-sm'
const theme = 'border-transparent bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500'

@Directive({
  selector: '[natButton]',
  standalone: true,
})
export class ButtonDirective {
  @HostBinding('class')
  private twClasses = `${base} ${size} ${theme}`
}
