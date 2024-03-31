import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "secondary", "destructive", "outline"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "#서울",
  },
};
