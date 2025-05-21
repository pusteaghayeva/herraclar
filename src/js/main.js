
function updateDateTime() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Ay 0-dan başlayır
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const formattedDateTime = `${day}.${month}.${year} / ${hours}:${minutes}`;
    document.getElementById("date-blog").textContent = formattedDateTime;
}
updateDateTime();

setInterval(updateDateTime, 1000);

// active lots
$(document).ready(function () {
    $("#news-slider").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true
    });
});
// active auctions

$(document).ready(function () {
    $("#news-slider2").owlCarousel({
        items: 6,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true,
    });
});

$(document).ready(function () {
    $("#news-slider4").owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 1],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true
    });
});

// active auctions
$(document).ready(function () {
    $("#news-slider-main").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true,
    });
});

// faydali kecidler
$(document).ready(function () {
    $("#useful-links").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true,
    });
});

//Scroll back to top
(function ($) {
    "use strict";

    $(document).ready(function () {
        "use strict";
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })


    });

})(jQuery);

// select
document.querySelectorAll('.search_location .dropdown-input').forEach(input => {
    input.addEventListener('click', function (e) {
        e.stopPropagation();

        const wrapper = this.closest('.dropdown-wrapper');
        const list = wrapper.querySelector('.dropdown-list');
        document.querySelectorAll('.search_location .dropdown-list').forEach(dl => {
            if (dl !== list) {
                dl.style.display = 'none';
            }
        });

        list.style.display = list.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener('click', function (e) {
    document.querySelectorAll('.search_location .dropdown-list').forEach(list => {
        list.style.display = 'none';
    });
});

// all_lots
const links = document.querySelectorAll('#myTab .nav-link');
const contents = document.querySelectorAll('.tab-content');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        if (link.classList.contains('disabled')) return;

        links.forEach(l => l.classList.remove('active'));

        this.classList.add('active');

        contents.forEach(c => c.classList.remove('active'));

        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});


// single news
$(document).ready(function () {
    $("#carousel3").owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true,
    });
});
