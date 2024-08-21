import React from "react";

export function HighlightedEvents() {
  const events = [
    { img: "/imgs/EventImgs/event1.jpg", title: "Birthday Bash Extravaganza" },
    { img: "/imgs/EventImgs/event2.jpg", title: "Christmas Day Brunch" },
    { img: "/imgs/EventImgs/event3.jpg", title: "Live Music Night" },
    { img: "/imgs/EventImgs/event4.jpg", title: "Sunday Brunch Buffet" },
  ];

  return (
    <aside className="highlighted-events">
      <h2>Most Highlighted Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <img src={event.img} alt="Highlighted Event" />
            <a href="/">{event.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
