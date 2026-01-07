import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
// import { events } from "@/lib/constants"; no need to get from constants but from API
import { cacheLife } from "next/cache";
import { events } from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Page = async () => {
  // use cache to cache the fetch result for several hours
  "use cache";
  cacheLife("hours"); // even adding new event, the cache will still be used within the cache life time
  // const response = await fetch(`${BASE_URL}/api/events`);
  // const { events } = await response.json();


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
          {events &&
            events.length > 0 &&
            events.map((event: IEvent) => (
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
