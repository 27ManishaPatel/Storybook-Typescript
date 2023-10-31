import { Meta, StoryObj } from "@storybook/react";
import Light from './Light';


const meta: Meta<typeof Light> = {
    component : Light,
    title: 'Light',
    argTypes:{
        variant:{
            control:{type: 'select'},
            options: ['green', 'yellow', 'red']
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

 export const green: Story = {
    args: {
variant: 'green',
    }
}
export const red: Story = {
    args: {
variant: 'red',
    }
}
export const yellow: Story = {
    args: {
variant: 'yellow',
    }
}

export const Grouped: Story = {
    render: (args) => <div style={
        {
            display: "flex",
            backgroundColor:'grey',
            flexDirection: "column",
            gap: 10,
            border: '1px solid black',
            width: 'max-content',
            padding: 10
        }
    }>
        <Light variant="red"/>
        <Light variant="yellow"/>
        <Light variant="green"/>
    </div>
}