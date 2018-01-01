import React from 'react';
import BenchIndex from '../benches/bench_index';
import BenchMap from '../benches/bench_map';
import {connect} from 'react-redux';
import {updateBounds } from '../../actions/filter_actions';

class Search extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <BenchMap updateBounds={this.props.updateBounds}/>
        <BenchIndex />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
  };
};

export default connect(null, mapDispatchToProps)(Search);


//
//
// import React from 'react';
// import BenchIndex from '../benches/bench_index';
// import BenchMap from '../benches/bench_map';
// import {connect} from 'react-redux';
//
//
//
// const Search = ({benches}) => {
//   return (
//     <div>
//       <BenchMap benches={benches} />
//       <BenchIndex benches={benches}/>
//     </div>
//   );
// };
//
// export default Search;
