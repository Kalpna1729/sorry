import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ForgiveMeButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full font-body font-semibold transition-all duration-300 hover:scale-105"
        size="lg"
      >
        Forgive Me? 💖
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-card border-primary/20 text-center max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display text-primary">
              Thank you Kanchan❤️
            </DialogTitle>
          </DialogHeader>
          <p className="text-foreground/70 font-body text-lg py-4">
            You made my day! 🥹💖
          </p>
          <div className="text-4xl bounce-heart">💕</div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ForgiveMeButton;
