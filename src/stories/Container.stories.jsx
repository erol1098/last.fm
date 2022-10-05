import Container from '../components/Container/Container';

export default {
  title: 'Components/Container',
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const Base = Template.bind({});
Base.args = {
  width: 'base',
};
export const Narrow = Template.bind({});
Narrow.args = {
  width: 'narrow',
};

export const Wide = Template.bind({});
Wide.args = {
  width: 'wide',
};
