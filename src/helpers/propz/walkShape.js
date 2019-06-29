import PropTypes from 'prop-types';

const walkShape = PropTypes.shape({
  dogId: PropTypes.string.isRequired,
  employeeId: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
});

export default { walkShape };
