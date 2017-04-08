import { connect } from 'dva';
import MapContainer from '../components/MapContainer';

const mapStateToProps = (state) => {
  return { mapInfo: state.mapInfo };
};

const HomePage = connect(mapStateToProps)(MapContainer);

export default HomePage;
