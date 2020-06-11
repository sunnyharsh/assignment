import React from 'react';
import { Route, Switch } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Home from "../Components/Home";
const Routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
]
const styles = theme => ({
    topContainer: {
        marginTop: "20px",
    }
});
class Routing extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={ classes.topContainer }>
                    <Switch>
                        { Routes &&
                            Routes.map((route, index) => (
                                <Route
                                    key={ index }
                                    exact
                                    path={ route.path }
                                    component={ route.component }
                                />
                            )) }
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(Routing);
