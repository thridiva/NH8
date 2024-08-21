// React component
export function EventsCalendar() {
  return (
    <div className="events-calendar-bc">
      <Heading />
      <EventsList />
    </div>
  );
}

function Heading() {
  return <h2 className="calendar-heading">Upcoming Events:</h2>;
}

function EventsList() {
  return (
    <ul className="events-list">
      <Event name="New Franchise Opening of NH8" date="Soon" />
      <Event name="The National Franchise Show" date="Sept 14, 2024" />
      <Event name="New Year Party" date="January 1, 2025" />
    </ul>
  );
}

function Event({ name, date }) {
  return (
    <li className="event-item">
      <span className="event-name">{name}</span>
      <span className="event-date">{date}</span>
    </li>
  );
}
