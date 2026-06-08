import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt =
  'Paduma Induwara — AI Expert, Data Scientist & Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          padding: '80px 100px',
          background: 'linear-gradient(135deg, #020010 0%, #0a0030 40%, #020010 100%)',
          fontFamily: 'Plus Jakarta Sans',
          position: 'relative',
        }}
      >
        {/* Background glow effects */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '100%',
            background: 'rgba(168, 85, 247, 0.2)',
            filter: 'blur(100px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '100%',
            background: 'rgba(34, 211, 238, 0.15)',
            filter: 'blur(100px)',
          }}
        />

        {/* Status badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '999px',
            border: '1px solid rgba(168, 85, 247, 0.4)',
            background: 'rgba(168, 85, 247, 0.1)',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '100%',
              background: '#22c55e',
            }}
          />
          <span
            style={{
              color: '#c4b5fd',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Available for Projects
          </span>
        </div>

        {/* Main heading */}
        <div
          style={{
            display: 'flex',
            fontSize: '72px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          Paduma{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #c084fc, #22d3ee)',
              backgroundClip: 'text',
              color: 'transparent',
              marginLeft: '16px',
            }}
          >
            Induwara
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: 600,
            color: '#94a3b8',
            marginBottom: '32px',
          }}
        >
          Software Engineer & Data Scientist
        </div>

        {/* Tags row */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {['Next.js', 'React', 'AI/ML', 'Python', 'TypeScript', 'SEO'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: '6px 16px',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#cbd5e1',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ),
          )}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          padumainduwara.me
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
