import PropTypes from 'prop-types';

/**
 * TokenDisplay component
 * @param {Object} props - Component props
 * @param {string} props.tokenName - Name of the token
 * @param {string} props.tokenValue - Value of the token
 * @param {string} props.tokenType - Type of the token (color, spacing, typography)
 * @returns {JSX.Element} TokenDisplay component
 */
export default function TokenDisplay({ tokenName, tokenValue, tokenType }) {
  const getTokenStyle = () => {
    switch (tokenType) {
      case 'color':
        return {
          backgroundColor: tokenValue,
          width: '2rem',
          height: '2rem',
          borderRadius: 'var(--border-radius-sm)',
          border: '1px solid var(--color-border)',
        };
      case 'spacing':
        return {
          width: tokenValue,
          height: '1rem',
          backgroundColor: 'var(--color-border)',
        };
      case 'typography':
        return {
          fontSize: tokenValue,
          fontWeight: 'var(--font-weight-medium)',
        };
      default:
        return {};
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4 border border-border rounded-md">
      <div style={getTokenStyle()}></div>
      <div>
        <div className="text-sm text-text-secondary">{tokenName}</div>
        <div className="text-base font-medium">{tokenValue}</div>
      </div>
    </div>
  );
}

TokenDisplay.propTypes = {
  tokenName: PropTypes.string.isRequired,
  tokenValue: PropTypes.string.isRequired,
  tokenType: PropTypes.oneOf(['color', 'spacing', 'typography']).isRequired,
};
