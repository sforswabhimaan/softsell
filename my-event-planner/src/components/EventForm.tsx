"use client";
import React, { useState } from "react";

const EventForm = ({ addEvent }: { addEvent: (name: string, date: Date, rsvp: string) => void }) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [rsvp, setRsvp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventName || !eventDate) return;
    addEvent(eventName, new Date(eventDate), rsvp);
    setEventName("");
    setEventDate("");
    setRsvp("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-5">
      <input 
        type="text" 
        placeholder="Event Name"
        className="border p-2 rounded w-full"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input 
        type="date"
        className="border p-2 rounded w-full"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />
      <select 
        className="border p-2 rounded w-full"
        value={rsvp}
        onChange={(e) => setRsvp(e.target.value)}
      >
        <option value="">Select RSVP</option>
        <option value="Attending">Attending</option>
        <option value="Maybe">Maybe</option>
        <option value="Not Attending">Not Attending</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
