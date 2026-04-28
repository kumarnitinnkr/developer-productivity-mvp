import { useEffect, useState } from "react";

function App() {
  const [developers, setDevelopers] = useState([]);
  const [selected, setSelected] = useState("");
  const [metrics, setMetrics] = useState({});
  const [insights, setInsights] = useState([]);
  const [actions, setActions] = useState([]);

  const BASE = "https://developer-productivity-mvp-backend.onrender.com/api";
  useEffect(() => {
    fetch(BASE + "/developers")
      .then(res => res.json())
      .then(data => {
        setDevelopers(data);
        if (data.length > 0) {
          setSelected(data[0].id);
          loadAll(data[0].id);
        }
      });
  }, []);

  function loadAll(id) {
    fetch(BASE + "/metrics/" + id)
      .then(res => res.json())
      .then(data => setMetrics(data));

    fetch(BASE + "/insights/" + id)
      .then(res => res.json())
      .then(data => {
        setInsights(data.insights);
        setActions(data.actions);
      });
  }

  function card(title, value, color) {
    return (
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "18px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        borderTop: `5px solid ${color}`
      }}>
        <p style={{color:"#666",margin:0}}>{title}</p>
        <h2 style={{marginTop:"10px"}}>{value}</h2>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f7fb",
      fontFamily: "Arial",
      padding: "30px"
    }}>

      <div style={{
        background: "linear-gradient(135deg,#2563eb,#7c3aed)",
        color: "white",
        padding: "30px",
        borderRadius: "20px",
        marginBottom: "25px"
      }}>
        <h1 style={{margin:0,fontSize:"42px"}}>Developer Productivity MVP</h1>
        <p style={{opacity:0.9}}>From Metrics to Meaningful Action</p>
      </div>

      <div style={{
        background:"white",
        padding:"20px",
        borderRadius:"16px",
        marginBottom:"25px",
        boxShadow:"0 8px 20px rgba(0,0,0,0.05)"
      }}>
        <label><b>Select Developer:</b></label>
        <br/><br/>
        <select
          value={selected}
          onChange={(e)=>{
            setSelected(e.target.value);
            loadAll(e.target.value);
          }}
          style={{
            padding:"10px",
            borderRadius:"10px",
            width:"220px"
          }}
        >
          {developers.map(dev => (
            <option key={dev.id} value={dev.id}>
              {dev.name}
            </option>
          ))}
        </select>
      </div>

      <h2>Metrics Overview</h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:"18px",
        marginBottom:"30px"
      }}>
        {card("Lead Time", metrics.leadTime, "#2563eb")}
        {card("Cycle Time", metrics.cycleTime, "#16a34a")}
        {card("Bug Rate", metrics.bugRate, "#dc2626")}
        {card("Deployments", metrics.deploymentFrequency, "#9333ea")}
        {card("PR Throughput", metrics.prThroughput, "#f59e0b")}
      </div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"20px"
      }}>

        <div style={{
          background:"white",
          padding:"25px",
          borderRadius:"18px",
          boxShadow:"0 8px 20px rgba(0,0,0,0.06)"
        }}>
          <h2>AI Insights</h2>
          {insights.map((item,i)=>(
            <div key={i} style={{
              background:"#eff6ff",
              padding:"12px",
              borderRadius:"10px",
              marginBottom:"10px"
            }}>
              {item}
            </div>
          ))}
        </div>

        <div style={{
          background:"white",
          padding:"25px",
          borderRadius:"18px",
          boxShadow:"0 8px 20px rgba(0,0,0,0.06)"
        }}>
          <h2>Recommended Actions</h2>
          {actions.map((item,i)=>(
            <div key={i} style={{
              background:"#ecfdf5",
              padding:"12px",
              borderRadius:"10px",
              marginBottom:"10px"
            }}>
              ✅ {item}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;