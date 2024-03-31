import type { Meta, StoryObj } from "@storybook/react";

import { AppleIcon } from "lucide-react";
import { Input } from "./Input";
import { InputWithIcon } from "./InputWithIcon";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => <Input />,
};

export const InputIcon: Story = {
  render: () => <InputWithIcon Icon={<AppleIcon />} />,
};
