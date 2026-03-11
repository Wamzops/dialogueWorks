const ToolsUsed = () => {
  const featuresData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "Task Automation",
      description:
        "Let AI handle the repetitive, time-consuming tasks so your team can stay focused on business growth.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M12 7v5l4 2" />
        </svg>
      ),
      title: "Real-Time Monitoring",
      description:
        "Empower your business by letting AI take over repetitive tasks and freeing your team for high impact work.",
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999V7.9999Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.29999 7L12 12L20.7 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Context Awareness",
      description:
        "AI takes care of the repetitive stuff, so your team can focus on growth and delivering results that matter.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
          <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
      ),
      title: "Resource Optimization",
      description:
        "Empower your business by letting AI take over repetitive tasks and freeing team for high impact work.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <path d="M16 3.128a4 4 0 0 1 0 7.744" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
      title: "Role-Based Access",
      description:
        "Free your team from manual, repetitive work. Let AI automate the busywork while you focus on scaling.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
          <path d="m12 15 5 6H7Z" />
        </svg>
      ),
      title: "AI-Agent Collaboration",
      description:
        "Let AI handle the repetitive, time-consuming tasks so your team can stay focused on business growth.",
    },
  ];

  return (
    <>
      <style>{`
                .features-section {
                    background: #f8f7f4;
                    background-image: radial-gradient(circle at 20% 20%, #ede9fe22 0%, transparent 50%),
                                      radial-gradient(circle at 80% 80%, #dbeafe22 0%, transparent 50%);
                }

        .badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 14px;
          border: 1px solid #d1c4f8;
          background: #f3f0ff;
          color: #6d28d9;
          font-size: var(--fs-xs);
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: 999px;
        }

                .feature-card {
                    background: #ffffff;
                    border: 1px solid #e5e1f5;
                    border-radius: 14px;
                    padding: 28px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                    box-shadow: 0 1px 3px rgba(109, 40, 217, 0.04);
                }

                .feature-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 32px rgba(109, 40, 217, 0.1);
                }

                .icon-wrap {
                    width: 44px;
                    height: 44px;
                    border-radius: 10px;
                    background: linear-gradient(135deg, #7c3aed, #4f46e5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    flex-shrink: 0;
                }

        .card-title {
          font-size: var(--fs-sm);
          font-weight: 600;
          color: #1a1523;
          margin: 0;
        }

        .card-desc {
          font-size: var(--fs-xs);
          line-height: 1.65;
          color: #6b7280;
          margin: 0;
        }

        .section-heading {
          font-size: var(--fs-lg);
          font-weight: 600;
          color: #1a1523;
          text-align: center;
          max-width: 480px;
          line-height: 1.25;
          margin: 0;
        }

        .section-sub {
          font-size: var(--fs-sm);
          line-height: 1.7;
          color: #6b7280;
          max-width: 500px;
          text-align: center;
          margin: 0;
        }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    max-width: 960px;
                    width: 100%;
                }

                @media (max-width: 900px) {
                    .grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 560px) {
                    .grid { grid-template-columns: 1fr; }
                }
            `}</style>

      <section
        className="features-section py-20 px-4"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <span className="badge">Features</span>
        <h2 className="section-heading">
          AI Agents That Automate and Accelerate Growth.
        </h2>
        <p className="section-sub">
          Streamline operations, boost productivity, and scale effortlessly —
          all powered by intelligent automation.
        </p>

        <div className="grid" style={{ marginTop: "16px" }}>
          {featuresData.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-wrap">{feature.icon}</div>
              <p className="card-title">{feature.title}</p>
              <p className="card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ToolsUsed;
