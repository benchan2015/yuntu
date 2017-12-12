$(function(){
	$('.addFamilyBox').hide();

	$(".addFamily").click(function(){
		$(this).hide();
		$(this).siblings('.addFamilyBox').show()
		$(this).parent('.addFamilyContent').css('border','1px solid #ddd')
	})
	$('.familyCancle').click(function(){
		$(this).parents('.addFamilyBox').hide();
		$(this).parent('.addFamilyContent').css('border','1px solid #e3e3e3')
		$(this).parent('.addFamilyContent').siblings('.addFamilyBox').show();
	})
})