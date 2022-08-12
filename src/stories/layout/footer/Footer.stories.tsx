import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from "./Footer";

export default {
    component: Footer,
    title: "Layout/Footer",
};

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;
export const Default = Template.bind({});
Default.args = {};
