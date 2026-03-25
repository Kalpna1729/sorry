import { useState, useEffect, useRef } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import TypingMessage from "@/components/TypingMessage";
import ForgiveMeButton from "@/components/ForgiveMeButton";

const apologyMessage =
  "Hey Kanchan... 🥺 I really wanted to see you today and even took a half day from office... But unfortunately I couldn't come... I'm really really sorry 💔 You mean a lot to me and I never wanted to disappoint you... Please forgive me ❤️";

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showMakeItUp, setShowMakeItUp] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setShowMessage(true), 1200);
    return () => clearTimeout(t1);
  }, []);

  const handleTypingComplete = () => {
    setTimeout(() => setShowMakeItUp(true), 400);
    setTimeout(() => setShowButton(true), 1000);
  };

  // Autoplay ambient music on first interaction
  useEffect(() => {
    const play = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(() => {});
      }
      document.removeEventListener("click", play);
    };
    document.addEventListener("click", play);
    return () => document.removeEventListener("click", play);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-background">
      <FloatingHearts />

      {/* Ambient music */}
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/audio/2024/11/29/audio_d00662614d.mp3"
      />

      <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-xl mx-auto">
        {/* Heading */}
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-primary drop-shadow-sm">
            I'm Really Sorry Kanchan <span className="bounce-heart">❤️</span>
          </h1>
        </div>

        {/* Typing message */}
        {showMessage && (
          <div className="animate-fade-in bg-card/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-primary/10 shadow-lg">
            <TypingMessage
              message={apologyMessage}
              speed={45}
              onComplete={handleTypingComplete}
            />
          </div>
        )}

        {/* Make it up line */}
        {showMakeItUp && (
          <p className="animate-fade-in text-lg sm:text-xl text-muted-foreground font-body italic">
            Can I make it up to you? <span className="bounce-heart">🥺</span>👉👈
          </p>
        )}

        {/* Forgive button */}
        {showButton && (
          <div className="animate-fade-in">
            <ForgiveMeButton />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-muted-foreground text-sm font-body z-10">
        Made with love, just for you 💕
      </footer>
    </div>
  );
};

export default Index;
