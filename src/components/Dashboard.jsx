export default function Dashboard({ bills }) {
  const totalBills = bills.length
  const totalPcs = bills.reduce((a,b)=>a+(b.pcs||0),0)
  const clients = [...new Set(bills.map(b=>b.client))]
  
  return (
    <div>
      <h2 style={{fontSize:'22px', fontWeight:'bold', marginBottom:'16px'}}>📊 Dashboard - Sab Kuch</h2>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px', marginBottom:'20px'}}>
        <div style={{background:'#000', color:'#fff', padding:'14px', borderRadius:'10px'}}><div style={{fontSize:'12px'}}>Total Bills</div><div style={{fontSize:'24px', fontWeight:'bold'}}>{totalBills}</div></div>
        <div style={{background:'#fff', border:'2px solid #000', padding:'14px', borderRadius:'10px'}}><div style={{fontSize:'12px'}}>Total Stock / Pcs</div><div style={{fontSize:'24px', fontWeight:'bold'}}>{totalPcs}</div></div>
        <div style={{background:'#fff', border:'2px solid #000', padding:'14px', borderRadius:'10px'}}><div style={{fontSize:'12px'}}>Clients</div><div style={{fontSize:'24px', fontWeight:'bold'}}>{clients.length}</div></div>
      </div>

      <div style={{background:'#fff', border:'1px solid #ddd', borderRadius:'12px', padding:'14px', marginBottom:'14px'}}>
        <h3 style={{fontWeight:'bold', marginBottom:'10px'}}>🧑‍💼 Client Name List</h3>
        {clients.map((c,i)=><div key={i} style={{padding:'8px', background:'#f5f5f5', borderRadius:'6px', marginTop:'6px', fontSize:'13px'}}>• {c}</div>)}
      </div>

      <div style={{background:'#fff', border:'1px solid #ddd', borderRadius:'12px', padding:'14px'}}>
        <h3 style={{fontWeight:'bold', marginBottom:'10px'}}>📦 Product Listing with Stokes</h3>
        {bills.map((b,i)=><div key={i} style={{display:'flex', justifyContent:'space-between', padding:'10px', borderBottom:'1px solid #eee', fontSize:'13px'}}><span>{b.product} - {b.client}</span><span style={{fontWeight:'bold'}}>{b.pcs} Pcs | ₹{b.sell}</span></div>)}
      </div>
    </div>
  )
}
