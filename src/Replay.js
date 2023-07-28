import { owloopsStringifyChromeRecording } from "@owloops/chrome-recorder";

chrome.runtime.onMessage.addListener((request) => {
  localStorage.setItem("recording", request);
});

function toggleSettings() {
  const settingsContainer = document.getElementById("settings-container");
  const toggleSettingsButton = document.getElementById("toggle-settings");

  // Check if settings are currently visible
  if (settingsContainer.style.display === "block") {
    settingsContainer.style.display = "none";
    toggleSettingsButton.innerText = "Show Settings";
  } else {
    settingsContainer.style.display = "block";
    toggleSettingsButton.innerText = "Hide Settings";
    // When settings are displayed, if token exists, show it as hidden
    const token = localStorage.getItem("token");
    if (token) {
      document.querySelector('input[name="api-token"]').value = token;
    } else {
      document.querySelector('input[name="api-token"]').value = "";
    }
  }
}

function saveToken() {
  const apiToken = document.querySelector('input[name="api-token"]').value;
  const tokenFormat =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  if (apiToken && !apiToken.match(tokenFormat)) {
    // If the input doesn't match the format and is not empty, log an error and return early
    showNotification(
      "error",
      "Invalid token format. Please use a valid API token."
    );
    console.error("Invalid token format. Please use a valid API token.");
    return;
  }

  if (apiToken) {
    localStorage.setItem("token", apiToken);
  } else {
    // If the input field is empty, remove the token from localStorage
    localStorage.removeItem("token");
  }

  toggleSettings(); // Hide settings after saving
  main(); // Update UI
}

function clearToken() {
  localStorage.removeItem("token");
  document.querySelector('input[name="api-token"]').value = "";
}

function showNotification(type, message) {
  const template = document.getElementById(`${type}-template`);
  const clone = template.content.cloneNode(true);

  clone.querySelector("p").textContent = message;
  const notificationElement = clone.querySelector(".notification");
  notificationElement.addEventListener("click", () => {
    notificationElement.remove();
  });

  document.getElementById("notifications-container").appendChild(clone);

  let fadeTimeout = setTimeout(
    () => fadeOutNotification(notificationElement),
    2000
  );

  notificationElement.addEventListener("mouseenter", () => {
    clearTimeout(fadeTimeout);
    notificationElement.style.transition = "none";
    notificationElement.style.opacity = "1";
  });

  notificationElement.addEventListener("mouseleave", () => {
    notificationElement.style.transition = "opacity 5s";
    fadeTimeout = setTimeout(
      () => fadeOutNotification(notificationElement),
      5000
    );
  });
}

function fadeOutNotification(notificationElement) {
  notificationElement.style.opacity = "0";
  setTimeout(() => {
    notificationElement.remove();
  }, 5000);
}

async function main() {
  const token = localStorage.getItem("token");

  if (token) {
    document.getElementById("actions-container").style.display = "block";
    document
      .getElementById("sync-only")
      .removeEventListener("click", syncRecording);
    document
      .getElementById("sync-only")
      .addEventListener("click", syncRecording);
  } else {
    document.getElementById("actions-container").style.display = "none";
  }

  // Show or hide settings
  document
    .getElementById("toggle-settings")
    .addEventListener("click", toggleSettings);

  // Save token
  document.querySelector("#settings-form").onsubmit = async (event) => {
    event.preventDefault();
    saveToken();
  };

  // Clear token
  document.getElementById("clear-token").addEventListener("click", clearToken);
}

async function syncRecording() {
  const recording = localStorage.getItem("recording");
  const owloopsRecording = await owloopsStringifyChromeRecording(recording);
  const parsedRecording = JSON.parse(recording);
  const token = localStorage.getItem("token");
  const loader = document.querySelector("#sync-only .loader");
  const btnText = document.querySelector("#sync-only .btn-text");

  const originalBtnText = btnText.textContent;
  btnText.textContent = "";
  loader.style.display = "block"; // Changed from 'inline-block' to 'block'

  try {
    const birdResponse = await fetch("https://api.owloops.link/bird/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${token}`,
      },
      body: JSON.stringify({
        description: "",
        name: parsedRecording.title,
        options: {},
        skeleton: JSON.parse(owloopsRecording),
      }),
    });

    const birdData = await birdResponse.json();
    if (birdData.code === "LIMIT__BIRDS_LIMIT_EXCEEDED") {
      showNotification(
        "error",
        "You have reached the maximum number of birds."
      );
    } else {
      const birdId = birdData.data.id;
      const url = `https://app.owloops.com/birds/${birdId}`;

      // Show the replay bird button and bind the click event
      const replayBirdButton = document.getElementById("replay-bird");
      replayBirdButton.style.display = "block";
      replayBirdButton.addEventListener("click", () => {
        window.open(url, "_blank");
      });
      showNotification("success", "Recording synced successfully.");
    }
    console.log(birdData);
  } catch (err) {
    showNotification("error", "Error syncing recording. Please try again.");
    console.error(err);
  } finally {
    loader.style.display = "none";
    btnText.textContent = originalBtnText;
  }
}

main();
