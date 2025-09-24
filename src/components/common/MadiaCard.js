import React from 'react';

function MediaCard({ name, description, mediaUrl }) {
  const isVideo = mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.webm');
  const isGif = mediaUrl.endsWith('.gif');

  return (
    <div className="media-card">
      <div className="media-container">
        {isVideo ? (
          <video controls loop muted>
            <source src={mediaUrl} type="video/mp4" />
            <div className="media-placeholder">📹 Vídeo não disponível.</div>
          </video>
        ) : isGif ? (
          <img src={mediaUrl} alt={name} />
        ) : (
          <img src={mediaUrl} alt={name} />
        )}
      </div>
      <div className="media-label">{name}</div>
      <div className="media-description">{description}</div>
    </div>
  );
}

export default MediaCard;