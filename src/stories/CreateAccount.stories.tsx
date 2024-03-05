import type { Meta, StoryObj } from "@storybook/react";

import { CreateAccount } from "../components/test/CreateAccount";

const meta: Meta<typeof CreateAccount> = {
  component: CreateAccount,
};

export default meta;
type Story = StoryObj<typeof CreateAccount>;

export const Primary: Story = {
  render: () => <CreateAccount />,
};
