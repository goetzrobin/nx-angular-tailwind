import {Directive, HostBinding, Input} from "@angular/core";

const base = `inline-flex items-center rounded-md border font-medium shadow-sm
  focus:outline-none focus:ring-2 focus:ring-offset-2
  disabled:opacity-50 disabled:focus:ring-0 disabled:active:ring-0`;

export const themes = ['primary', 'secondary'] as const;
export type Theme = typeof themes[number];
const themeClasses: { [key in Theme]: string } = {
  primary: 'border-transparent bg-sky-600 text-white hover:bg-sky-700 disabled:bg-sky-600 focus:ring-sky-500',
  secondary: 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:bg-white focus:ring-sky-500'
}

export const sizes = ['base', 'l'] as const;
export type Size = typeof sizes[number];
const sizeClasses: { [key in Size]: string } = {
  base: 'px-4 py-2 text-sm',
  l: 'px-5 py-3 text-base'
};

const buildTwClasses = (currentTheme: Theme, size: Size): string =>
  `${base} ${sizeClasses[size]} ${themeClasses[currentTheme]}`;

@Directive({
  selector: '[natButton]',
  standalone: true,
})
export class ButtonDirective {
  @HostBinding('class')
  private twClasses = buildTwClasses('primary', 'base');

  private _theme: Theme = 'primary';
  @Input()
  set theme(value: Theme) {
    this._theme = value;
    this.twClasses = buildTwClasses(this._theme, this._size);
  }

  private _size: Size = 'base';
  @Input()
  set size(value: Size) {
    this._size = value;
    this.twClasses = buildTwClasses(this._theme, this._size);
  }
}
