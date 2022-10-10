import { Component } from 'react';
import { searchImage } from './API/API';
import SearchBar from './Searchbar/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import { toastMessage, ToastWrapper } from './Toast/Toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    largeImage: '',
    isLoaded: false,
    showModal: false,
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
        this.setState(prevState => ({
          items: [...prevState.items, ...data],
          isLoaded: false,
        }));
      }
    }
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

  modalClose = () => {
    this.setState({ largeImage: '' });
  };

  render() {
    return (
      <>
        <ToastWrapper />
        <SearchBar imageName={this.handleFormSubmit} />
        <ImageGallery
          items={this.state.items}
          handleLargeImage={this.handleLargeImage}
        />
        {this.state.items.length > 0 && (
          <LoadMore onClick={this.loadMore}></LoadMore>
        )}
        {this.state.isLoaded && <Loader>Loading...</Loader>}
        {this.state.largeImage && (
          <Modal onClose={this.modalClose}>
            <img src={this.state.largeImage} alt={this.state.query} />
          </Modal>
        )}
      </>
    );
  }
}
