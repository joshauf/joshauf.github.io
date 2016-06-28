var doWhenReady = doWhenReady || _satellite.getDataElement('HELPERS doWhenReady'),
     todo = function () {
      				var t=_satellite.getDataElement('ProductName').toLowerCase(), src="";
              if (t.indexOf('inissia') != -1) { //dfa5
              		src="Iniss0";
                } else 
      				if (t.indexOf('lattissima') !== -1) { //dfa6
              		src="Latti0";
                } else
       				if (t.indexOf('pixie') !== -1) { //dfa7
                  src="Pixel0";
                } else
       				if (t.indexOf('citiz') !== -1) { //dfa8
                  src="Citiz0";
                } else
              if (t.indexOf('maestria') !== -1) { //dfa9
                  src="Maest0";
                } 
       if (src.length>0) {
							src="https://2690371.fls.doubleclick.net/activityi;src=2690371;type="+src+";cat=Nessp0;u1=[TotalRevenueMachines];u2=[TotalRevenueCapsules];u3=[Currency];u4=[OrderNumber];u5=[ClubMember];u6=[TotalRevenueAccesories];u7=[Total];u8=[DeliveryFees];u9=[ProductID];u10=[URL];u11=[ProductType];u12=[ProductUnitPrice];u13=[ProductQuantity];u14=[Blank1];u15=[Blank2];u16=[Language];u17=[UserDeliveryZip];u18=[Blank3];u19=[Blank4];u20=[Blank5];ord=1?"
              g = _satellite.getDataElement('generateFloodLight');
       				src=g(src);
              $("body").append(src);				
            	_satellite.notify("NESPRESSO: DFA5-9 fired: "+src,3);
      }
    },
    tocheck = {
      'PageUid': ''
    };

doWhenReady('dfa5-9',todo, tocheck);
