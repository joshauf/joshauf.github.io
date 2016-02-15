var doWhenReady = doWhenReady || _satellite.getDataElement('HELPERS doWhenReady'),
     customcondition = function() 
						{
                return ( ((_satellite.getDataElement("PageUid").search("shop:machine")!=-1)  ||
                         (_satellite.getDataElement("PageUid").search('products:machines')!=-1))
                        && (_satellite.getDataElement("PageTechnology").toLowerCase() =="originalline"));
						},
    todo = function () {
              var src25="https://2690371.fls.doubleclick.net/activityi;src=2690371;type=HomeP0;cat=Nessp00;qty=1;cost=[Revenue];u1=[TotalRevenueMachines];u2=[TotalRevenueCapsules];u3=[Currency];u4=[OrderNumber];u5=[ClubMember];u6=[TotalRevenueAccesories];u7=[Total];u8=[DeliveryFees];u9=[ProductID];u10=[URL];u11=[ProductType];u12=[ProductUnitPrice];u13=[ProductQuantity];u14=[Blank1];u15=[Blank2];u16=[Language];u17=[UserDeliveryZip];u18=[Blank3];u19=[Blank4];u20=[Blank5];ord=[OrderID]?";
              g = _satellite.getDataElement('generateFloodLight');
              $(document).ready($("body").append(g(src25)));
							_satellite.notify("NESPRESSO: DFA25 fired: "+g(src25),3);
    },
    
    tocheck = {
      'PageUid': ''
    };

doWhenReady('dfa25',todo, tocheck,customcondition);




