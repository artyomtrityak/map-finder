import React from "react";
import { NavLink, Route } from "react-router-dom";
import Horizontal1 from "./horizontal1";
import Horizontal2 from "./horizontal2";
import Vertical1 from "./vertical1";
import StackVerticalBar from "./stack-vertical-bar-chart";
import StackHorizontalBar from "./stack-horizontal-bar-chart";
import GroupVerticalBar from "./group-vertical-bar-chart";

export default class BarCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { match } = this.props;

    return (
      <div className="row">
        <div className="col-3">
          <div className="list-group">
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/horizontal1`}>
              Horizontal 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/horizontal2`}>
              Horizontal 2
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/stacked-horizontal1`}>
              Stacked Horizontal 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/vertical1`}>
              Vertical 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/stacked-vertical1`}>
              Stacked Vertical 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/grouped-horizontal1`}>
              Grouped Vertical 1
            </NavLink>
          </div>
        </div>

        <div className="col-9 chart bar-chart">
          <Route path={`${match.url}/horizontal1`} component={Horizontal1} />
          <Route path={`${match.url}/horizontal2`} component={Horizontal2} />
          <Route path={`${match.url}/stacked-horizontal1`} component={StackHorizontalBar} />
          <Route path={`${match.url}/vertical1`} component={Vertical1} />
          <Route path={`${match.url}/stacked-vertical1`} component={StackVerticalBar} />
          <Route path={`${match.url}/grouped-horizontal1`} component={GroupVerticalBar} />
        </div>
      </div>
    );
  }
}
