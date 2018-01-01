export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
import * as BenchAPIUtil from '../util/bench_api_util';

export const fetchBenches = () => (dispatch) => {
  BenchAPIUtil.fetchBenches().then((benches) => {
    return dispatch(receiveBenches(benches));
  });
};

export const receiveBenches = (benches) => {
  return {
    type: RECEIVE_BENCHES,
    benches
  };
};
