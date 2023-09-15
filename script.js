window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById("embed-iframe");
  const options = {
    width: "100%",
    height: "200",
    uri: "https://open.spotify.com/track/0bxoiLuzBhL2B3ODrAU6cp?si=898f4f30ba854563",
  }; 
  const callback = (EmbedController) => {
    document.querySelectorAll(".episode").forEach((episode) => {
      episode.addEventListener("click", () => {
        EmbedController.loadUri(episode.dataset.spotifyId);
      });
    });
  };
  IFrameAPI.createController(element, options, callback);
};