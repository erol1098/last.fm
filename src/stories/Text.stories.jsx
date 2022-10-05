import Text from '../components/Text/Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text',
    },
  },
};

const Template = (args) => <Text {...args} />;

export const Content = Template.bind({});
Content.args = {
  variant: 'content',
  style: 'normal',
  size: 'sm',
  children: '',
};

export const Desc = Template.bind({});
Desc.args = {
  variant: 'desc',
  style: 'italic',
  size: 'sm',
  children: '',
};

export const Title = Template.bind({});
Title.args = {
  variant: 'title',
  style: 'bold',
  size: 'md',
  children: '',
};
