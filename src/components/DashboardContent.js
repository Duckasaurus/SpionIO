import React from 'react';
import './../styles/Home.css';

const DashboardContent = ({recordingNodes}) => {
  return (
    <div>
      <div className='recording-latest-updates'>
        {recordingNodes}
      </div>
    </div>
  )
}

export default DashboardContent;