import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../components/ui/badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "secondary", "destructive", "outline"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "#서울",
  },
};
