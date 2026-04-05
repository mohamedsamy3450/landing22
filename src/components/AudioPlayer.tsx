import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * Audio Player Component
 * Plays background music with toggle control
 * YouTube: https://youtu.be/tUi35BACJFs?si=gcqkqioaMJ9cwQWe
 */

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Open YouTube video in new tab
    if (!isPlaying) {
      window.open('https://youtu.be/tUi35BACJFs?si=gcqkqioaMJ9cwQWe', '_blank');
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-8 right-8 z-40 p-3 rounded-full border border-border bg-card/80 backdrop-blur-sm hover:border-accent transition-all duration-300 group"
      style={{
        boxShadow: isPlaying ? '0 0 20px rgba(0, 212, 255, 0.5)' : '0 0 10px rgba(0, 212, 255, 0.1)',
      }}
      title={isPlaying ? 'Stop music' : 'Play music'}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-accent group-hover:text-secondary transition-colors" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
      )}
    </button>
  );
}
