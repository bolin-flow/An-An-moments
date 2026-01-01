import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/constants";

const Page = () => {
  return (
    <section>
      <h1 className="text-center">
        Capture and preserve An-An's happy moments in one place.
      </h1>
      <p className="text-center mt-5">
        The precious moments we share with An-An.
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Cherished Moments</h3>

        <ul className="events list-none">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Page;
