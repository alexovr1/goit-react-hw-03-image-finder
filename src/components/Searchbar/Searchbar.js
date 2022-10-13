import PropTypes from 'prop-types';
import { Component } from 'react';
import { BsSearch } from "react-icons/bs";

export default class SearchBar extends Component {
    state = {
        imageName: '',
    }

    handleNameImage = e => {
        this.setState({ imageName: e.currentTarget.value.toLowerCase().trim() })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.imageName(this.state.imageName)
        this.setState({ imageName: '' });
    }

    render() {
        return (
            <header className="searchbar" >
                <form onSubmit={this.handleSubmit} className="search_form">
                    <button type="submit" className="search_form-button">
                        <BsSearch style={{ width: 24, height: 24 }}>Search</BsSearch>
                    </button>

                    <input
                        className="search_form-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.imageName}
                        onChange={this.handleNameImage}
                    />
                </form>
            </header>
        )
    }
}

SearchBar.propTypes = {
    imageName: PropTypes.func.isRequired,
}