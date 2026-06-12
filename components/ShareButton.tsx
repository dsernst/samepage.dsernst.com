'use client';

import { useState } from 'react';

export function ShareButton() {
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="share-top">
      <button className="btn" onClick={() => setShowNote(true)}>
        Get a shareable link →
      </button>
      <div className={`mockup-note${showNote ? ' visible' : ''}`}>
        Just a mockup for now — link generation coming soon.
      </div>
    </div>
  );
}
