var doWhenReady = doWhenReady || _satellite.getDataElement('HELPERS doWhenReady'),
     customcondition = function() 
						{
                            	var t=_satellite.getDataElement("PageUid").toLowerCase();
                return ((t.search('products:coffee:')!=-1) || (t.search('shop:capsule:')!=-1) || (t.search('shop:coffee')!=-1)) && (t.search('vertuoline')!=-1);
						},
    todo = function () {
				var src2="https://2690371.fls.doubleclick.net/activityi;src=2690371;type=Coffe0;cat=Nessp0;u1=[TotalRevenueMachines];u2=[TotalRevenueCapsules];u3=[Currency];u4=[OrderNumber];u5=[ClubMember];u6=[TotalRevenueAccesories];u7=[Total];u8=[DeliveryFees];u9=[ProductID];u10=[URL];u11=[ProductType];u12=[ProductUnitPrice];u13=[ProductQuantity];u14=[Blank1];u15=[Blank2];u16=[Language];u17=[UserDeliveryZip];u18=[Blank3];u19=[Blank4];u20=[Blank5];ord=1?";
				g = _satellite.getDataElement('generateFloodLight');
				$("body").append((g(src2)));
				_satellite.notify("NESPRESSO: dfa2 fired" + g(src2),3);
    },
    
    tocheck = {
      'PageUid': ''      
    };

doWhenReady('dfa2',todo, tocheck,customcondition);
