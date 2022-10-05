import Image from '../components/Image/Image';

export default {
  title: 'Components/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};
export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
};
export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};
