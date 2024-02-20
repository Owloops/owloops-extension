import React from 'react';
import Waterfall, { sampleEvents } from './Waterfall';
import EventView from './EventView';

export default function Analytics() {
  const [selectedEventIndex, setSelectedEventIndex] = React.useState<
    number | null
  >(null);

  // const events = useEventStore.getState().events;ß
  // FOR FRONTEND DEV PURPOSES ONLY
  const events = sampleEvents;

  return (
    <div className="mt-4 flex flex-col grow">
      <Waterfall setSelectedEventIndex={setSelectedEventIndex} />
      <EventView
        event={selectedEventIndex ? events[selectedEventIndex] : null}
      />
    </div>
  );
}
