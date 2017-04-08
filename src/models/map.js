export default {
  namespace: 'mapInfo',
  state: {
    currentAddress: '',
    currentLocation: {
      lat: '-12',
      lng: '-77',
    },
  },
  reducers: {
    saveLocal(state, { payload }) {
      console.log(payload);
      return state;
    },
  },
};
