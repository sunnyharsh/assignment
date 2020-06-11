import React, { PureComponent } from "react";

class MovieAdd extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      year: ""
    };
  }
  addMovie = () => {
    const { movie, year } = this.state;
    this.props.fetchData({ movie: movie, year: year });
    this.setState({
      movie: "",
      year: ""
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { movie, year } = this.state;
    return (
      <React.Fragment>
        <div className="inputContainer">
          <input
            name="movie"
            value={movie}
            onChange={this.handleChange}
            placeholder="movie title"
          />
        </div>
        <div className="inputContainer">
          <div className="common">
            <input
              name="year"
              value={year}
              onChange={this.handleChange}
              placeholder="movie release year"
            />
          </div>
          <div className="common ">
            <button onClick={this.addMovie} className="addBtn">
              Add
            </button>
          </div>
        </div>
        <style jsx="true">
          {`
            .inputContainer {
              margin-top: 1rem;
            }
            input {
              height: 26px;
              border-radius: 4px;
              padding: 4px;
            }
            .common {
              display: inline-block;
            }
            .addBtn {
              height: 37px;
              width: 61px;
              margin-left: 1rem;
              background: #1778d3;
              color: #fff;
              border: none;
              border-radius: 5px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default MovieAdd;
