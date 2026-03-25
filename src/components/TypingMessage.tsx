import { useEffect, useState } from "react";

interface TypingMessageProps {
  message: string;
  speed?: number;
  onComplete?: () => void;
}

const TypingMessage = ({ message, speed = 40, onComplete }: TypingMessageProps) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < message.length) {
        setDisplayed(message.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [message, speed, onComplete]);

  return (
    <p className="text-base sm:text-lg leading-relaxed text-foreground/80 max-w-lg mx-auto font-body">
      {displayed}
      {!done && <span className="typing-cursor text-primary">|</span>}
    </p>
  );
};

export default TypingMessage;
