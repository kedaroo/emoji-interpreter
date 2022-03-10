import { useState } from 'react';
import './App.css';

const emojiDictionary ={
  "😂": "laughing",
  "😉": "winking",
  "😎": "cool",
  "😍": "lovely",
  "😏": "smirking",
  "😒": "unamused",
  "🤑": "greedy",
}

const emojis = Object.keys(emojiDictionary);

function App() {

  const [meaning, setMeaning] = useState("meaning will appear here");

  function emojiChangeInputHandler(event) {
    let emojiInput = event.target.value;
    let meaning = emojiDictionary[emojiInput];
    if (meaning === undefined) {
      meaning = "we don't have the meaning to this emoji!"
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(item) {
    let meaning = emojiDictionary[item];
    if (meaning === undefined) {
      meaning = "we don't have the meaning to this emoji!"
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Welcome to Emoji Interpreter!</h1>
      <input
        className="input-emoji" 
        onChange={emojiChangeInputHandler} 
        placeholder="enter your emoji here"
      ></input>
      <div className="div-meaning">{meaning}</div>
      <ul className="list non-bullet">
        {
          emojis.map(item => (
            <li
              className="list-inline list-emoji" 
              onClick={() => emojiClickHandler(item)}
            >{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
