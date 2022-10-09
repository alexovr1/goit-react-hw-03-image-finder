import { Component } from 'react';
import { searchImage } from './API/API';
import SearchBar from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastMessage } from './Toast/Toast';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    largeImage: '',
    isLoaded: false,
  };

  handleLargeImage = image => {
    this.setState({ largeImage: image });
  };

  handleFormSubmit = query => {
    if (this.state.query !== query) {
      this.setState({ page: 1, query, items: [] });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.setState({ isLoaded: true });
      const data = await searchImage(this.state.query, this.state.page);
      if (data.length === 0) {
        this.setState({ isLoaded: false });
        return toastMessage();
      } else {
        console.log('update');
        this.setState(prevState => ({
          items: [...prevState.items, ...data],
          isLoaded: false,
        }));
      }
    }
  };

  render() {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <SearchBar imageName={this.handleFormSubmit} />
        <ImageGallery
          items={this.state.items}
          handleLargeImage={this.handleLargeImage}
        />
      </>
    );
  }
}
