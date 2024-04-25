import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://www.ghibli.jp/gallery/ponyo016.jpg"
        alt="Ponyo"
      />
      <AvatarFallback>🐟</AvatarFallback>
    </Avatar>
  ),
};
