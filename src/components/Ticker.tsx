const ITEMS = [
  "IAM / IdM", "Incident Management", "IBM ITIM", "SLA Governance",
  "ISO 27001", "ISO 27005", "ISVG", "LDAP", "DB2", "WebSphere",
  "Linux", "PowerShell", "Grafana", "JIRA", "ITIL", "Operational Resilience",
];

export function Ticker() {
  const all = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker" data-hover>
      <div className="ticker-track">
        {all.map((t, i) => (
          <span key={i} className={`ticker-item${i % 3 === 1 ? " alt" : ""}`}>{t}</span>
        ))}
      </div>
    </div>
  );
}
