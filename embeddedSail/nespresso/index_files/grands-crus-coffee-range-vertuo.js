$(".owl-carousel").owlCarousel({
 		singleItem: true,
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		lazyLoad : true,
        navigationText : ['<i class="sprite sprite-prev"></i>', '<i class="sprite sprite-next"></i>'],
		autoHeight : true,
        pagination: true
});
$('.next').click(function(){
    $(".owl-carousel").trigger('owl.next', 6)
  });
  $('.prev').click(function(){
    $(".owl-carousel").trigger('owl.next', 6)
});
$('.switch a').click(function(e) {
e.preventDefault();
$(this).addClass('active');
$(".owl-carousel").trigger('owl.goTo', 0, 6);

console.log("yes");
if ($(this).attr('href')=="#type-coffee") {
$('.espressoswitch').removeClass('active');
$('.type-coffee').removeClass('hidden');
$('.type-espresso').addClass('hidden');
} else {
$('.coffeeswitch').removeClass('active');
$('.type-coffee').addClass('hidden');
$('.type-espresso').removeClass('hidden');
}
});
