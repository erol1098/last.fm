import Box from '../components/Box/Box';

export default {
  title: 'Components/Box',
  component: Box,
};

const Template = (args) => <Box {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'column',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'row',
};
export const Start = Template.bind({});
Start.args = {
  direction: 'start',
};
