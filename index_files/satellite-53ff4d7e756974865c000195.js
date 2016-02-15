if (typeof window.google_trackConversion!= 'function') _satellite.loadScript('//www.googleadservices.com/pagead/conversion_async.js', function(){});

g = _satellite.getDataElement('generateFloodLight');

if (g('[TotalRevenueMachines]') !== '0') {
  window.google_trackConversion({
    google_conversion_id: 963761974, 
    google_conversion_language:'en',
    google_conversion_format:'3',
    google_conversion_label: 'Cpo7CJrzlQ0Qtq7HywM',
    google_remarketing_only: false
  });
  _satellite.notify('NESPRESSO: GDN2 fired',1);

}
else {
  _satellite.notify('Condition not met in GDN2',4);
}
