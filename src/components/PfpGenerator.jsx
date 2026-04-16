import React, { useState, useRef } from 'react';
import { FaUpload, FaMagic, FaDownload } from 'react-icons/fa';

const API_ENDPOINT = 'https://meme-generator.trungvudev.xyz/api/generate';
const API_KEY = '8fc43ac7-d52e-494a-92a5-56853287c348';
const MASCOT_URL = 'https://cdn.dexscreener.com/cms/images/rS2i99qcVAV6vkQV?width=800&height=800&quality=95&format=auto';

const PfpGenerator = () => {
  const [prompt, setPrompt] = useState('sitting on a golden throne wearing sunglasses');
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(MASCOT_URL);
  const [resultUrl, setResultUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const suggestions = [
    "laser eyes in space",
    "wearing a tiny tuxedo",
    "as a pop-art comic book hero",
    "made of solid gold"
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const objUrl = URL.createObjectURL(file);
      setPreviewUrl(objUrl);
      setResultUrl(null); // Clear previous result
    }
  };

  const generatePfp = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);

    const fullPrompt = `In a vibrant neubrutalist pop-art style with thick outlines: ${prompt}`;

    try {
      const formData = new FormData();
      formData.append('prompt', fullPrompt);
      
      if (imageFile) {
        formData.append('image', imageFile);
      } else {
        formData.append('image', MASCOT_URL);
      }

      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'X-API-KEY': API_KEY
        },
        body: formData
      });

      if (!res.ok) {
        let errStr = `Server error ${res.status}`;
        try {
          const errJson = await res.json();
          errStr = errJson.error || errJson.message || errStr;
        } catch(e) {}
        throw new Error(errStr);
      }

      const blob = await res.blob();
      
      if (resultUrl) {
        URL.revokeObjectURL(resultUrl);
      }
      
      const newUrl = URL.createObjectURL(blob);
      setResultUrl(newUrl);

    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to generate image. Try again!');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!resultUrl) return;
    const link = document.createElement('a');
    link.href = resultUrl;
    link.download = `hyrax-pfp-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="pfp-gen" style={{ background: 'var(--paper)' }}>
      <div className="container">
        <h2 className="section-title">Mascot Maker</h2>
        
        <div className="pfp-layout" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'start'
        }}>
          
          {/* Left Panel: Preview / Result */}
          <div className="card-nb pfp-drop-zone" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--white)', overflow: 'hidden', padding: 0 }}>
            {resultUrl ? (
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                 <img 
                  src={resultUrl} 
                  alt="Generated PFP" 
                  style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }} 
                />
                <div style={{ padding: '20px' }}>
                  <button onClick={handleDownload} className="btn-nb" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <FaDownload /> DOWNLOAD PFP
                  </button>
                </div>
              </div>
            ) : (
              <img 
                src={previewUrl} 
                alt="Source preview" 
                style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }} 
              />
            )}
          </div>

          {/* Right Panel: Controls */}
          <div className="pfp-controls" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="card-nb">
              <h3 className="font-heading" style={{ fontSize: '1.5rem', marginBottom: '15px' }}>1. Base Image</h3>
              <p style={{ marginBottom: '15px', fontWeight: 500 }}>Upload a photo or use the default Hyrax.</p>
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                style={{ display: 'none' }} 
              />
              <button onClick={() => fileInputRef.current.click()} className="btn-nb btn-white" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <FaUpload /> UPLOAD IMAGE
              </button>
            </div>

            <div className="card-nb">
              <h3 className="font-heading" style={{ fontSize: '1.5rem', marginBottom: '15px' }}>2. Describe the Vibe</h3>
              <textarea 
                className="input-nb"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="What should he be doing?"
                rows={4}
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '4px solid var(--ink)',
                  fontFamily: 'Fredoka, sans-serif',
                  fontSize: '1.1rem',
                  resize: 'vertical',
                  marginBottom: '15px'
                }}
              />

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                {suggestions.map((s, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setPrompt(s)}
                    style={{
                      padding: '5px 12px',
                      background: 'var(--white)',
                      border: '2px solid var(--ink)',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      fontFamily: 'Fredoka',
                      fontWeight: 600,
                      transition: 'var(--transition)'
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'var(--primary)'}
                    onMouseLeave={(e) => e.target.style.background = 'var(--white)'}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {error && <div style={{ color: 'red', fontWeight: 'bold', marginBottom: '15px' }}>{error}</div>}

              <button 
                onClick={generatePfp} 
                className="btn-nb" 
                disabled={loading}
                style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', opacity: loading ? 0.7 : 1 }}
              >
                <FaMagic /> {loading ? 'GENERATING...' : 'GENERATE PFP'}
              </button>
            </div>
            
            <div className="card-nb" style={{ background: 'var(--primary)' }}>
              <p style={{ fontWeight: 700, margin: 0 }}>
                💡 Tip: AI models are chaotic by nature. Keep trying different prompts if you don't get it right the first time!
              </p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .pfp-layout {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .pfp-drop-zone {
            min-height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PfpGenerator;
