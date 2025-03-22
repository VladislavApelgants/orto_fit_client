"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import "./videoComponent.scss";
export const VideoComponent = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <LiteYouTubeEmbed
        id="2bM-wnAj1To" // ID видео
        title="YouTube video player"
        noCookie={true} // Включает youtube-nocookie.com
      />
    </div>
  );
};
