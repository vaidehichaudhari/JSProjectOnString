function getTextareaValue() {
    return document.getElementById("textarea").value.trim();
  }
  
  function updateResult(result) {
    document.getElementById("result").textContent = result;
  }
  
  function toUpperCase() {
    const input = getTextareaValue();
    updateResult(input.toUpperCase());
  }
  
  function toLowerCase() {
    const input = getTextareaValue();
    updateResult(input.toLowerCase());
  }
  
  function toCamelCase() {
    const input = getTextareaValue();
    const camelCase = input
      .split(" ")
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join("");
    updateResult(camelCase);
  }
  
  function reverseString() {
    const input = getTextareaValue();
    updateResult(input.split("").reverse().join(""));
  }
  
  function countVowels() {
    const input = getTextareaValue();
    const vowels = input.match(/[aeiouAEIOU]/g);
    updateResult(vowels ? vowels.length : 0);
  }
  
  function countConsonants() {
    const input = getTextareaValue();
    const consonants = input.match(/[^aeiouAEIOU\s\d\W]/g);
    updateResult(consonants ? consonants.length : 0);
  }
  
  function countWords() {
    const input = getTextareaValue();
    const words = input.split(/\s+/).filter((word) => word.length > 0);
    updateResult(words.length);
  }
  
  function mostFrequentCharacter() {
    const input = getTextareaValue().replace(/\s+/g, "");
    const freqMap = {};
    for (const char of input) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }
    const mostFrequent = Object.keys(freqMap).reduce((a, b) =>
      freqMap[a] > freqMap[b] ? a : b
    );
    updateResult(`${mostFrequent} (${freqMap[mostFrequent]} times)`);
  }
  
  function checkAnagrams() {
    const input = getTextareaValue();
    const [str1, str2] = input.split(",").map((str) => str.trim());
    if (!str1 || !str2) {
      updateResult("Enter two strings separated by a comma.");
      return;
    }
    const sorted1 = str1.toLowerCase().split("").sort().join("");
    const sorted2 = str2.toLowerCase().split("").sort().join("");
    updateResult(sorted1 === sorted2 ? "Yes, Anagrams" : "No, not Anagrams");
  }
  
  function longestWord() {
    const input = getTextareaValue();
    const words = input.split(/\s+/);
    const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");
    updateResult(longest);
  }
  