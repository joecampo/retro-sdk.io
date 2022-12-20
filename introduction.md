# Introduction
This API server & client SDK is made possible because of the P3OL project. P3OL is an "AOL®" server emulator that tries to provide an experience that was available during the early 1990s'.

The P3OL server project is funded by donations. Please consider donating here:

<span class="badge-patreon"><a href="https://www.patreon.com/re_aol" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-green.svg" alt="Patreon donate button" /></a></span>

✨ **Gold Tier Member Perks:**

★ Early Access to P3OL (Screen Name Registration) Try out P3OL as an account holder before the rest of the world. Receive monthly updates via Discord as the project grows further in development. Your feedback will be taken into consideration during the development phase.

★ "Gold Supporter" role on Discord server Join the Discord server and get the "Gold Supporter" role to show your awesome support.

## Infrastructure
This project contains two components: the *API Server* and *JavaScript SDK*. Both are developed specifically for P3OL.

The API Server acts as a proxy between the JavaScript SDK and P3OL server and creates long-running sessions with P3OL. This allows you to build custom web-based clients using the JavaScript SDK without worrying about maintaining connectivity or working directly with P3OL's P3 protocol implementation.

The JavaScript SDK houses a WebSocket client & HTTP client to allow you to rapdily build and prototype custom clients.

<div class="flex justify-center">

  ![Diagram](/img/diagram.png)

</div>