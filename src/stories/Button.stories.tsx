import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button>Primary button</Button>,
};
