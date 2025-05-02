
import EventCalendar from "@/components/Calendar";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Welcome to My Event Planner</h1>
      <EventCalendar />
    </div>
  );
}
