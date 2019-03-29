import axios from 'axios';

export default class ApiService {

  search() {
    const apiKey = 'AIzaSyAiz9Xy2w4P8wKwiu0aJZ5v2Es90E42K2g';
    axios.get(`search?part=snippet&maxResults=10&q=${this.state.surfing}&type=video&key=${apiKey}`)
        .then(dataRes =>  {
          const videoItems =  dataRes.data.items;
          this.setState({videoItems});
        });
  }

}
