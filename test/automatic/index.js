import ReactDom from 'react-dom';
import { useState } from 'react';
import './style.css';

const App = () => {
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <h1>Test App</h1>
      <p>
        <input
          placeholder="Write some text..."
          type="text"
          value={inputText}
          onChange={event => {
            setInputText(event.target.value);
          }}
        />
      </p>
      <p>
        <strong>Text: {inputText}</strong>
      </p>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
