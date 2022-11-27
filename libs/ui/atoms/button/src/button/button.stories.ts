import {Meta, Story} from "@storybook/angular";
import {ButtonDirective} from "./button.directive";

export default {
  title: 'Design System/Atoms/Button',
} as Meta<ButtonDirective>;

const Template: Story<ButtonDirective> = (args: ButtonDirective) => ({
  props: args,
  moduleMetadata: {
    imports: [ButtonDirective],
  },
  template: `<button natButton>Click</button>`
});


export const Primary = Template.bind({});
