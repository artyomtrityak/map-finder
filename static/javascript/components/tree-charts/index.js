import React from "react";
import { NavLink, Route } from "react-router-dom";
import Tree1 from "./tree-chart1";
import Tree2 from "./tree-chart2";

export default class ForceCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;

    return (
      <div className="row">
        <div className="col-3">
          <div className="list-group">
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/tree1`}>
              Tree 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/tree2`}>
              Tree 2 (React svg render)
            </NavLink>
          </div>
        </div>

        <div className="col-9 tree-charts-container">
          <Route path={`${match.url}/tree1`} component={Tree1} />
          <Route path={`${match.url}/tree2`} component={Tree2} />
        </div>
      </div>
    );
  }
}
