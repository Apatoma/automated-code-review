import React from 'react';
import UploadCode from './components/UploadCode';
import AnalysisReport from './components/AnalysisReport';

function App() {
  return (
    <div>
      <h1>Automated Code Review</h1>
      <UploadCode />
      <AnalysisReport />
    </div>
  );
}

export default App;
