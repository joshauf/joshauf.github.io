var doWhenReady = doWhenReady || _satellite.getDataElement('HELPERS doWhenReady'),
    customcondition = function() 
				{
          	var t= _satellite.getDataElement("PageUid");
  					return ( (
              		(t.search("shop:machine:")!=-1) ||
              		(t.search("products:machines:")!=-1) ||
              		(t==="home:::vertuo-home:VertuoLine")
            				) && 
                  (_satellite.getDataElement("PageTechnology").toLowerCase()==="vertuoline")
                   )
				},
    todo = function () {
            var src4="https://2690371.fls.doubleclick.net/activityi;src=2690371;type=Vertu0;cat=Nessp0;u1=[TotalRevenueMachines];u2=[TotalRevenueCapsules];u3=[Currency];u4=[OrderNumber];u5=[ClubMember];u6=[TotalRevenueAccesories];u7=[Total];u8=[DeliveryFees];u9=[ProductID];u10=[URL];u11=[ProductType];u12=[ProductUnitPrice];u13=[ProductQuantity];u14=[Blank1];u15=[Blank2];u16=[Language];u17=[UserDeliveryZip];u18=[Blank3];u19=[Blank4];u20=[Blank5];ord=1?";
            g = _satellite.getDataElement('generateFloodLight');
            $(document).ready($("body").append(g(src4)));
            _satellite.notify("NESPRESSO: dfa4 fired"+g(src4),3);
    },
     tocheck = {
		      'PageUid': ''
    };

doWhenReady('dfa4',todo, tocheck,customcondition);
