import Card from '../components/Card/Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const ArtistCard = Template.bind({});

ArtistCard.args = {
  direction: 'row',
};
