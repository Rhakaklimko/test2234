(function ($) {
	$(document).ready(function () {

		function lpHeader() {
			if ($(window).scrollTop() == 0) {
				$('header').addClass('top');

			} else {
				$('header.top').removeClass('top');
			}
		}
		lpHeader();
		$(window).on('scroll', lpHeader);
		//Плавный скролл страницы

		//hmework
		const arrayMargin = [{
			id: 0,
			offset: 60
		}, {
			id: 1,
			offset: 70
		}, {
			id: 2,
			offset: 50
		}, {
			id: 3,
			offset: 90
		}, {
			id: 4,
			offset: 50
		}]
		$('section').attr('data-offset', i => arrayMargin.find(el => el.id === i).offset);
		//////
		const lpNav = $('header ul');
		lpNav.find('li a').on('click', function (e) {

			const trgtSelector = $(this).attr('href'),
				linkTrgt = $(trgtSelector);
			if (linkTrgt.length > 0) {
				e.preventDefault();
				//homework
				const delta = linkTrgt.data('offset');
				console.log(delta)
				////////////
				const offset = linkTrgt.offset().top - delta;
				$('body,html').animate({
					scrollTop: offset
				}, 750);
			}
		});

		function lpSetNavActive() {
			let curItem = '';
			$('section').each(function () {
				if ($(window).scrollTop() > $(this).offset().top - 200) {
					curItem = $(this).attr('id');
				}
			});
			const noActiveItem = lpNav.find('li.active').length == 0,
				newActiveRequired = lpNav.find('li.active a').attr('href') != '#' + curItem;
			if (newActiveRequired || noActiveItem) {
				lpNav.find('li.active').removeClass('active');
				lpNav.find('li a[href="#' + curItem + '"]').parent().addClass('active');
			}
		}
		//СЛАЙД ШОУ
		$('.lp-slider1').on("initialized.changed.owl.carousel changed.owl.carousel", function (e) {
			$('.sl-nav li').removeClass('active').eq(e.item.index).addClass('active');
			console.log(e.item.index);
		});
		$(".lp-slider1").owlCarousel({
			items: 1,
			//			margin: 5,
			//			loop: true,
			//			stagePadding:50,	
			nav: true,
			//			loop:true,
			navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
		});


		$("#sl-next").click(function () {
			$(".lp-slider1").trigger("next.owl.carousel");
		});
		$("#sl-prev").click(function () {
			$(".lp-slider1").trigger("prev.owl.carousel");
		});
		$(".sl-nav li").click(function () {
			const i = $(this).index();
			$(".lp-slider1").trigger("to.owl.carousel", i);

		});

		$('.lp-services').lptabs({
			duration: 200,

			event: 'mouseenter',
			index: 3

		});

		$('.lp-mfp-inline').magnificPopup({
			type: 'inline'
			// other options
		});

		$(".lp-slider2").owlCarousel({
			items: 3,
			//			margin: 5
			//			stagePadding:50,	
			nav: true,
			loop: true,
			navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
		});

		//$('.lp-gallery').magnificPopup({
		//  delegate: 'a', 
		//  type: 'image',
		//	gallery:{
		//    enabled:true
		//  }
		// other options
		//});
		$('.lp-gallery').each(function () {
			$(this).magnificPopup({
				delegate: 'a',
				type: 'image',
				gallery: {
					enabled: true
				}

			});

		});
		$('.international').magnificPopup({
			type: 'iframe',
		})
		$('.linkajax').magnificPopup({
			type: 'ajax',
		})
		$('.btn77').click(function () {

			$.magnificPopup.open({
				items: [
					{
						src: 'img/slideshow/iphone7-.jpg',
						type: 'image'
            }, {
						src: '#lp-srv1',
						type: 'inline'
            }, {
						src: 'https://www.youtube.com/watch?v=g4F2DLtPVv4&t=307s',
						type: 'iframe'
            }
        ],
				gallery: {
					enabled: true
				}
			}, );

		});
		//ФОРМА ОБРАТНОЙ СВЯЗИ!!!
		$('#lp-fb1').wiFeedBack({
			fbScript: 'blocks/wi-feedback.php',
			fbLink: '.lp-fb1-link',
			fbColor: '#7952b3'
		});


		$('#lp-fb2').wiFeedBack({
			fbScript: 'blocks/wi-feedback.php',
			fbLink: false,
			fbColor: '#7952b3',

		});
	$('.lp-fb1-link').click(function(){
		let a = $(this).attr('data-label')
		$('#lp-fb1 h2').text('Заказать консультацию - ' + a) ;
	});








	}); //обертка	
})(jQuery); //обертка
