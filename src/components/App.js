import React from 'react';
import Unsplash from '../API/Unsplash';
import SearchBar from './SearchBar';
import ImageSearch from './ImageSearch';

class App extends React.Component {

  state = { images: [] }

  onSearchSubmitted = async (term) => {
    const response = await Unsplash.get('/search/photos', {
      params: { query: term }

    });

    this.setState({ images: response.data.results })
  }

  render() {

    return (
      <div className='ui container' style={{ marginTop: '10px' }}>

        {/* passing data through Props from Child to Parent */}
        <SearchBar onSubmitted={this.onSearchSubmitted} />
        <ImageSearch image={this.state.images} />


      </div>)
  }
}


export default App;
