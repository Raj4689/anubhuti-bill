import { useState } from 'react'
import Dashboard from './components/Dashboard'

export default function App() {
  const [view, setView] = useState('home')
  const [bills, setBills] = useState([
    { client: 'Raj Traders', product: 'Cotton Saree', pcs: 50, sell: 450 },
    { client: 'Aman Export', product: 'Kurta Set', pcs: 30, sell: 800 },
  ])
  
  return (
    <div style={{maxWidth:'950px', margin:'0 auto', padding:'16px', fontFamily:'sans-serif'}}>
      <div style={{display:'flex', gap:'10px', marginBottom:'20px', borderBottom:'2px solid #000', paddingBottom:'12px'}}>
        <button onClick={()=>setView('home')} style={{padding:'8px 18px', borderRadius:'8px', fontWeight:'bold', background: view==='home'?'#000':'#fff', color: view==='home'?'#fff':'#000', border:'2px solid #000'}}>🏠 Home</button>
        <button onClick={()=>setView('dashboard')} style={{padding:'8px 18px', borderRadius:'8px', fontWeight:'bold', background: view==='dashboard'?'#000':'#fff', color: view==='dashboard'?'#fff':'#000', border:'2px solid #000'}}>📊 Dashboard</button>
      </div>
      {view === 'home' && <div><h1 style={{fontSize:'26px', fontWeight:'bold'}}>Anubhuti-KSUS Billing</h1><p style={{color:'#666'}}>Current Home - anubhuti-bill.vercel.app</p><div style={{background:'#fff', border:'1px solid #ddd', padding:'16px', borderRadius:'12px', marginTop:'16px'}}><h3>Home Bill System (V3 Wala)</h3><p style={{fontSize:'13px', color:'#666'}}>Yahi tera current system hai - ab iske baju me Dashboard button aa gaya!</p></div></div>}
      {view === 'dashboard' && <Dashboard bills={bills} />}
    </div>
  )
}
