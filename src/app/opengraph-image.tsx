import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'ANAND SINDHU ENTERPRISES';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: 60, fontWeight: 'bold', marginBottom: 20, color: '#38bdf8' }}>
            ANAND SINDHU ENTERPRISES
          </div>
          <div style={{ fontSize: 30, textAlign: 'center', maxWidth: '80%', color: '#94a3b8' }}>
            Premium Enterprise Technical Services, IT Infrastructure, Staffing Solutions, and Examination Support
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
