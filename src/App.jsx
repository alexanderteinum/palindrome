import { useState } from "react";
import { checkPalindrome} from "./utility.jsx";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [isSentenceMode, setSentenceMode] = useState(false);

  return (
    <>
      <h1>Palindrome Checker</h1>
      <div>
        <label htmlFor="input-name">Name</label>
        <input
          id="input-name"
          placeholder="Type in your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="sentence-mode">Sentence mode</label>
        <input
          id="sentence-mode"
          type="checkbox"
          checked={isSentenceMode}
          onChange={() => setSentenceMode((prev) => !prev)}
        />
      </div>
      <PalindromeResult result={checkPalindrome(name, isSentenceMode)} />
    </>
  );
}

// Result Component
function PalindromeResult({ result }) {
  return result && <div><p>{result}</p></div>;
}

export default App;