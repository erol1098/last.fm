import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args) => <Button {...args} />;

export const Detail = Template.bind({});

Detail.args = {
  backgroundColor: 'blue',
  color: 'white',
  label: 'Detail',
};
