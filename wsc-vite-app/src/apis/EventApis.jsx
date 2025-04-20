export const createEvent = async (
  submittedTitle,
  submittedLocation,
  fullDate
) => {
  const payload = {
    title: submittedTitle,
    description: `${submittedTitle} @ ${submittedLocation}`, // Placeholder
    eventDate: fullDate.toUTCString(), // Backend expects GMT format
    location: submittedLocation,
  };

  fetch("https://flask-app-250624862173.us-central1.run.app/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // important to send cookies/session to Flask
    body: JSON.stringify(payload),
  });
};
