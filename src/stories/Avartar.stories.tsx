import type { Meta, StoryObj } from "@storybook/react";

import AvatarTest from "../components/test/AvatarTest";

const meta: Meta<typeof AvatarTest> = {
  component: AvatarTest,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AvatarTest>;

export const Default: Story = {
  render: () => <AvatarTest />,
};
