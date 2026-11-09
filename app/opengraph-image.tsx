import { ImageResponse } from 'next/og'

export const alt = 'Ashiat Abdulkadir — Product Designer & Design Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#0c0c0e',
          color: '#f5f5f4',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 4, color: '#a1a1aa' }}>
          PRODUCT DESIGN + DESIGN ENGINEERING
        </div>
        <div style={{ display: 'flex', fontSize: 78, lineHeight: 1.08, fontWeight: 600, maxWidth: 980 }}>
          I design clarity into complex digital products.
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 32, color: '#d4d4d8' }}>
          <span>Ashiat Abdulkadir</span>
          <span style={{ color: '#a1a1aa' }}>ashiatabdulkadir.com</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
