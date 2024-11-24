const reverseString = (str) => str.split("").reverse().join("");

const cleanString = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");

const isPalindromeSentence = (str) => {
  const cleaned = cleanString(str);
  return cleaned === reverseString(cleaned);
};

export const checkPalindrome = (str, isSentenceMode) => {
  const trimmed = str.trim();

  if (!trimmed) return "String is empty";

  const isPalindrome = isSentenceMode
    ? isPalindromeSentence(trimmed)
    : trimmed.toLowerCase() === reverseString(trimmed.toLowerCase());

  return isPalindrome
    ? `Yes, it's a palindrome!${isSentenceMode ? " (Sentence mode)" : ""}`
    : `No, not a palindrome.${isSentenceMode ? " (Sentence mode)" : ""}`;
};
