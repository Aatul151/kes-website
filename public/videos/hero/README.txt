Home hero background video
==========================

Place your hero video here as:  home.mp4

Recommended:
  - Format: MP4 (H.264)
  - Resolution: 1920x1080 or 1280x720
  - Length: 10–30 seconds (loops seamlessly)
  - Keep file size under ~15 MB for fast loading

Update the path in public/content.js if you use a different filename:

  export const HOME_HERO = {
    video: "/videos/hero/home.mp4",
    poster: "/images/heroes/home.jpg",
    ...
  };

The poster image shows while the video loads and if the video fails to play.
