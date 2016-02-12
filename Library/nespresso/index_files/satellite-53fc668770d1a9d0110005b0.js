var doWhenReady = doWhenReady || _satellite.getDataElement('HELPERS doWhenReady'),
    customcondition = function() {
        return (_satellite.getDataElement("PageUid").toLowerCase().indexOf('accessor') !== -1);
    },

    todo = function() {
            var src = "Acces0;";
			if (_satellite.getDataElement("PageTechnology").toLowerCase().search('vertuoline') !== -1) {
					src = "Acces0;"; //dfa10

        } else {
			src = "Acces00"; //11
        }    
		src= "https://2690371.fls.doubleclick.net/activityi;src=2690371;type="+src+";cat=Nessp0;u1=[TotalRevenueMachines];u2=[TotalRevenueCapsules];u3=[Currency];u4=[OrderNumber];u5=[ClubMember];u6=[TotalRevenueAccesories];u7=[Total];u8=[DeliveryFees];u9=[ProductID];u10=[URL];u11=[ProductType];u12=[ProductUnitPrice];u13=[ProductQuantity];u14=[Blank1];u15=[Blank2];u16=[Language];u17=[UserDeliveryZip];u18=[Blank3];u19=[Blank4];u20=[Blank5];ord=1?";
		g = _satellite.getDataElement('generateFloodLight');
        $(document).ready($("body").append(g(src)));
        _satellite.notify("NESPRESSO: DFA10/11 fired: " + g(src), 3);
        
    },

    tocheck = {
        'PageUid': ''
    };

doWhenReady('dfa10-11', todo, tocheck, customcondition);
