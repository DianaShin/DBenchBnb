import React from 'react';
import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';

class BenchIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchBenches();
  }

  render(){
    const benches = [];
    Object.keys(this.props.benches).forEach((key) => {
      benches.push(<li key={key}>{this.props.benches[key].description}</li>);
    });
    return (
      <div>
        {benches}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    benches: state.entities.benches,
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBenches: (filters) => dispatch(fetchBenches(filters))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);

// import { fetchBenches } from '../../actions/bench_actions';
// import React from 'react';
// import BenchIndexItem from './bench_index_item';
//
// class BenchIndex extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   componentDidMount() {
//     this.props.fetchBenches();
//   }
//
//
//
//   render(){
//     const benches = this.props.benches.map(bench => {
//       return <BenchIndexItem key={bench.id} bench={bench} /> ;
//     });
//
//      return (
//        <div>
//          {benches}
//        </div>
//      );
//    }
//  }
//
// export default BenchIndex;
