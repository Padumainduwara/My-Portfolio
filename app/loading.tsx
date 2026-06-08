export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#020010',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Loading page content"
      role="status"
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          borderRadius: '100%',
          background: 'rgba(168, 85, 247, 0.1)',
          filter: 'blur(80px)',
        }}
      />

      {/* Loading spinner */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        style={{ animation: 'spin 1s linear infinite' }}
      >
        <circle
          cx="20"
          cy="20"
          r="16"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="3"
        />
        <circle
          cx="20"
          cy="20"
          r="16"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="80"
          strokeDashoffset="20"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      <p
        style={{
          marginTop: '20px',
          color: '#64748b',
          fontSize: '12px',
          fontFamily: '"JetBrains Mono", monospace',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
      >
        Loading...
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
