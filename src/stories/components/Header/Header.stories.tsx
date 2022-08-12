import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./Header";

export default {
    component: Header,
    title: "Header",
};

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;
export const Default = Template.bind({});
Default.args = {};
