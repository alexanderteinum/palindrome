import { useState } from "react";
import "./App.css";

function reverseString(str) {
  return str.split("").reverse().join("");
}

function checkPalindrome(str) {
  if (str.trim().length === 0) {
    return "String is empty";
  }
  return str.toLowerCase() === reverseString(str).toLowerCase()
    ? "Yes, it's a palindrome!"
    : "No, not a palindrome.";
}

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <h1>PalindromeChecker</h1>
      <label>Name</label>
      <input
        placeholder="Type in your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <PalindromeResult result={checkPalindrome(name)} />
    </>
  );
}

function PalindromeResult({ result }) {
  return (
    <div className="result">
      {result && <p>{result}</p>}
    </div>
  );
}

export default App;