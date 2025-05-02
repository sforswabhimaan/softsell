"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventForm from "./EventForm";
import { db } from "@/lib/firebase"; // Firebase Firestore
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

const EventCalendar = () => {
  const [events, setEvents] = useState<{ id?: string; name: string; date: Date; rsvp?: string }[]>([]);
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date()); // ✅ Fixes Hydration Mismatch
  }, []);

  // ✅ Fetch Events from Firebase Firestore
  const fetchEvents = async () => {
    const querySnapshot = await getDocs(collection(db, "events"));
    const fetchedEvents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as { id: string; name: string; date: Date; rsvp?: string }[];

    setEvents(fetchedEvents);
  };

  useEffect(() => {
    fetchEvents(); // Load events on mount
  }, []);

  // ✅ Handle Event Creation
  const addEvent = async (name: string, date: Date, rsvp: string) => {
    await addDoc(collection(db, "events"), { name, date, rsvp });
    fetchEvents(); // Refresh event list
  };

  // ✅ Edit Existing Event in Firestore
  const editEvent = async (id: string, name: string, date: Date, rsvp: string) => {
    const eventRef = doc(db, "events", id);
    await updateDoc(eventRef, { name, date, rsvp });
    fetchEvents(); // Refresh event list
  };

  // ✅ Delete Event from Firestore
  const deleteEvent = async (id: string) => {
    const eventRef = doc(db, "events", id);
    await deleteDoc(eventRef);
    fetchEvents(); // Refresh event list
  };

  // ✅ Handle Date Selection
  const handleDateChange = (newDate: Date | Date[]) => {
    if (Array.isArray(newDate)) return;
    setDate(newDate);
  };

  // ✅ Highlight Event Dates in Calendar
  const tileClassName = ({ date }: { date: Date }) => {
    return events.some((event) => event.date.toDateString() === date.toDateString())
      ? "bg-blue-400 text-white font-bold rounded-md p-1"
      : "";
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Event Calendar</h2>
      <Calendar 
        onChange={handleDateChange} 
        value={date} 
        tileClassName={tileClassName} 
        className="border rounded-lg shadow-md"
      />

      {/* ✅ Event Creation Form */}
      <EventForm addEvent={addEvent} />

      {/* ✅ List of Events with Edit & Delete Options */}
      <ul className="mt-4">
        {events.filter((event) => event.date.toDateString() === date?.toDateString()).map((event, index) => (
          <li key={index} className="border p-2">
            {event.name} - {event.date.toDateString()}
            
            {/* ✅ Edit Button */}
            <button 
              className="ml-2 bg-yellow-500 text-white px-3 py-1 rounded"
              onClick={() => editEvent(event.id!, event.name, event.date, event.rsvp!)}
            >
              ✏️ Edit
            </button>

            {/* ✅ Delete Button */}
            <button 
              className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => deleteEvent(event.id!)}
            >
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventCalendar;
