/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */
(function (d) {
  d.fn.marquee = function (w) {
    return this.each(function () {
      var a = d.extend({}, d.fn.marquee.defaults, w),
        b = d(this),
        c,
        k,
        p,
        q,
        h,
        l = 3,
        x = "animation-play-state",
        e = !1,
        B = function (a, b, c) {
          for (
            var d = ["webkit", "moz", "MS", "o", ""], e = 0;
            e < d.length;
            e++
          )
            d[e] || (b = b.toLowerCase()), a.addEventListener(d[e] + b, c, !1);
        },
        E = function (a) {
          var b = [],
            c;
          for (c in a) a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
          b.push();
          return "{" + b.join(",") + "}";
        },
        g = {
          pause: function () {
            e && a.allowCss3Support
              ? c.css(x, "paused")
              : d.fn.pause && c.pause();
            b.data("runningStatus", "paused");
            b.trigger("paused");
          },
          resume: function () {
            e && a.allowCss3Support
              ? c.css(x, "running")
              : d.fn.resume && c.resume();
            b.data("runningStatus", "resumed");
            b.trigger("resumed");
          },
          toggle: function () {
            g["resumed" == b.data("runningStatus") ? "pause" : "resume"]();
          },
          destroy: function () {
            clearTimeout(b.timer);
            b.css("visibility", "hidden").html(b.find(".js-marquee:first"));
            setTimeout(function () {
              b.css("visibility", "visible");
            }, 0);
          },
        };
      if ("string" === typeof w)
        d.isFunction(g[w]) &&
          (c || (c = b.find(".js-marquee-wrapper")),
          !0 === b.data("css3AnimationIsSupported") && (e = !0),
          g[w]());
      else {
        var r;
        d.each(a, function (c, d) {
          r = b.attr("data-" + c);
          if ("undefined" !== typeof r) {
            switch (r) {
              case "true":
                r = !0;
                break;
              case "false":
                r = !1;
            }
            a[c] = r;
          }
        });
        a.duration = a.speed || a.duration;
        q = "up" == a.direction || "down" == a.direction;
        a.gap = a.duplicated ? a.gap : 0;
        b.wrapInner('<div class="js-marquee"></div>');
        var f = b
          .find(".js-marquee")
          .css({ "margin-right": a.gap, float: "left" });
        a.duplicated && f.clone(!0).appendTo(b);
        b.wrapInner(
          '<div style="width:100000px" class="js-marquee-wrapper"></div>'
        );
        c = b.find(".js-marquee-wrapper");
        if (q) {
          var m = b.height();
          c.removeAttr("style");
          b.height(m);
          b.find(".js-marquee").css({
            float: "none",
            "margin-bottom": a.gap,
            "margin-right": 0,
          });
          a.duplicated &&
            b.find(".js-marquee:last").css({ "margin-bottom": 0 });
          var s = b.find(".js-marquee:first").height() + a.gap;
          a.duration *= (parseInt(s, 10) + parseInt(m, 10)) / parseInt(m, 10);
        } else
          (h = b.find(".js-marquee:first").width() + a.gap),
            (k = b.width()),
            (a.duration *=
              (parseInt(h, 10) + parseInt(k, 10)) / parseInt(k, 10));
        a.duplicated && (a.duration /= 2);
        if (a.allowCss3Support) {
          var f = document.body || document.createElement("div"),
            n = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),
            z = ["Webkit", "Moz", "O", "ms", "Khtml"],
            A = "animation",
            t = "",
            u = "";
          f.style.animation && ((u = "@keyframes " + n + " "), (e = !0));
          if (!1 === e)
            for (var y = 0; y < z.length; y++)
              if (void 0 !== f.style[z[y] + "AnimationName"]) {
                f = "-" + z[y].toLowerCase() + "-";
                A = f + A;
                x = f + x;
                u = "@" + f + "keyframes " + n + " ";
                e = !0;
                break;
              }
          e &&
            ((t =
              n +
              " " +
              a.duration / 1e3 +
              "s " +
              a.delayBeforeStart / 1e3 +
              "s infinite " +
              a.css3easing),
            b.data("css3AnimationIsSupported", !0));
        }
        var C = function () {
            c.css(
              "margin-top",
              "up" == a.direction ? m + "px" : "-" + s + "px"
            );
          },
          D = function () {
            c.css(
              "margin-left",
              "left" == a.direction ? k + "px" : "-" + h + "px"
            );
          };
        a.duplicated
          ? (q
              ? c.css(
                  "margin-top",
                  "up" == a.direction ? m : "-" + (2 * s - a.gap) + "px"
                )
              : c.css(
                  "margin-left",
                  "left" == a.direction
                    ? k + "px"
                    : "-" + (2 * h - a.gap) + "px"
                ),
            (l = 1))
          : q
          ? C()
          : D();
        var v = function () {
          a.duplicated &&
            (1 === l
              ? ((a._originalDuration = a.duration),
                (a.duration = q
                  ? "up" == a.direction
                    ? a.duration + m / (s / a.duration)
                    : 2 * a.duration
                  : "left" == a.direction
                  ? a.duration + k / (h / a.duration)
                  : 2 * a.duration),
                t &&
                  (t =
                    n +
                    " " +
                    a.duration / 1e3 +
                    "s " +
                    a.delayBeforeStart / 1e3 +
                    "s " +
                    a.css3easing),
                l++)
              : 2 === l &&
                ((a.duration = a._originalDuration),
                t &&
                  ((n += "0"),
                  (u = d.trim(u) + "0 "),
                  (t =
                    n +
                    " " +
                    a.duration / 1e3 +
                    "s 0s infinite " +
                    a.css3easing)),
                l++));
          q
            ? a.duplicated
              ? (2 < l &&
                  c.css("margin-top", "up" == a.direction ? 0 : "-" + s + "px"),
                (p = {
                  "margin-top": "up" == a.direction ? "-" + s + "px" : 0,
                }))
              : (C(),
                (p = {
                  "margin-top":
                    "up" == a.direction ? "-" + c.height() + "px" : m + "px",
                }))
            : a.duplicated
            ? (2 < l &&
                c.css(
                  "margin-left",
                  "left" == a.direction ? 0 : "-" + h + "px"
                ),
              (p = {
                "margin-left": "left" == a.direction ? "-" + h + "px" : 0,
              }))
            : (D(),
              (p = {
                "margin-left":
                  "left" == a.direction ? "-" + h + "px" : k + "px",
              }));
          b.trigger("beforeStarting");
          if (e) {
            c.css(A, t);
            var f = u + " { 100%  " + E(p) + "}",
              g = d("style");
            0 !== g.length
              ? g.filter(":last").append(f)
              : d("head").append("<style>" + f + "</style>");
            B(c[0], "AnimationIteration", function () {
              b.trigger("finished");
            });
            B(c[0], "AnimationEnd", function () {
              v();
              b.trigger("finished");
            });
          } else
            c.animate(p, a.duration, a.easing, function () {
              b.trigger("finished");
              a.pauseOnCycle
                ? (b.timer = setTimeout(v, a.delayBeforeStart))
                : v();
            });
          b.data("runningStatus", "resumed");
        };
        b.bind("pause", g.pause);
        b.bind("resume", g.resume);
        a.pauseOnHover && b.bind("mouseenter mouseleave", g.toggle);
        e && a.allowCss3Support
          ? v()
          : (b.timer = setTimeout(v, a.delayBeforeStart));
      }
    });
  };
  d.fn.marquee.defaults = {
    allowCss3Support: !0,
    css3easing: "linear",
    easing: "linear",
    delayBeforeStart: 1e3,
    direction: "left",
    duplicated: !1,
    duration: 5e3,
    gap: 20,
    pauseOnCycle: !1,
    pauseOnHover: !1,
  };
})(jQuery);
