import React, { PureComponent } from "react";
import { connect } from "react-redux";
import CustomPaginationActionsTable from "../Table";
import { Grid, Typography } from "@material-ui/core";
import { getMovie } from "../../store/actions/index.action";
import MovieAdd from "../forms/movieAdd";
const tabs = [
  { name: "tab1", value: "tab1" },
  { name: "tab2", value: "tab2" }
];
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }
  componentDidMount() {
    this.props.$getMovie({ movie: "x men", year: 2000 });
  }
  currentTab = index => {
    this.props.$getMovie({ movie: "x men", year: 2000 });
    this.setState({
      activeTab: index
    });
  };
  fetchData = obj => {
    this.props.$getMovie(obj);
  };
  render() {
    const { activeTab } = this.state;
    const { _getMovie } = this.props;
    return (
      <React.Fragment>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container style={{ marginBottom: "1rem" }}>
              {tabs.map((obj, index) => (
                <Grid item xs={2} key={index}>
                  <Typography
                    onClick={() => this.currentTab(index)}
                    className={activeTab == index ? "tabActive" : "tabs"}
                  >
                    {obj.value}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={10}>
            {activeTab == 0 ? (
              <React.Fragment>
                <MovieAdd fetchData={this.fetchData} />
                {_getMovie &&
                _getMovie.Search &&
                _getMovie.Search.length > 0 ? (
                  <CustomPaginationActionsTable pagination={true} />
                ) : (
                  ""
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <MovieAdd fetchData={this.fetchData} />
                {_getMovie &&
                _getMovie.Search &&
                _getMovie.Search.length > 0 ? (
                  <CustomPaginationActionsTable pagination={false} />
                ) : (
                  ""
                )}
              </React.Fragment>
            )}
          </Grid>
        </Grid>
        <style jsx="true">
          {`
            .tabs {
              color: #000;
              cursor: pointer;
            }
            .tabActive {
              color: #3d8dda;
              cursor: pointer;
            }
            img {
              width: 120px;
              height: 120px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

const mapState = ({ getMovie }) => {
  return {
    _getMovie: getMovie
  };
};
const mapDispatch = dispatchEvent => ({
  $getMovie: values => dispatchEvent(getMovie(values))
});
export default connect(mapState, mapDispatch)(Home);
