import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import store from '../redux/';
import Card from '../components/Card/Card';

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Card {...args} />;

export const ArtistCard = Template.bind({});

ArtistCard.args = {
  direction: 'row',
};
