import React, { useState, useEffect } from "react";

const AnimatedText = ({ prefix, words, color = "text-black" }) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typeEffect = () => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // Hold before deleting
        }
      } else {
        if (charIndex > 0) {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length); // Switch word
        }
      }
    };

    const typingSpeed = isDeleting ? 100 : 400;
    const timer = setTimeout(typeEffect, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <h1 className="text-3xl font-bold text-white">
      {prefix}{" "}
      <span className={`inline-block ${color}`}>
        {text}
        <span className="animate-blink font-bold text-4xl w-2 inline-block">
          |
        </span>
      </span>
    </h1>
  );
};

export default AnimatedText;
