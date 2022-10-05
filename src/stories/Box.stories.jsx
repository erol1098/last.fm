import { Provider } from 'react-redux';

import Box from '../components/Box/Box';
import store from '../redux/';

export default {
  title: 'Components/Box',
  component: Box,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
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
