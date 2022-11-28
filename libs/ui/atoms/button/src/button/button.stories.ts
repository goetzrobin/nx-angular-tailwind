import {ButtonDirective, sizes, themes} from "./button.directive";
import {Meta, Story} from "@storybook/angular";

type ButtonDirectiveProps = ButtonDirective & {
  content: string;
};
export default {
  title: 'Design System/Atoms/Button',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: sizes,
    },
    theme: {
      control: { type: 'select' },
      options: themes,
    },
  },
} as Meta<ButtonDirectiveProps>;

const DefaultArgs = {size: sizes[0], theme: themes[0], content: 'Angular & Tailwind rock'};

const Template: Story<ButtonDirectiveProps & {  disabled: boolean; }> = (args) => ({
  props: args,
  moduleMetadata: {
    imports: [ButtonDirective],
  },
  template: `<button natButton [disabled]="disabled" [size]="size" [theme]="theme">{{content}}</button>`
});

export const Default = Template.bind({})
Default.args = {...DefaultArgs, disabled: false};


const AnchorTemplate: Story<ButtonDirectiveProps & {link: string}> = (args) => ({
  props: args,
  moduleMetadata: {
    imports: [ButtonDirective],
  },
  template: `<a target="_blank" [href]="link" natButton [size]="size" [theme]="theme">{{content}}</a>`
});

export const Anchor = AnchorTemplate.bind({})
Anchor.args = {...DefaultArgs, link: 'https://media.giphy.com/media/jJQC2puVZpTMO4vUs0/giphy.gif'};
