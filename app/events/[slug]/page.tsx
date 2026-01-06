import { notFound } from "next/navigation";
import Image from "next/image";
import { Book } from "lucide-react";
import BookEvent from "@/components/BookEvent";
import { getSimilarEventBySlug } from "@/lib/actions/event.actions";
import { IEvent } from "@/database";
import EventCard from "@/components/EventCard";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// create 1st reusuable component (icon + title + xyz) for EventDetailsPage
const EventDetailItem = ({
  icon,
  alt,
  label,
}: {
  icon: string;
  alt: string;
  label: string;
}) => (
  <div className="flex-row-gap-2 items-center">
    <Image src={icon} alt={alt} width={17} height={17} />
    <p>{label}</p>
  </div>
);

// create 2nd reusable component for agenda
const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => (
  <div className="agenda">
    <h2>Agenda</h2>
    <ul>
      {agendaItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

//create 3rd resuanle component for tag
const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row gap-1.5 flex-wrap">
    {tags.map((tag) => (
      <div className="pill" key={tag}>
        {tag}
      </div>
    ))}
  </div>
);

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const request = await fetch(`${BASE_URL}/api/events/${slug}`);
  const { event } = await request.json(); // extract the data field from the response

  if (!event) return notFound(); // provided by next/navigation to render the 404 page
  // temporary hardcode the event bookings to 10
  const bookings = 10;

  // extract similar events by calling the server action getSimilarEventBySlug
  const similarEvents: IEvent[] = await getSimilarEventBySlug(slug);
  // console.log('Similar Events:', similarEvents);

  return (
    <section id="event">
      <div className="header">
        <h1>Event Description</h1>
        <p>{event.description}</p>
      </div>

      <div className="details">
        {/* Left Side - Event Content */}
        <div className="content">
          <Image
            src={event.image}
            alt="Event Banner"
            width={800}
            height={800}
            className="banner"
          />

          <section className="flex-col-gap-2">
            <h2>Overview</h2>
            <p>{event.overview}</p>
          </section>

          <section className="flex-col-gap-2">
            <h2>Event Details</h2>
            {/* reuse componenet EventDetailItem for time, location, .. */}
            <EventDetailItem
              icon="/icons/calendar.svg"
              alt="calendar"
              label={event.date}
            />
            <EventDetailItem
              icon="/icons/clock.svg"
              alt="clock"
              label={event.time}
            />
            <EventDetailItem
              icon="/icons/pin.svg"
              alt="pin"
              label={event.location}
            />
            <EventDetailItem
              icon="/icons/mode.svg"
              alt="mode"
              label={event.mode}
            />
            <EventDetailItem
              icon="/icons/audience.svg"
              alt="audience"
              label={event.audience}
            />
          </section>

          {/* apply 2nd reusable component for agenda with JSON parsing */}
          <EventAgenda agendaItems={event.agenda} />
          {/* About the Organizer information */}
          <section className="flex-col-gap-2">
            <h2>About the Organizer</h2>
            <p>{event.organizer}</p>
          </section>
          {/* apply 3rd reusable component for tags with JSON parsing */}
          <EventTags tags={event.tags} />
        </div>

        {/* Right Side - Event Sidebar */}
        {/* <aside> HTML element --- secondary to the main content */}
        <aside className="booking">
          <div className="signup-card">
            <h2>Book Your Spot</h2>
            {bookings > 0 ? (
              <p className="text-sm">
                Join {bookings} people who have already booked!
              </p>
            ) : (
              <p className="text-sm">Be the first to book your spot!</p>
            )}
            
            <BookEvent />
          </div>
        </aside>
      </div>

      {/* Similar Events Section */}
      <div className="flex w-full flex-col gap-4 pt-20">
        <h2>Similar Events</h2>
        <div className="events">
          {similarEvents.length > 0 && similarEvents.map((similarEvent: IEvent) => (
            <EventCard key={similarEvent._id.toString()} {...similarEvent}/>
          ))}
        </div>
        </div>
    </section>
  );
};

export default EventDetailsPage;
