if (_satellite.getDataElement('AppVersion') !== 'NC3') {
_satellite.fireEvent('dataLayerFullyLoaded');
_satellite.dataLayerFullyLoaded = true;
}
