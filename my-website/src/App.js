import React from 'react';

function App() {
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h1>Currently under reconstruction!!! Please check back later :)</h1>
      <div>
        <h3>In the mean time, check out what I'm currently listening to</h3>
        <iframe 
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/0SH3wYTJ6RMMuYP8XgfWfO?utm_source=generator" 
          width="100%" 
          height="352" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
