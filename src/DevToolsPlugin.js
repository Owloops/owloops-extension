import { owloopsStringifyChromeRecording } from '@owloops/chrome-recorder';

const view = await chrome.devtools.recorder.createView(
  /* name= */ 'Owloops Test',
  /* pagePath= */ 'Replay.html'
);

let latestRecording;

view.onShown.addListener(() => {
  // Recorder has shown the view. Send additional data to the view if needed.
  chrome.runtime.sendMessage(JSON.stringify(latestRecording));
});

view.onHidden.addListener(() => {
  // Recorder has hidden the view.
});

export class RecorderPlugin {
  async stringify(recording) {
    return await owloopsStringifyChromeRecording(JSON.stringify(recording));
  }

  async stringifyStep(step) {
    return JSON.stringify(step);
  }

  replay(recording) {
    // Share the data with the view.
    latestRecording = recording;
    // Request to show the view.
    view.show();
  }
}

/* eslint-disable no-undef */
chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new RecorderPlugin(),
  /* name=*/ 'Owloops Test',
  /* mediaType=*/ 'application/json'
);
