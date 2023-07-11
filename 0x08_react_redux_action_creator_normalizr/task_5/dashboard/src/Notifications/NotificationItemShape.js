import PropType from 'prop-types';

const NotificationItemShape = PropType.shape({
  id: PropType.number.isRequired,
  html: PropType.shape({__html: PropType.string}),
  type: PropType.oneOf(['default', 'urgent']).isRequired,
  value: PropType.string,
})

export default NotificationItemShape;
