import React, { PureComponent } from "react";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";
class ImdbComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ratingis: 0
    };
  }
  componentDidMount() {
    this.rating(this.props.obj);
  }
  rating = async obj => {
    try {
      await axios
        .get(`http://www.omdbapi.com/?i=${obj}&plot=full&apikey=eccf9937`)
        .then(res => {
          console.log(res.data.imdbRating, "res");
          this.setState({
            ratingis: res.data.imdbRating
          });
        })
        .catch(err => {
          throw err;
        });
    } catch (err) {
      console.log(err);
    }
    console.log(obj, "obj");
    return obj;
  };
  render() {
    return (
      <React.Fragment>
        <TableCell>{this.state.ratingis}</TableCell>
      </React.Fragment>
    );
  }
}

export default ImdbComponent;
