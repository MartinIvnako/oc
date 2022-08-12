import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Map from "./Map";

export default {
    component: Map,
    title: "Map",
};

const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />;
export const Default = Template.bind({});
Default.args = {};
