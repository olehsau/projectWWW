import React, {Component} from 'react';
import axios from 'axios';

export default class ScrollComponent extends Component {

  constructor(){
      super();
      this.state={
        photos:[],
        loading: false,
        //page: 1,
        prevY: 0,
        key : 2
      };
      this.page = 1;
  }

  
  getPhotos(page) {
    this.setState({ loading: true });
    axios.get(`https://picsum.photos/v2/list?limit=10&page=${page}`)
      .then(res => {
        this.setState({ photos: [...this.state.photos, ...res.data] });
        console.log(this.state.photos);
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    this.getPhotos(this.state.page);

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };
    
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      //const lastPhoto = this.state.photos[this.state.photos.length - 1];
      //const curPage = lastPhoto.albumId;
      this.getPhotos(this.page);
      console.log(this.page);
      this.page++;
    }
    this.setState({ prevY: y });
  }


  render() {

    // Additional css
    const loadingCSS = {
      height: "100px",
      margin: "30px"
    };

    // To change the loading icon behavior
    const loadingTextCSS = {
      display: this.state.loading ? "block" : "none"
    };

    return (
      <div className="container">
        <div style={{ minHeight: "800px" }}>
          {this.state.photos.map(user => (
            <img src={user.download_url} width='45%' height='20%' alt='image is loading' />
          ))}
        </div>
        <div
          ref={loadingRef => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </div>
    );
  }

}
