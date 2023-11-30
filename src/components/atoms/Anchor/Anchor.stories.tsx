import { Meta, StoryObj } from "@storybook/react";

import {
  COMPONENT_SIZES,
  COMPONENT_SPACINGS,
} from "../../../tools/constants/props.js";
import { storyIconControl, storyIconMap } from "../../../tools/storybook.js";
import Anchor, { ANCHOR_VARIANTS } from "./Anchor.js";

const metadata: Meta<typeof Anchor> = {
  argTypes: {
    as: { control: "text" },
    iconAfter: storyIconControl,
    iconBefore: storyIconControl,
  },
  args: {
    as: "a",
    children: "Anchor",
  },
  component: Anchor,
  render: (args) => <Anchor href="/" {...args} />,
};
export default metadata;

type Story = StoryObj<typeof Anchor>;

export const Basic: Story = {};

export const WithIcon: Story = {
  args: {
    ...Basic.args,
    iconAfter: storyIconMap.SquareRoundedChevronRightFilled,
    iconBefore: storyIconMap.SquareRoundedChevronLeftFilled,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="story-grid">
      <div>
        <Anchor href="/" variant="outlined" {...args}>
          Anchor
        </Anchor>
      </div>
      {COMPONENT_SIZES.map((size) => (
        <div key={size}>
          <Anchor href="/" size={size} variant="outlined" {...args}>
            &apos;{size}&apos; anchor
          </Anchor>
        </div>
      ))}
    </div>
  ),
};

export const Spacings: Story = {
  render: (args) => (
    <div className="story-grid">
      <div>
        <Anchor href="/" variant="outlined" {...args}>
          Anchor
        </Anchor>
      </div>
      {COMPONENT_SPACINGS.map((spacing) => (
        <div key={spacing}>
          <Anchor href="/" spacing={spacing} variant="outlined" {...args}>
            &apos;{spacing}&apos; anchor
          </Anchor>
        </div>
      ))}
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="story-grid">
      <div>
        <Anchor href="/" {...args}>
          Anchor
        </Anchor>
      </div>
      {ANCHOR_VARIANTS.map((variant) => (
        <div key={variant}>
          <Anchor href="/" variant={variant} {...args}>
            &apos;{variant}&apos; anchor
          </Anchor>
        </div>
      ))}
    </div>
  ),
};

export const NoVisited: Story = {
  args: {
    children: "Color anchor",
    noVisited: true,
    variant: "color",
  },
};
