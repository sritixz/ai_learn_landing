import React from 'react'
const AVATAR_DATA = [
  { initials: "AM", name: "Alex M.", role: "Developer",  color: "#0F1F3D", delay: "0s",   floatDur: "3.1s" },
  { initials: "SK", name: "Sara K.", role: "Designer",   color: "#0891B2", delay: ".4s",  floatDur: "2.8s" },
  { initials: "JR", name: "James R",role: "Manager",    color: "#0D9488", delay: ".2s",  floatDur: "3.4s" },
  { initials: "MP", name: "Maria P.",role: "Marketer",  color: "#0F1F3D", delay: ".6s",  floatDur: "2.6s" },
  { initials: "TN", name: "Tom N.",  role: "Analyst",   color: "#0891B2", delay: ".1s",  floatDur: "3.2s" },
];


function AvatarRow({ btnHovered }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-end", justifyContent: "center", marginBottom: 20, position: "relative" }}>
      {AVATAR_DATA.map((av, i) => (
        <div key={i} style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          animation: `avatarFloat ${av.floatDur} ease-in-out ${av.delay} infinite`,
          position: "relative",
        }}>
          {/* Pulse ring on hover */}
          {btnHovered && (
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, bottom: 20,
              borderRadius: "50%",
              border: `2px solid ${av.color}`,
              animation: "avatarPulse .9s ease-out forwards",
              animationDelay: `${i * 0.1}s`,
            }}/>
          )}
          {/* Avatar face */}
          <div style={{
            width: 48, height: 48, borderRadius: "50%",
            background: av.color,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 14, color: "#fff",
            border: `3px solid ${btnHovered ? "#06B6D4" : "#fff"}`,
            boxShadow: btnHovered
              ? `0 0 0 4px rgba(6,182,212,.25), 0 4px 16px ${av.color}55`
              : "0 2px 8px rgba(15,31,61,.12)",
            transition: "border-color .3s, box-shadow .3s",
            position: "relative",
            overflow: "hidden",
          }}>
            {av.initials}
            {/* Blinking eyes overlay — tiny detail */}
            <div style={{
              position: "absolute", inset: 0, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 4, opacity: 0,
            }}/>
          </div>
          {/* Name tag */}
          <div style={{
            fontSize: 10, fontWeight: 700, color: btnHovered ? av.color : "#94A3B8",
            transition: "color .3s", letterSpacing: ".02em", textAlign: "center",
          }}>{av.name.split(" ")[0]}</div>
          {/* Role chip */}
          <div style={{
            fontSize: 9, color: "#CBD5E1", fontWeight: 500,
            background: "#F8FAFC", border: "1px solid #E2E8F0",
            borderRadius: 999, padding: "1px 7px",
          }}>{av.role}</div>
        </div>
      ))}
    </div>
  );
}


export default AvatarRow
