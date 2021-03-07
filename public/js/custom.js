! function (a) {
    "use strict";

    function j(a) {
        e.removeClass("expanded"), g.removeClass("window-expanded"), h.removeClass("active"), a && a.find(".window-expand-btn").removeClass("window-minimize-btn")
    }

    function k(c, d) {
        function h(b) {
            g = my_dragging.offset0.left + (b.pageX - my_dragging.pageX0), f = my_dragging.offset0.top + (b.pageY - my_dragging.pageY0);
            var c = e.outerWidth(),
                d = a(window).outerWidth() - (e.offset().left + c),
                h = a(my_dragging.elem).outerWidth(),
                i = a(my_dragging.elem).find(".window-header").outerHeight(),
                j = a("#main-header").outerHeight(),
                k = e.outerHeight() - i + j,
                l = e.offset().top,
                m = e.offset().left;
            f < l && (f = l), f > k && (f = k), g < m && (g = m), h + g > c && (g = c + d - h), a(my_dragging.elem).offset({
                top: f,
                left: g
            })
        }

        function i() {
            b.off("mousemove", h).off("mouseup", i), a(my_dragging.elem).removeClass("dragged"), b.removeClass("window-is-dragged")
        }
        var f, g;
        return window.my_dragging = {}, my_dragging.pageX0 = d.pageX, my_dragging.pageY0 = d.pageY, my_dragging.elem = c.closest(".window"), a(my_dragging.elem).hasClass("window-expanded") ? !1 : (a(my_dragging.elem).addClass("dragged"), b.addClass("window-is-dragged"), my_dragging.offset0 = a(my_dragging.elem).offset(), void b.on("mouseup", i).on("mousemove", h))
    }
    var b = a("body"),
        c = a(".know-more-section-btn"),
        d = a("#video-btn").find("i"),
        e = a("#main-container"),
        f = !1,
        g = a(".window"),
        h = a("a", "#main-nav"),
        i = a("#splash-screen");
    c.on("click", function () {
        var b = a("#know-more-section");
        f ? (f = !1, d.addClass("lni-menu"), d.removeClass("lni-close"), b.removeClass("active")) : (f = !0, d.removeClass("lni-menu"), d.addClass("lni-close"), b.addClass("active"))
    }), a(".window-expand-btn").on("click", function () {
        var b = a(this),
            c = b.closest(".window");
        c.toggleClass("window-expanded").removeClass("draggable"), b.toggleClass("window-minimize-btn"), c.hasClass("window-expanded") ? e.addClass("expanded") : e.removeClass("expanded")
    }), a(".window-close-btn").on("click", function () {
        var b = a(this),
            c = b.closest(".window");
        j(c)
    }), a('a[href^="#"]').click(function () {
        j()
    }), h.click(function () {
        var b = a(this);
        h.removeClass("active"), b.addClass("active")
    }), setTimeout(function () {
        var d, b = a("#portfolio-body"),
            c = a(".portfolio-tab", "#portfolio-tabs");
        b.isotope({
            itemSelector: ".portfolio-item"
        }), c.on("click", function () {
            c.removeClass("active"), a(this).addClass("active"), d = a(this).data("filter"), b.isotope({
                filter: d
            })
        })
    }, 100), b.imagesLoaded({
        background: !0
    }, function () {
        setTimeout(function () {
            i.fadeOut(200)
        }, 500)
    }), a(".window-header").on("mousedown", function (b) {
        k(a(this), b)
    })
}(jQuery);