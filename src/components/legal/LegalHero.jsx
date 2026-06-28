import { useState } from 'react'

export default function LegalHero({ title, subtitle, lastUpdated, wordCount, hideActions }) {
  const [showTooltip, setShowTooltip] = useState(false)
  const readTime = Math.ceil(wordCount / 200) // 200 words/min average reading rate

  function handlePrint() {
    window.print()
  }

  function handleDownload(e) {
    e.preventDefault()
    setShowTooltip(true)
    setTimeout(() => setShowTooltip(false), 3000)
  }

  return (
    <div className="legal-hero">
      <div className="wrap">
        <span className="legal-badge font-mono">LEGAL DOCUMENT</span>
        <h1 className="display legal-title">{title}</h1>
        <p className="legal-subtitle">{subtitle}</p>

        {/* Action Toolbar */}
        <div className="legal-toolbar font-mono">
          <div className="toolbar-info">
            <span>Last Updated: {lastUpdated}</span>
            <span className="divider">•</span>
            <span>{readTime} min read ({wordCount} words)</span>
          </div>

          {!hideActions && (
            <div className="toolbar-actions">
              <button onClick={handlePrint} className="toolbar-btn">
                🖨 Print Page
              </button>
              <div className="download-btn-container" style={{ position: 'relative' }}>
                <button onClick={handleDownload} className="toolbar-btn">
                  💾 Download PDF
                </button>
                {showTooltip && (
                  <div className="pdf-tooltip font-sans">
                    PDF generation is disabled. Please use "Print Page" and select "Save as PDF".
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
