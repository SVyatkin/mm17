(function () {
  Polymer({
    is: 'px-sample-dashboard',
    properties: {
      title: {
        type: String,
        value: ""
      },
      mapData: {
        type: Object,
        value: function() {
          return {};
        }
      },
      _mapData: {
        type: Object,
        value: function() {
          return {};
        }
      }
    },
    attached() {
      this.set('_mapData', Object.assign({}, this.mapData));
      var markers = this.$.markers;
      markers.set('data', this._mapData);
      markers.update();
    },
    updateMap(evt) {
      var percent = 800 * parseInt(evt.detail.value) / 100;
      var arr = this.mapData.features.slice(0, percent);
      this.set('_mapData.type', 'FeatureCollection');
      this.set('_mapData.features', arr);
      var markers = this.$.markers;
      markers.set('data', this._mapData);
      markers.update();
    }
  });
})();
