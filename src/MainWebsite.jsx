import { useEffect, useMemo, useState } from "react";
import saveTheDate from "./assets/save-the-date.png";

const WEDDING_DATE = "2027-05-29T00:00:00";

export default function MainWebsite() {
  const targetDate = useMemo(() => new Date(WEDDING_DATE), []);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdown = getCountdown(targetDate, now);

  return (
    <div className="page">
      <div className="content">
        <header className="header">
          <div className="headerInner">
            <p className="kicker">Save the Date</p>

            <h1 className="title">Cammi &amp; Fernando</h1>

            <p className="subtext">
              Puerto Vallarta, Jalisco •{" "}
              <span className="dateAccent">May 29, 2027</span>
            </p>

            <div className="countdownHeader" aria-label="Countdown to wedding">
              <CountdownItem value={countdown.days} label="Days" />
              <CountdownItem value={countdown.hours} label="Hours" />
              <CountdownItem value={countdown.minutes} label="Minutes" />
              <CountdownItem value={countdown.seconds} label="Seconds" />
            </div>
          </div>
        </header>

        <main className="mainContent">
          <section
            className="imageSection"
            aria-label="Save the date invitation"
          >
            <img
              className="invite"
              src={saveTheDate}
              alt="Save the Date invitation for Cammi and Fernando"
            />
          </section>

          <InfoSection
            title="Travel Information"
            subtitle="Placeholder section for airport, transportation, and arrival details."
            items={[
              { label: "Airport", 
                value: (<a
                    href="https://thepuertovallartaairport.com/"
                    target="_blank"
                    rel ="noopener noreferrer"
                  >
                  Puerto Vallarta International Airport (PVR)
                </a>)},
              { label: "Transportation", value: "Information coming soon" },
              { label: "Arrival Notes", value: "Information coming soon" },
            ]}
          />

          <InfoSection
            title="Resort Information"
            subtitle="Placeholder section for booking details, accommodations, and resort notes."
            items={[
              { label: "Resort", 
                value: (<a
                    href="https://www.velasvallarta.com/"
                    target="_blank"
                    rel ="noopener noreferrer"
                  >
                Velas Vallarta, Jalisco
                </a>)},
              { label: "Booking Details", value: "Information coming soon" },
              { label: "Guest Notes", value: "Information coming soon" },
            ]}
          />

          <InfoSection
            title="Schedule"
            subtitle="Placeholder section for wedding weekend events and timing."
            items={[
              { label: "Welcome Event", value: "Information coming soon" },
              { label: "Ceremony", value: "Information coming soon" },
              { label: "Reception", value: "Information coming soon" },
            ]}
          />
          
           <InfoSection
            title="Court Wedding"
            subtitle="Placeholder section for booking details, accommodations, and resort notes."
            items={[
              { label: "Date", value: "Information coming soon" },
              { label: "Location", value: "Information coming soon" },
              { label: "Guest Notes", value: "Information coming soon" },
            ]}
          />
          
        </main>
      </div>
    </div>
  );
}

function CountdownItem({ value, label }) {
  return (
    <div className="countItem">
      <span className="countNumber">{value}</span>
      <small className="countLabel">{label}</small>
    </div>
  );
}

function InfoSection({ title, subtitle, items }) {
  return (
    <section className="infoSection">
      <div className="sectionHeader">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="sectionBody">
        {items.map((item) => (
          <p key={item.label}>
            <strong>{item.label}:</strong> {item.value}
          </p>
        ))}
      </div>
    </section>
  );
}

function getCountdown(targetDate, now) {
  const diff = Math.max(targetDate.getTime() - now.getTime(), 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days: String(days),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}
