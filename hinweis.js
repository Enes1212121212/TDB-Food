/* TDB Food – Datenschutz-Hinweis (ehrlich: keine Cookies, kein Tracking) */
(function () {
  var KEY = "tdb-hinweis";
  try { if (window.localStorage.getItem(KEY) === "ok") return; } catch (e) {}

  var T = {
    de: { t: "Datenschutz auf einen Blick", p: "Diese Website verwendet weder Cookies noch Tracking- oder Analyse-Tools – deine Daten bleiben vollständig bei dir.", ok: "Verstanden", more: "Mehr erfahren", label: "Datenschutz-Hinweis" },
    en: { t: "Privacy at a glance", p: "This website uses neither cookies nor tracking or analytics tools – your data stays entirely with you.", ok: "Got it", more: "Learn more", label: "Privacy notice" },
    ku: { t: "Parastina daneyan bi kurtî", p: "Ev malper ne cookie û ne jî amûrên şopandin an analîzê bi kar tîne – daneyên te bi tevahî li cem te dimînin.", ok: "Fêm kir", more: "Zêdetir", label: "Agahdariya parastina daneyan" },
    tr: { t: "Bir bakışta gizlilik", p: "Bu web sitesi çerez, takip veya analiz araçları kullanmaz – verilerin tamamen sende kalır.", ok: "Anladım", more: "Daha fazla bilgi", label: "Gizlilik bildirimi" }
  };
  var lang = "de";
  try { var s = window.localStorage.getItem("tdb-lang"); if (s && T[s]) lang = s; } catch (e) {}
  var t = T[lang];

  var css = document.createElement("style");
  css.textContent =
    "@keyframes tdbHinweisIn{from{opacity:0;transform:translateY(30px) scale(.97)}to{opacity:1;transform:none}}" +
    "@keyframes tdbHinweisOut{to{opacity:0;transform:translateY(30px) scale(.97)}}" +
    ".tdb-hinweis{position:fixed;z-index:80;left:24px;bottom:24px;width:min(420px,calc(100vw - 48px));box-sizing:border-box;padding:22px;border-radius:24px;" +
    "background:rgba(17,22,28,.92);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);border:1px solid rgba(140,203,240,.28);" +
    "box-shadow:0 24px 70px rgba(0,0,0,.55);color:#EEF2F5;font-family:'Inter Tight',system-ui,sans-serif;-webkit-font-smoothing:antialiased;animation:tdbHinweisIn .7s cubic-bezier(.16,1,.3,1) both}" +
    ".tdb-hinweis.weg{animation:tdbHinweisOut .35s ease-in both}" +
    ".tdb-hinweis-kopf{display:flex;align-items:center;gap:12px}" +
    ".tdb-hinweis-icon{flex-shrink:0;width:40px;height:40px;border-radius:50%;border:2px solid #8CCBF0;display:flex;align-items:center;justify-content:center}" +
    ".tdb-hinweis h2{margin:0;font-size:18px;font-weight:800;letter-spacing:-.02em;line-height:1.2}" +
    ".tdb-hinweis p{margin:12px 0 0;font-size:15px;line-height:1.5;color:#A7AFB8}" +
    ".tdb-hinweis-knoepfe{margin-top:18px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}" +
    ".tdb-hinweis-ok{min-height:46px;padding:0 24px;border:0;border-radius:999px;background:#8CCBF0;color:#07090C;font:inherit;font-size:15px;font-weight:800;cursor:pointer;transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s}" +
    ".tdb-hinweis-ok:hover{transform:scale(1.04);box-shadow:0 0 36px rgba(140,203,240,.5)}" +
    ".tdb-hinweis-ok:focus-visible,.tdb-hinweis-mehr:focus-visible{outline:2px solid #EEF2F5;outline-offset:3px}" +
    ".tdb-hinweis-mehr{min-height:46px;padding:0 16px;display:inline-flex;align-items:center;border-radius:999px;color:#EEF2F5;font-size:15px;font-weight:600;text-decoration:none;border:1px solid rgba(255,255,255,.18)}" +
    ".tdb-hinweis-mehr:hover{border-color:#8CCBF0;color:#8CCBF0}" +
    "@media (max-width:640px){.tdb-hinweis{left:16px;right:16px;width:auto;bottom:100px;padding:18px}}" +
    "@media (prefers-reduced-motion:reduce){.tdb-hinweis,.tdb-hinweis.weg{animation:none}}";
  document.head.appendChild(css);

  function zeigen() {
    var box = document.createElement("section");
    box.className = "tdb-hinweis";
    box.setAttribute("role", "region");
    box.setAttribute("aria-label", t.label);
    box.innerHTML =
      '<div class="tdb-hinweis-kopf"><span class="tdb-hinweis-icon" aria-hidden="true">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8CCBF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"></path><path d="M8.5 12l2.5 2.5 4.5-5"></path></svg>' +
      "</span><h2></h2></div><p></p>" +
      '<div class="tdb-hinweis-knoepfe"><button type="button" class="tdb-hinweis-ok"></button><a class="tdb-hinweis-mehr" href="datenschutz.html"></a></div>';
    box.querySelector("h2").textContent = t.t;
    box.querySelector("p").textContent = t.p;
    box.querySelector(".tdb-hinweis-ok").textContent = t.ok;
    box.querySelector(".tdb-hinweis-mehr").textContent = t.more;
    box.querySelector(".tdb-hinweis-ok").addEventListener("click", function () {
      try { window.localStorage.setItem(KEY, "ok"); } catch (e) {}
      box.classList.add("weg");
      setTimeout(function () { box.remove(); }, 400);
    });
    document.body.appendChild(box);
  }
  // Auf der Startseite erst nach dem Lade-Bildschirm einblenden
  var start = /(^|\/)(index\.html)?$/.test(location.pathname);
  setTimeout(zeigen, start ? 2600 : 900);
})();
