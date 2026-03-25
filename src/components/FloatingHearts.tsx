import { useEffect, useState } from "react";

const hearts = ["💕", "💖", "💗", "💓", "🩷", "❤️", "💘"];

interface Heart {
  id: number;
  left: number;
  duration: number;
  delay: number;
  emoji: string;
  size: number;
}

const FloatingHearts = () => {
  const [floatingHearts, setFloatingHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      emoji: hearts[Math.floor(Math.random() * hearts.length)],
      size: 0.8 + Math.random() * 1.2,
    }));
    setFloatingHearts(generated);
  }, []);

  return (
    <>
      {floatingHearts.map((h) => (
        <div
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            fontSize: `${h.size}rem`,
          }}
        >
          {h.emoji}
        </div>
      ))}
    </>
  );
};

export default FloatingHearts;
