import React, { useState } from "react";

export function BookADine() {
  const [bookedDetails, setBookedDetails] = useState({
    date: "",
    time: "",
    location: "",
    members: 0,
    bookings: [],
  });

  const [receivedLayout, setReceivedLayout] = useState([]);

  const [searchPerformed, setSearchPerformed] = useState(false);

  const updateBookingDetails = (date, time, location, members) => {
    setBookedDetails((prevDetails) => ({
      ...prevDetails,
      date,
      time,
      location,
      members: parseInt(members, 10),
    }));
  };

  const bookSeat = (tableNumber, chairNumber) => {
    if (chairNumber) {
      setBookedDetails((prevDetails) => {
        const isBooked = prevDetails.bookings.some(
          (booking) =>
            booking.table === tableNumber && booking.chair === chairNumber
        );

        if (isBooked) {
          return {
            ...prevDetails,
            bookings: prevDetails.bookings.filter(
              (booking) =>
                booking.table !== tableNumber || booking.chair !== chairNumber
            ),
          };
        } else {
          return {
            ...prevDetails,
            bookings: [
              ...prevDetails.bookings,
              { table: tableNumber, chair: chairNumber },
            ],
          };
        }
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formDetails = {
      date: formData.get("date"),
      time: formData.get("time"),
      location: formData.get("location"),
      members: formData.get("members"),
    };

    updateBookingDetails(
      formData.get("date"),
      formData.get("time"),
      formData.get("location"),
      formData.get("members")
    );
    setSearchPerformed(true);

    console.log(formDetails); //TODO Use this details to fetch the data

    // fetchLayout(formDetails).then((layoutData) => {
    //   setReceivedLayout(layoutData);
    //   setSearchPerformed(true);
    // });
  };

  const isChairBooked = (tableNumber, chairNumber) => {
    return bookedDetails.bookings.some(
      (booking) =>
        booking.table === tableNumber && booking.chair === chairNumber
    );
  };

  const layout = [
    { seats: 4 },
    { seats: 6 },
    { seats: 6 },
    { seats: 6 },
    { seats: 6 },
    { seats: 2 },
    { seats: 4 },
    { seats: 4 },
    { seats: 2 },
    { seats: 4 },
    { seats: 6 },
    { seats: 6 },
    { seats: 6 },
    { seats: 6 },
  ];

  const columns = [[], [], []];
  layout.forEach((tableConfig, index) => {
    if (index < 5) {
      columns[0].push(tableConfig);
    } else if (index < 9) {
      columns[1].push(tableConfig);
    } else {
      columns[2].push(tableConfig);
    }
  });

  return (
    <div className="book-a-dine-container">
      <h1 className="heading">Restaurant Seating Arrangement</h1>
      <form id="seating-form" className="seating-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required />
        </div>
        <div className="form-group">
          <label htmlFor="members">Number of Members:</label>
          <input type="number" id="members" name="members" min="1" required />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <select id="location" name="location" required>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option>
            <option value="Rajasthan">Rajasthan</option>
          </select>
        </div>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {searchPerformed && (
        <div id="seating-arrangement" className="seating-arrangement">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="column">
              {column.map((tableConfig, rowIndex) => (
                <div
                  key={`${colIndex}-${rowIndex}`}
                  className={`table table-${tableConfig.seats}`}
                  onClick={() => bookSeat(`${colIndex + 1}-${rowIndex + 1}`)}
                >
                  {[...Array(tableConfig.seats).keys()].map((chairIndex) => (
                    <div
                      key={chairIndex}
                      className={`chair ${
                        isChairBooked(
                          `${colIndex + 1}-${rowIndex + 1}`,
                          chairIndex + 1
                        )
                          ? "booked"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        bookSeat(
                          `${colIndex + 1}-${rowIndex + 1}`,
                          chairIndex + 1
                        );
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      <button
        id="book-dine-btn"
        style={{
          display: bookedDetails.bookings.length > 0 ? "block" : "none",
        }}
        onClick={() => {
          console.log(bookedDetails);
          setTimeout(() => {
            window.location.reload();
          }, 10000);
        }}
      >
        Book a Dine
      </button>
    </div>
  );
}
