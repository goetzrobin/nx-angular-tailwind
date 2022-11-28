import {Directive, HostBinding, Input} from "@angular/core";

const base = 'inline-flex items-center rounded-md border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
const size = 'px-4 py-2 text-sm'
const theme = 'border-transparent bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500'
const themeSecondary = 'border-gray-300 bg-white text-gray-700 hover:bg-sky-700 focus:ring-gray-50'

export type Theme = 'primary' | 'secondary';

const buildTwClasses = (currentTheme: Theme): string =>
  `${base} ${size} ${currentTheme === 'secondary' ? themeSecondary : theme}`;

@Directive({
  selector: '[natButton]',
  standalone: true,
})
export class ButtonDirective {
  @HostBinding('class')
  private twClasses = buildTwClasses('primary')

  private _theme: Theme = 'primary';
  @Input()
  set theme(value: Theme) {
    this._theme = value;
    this.twClasses = buildTwClasses(this._theme);
  }
}
