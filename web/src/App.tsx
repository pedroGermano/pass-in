import { Header } from "./components/Header";
import { AttendeeList } from "./components/attendeeList";

export function App() {
  return (
    <div className="flex gap-2">
      <Header />
      <AttendeeList />
    </div>
  );
}
