import type { Meta, StoryObj } from "@storybook/react";

import { AppleIcon } from "lucide-react";
import { Button } from "../components/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "rounded",
        "outline",
        "secondary",
        "ghost",
        "link",
        "iconText",
        "expandIcon",
        "ringHover",
        "shine",
        "gooeyRight",
        "gooeyLeft",
        "linkHover1",
        "linkHover2",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "select" },
    },
    icon: {
      control: { type: "none" },
    },
    withIcon: {
      control: { type: "select" },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const IconLeft: Story = {
  args: {
    children: "Button",
    icon: <AppleIcon />,
    iconPlacement: "left",
    withIcon: "default",
  },
};

export const IconRight: Story = {
  args: {
    children: "Button",
    icon: <AppleIcon />,
    iconPlacement: "right",
    withIcon: "default",
  },
};
