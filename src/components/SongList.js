import React, { Component } from 'react';
// we need to create an instance of connect compoenent and pass it
// some confug that gets us to reach back to our provider for all the songs
// in our app. 
// Connect component will only be called in our SongList and only songlist
// need to create the connect function to get list of songs
import { connect } from 'react-redux';
import { selectSong } from '../actions'


// since we seen how to name export works there is an alt way to write 
// out react.component. we can directly importy from react librarby with { Component }
// you then dont need to write in React. Component and just write Compknent
// both methods are valid
// ---------------------------------------------------------------//

// we will always import connect at the top. we are always calling connect and pass component
// as second function call. we will always define mapStateToProps. its always
// gonna get a first arguement of state and always return an obj thatll 
// always return as props inside the compoent. This is repition in every react project over and over

class SongList extends Component {
    renderList() {
      return this.props.songs.map(song => {
        return (
          <div className="item" key={song.title}>
            <div className="right floated content">
                    <button
                        className="ui button primary"
                        onClick={() => this.props.selectSong(song)}
                    >
                        Select
                        </button>
            </div>
            <div className="content">{song.title}</div>
          </div>
        );
      });
    }
  
    render() {
        console.log(this.props)
      return <div className="ui divided list">{this.renderList()}</div>;
    }
  }

// mapStateToProps isa function that is called with the state inside
// a redux store. its used for selecting the part of the 
// data from the store that the connected component needs.I
// t's frequently referred to as just mapState for short. 
// It is called every time the store state changes.
// after defining that function youll take it and move it to the connect component
// mapStateToProps is interchanagelt in terms of naming

const mapStateToProps = state => {
    console.log(state);
    return { songs: state.songs };
  };
  
export default connect(mapStateToProps, {
      selectSong
  })(SongList);