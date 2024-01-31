import { Meta, StoryObj } from "@storybook/react";
import { clsx } from "clsx";

import Divider, { DividerProps } from "./Divider.js";
import styles from "./divider.stories.module.css";

const Template = (args: DividerProps) => {
  return (
    <div
      className={clsx(styles.templateRoot, !args.vertical && styles.isVertical)}
    >
      <Divider {...args} />
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolorem
        veritatis quia sit eveniet quae veniam. At alias cumque fuga, amet
        perspiciatis hic! Magnam reprehenderit,
      </div>
      <Divider {...args} />
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolorem
        veritatis quia sit eveniet quae veniam. At alias cumque fuga, amet
        perspiciatis hic! Magnam reprehenderit,
      </div>
      <Divider {...args} />
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolorem
        veritatis quia sit eveniet quae veniam. At alias cumque fuga, amet
        perspiciatis hic! Magnam reprehenderit,
      </div>
    </div>
  );
};

const metadata: Meta<typeof Divider> = {
  argTypes: {
    color: { control: "color" },
  },
  component: Template,
};

export default metadata;

type Story = StoryObj<typeof Divider>;

export const Basic: Story = {};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
};
