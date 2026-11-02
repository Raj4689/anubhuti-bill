import React, { useState } from 'react'
import Dashboard from './components/Dashboard.jsx'

export default function App() {
  const [page, setPage] = useState('home')
  return (
    <div style={{fontFamily:'Inter,sans-serif'}}>
      {page === 'home' && (
        <div style={{padding:'40px', textAlign:'center'}}>
          <h1 style={{fontSize:'32px', fontWeight:900}}>ANUBHUTI KSUS - V4</h1>
          <p style={{marginTop:'10px'}}>Final 12 LPA System Ready</p>
          <button onClick={()=>setPage('dash')} style={{marginTop:'20px', padding:'12px 24px', background:'#1e3a5f', color:'#f9c00f', border:'none', borderRadius:'8px', fontWeight:800, cursor:'pointer'}}>Go to Dashboard</button>
          <br/><br/>
          <a href="/FINAL-12-LPA.html" target="_blank" style={{display:'inline-block', marginTop:'10px', padding:'12px 24px', background:'#10b981', color:'#fff', borderRadius:'8px', fontWeight:800, textDecoration:'none'}}>🔥 OPEN FINAL 12 LPA BILL (V2+V3+Stock)</a>
        </div>
      )}
      {page === 'dash' && <Dashboard onBack={()=>setPage('home')} />}
    </div>
  )
}
