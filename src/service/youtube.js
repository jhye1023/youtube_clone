import axios from  'axios';

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: {key:key},
    });
  
  }
  async mostPopular() {
  const response = await this.youtube.get('videos', {
    params: {
      part: 'snippet, statistics',
      chart: 'mostPopular',
      maxResults: 25,
    },
  });
  return response.data.items;
  }
  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    });
return response.data.items.map(item => ({...item, id: item.id.videoId}));
}

async comment(videoId) {
  const response = await this.youtube.get('commentThreads', {
    params : {
    part: "snippet",
    videoId: videoId,
    textFormat: "plainText",
    order: "time",
    maxResults: 25,
    }
  });
  return response;
}
// async channel(channel_id){
//   const response = await this.youtube.get('channels', {
//     params: {
//       part: 'brandingSettings',
//       id: channel_id,
//     }
//   });
//   return response.items;
// }
}

export default Youtube;
