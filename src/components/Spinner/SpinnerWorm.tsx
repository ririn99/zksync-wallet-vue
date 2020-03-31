import React from 'react';

import './Spinner.scss';

const SpinnerWorm: React.FC = (): JSX.Element => {
  return (
    <svg className="spinner-small" viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </svg>
  );
};

export default SpinnerWorm;