import { Component } from 'react';
import { searchImage } from './API/API';
import SearchBar from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastMessage } from './Toast/Toast';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    largeImg: '',
    isLoaded: false,
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
      console.log(data.length);

      if (data.length === 0) {
        return toastMessage();
      } else {
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
      </>
    );
  }
}
