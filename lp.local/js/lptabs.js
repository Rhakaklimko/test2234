(function ($) {

	$.fn.lptabs = function (userParams) {//для добавления новых методов .fn
		
		
		
	const defaultParams = {
		duration:1000,
		event:"click",
		index: 0,
	}
	
	
	const params = $.extend(defaultParams,userParams);	
	
		console.log(userParams.duration);
		return $(this).each(function () {

			const tabs = $(this);
			let tabsTitlesNames = [];

			tabs.addClass('lp-tabs');

			tabs.children().each(function () {
				tabsTitlesNames.push($(this).attr('title'))



			}).addClass('lp-tab');

			console.log(tabsTitlesNames);


			tabs.wrapInner('<div class="lp-tabs-content"></div>');
			tabs.prepend('<div class="lp-tabs-titles"><ul></ul></div>');

			const tabsTitles = tabs.find('.lp-tabs-titles'),
				tabsContent = tabs.find('.lp-tabs-content'),
				tabsContentTabs = tabsContent.find('.lp-tab');




			tabsTitlesNames.forEach(function (value) {
				tabsTitles.find('ul').append('<li>' + value + '</li>');


			});

			const tabsTitlesItems = tabsTitles.find('ul li');

			tabsTitlesItems.eq(params.index).addClass('active');
			tabsContentTabs.eq(params.index).addClass('active').show();



			tabsContent.height(tabsContent.find('.active').outerHeight());





			tabsTitlesItems.on(params.event, function () {
				if (!tabs.hasClass('changing')) {
					tabs.addClass('changing');

					tabsTitlesItems.removeClass('active');
					$(this).addClass('active');

					const curTab = tabsContent.find('.active'),
						nextTub = tabsContentTabs.eq($(this).index());

					const curHeight = curTab.outerHeight();
					nextTub.show();
					const nextHeight = nextTub.outerHeight();
					nextTub.hide();
					if (curHeight < nextHeight) {
						tabsContent.animate({
								height: nextHeight
							},
							300);
					}
					curTab.fadeOut(300, function () {

						if (curHeight > nextHeight) {
							tabsContent.animate({
									height: nextHeight
								},
								300);
						}


						nextTub.fadeIn(300, function () {
							curTab.removeClass('active');
							nextTub.addClass('active');
							tabs.removeClass('changing');
						});


					});



					




				} //




			}); //





$(window).on('load resize'),function(){
	tabsContent.height(tabsContent.find('.active').outerHeight());
}




		}); //	
	} //
})(jQuery); //	
