import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
// import SideBar from "./components/side-bar/side_bar";

// import Channels from './components/channels/channels';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // const [banner, setBanner] = useState();
  // const [youtubeId, setYoutubeId] = useState();

  const selectVideo = (video) => {
    setSelectedVideo(video);

    // setYoutubeId(video.id);
    // getBanner(video.id);
  };
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };

  const parseIntView = (view) => {
    if (view >= 1000000) {
      return `${parseFloat(view / 1000000).toFixed(1)}M views`;
    } else if (view >= 1000) {
      return `${parseFloat(view / 1000).toFixed(1)}K views`;
    } else {
      return `${parseFloat(view).toFixed(1)} views`;
    }
  };

  const publishDate = (date) => {
    const curDate = new Date().getTime();
    const itemDate = new Date(date).getTime();

    let time = curDate - itemDate;
    let diff = parseFloat((time / (1000 * 60 * 60)).toFixed(0));
    if (diff < 24) {
      return diff + " hours ago";
    } else if (diff <= 24 && diff < 25) {
      return parseInt(diff) + " day ago";
    } else if (diff >= 25 && diff < 168) {
      return parseInt(diff / 24) + " days ago";
    } else if (diff >= 168 && diff < 672) {
      return parseInt(diff / 168) + " weeks ago";
    } else if (diff >= 672 && diff < 8760) {
      return parseInt(diff / 672) + " months ago";
    } else if (diff >= 8760) {
      return parseInt(diff / 8760) + " years aog";
    }
  };

  // const getBanner = (youtubeId) => {
  //   youtube
  //     .channel(youtubeId) //
  //     .then((banner) => {
  //       setBanner(banner);
  //     });
  // };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => {
        setVideos(videos);
      });
  }, [youtube]);

  // useEffect((id) =>
  // {youtube
  //     .channel(id)//
  //     .then((banner) => {
  //       setBanner(banner);
  //     });

  // },[youtube])

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <div className={styles.navbar}>
        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail
                video={selectedVideo}
                parseIntView={parseIntView}
                publishDate={publishDate}
              />
            </div>
          )}
          <div className={styles.list}>
            <VideoList
              // youtubeId={youtubeId}
              videos={videos}
              // banner={banner}
              onVideoClick={selectVideo}
              display={selectedVideo ? "list" : "grid"}
              parseIntView={parseIntView}
              publishDate={publishDate}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
