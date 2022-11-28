import {ButtonDirective} from "./button.directive";
import {Meta, Story} from "@storybook/angular";

export default {
  title: 'Design System/Atoms/Button',
} as Meta<ButtonDirective>;

export const Default: Story<ButtonDirective> = () => ({
  moduleMetadata: {
    imports: [ButtonDirective],
  },
  template: `<button natButton>Click</button>`
});
