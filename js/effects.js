$(document).ready(function() {
    
    // 이미지 호버 확대 효과 (사진만)
    $('figure img, .bottem_img img, .bottem_img_2 img').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.05)',
                'transition': 'transform 0.3s ease-in-out',
                'cursor': 'pointer'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'transition': 'transform 0.3s ease-in-out'
            });
        }
    );
    
    // 버튼 호버 효과
    $('.promotion .new, .promotion_1 .new').hover(
        function() {
            $(this).css({
                'background-color': '#333',
                'color': 'white',
                'transition': 'all 0.3s ease-in-out'
            });
        },
        function() {
            $(this).css({
                'background-color': 'transparent',
                'color': 'black',
                'transition': 'all 0.3s ease-in-out'
            });
        }
    );
    
    // 네비게이션 메뉴 호버 효과
    $('.nav_menu > li > a').hover(
        function() {
            $(this).css({
                'color': '#44814C',
                'transition': 'color 0.3s ease-in-out'
            });
        },
        function() {
            $(this).css({
                'color': 'black',
                'transition': 'color 0.3s ease-in-out'
            });
        }
    );
    
    // 카테고리 메뉴 호버 효과 (product 페이지)
    $('.center_list_1 > li > a').hover(
        function() {
            $(this).css({
                'background-color': '#44814C',
                'color': 'white',
                'border-radius': '5px',
                'transition': 'all 0.3s ease-in-out'
            });
        },
        function() {
            $(this).css({
                'background-color': 'transparent',
                'color': 'black',
                'transition': 'all 0.3s ease-in-out'
            });
        }
    );
    
    // FAQ 버튼 호버 효과 (notice 페이지)
    $('.sec1_1, .sec1_2').hover(
        function() {
            $(this).css({
                'background-color': '#44814C',
                'transform': 'scale(1.02)',
                'transition': 'all 0.3s ease-in-out'
            });
            $(this).find('a').css('color', 'white');
        },
        function() {
            $(this).css({
                'background-color': 'lightgray',
                'transform': 'scale(1)',
                'transition': 'all 0.3s ease-in-out'
            });
            $(this).find('a').css('color', 'black');
        }
    );
    
    // 스크롤 시 헤더 고정 효과
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('header').css({
                'position': 'fixed',
                'top': '0',
                'width': '100%',
                'z-index': '1000',
                'box-shadow': '0 2px 10px rgba(0,0,0,0.1)',
                'transition': 'all 0.3s ease-in-out'
            });
            $('body').css('padding-top', '130px');
        } else {
            $('header').css({
                'position': 'static',
                'box-shadow': 'none',
                'transition': 'all 0.3s ease-in-out'
            });
            $('body').css('padding-top', '0');
        }
    });
    
    // 부드러운 스크롤 효과
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 800);
        }
    });
    
    // 로딩 애니메이션
    $('figure').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(20px)'
        });
        
        setTimeout(function() {
            $('figure').eq(index).css({
                'opacity': '1',
                'transform': 'translateY(0)',
                'transition': 'all 0.6s ease-out'
            });
        }, index * 100);
    });
    
    // 가격 할인 표시 애니메이션
    $('.price').each(function() {
        $(this).css({
            'position': 'relative',
            'overflow': 'hidden'
        });
        
        $(this).hover(
            function() {
                $(this).css({
                    'text-decoration': 'line-through',
                    'color': '#ff4444',
                    'transition': 'all 0.3s ease-in-out'
                });
            },
            function() {
                $(this).css({
                    'text-decoration': 'line-through',
                    'color': '#999',
                    'transition': 'all 0.3s ease-in-out'
                });
            }
        );
    });
    
    // 푸터 아이콘 호버 효과
    $('.footer_icon li').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.1)',
                'transition': 'transform 0.3s ease-in-out'
            });
            $(this).find('img').css({
                'filter': 'brightness(1.2)',
                'transition': 'filter 0.3s ease-in-out'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'transition': 'transform 0.3s ease-in-out'
            });
            $(this).find('img').css({
                'filter': 'brightness(1)',
                'transition': 'filter 0.3s ease-in-out'
            });
        }
    );
    
});
