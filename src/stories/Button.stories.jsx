import Button from '../components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'handleClick' } },
};

const Template = (args) => <Button {...args} />;

export const PrimaryBtn = Template.bind({});
PrimaryBtn.args = {
  variant: 'primary',
  children: 'Detail',
};

export const SecondaryBtn = Template.bind({});
SecondaryBtn.args = {
  variant: 'secondary',
  children: 'Detail',
};
