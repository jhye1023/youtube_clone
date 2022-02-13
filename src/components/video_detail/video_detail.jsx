import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, parseIntView, publishDate }) => (
  
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      title="youtube video player"
      width="100%"
      height="500"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    {/* <img src={banner.image.bannerExternalUrl} alt="channel Banner"/> */}
    <h2>{video.snippet.title}</h2>
    <h3>{video.snippet.channelTitel}</h3>
    <pre className={styles.description}>{video.snippet.description}</pre>
    <p className={styles.views}>{`${parseIntView(video.statistics.viewCount)} • ${publishDate(video.snippet.publishedAt)}`}</p>

  </section>
 
);
export default VideoDetail;
