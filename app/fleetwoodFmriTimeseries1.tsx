import Image from 'next/image';
import myImage from '../public/Fleetwood_fmri_timeseries_covariance_matrix-Screenshot 2024-04-26 205835.png';
import React from 'react';

const fleetwoodFmriTimeseries1: React.FC = () => {
  return (
    <div>
      {/* Use the Image component with required props */}
      <Image src={myImage} alt="Some text" />
    </div>
  );
}

export default fleetwoodFmriTimeseries1;