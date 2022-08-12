import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

export default {
    component: Card,
    title: "Cards/Card",
};

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Default = Template.bind({});
Default.args = {
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "/images/cart.svg",
    imgAlt: "cart",
};
