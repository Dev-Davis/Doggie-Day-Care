import PropTypes from 'prop-types';

const walkShape = PropTypes.shape({
  dogId: PropTypes.string.isRequired,
  employeeId: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
});

export default { walkShape };
