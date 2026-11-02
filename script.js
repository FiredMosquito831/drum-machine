document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const validKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  const playClip = (letter) => {
    const audio = document.getElementById(letter);
    if (!audio) return;
    display.textContent = letter;
    try {
      audio.currentTime = 0;
    } catch (e) {
      /* ignore */
    }
    const played = audio.play();
    if (played && typeof played.catch === "function") {
      played.catch(() => {});
    }
  };

  document.querySelectorAll(".drum-pad").forEach((pad) => {
    const audio = pad.querySelector("audio");
    pad.addEventListener("click", () => {
      if (audio) playClip(audio.id);
    });
  });

  document.addEventListener("keydown", (e) => {
    const key = String(e.key || "").toUpperCase();
    if (validKeys.indexOf(key) !== -1) {
      playClip(key);
    }
  });
});
