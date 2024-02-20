chrome.devtools.panels.create('Owloops', 'icon_32.png', 'panel.html');

import { owloopsStringifyChromeRecording } from '@owloops/chrome-recorder';

let view;
let latestRecording;

/* eslint-disable no-undef */
if (chrome.devtools) {
  (async () => {
    view = await chrome.devtools.recorder.createView(
      /* name= */ 'Owloops Test',
      /* pagePath= */ 'replay.html'
    );

    view.onShown.addListener(() => {
      // Recorder has shown the view. Send additional data to the view if needed.
      chrome.runtime.sendMessage(JSON.stringify(latestRecording));
    });

    view.onHidden.addListener(() => {
      // Recorder has hidden the view.
    });
  })();
}

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
if (chrome.devtools) {
  chrome.devtools.recorder.registerRecorderExtensionPlugin(
    new RecorderPlugin(),
    /* name=*/ 'Owloops Test',
    /* mediaType=*/ 'application/json'
  );
}
