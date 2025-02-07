import React from "react";
import MenuList from "../Components/MenuList";

export default {
  title: "Components/MenuList",
  component: MenuList,
};

const Template = (args) => <MenuList {...args} />;

export const Default = Template.bind({});
Default.args = {};
