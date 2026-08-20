import PropTypes from 'prop-types';

/**
 * StepIndicator component
 * @param {Object} props - Component props
 * @param {number} props.currentStep - Current active step
 * @param {Array} props.steps - Array of step objects
 * @returns {JSX.Element} StepIndicator component
 */
export default function StepIndicator({ currentStep, steps }) {
  return (
    <div className="flex items-center justify-center space-x-2">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index + 1 <= currentStep
                ? 'bg-primary text-white'
                : 'bg-border text-text-secondary'
            }`}
          >
            {index + 1 <= currentStep ? (
              <span className="material-symbols-outlined">check</span>
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div className="w-8 h-1 bg-border mx-1"></div>
          )}
        </div>
      ))}
    </div>
  );
}

StepIndicator.propTypes = {
  currentStep: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};
