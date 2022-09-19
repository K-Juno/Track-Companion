import Card from './Card';

export default {
  title: 'MyComponents/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const FirstCard = Template.bind({});
FirstCard.args = {
  title: 'My first card',
};

export const SecondCard = Template.bind({});
SecondCard.args = {
  title: 'My second card',
};
