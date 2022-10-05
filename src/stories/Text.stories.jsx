import Text from '../components/Text/Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    color: {
      control: 'color',
    },
    children: {
      control: 'text',
    },
  },
};

const Template = (args) => <Text {...args} />;

export const Content = Template.bind({});
Content.args = {
  color: '#000',
  textStyle: 'normal',
  size: 'sm',
  children: '',
};

export const Desc = Template.bind({});
Desc.args = {
  color: '#000',
  textStyle: 'italic',
  size: 'sm',
  children: '',
};

export const Title = Template.bind({});
Title.args = {
  color: '#000',
  textStyle: 'bold',
  size: 'md',
  children: '',
};
