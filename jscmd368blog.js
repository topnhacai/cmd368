// Plugin: SelectNav.js ~ url: https://github.com/lukaszfiszer/selectnav.js

window.selectnav = function() {
  "use strict";
  var e = function(e, t) {
    function c(e) {
      var t;
      if (!e) e = window.event;
      if (e.target) t = e.target;
      else if (e.srcElement) t = e.srcElement;
      if (t.nodeType === 3) t = t.parentNode;
      if (t.value) window.location.href = t.value
    }

    function h(e) {
      var t = e.nodeName.toLowerCase();
      return t === "ul" || t === "ol"
    }

    function p(e) {
      for (var t = 1; document.getElementById("selectnav" + t); t++);
      return e ? "selectnav" + t : "selectnav" + (t - 1)
    }

    function d(e) {
      a++;
      var t = e.children.length,
        n = "",
        l = "",
        c = a - 1;
      if (!t) {
        return
      }
      if (c) {
        while (c--) {
          l += o
        }
        l += " "
      }
      for (var v = 0; v < t; v++) {
        var m = e.children[v].children[0];
        if (typeof m !== "undefined") {
          var g = m.innerText || m.textContent;
          var y = "";
          if (r) {
            y = m.className.search(r) !== -1 || m.parentNode.className.search(r) !== -1 ? f : ""
          }
          if (i && !y) {
            y = m.href === document.URL ? f : ""
          }
          n += '<option value="' + m.href + '" ' + y + ">" + l + g + "</option>";
          if (s) {
            var b = e.children[v].children[1];
            if (b && h(b)) {
              n += d(b)
            }
          }
        }
      }
      if (a === 1 && u) {
        n = '<option value="">' + u + "</option>" + n
      }
      if (a === 1) {
        n = '<select class="selectnav" id="' + p(true) + '">' + n + "</select>"
      }
      a--;
      return n
    }
    e = document.getElementById(e);
    if (!e) {
      return
    }
    if (!h(e)) {
      return
    }
    if (!("insertAdjacentHTML" in window.document.documentElement)) {
      return
    }
    document.documentElement.className += " js";
    var n = t || {},
      r = n.activeclass || "active",
      i = typeof n.autoselect === "boolean" ? n.autoselect : true,
      s = typeof n.nested === "boolean" ? n.nested : true,
      o = n.indent || "-",
      u = n.label || "Menu",
      a = 0,
      f = " selected ";
    e.insertAdjacentHTML("afterend", d(e));
    var l = document.getElementById(p());
    if (l.addEventListener) {
      l.addEventListener("change", c)
    }
    if (l.attachEvent) {
      l.attachEvent("onchange", c)
    }
    return l
  };
  return function(t, n) {
    e(t, n)
  }
}();
// Main Scripts - "NOTE" (Encrypt in free version)
$(document).ready(function() {
  selectnav("nav")
});
$(document).ready(function(m) {
  m("#menu").each(function() {
    var g = m("#menu .LinkList .widget-content ul").children("li").children("a");
    var h = g.length;
    var i, _0x7d05x6, _0x7d05x7, _0x7d05x8, _0x7d05x9;
    for (var j = 0; j < h; j++) {
      i = g.eq(j);
      _0x7d05x7 = i.text();
      if (_0x7d05x7.charAt(0) !== "_") {
        _0x7d05x6 = g.eq(j + 1);
        _0x7d05x8 = _0x7d05x6.text();
        if (_0x7d05x8.charAt(0) === "_") {
          _0x7d05x9 = i.parent();
          _0x7d05x9.append("<ul class=\"sub-menu\"/>")
        }
      };
      if (_0x7d05x7.charAt(0) === "_") {
        i.text(_0x7d05x7.replace("_", ""));
        i.parent().appendTo(_0x7d05x9.children(".sub-menu"))
      }
    };
    m("#menu ul li ul").parent("li").addClass("has-sub");
    m("#menu > .widget").css("display", "block");
    m(".mobile-menu").prepend("<div class='nav-toggle'/>");
    m("#nav2").clone().appendTo(".mobile-menu");
    m(".mobile-menu ul li a").on("click", function(a) {
      if (m(this).parent().hasClass("has-sub")) {
        a.preventDefault();
        if (!m(this).parent().hasClass("show")) {
          m(this).parent().addClass("show").children(".sub-menu").slideToggle(200)
        } else {
          m(this).parent().removeClass("show").find("> .sub-menu").slideToggle(200)
        }
      }
    });
    m(".nav-toggle").on("click", function() {
      m("body").toggleClass("show-menu")
    });
    m(".mobile-menu ul li a").each(function() {
      var a = m(this).attr("href");
      var b = a.match(/[^[\]]+(?=])/g);
      if (a.charAt(0) === "[") {
        var c = b[0].toLowerCase();
        var d = b[0].split(",");
        var e = d[0];
        var f = "/search/label/" + e + "?&max-results=" + tyOptions.labelResults;
        if (c.match("mega")) {
          m(this).attr("href", f)
        }
      }
    })
  });
  m("#search-icon").on("click", function() {
    m("body").toggleClass("show-search")
  });
  m(".ty-share-post > span").text(tyOptions.shareText);
  m("#related-wrap .title-wrap h2").text(tyOptions.relatedTitleText);
  m(".FollowByEmail .widget-content").prepend("<p class='before-text'>" + tyOptions.followByEmailText + "</p>");
  m(".cmm-title h2").text(tyOptions.cmmTitleText);
  m(".block-image .thumb img, .PopularPosts ul li img, .avatar-image-container img").each(function() {
    var a = m(this).attr("src"),
      a = a.replace(/\/s[0-9]+\-c/g, "/s1600"),
      a = a.replace("/w72-h72-p-nu/", "/s1600/"),
      a = a.replace("/hqdefault.jpg", "/mqdefault.jpg"),
      a = a.replace("/default.jpg", "/mqdefault.jpg"),
      a = a.replace("/s35/", "/s45/"),
      a = a.replace("//img1.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s45-r/avatar.png"),
      a = a.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png", tyOptions.noThumbnail);
    m(this).attr("src", a)
  });
  m(".PopularPosts .widget-content ul li").each(function() {
    var c = m(this),
      _0x7d05x13 = c.find(".item-title a"),
      _0x7d05x14 = _0x7d05x13.attr("href");
    m.ajax({
      url: _0x7d05x14,
      type: "get",
      success: function(a) {
        var b = m(a).find(".published").text();
        _0x7d05x13.parent().after("<div class='ty-meta'><span class='item-date'>" + b + "</span></div>")
      }
    })
  });
  m(".Label a").attr("href", function(a, b) {
    return b.replace(b, b + "?&max-results=" + tyOptions.labelResults)
  });
  m(window).scroll(function() {
    if (m(this).scrollTop() > 100) {
      m(".back-top").css({
        bottom: "25px"
      })
    } else {
      m(".back-top").css({
        bottom: "-100px"
      })
    }
  });
  m(".back-top").click(function() {
    m("html, body").animate({
      scrollTop: 0
    }, 800);
    return false
  });
  m("#menu li").each(function() {
    var a = m(this);
    var b = a.find("a").attr("href");
    var c = b.match(/[^[\]]+(?=])/g);
    if (b.charAt(0) === "[") {
      var d = a;
      var e = c[0].toLowerCase();
      var f = c[0].split(",");
      var g = f[0];
      _0x7d05x32(d, e, 4, g)
    }
  });
  m("#feat-sec .HTML").each(function() {
    var a = m(this);
    var b = a.children(".widget-content");
    var c = b.text().trim();
    var d = c.match(/[^[\]]+(?=])/g);
    if (c.charAt(0) === "[") {
      var e = b;
      var f = d[0].toLowerCase();
      var g = d[0].split(",");
      var h = g[0];
      _0x7d05x32(e, f, 3, h)
    }
  });
  m(".ready-widget .HTML").each(function() {
    var a = m(this);
    var b = a.children(".widget-content");
    var c = b.text().trim();
    var d = c.match(/[^[\]]+(?=])/g);
    if (c.charAt(0) === "[") {
      var e = b;
      var f = d[0].toLowerCase();
      var g = d[0].split(",");
      var h = g[0];
      var i = g[1];
      _0x7d05x32(e, f, h, i)
    }
  });
  m(".related-ready").each(function() {
    var a = m(this),
      _0x7d05x10 = a.find(".related-tag").attr("data-label");
    _0x7d05x32(a, "related-posts", 3, _0x7d05x10)
  });

  function _0x7d05x1d(a, b, c) {
    for (var d = 0; d < a[b].link.length; d++) {
      if (a[b].link[d].rel == "alternate") {
        c = a[b].link[d].href;
        break
      }
    };
    return c
  }

  function _0x7d05x22(a, b, c) {
    var d = a[b].title["$t"],
      _0x7d05x25 = "<a href=\"" + c + "\">" + d + "</a>";
    return _0x7d05x25
  }

  function _0x7d05x26(a, b) {
    var c = a[b].author[0].name["$t"],
      _0x7d05x25 = "<span class=\"item-author\">" + c + "</span>";
    return _0x7d05x25
  }

  function _0x7d05x28(a, b) {
    var c = a[b].published["$t"];
    var d = c.substring(0, 4),
      _0x7d05x8 = c.substring(5, 7),
      _0x7d05x2b = c.substring(8, 10),
      _0x7d05x2c = tyOptions.monthFormat[parseInt(_0x7d05x8, 10)] + " " + _0x7d05x2b + ", " + d,
      _0x7d05x25 = "<span class=\"item-date\">" + _0x7d05x2c + "</span>";
    return _0x7d05x25
  }

  function _0x7d05x2d(a, b) {
    var c = a[b].title["$t"],
      _0x7d05x6 = a[b].content["$t"],
      _0x7d05x2e = m("<div>").html(_0x7d05x6);
    if ("media$thumbnail" in a[b]) {
      var d = a[b]["media$thumbnail"].url.replace(/\/s[0-9]+\-c/g, "/s1600");
      if (_0x7d05x6.indexOf("youtube.com/embed") > -1) {
        d = a[b]["media$thumbnail"].url.replace("/default.jpg", "/mqdefault.jpg")
      }
    } else {
      if (_0x7d05x6.indexOf("<img") > -1) {
        d = _0x7d05x2e.find("img:first").attr("src")
      } else {
        d = tyOptions.noThumbnail
      }
    };
    var e = "<img class=\"ty-thumb\" alt=\"" + c + "\" src=\"" + d + "\"/>";
    return e
  }

  function _0x7d05x30(a, b) {
    var c = a[b].content["$t"],
      _0x7d05x2e = m("<div>").html(c),
      _0x7d05x31 = _0x7d05x2e.text();
    return _0x7d05x31
  }

  function _0x7d05x32(h, i, j, k) {
    var l = "";
    if (i.match("mega") || i.match("featured") || i.match("recent-posts") || i.match("post-tag") || i.match("related-posts")) {
      if (i.match("recent-posts")) {
        l = "/feeds/posts/default?alt=json&max-results=" + j
      } else {
        l = "/feeds/posts/default/-/" + k + "?alt=json&max-results=" + j
      };
      m.ajax({
        url: l,
        type: "get",
        dataType: "jsonp",
        success: function(c) {
          if (i.match("mega")) {
            var d = "<ul class=\"mega-widget\">"
          };
          if (i.match("featured")) {
            var d = "<ul class=\"featured-posts\">"
          };
          if (i.match("recent-posts") || i.match("post-tag")) {
            var d = "<ul class=\"custom-widget\">"
          };
          if (i.match("related-posts")) {
            var d = "<ul class=\"related-posts\">"
          };
          console.log(e);
          var e = c.feed.entry;
          console.log(c);
          if (e == undefined) {
            e = {
              length: 0
            };
            console.log("No entries found for this URL :: ", l)
          };
          for (var f = "", _0x7d05x1f = 0; _0x7d05x1f < e.length; _0x7d05x1f++) {
            var f = _0x7d05x1d(e, _0x7d05x1f, f),
              _0x7d05x36 = _0x7d05x22(e, _0x7d05x1f, f),
              _0x7d05x37 = _0x7d05x2d(e, _0x7d05x1f),
              _0x7d05x38 = _0x7d05x26(e, _0x7d05x1f),
              _0x7d05x39 = _0x7d05x28(e, _0x7d05x1f),
              _0x7d05x31 = _0x7d05x30(e, _0x7d05x1f);
            var g = "";
            if (i.match("mega")) {
              g += "<div class=\"mega-item\"><div class=\"mega-content\"><a class=\"mega-img\" href=\"" + f + "\">" + _0x7d05x37 + "</a><h3 class=\"ty-title\">" + _0x7d05x36 + "</h3><div class=\"ty-meta\">" + _0x7d05x39 + "</div></div></div>"
            } else {
              if (i.match("featured")) {
                if (h.parent().addClass("ty-show")) {};
                if (_0x7d05x1f == 0) {
                  g += "<li class=\"first-item\"><div class=\"ty-inner\"><a class=\"ty-image\" href=\"" + f + "\">" + _0x7d05x37 + "</a><div class=\"ty-entry\"><h3 class=\"ty-title\">" + _0x7d05x36 + "</h3><div class=\"ty-meta\">" + _0x7d05x38 + "" + _0x7d05x39 + "</div><p class=\"ty-snip\">" + _0x7d05x31.substr(0, 96) + "...</p></div></div></li>"
                } else {
                  if (_0x7d05x1f == 1) {
                    g += "<li class=\"second-item\"><div class=\"ty-inner\"><a class=\"ty-image\" href=\"" + f + "\">" + _0x7d05x37 + "</a><div class=\"ty-entry\"><h3 class=\"ty-title\">" + _0x7d05x36 + "</h3><div class=\"ty-meta\">" + _0x7d05x39 + "</div></div></div></li>"
                  } else {
                    g += "<li class=\"last-item\"><div class=\"ty-inner\"><a class=\"ty-image\" href=\"" + f + "\">" + _0x7d05x37 + "</a><div class=\"ty-entry\"><h3 class=\"ty-title\">" + _0x7d05x36 + "</h3><div class=\"ty-meta\">" + _0x7d05x39 + "</div></div></div></li>"
                  }
                }
              } else {
                if (i.match("recent-posts") || i.match("post-tag")) {
                  g += "<li><a class=\"custom-thumb\" href=\"" + f + "\">" + _0x7d05x37 + "</a><div class=\"ty-entry\"><h3 class=\"ty-title\">" + _0x7d05x36 + "</h3><div class=\"ty-meta\">" + _0x7d05x39 + "</div></div></li>"
                } else {
                  i.match("related-posts") && (g += "<li class=\"related-item\"><div class=\"ty-image\"><a class=\"related-thumb\" href=\"" + f + "\">" + _0x7d05x37 + "</a></div><div class=\"ty-entry\"><h3 class=\"ty-title\">" + _0x7d05x36 + "</h3><div class=\"ty-meta\">" + _0x7d05x39 + "</div></div></li>")
                }
              }
            };
            d += g
          };
          d += "</ul>";
          if (i.match("mega")) {
            h.addClass("has-sub mega-menu").append(d);
            h.find("a:first").attr("href", function(a, b) {
              return b.replace(b, "/search/label/" + k + "?&max-results=" + tyOptions.labelResults)
            })
          } else {
            h.html(d)
          }
        }
      })
    }
  }
});
var mql = window.matchMedia("screen and (min-width: 60em)");
window.onload = function() {
  var a = document.getElementById("mytemplate");
  if (a == null) {
    window.location.href = "https://cmd368tips.com"
  };
  a.setAttribute("href", "https://cmd368tips.com");
  a.setAttribute("ref", "nofollow");
  a.setAttribute("title", "Nhà Cái CMD368");
  a.innerHTML = "CMD368"
}
