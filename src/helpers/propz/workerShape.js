import PropTypes from 'prop-types';

const workerShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  graduate: PropTypes.bool.isRequired,
});

export default { workerShape };
