import React, { useEffect, useRef, useState } from "react";

// Replace with your ESP32 IP
const ESP_IP = "10.31.32.213";
const WS_URL = `ws://${ESP_IP}:81`;

export default function SensorDashboard() {
  const [motionRaw, setMotionRaw] = useState(false);
  const [soundRaw, setSoundRaw] = useState(false);
  const [soundValue, setSoundValue] = useState(0);

  const [status, setStatus] = useState("connecting");
  const wsRef = useRef(null);
  const reconnectRef = useRef(null);

  const [events, setEvents] = useState([]);
  const [soundHistory, setSoundHistory] = useState([]);
  const MAX_HISTORY = 40;
  const MAX_EVENTS = 20;

  useEffect(() => {
    let mounted = true;
    function connect() {
      setStatus("connecting");
      try {
        const ws = new WebSocket(WS_URL);
        wsRef.current = ws;
        ws.onopen = () => {
          if (!mounted) return;
          setStatus("open");
          pushEvent("ws-connect", { info: `Connected to ${WS_URL}` });
        };
        ws.onmessage = (evt) => {
          if (!mounted) return;
          try {
            const data = JSON.parse(evt.data);
            if (typeof data.motion === "boolean") { setMotionRaw(data.motion); pushEvent('motion', { value: data.motion }); }
            if (typeof data.sound === "boolean") { setSoundRaw(data.sound); pushEvent('sound', { value: data.sound }); }
            if (typeof data.soundValue === "number") { setSoundValue(data.soundValue); setSoundHistory(h => [data.soundValue, ...h].slice(0, MAX_HISTORY)); }
          } catch (err) {
            console.error('Invalid JSON', err, evt.data);
            pushEvent('ws-error', { info: 'Invalid JSON' });
          }
        };
        ws.onclose = () => { if (!mounted) return; setStatus('closed'); pushEvent('ws-close', { info: 'WebSocket closed' }); reconnectRef.current = setTimeout(connect, 2000); };
        ws.onerror = (err) => { console.error('WS error', err); pushEvent('ws-error', { info: 'WebSocket error' }); ws.close(); };
      } catch (err) { console.error('WS connect error', err); setStatus('closed'); reconnectRef.current = setTimeout(connect, 2000); }
    }
    connect();
    return () => { mounted = false; if (reconnectRef.current) clearTimeout(reconnectRef.current); if (wsRef.current) wsRef.current.close(); };
  }, []);

  function pushEvent(type, payload) {
    const ts = Date.now();
    setEvents(ev => [{ ts, type, ...payload }, ...ev].slice(0, MAX_EVENTS));
  }

  function clearEvents() { setEvents([]); }

  function formatTS(ts) { const d = new Date(ts); return d.toLocaleTimeString(); }

  // Sparkline small component
  function Sparkline({ data = [] }) {
    if (!data.length) return <div className="text-xs text-slate-400">no data</div>;
    const max = Math.max(...data, 1);
    return (
      <div className="flex items-end gap-1 h-10">
        {data.slice(0, 24).map((v, i) => (
          <div key={i} className="flex-1 rounded-sm" style={{ height: `${Math.round((v / max) * 100)}%`, background: 'linear-gradient(180deg,#ef4444,#fb923c)' }} />
        ))}
      </div>
    );
  }

  // displayed states are direct from websocket now
  const displayedMotion = motionRaw;
  const displayedSound = soundRaw;

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Sensor Dashboard</h1>
            <p className="text-sm text-slate-500">Local WebSocket — real-time motion & sound</p>
          </div>
          <div className="flex items-center gap-3">
            <div className={`px-3 py-2 rounded-full text-sm font-medium ${status === 'open' ? 'bg-blue-50 text-blue-800 border border-blue-200' : status === 'connecting' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'}`}>{status === 'open' ? 'Connected' : status === 'connecting' ? 'Connecting...' : 'Disconnected'}</div>
            <button onClick={() => { if (wsRef.current) wsRef.current.close(); }} className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-slate-700">Disconnect</button>
            <button onClick={() => { if (!wsRef.current || wsRef.current.readyState === WebSocket.CLOSED) window.location.reload(); }} className="px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm">Reconnect</button>
          </div>
        </header>

        {/* big content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* left large area */}
          <div className="lg:col-span-2 space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Motion card - BIG */}
              <div className={`${displayedMotion ? 'border-red-600 shadow-lg' : 'border-gray-300'} p-8 rounded-3xl bg-white border`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-800">Motion</h2>
                    <p className="text-sm text-slate-500 mt-1">PIR sensor — presence detection</p>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-base font-semibold ${displayedMotion ? 'bg-red-600 text-white shadow' : 'bg-slate-100 text-slate-700'}`}>{displayedMotion ? 'DETECTED' : 'No motion'}</div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-6">
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center ${displayedMotion ? 'bg-red-600 text-white shadow-2xl transform scale-105' : 'bg-slate-100 text-slate-700'}`}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2v4" stroke={displayedMotion ? '#fff' : '#475569'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="14" r="5" stroke={displayedMotion ? '#fff' : '#0f172a'} strokeWidth="1.8" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-600">Last event</div>
                    <div className="mt-2 text-lg font-medium text-slate-800">{events.find(e=>e.type==='motion') ? formatTS(events.find(e=>e.type==='motion').ts) : '—'}</div>
                    <div className="mt-4 flex items-center gap-3">
                      <button onClick={() => pushEvent('ack-motion', { info: 'Acknowledged' })} className="px-4 py-2 rounded-lg bg-white border border-gray-300">Acknowledge</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sound card - BIG */}
              <div className={`${displayedSound ? 'border-red-500 shadow-lg' : 'border-gray-300'} p-8 rounded-3xl bg-white border`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-800">Sound</h2>
                    <p className="text-sm text-slate-500 mt-1">Microphone — level & threshold</p>
                  </div>
                  <div>
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-base font-semibold ${displayedSound ? 'bg-red-600 text-white shadow' : 'bg-slate-100 text-slate-700'}`}>{displayedSound ? 'DETECTED' : 'Silent'}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-600">Level</div>
                    <div className="text-sm font-medium text-slate-800">{soundValue}</div>
                  </div>
                  <div className="mt-4 h-4 bg-slate-100 rounded-full overflow-hidden">
                    <div style={{ width: `${Math.min(100, Math.round((soundValue / 4095) * 100))}%`, transition: 'width 220ms ease' }} className={`h-full ${displayedSound ? 'bg-gradient-to-r from-red-500 to-orange-400' : 'bg-slate-300'}`} />
                  </div>

                  <div className="mt-6">
                    <Sparkline data={soundHistory} />
                  </div>
                </div>
              </div>
            </div>

            {/* Camera placeholder */}
            <div className="p-6 rounded-3xl bg-white border border-gray-300 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Live Camera (coming soon)</h3>
                  <p className="text-sm text-slate-500 mt-1">RTSP / MJPEG / WebRTC integration</p>
                </div>
                <div className="text-sm text-slate-500">Status: <span className="font-medium text-slate-800">Not connected</span></div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 bg-slate-50 rounded-lg h-48 flex items-center justify-center border border-gray-200">
                  <div className="text-sm text-slate-600">Camera preview will appear here</div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-gray-200 text-sm text-slate-700">Event Snapshot <div className="text-xs text-slate-400">Auto-capture frames when motion+sound occur</div></div>
                  <div className="p-3 bg-white rounded-lg border border-gray-200 text-sm text-slate-700">Notifications <div className="text-xs text-slate-400">Email / Push (coming soon)</div></div>
                </div>
              </div>
            </div>

            {/* actions */}
            <div className="flex items-center gap-3">
              <button onClick={() => pushEvent('export', { info: 'Exported log (placeholder)' })} className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Export Log</button>
              <button onClick={clearEvents} className="px-4 py-2 rounded-lg bg-white border border-gray-300">Clear Log</button>
              <div className="ml-auto text-sm text-slate-500">WebSocket: <code className="bg-slate-50 px-2 py-1 rounded">{WS_URL}</code></div>
            </div>

          </div>

          {/* right column */}
          <aside className="space-y-6">
            <div className="p-4 rounded-2xl bg-white border border-gray-300 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-800">Recent Activity</h4>
              <div className="mt-3 max-h-56 overflow-auto space-y-2">
                {events.length === 0 ? <div className="text-xs text-slate-500">No activity yet</div> : (
                  events.map((e, i) => (
                    <div key={i} className="flex items-start gap-3 py-1">
                      <div className={`w-2 h-2 rounded-full mt-1 ${e.type.includes('motion') ? 'bg-red-500' : 'bg-orange-400'}`} />
                      <div className="text-xs">
                        <div className="font-medium text-slate-800">{e.type}</div>
                        <div className="text-slate-500">{e.info ? e.info : (e.value !== undefined ? String(e.value) : '')}</div>
                        <div className="text-xs text-slate-400">{formatTS(e.ts)}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-gray-300 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-800">Quick Settings</h4>
              <div className="mt-3 text-sm text-slate-700 space-y-2">
                <div className="flex items-center justify-between"><span>Motion hold</span><span className="font-medium">Server timing</span></div>
                <div className="flex items-center justify-between"><span>Sound threshold</span><span className="text-slate-500">Adjust on device</span></div>
                <div className="flex items-center justify-between"><span>Alerts</span><span className="text-slate-500">Email / Push (coming soon)</span></div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-gray-300 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-800">System</h4>
              <div className="mt-2 text-sm text-slate-700">IP: <span className="font-medium text-slate-800">{ESP_IP}</span></div>
              <div className="mt-2 text-xs text-slate-500">Make sure your browser and ESP32 are on the same local network.</div>
            </div>
          </aside>
        </div>

        <footer className="text-center text-xs text-slate-400 mt-6">Made for local dev • Tailwind + Vite • Ask me to add alerts, graphs, or remote access</footer>
      </div>
    </div>
  );
}
