import React from 'react';
import { IWaterfallEvent } from '../state/store';
import { eventTypeToHumanText, formatDuration } from './Waterfall';
import clsx from 'clsx';

export default function EventView({
  event,
}: {
  event: IWaterfallEvent | null;
}) {
  // vertical flexbox
  return (
    <div className="my-4 h-full w-full flex flex-col bg-[#0f172a] overflow-scroll">
      {event !== null ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '24px',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingTop: '24px',
          }}
        >
          <p
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '6.48101px 9.72152px',
              gap: '3.24px',
            }}
            className={clsx(
              event.eventInput === 'ProcessDOM'
                ? 'bg-sky-400 text-sky-900'
                : event.eventInput === 'DetermineAction'
                ? 'bg-blue-400 text-blue-900'
                : event.eventInput === 'PerformAction'
                ? 'bg-blue-600 text-white'
                : event.eventInput === 'FinishAction' &&
                  'bg-gray-600 text-gray-50 ',
              ' font-semibold rounded-md'
            )}
          >
            {eventTypeToHumanText[event.eventInput]}
          </p>
          {/* Timing */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
              gap: '48px',
            }}
          >
            {/* Duration */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '0px',
              }}
            >
              <p className="text-[16px] text-gray-200">Process Duration</p>
              <h3 className="text-[32px] text-gray-50">
                {event.elapsed ? formatDuration(event.elapsed) : 'Pending'}
              </h3>
            </div>
            {/* Start and finish time */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  padding: '6px 0px',
                  gap: '24px',
                }}
                className="text-base text-gray-200 border-b border-gray-800 w-[180px]"
              >
                <p className="w-[100px]">Start Time</p>
                <p>{formatDuration(event.start)}</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  padding: '6px 0px',
                  gap: '24px',
                }}
                className="text-base text-gray-200"
              >
                <p className="w-[100px]">Finish Time</p>
                <p>
                  {event.finished ? formatDuration(event.finished) : 'Pending'}
                </p>
              </div>
            </div>
          </div>
          {/* Thoughts and actions */}
          {event.eventInput === 'DetermineAction' && (
            <div className="p-6 w-full bg-gray-600 rounded-md">
              {event.eventProperties!.parsedResponse.thought}
            </div>
          )}
          {event.eventInput === 'PerformAction' && (
            <div className="p-6 w-full bg-gray-600 rounded-md">
              {`I am going to ${event.eventProperties!.parsedResponse.action}`}
            </div>
          )}

          {/* Event Properties */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '4px',
            }}
            className="w-full"
          >
            <h2 className="text-3xl font-light">Event Properties</h2>
            {Object.keys(event.eventProperties).length !== 0 &&
              Object.keys(event.eventProperties).map((key, index) => (
                <div
                  className={clsx(
                    'w-full py-2 border-b border-gray-600 last:border-b-0 flex flex-row text-sm'
                  )}
                  key={index}
                >
                  <p className="w-[180px] text-gray-200">{key}</p>
                  <p className="grow">
                    {typeof event.eventProperties![key] === 'object'
                      ? JSON.stringify(event.eventProperties![key])
                      : `${event.eventProperties![key]}`}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="bg-[#0f172a] text-gray-50">
          Select an event to view its details
        </div>
      )}
    </div>
  );
}
