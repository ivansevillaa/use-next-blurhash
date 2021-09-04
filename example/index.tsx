import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Example app</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
