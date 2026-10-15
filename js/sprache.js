// Sprachumschaltung mit Anpassung der Schreibrichtung (FA3)
const BOOTSTRAP_CSS = {
  ltr: {
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css",
    integrity: "sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr"
  },
  rtl: {
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.rtl.min.css",
    integrity: "sha256-gP5J22JsVu+X8rzMEh1Kx+lD89HF3DW4YUWPiU9udUc="
  }
};


// Übersetzungen für Navigation und Überschriften
const TEXTE = {
  de: {
    start: "Start", daten: "Daten", ueber: "Über uns",
    inhalt: "Inhalt", einfuehrung: "Einführung", tabelle: "Tabelle", hinweise: "Hinweise",
    titel: "CO2-Emissionen weltweit",
    impressum: "Impressum", datenschutz: "Datenschutz", schliessen: "Schließen"

  },
  ar: {
    start: "الرئيسية", daten: "البيانات", ueber: "من نحن",
    inhalt: "المحتوى", einfuehrung: "مقدمة", tabelle: "الجدول", hinweise: "ملاحظات",
    titel: "انبعاثات ثاني أكسيد الكربون حول العالم",
    impressum: "بيانات الناشر", datenschutz: "حماية البيانات", schliessen: "إغلاق"

  }
};

function spracheSetzen(sprache) {
  const rtl = sprache === "ar";

  // Sprache und Schreibrichtung am html-Element setzen
  document.documentElement.lang = sprache;
  document.documentElement.dir = rtl ? "rtl" : "ltr";

  // Passendes Bootstrap-Stylesheet mit Integritätsprüfung laden
  const css = document.getElementById("bootstrap-css");
  const ziel = rtl ? BOOTSTRAP_CSS.rtl : BOOTSTRAP_CSS.ltr;
  css.integrity = ziel.integrity;
  css.href = ziel.href;

  // Texte austauschen 
  document.querySelectorAll("[data-text]").forEach(element => {
    element.textContent = TEXTE[sprache][element.dataset.text];
  });

  // Aktiven Sprachbutton für Screenreader kennzeichnen
  document.querySelectorAll("[data-sprache]").forEach(button => {
    button.setAttribute("aria-pressed", button.dataset.sprache === sprache);
  });
}


document.querySelectorAll("[data-sprache]").forEach(button => {
  button.addEventListener("click", () => spracheSetzen(button.dataset.sprache));
});