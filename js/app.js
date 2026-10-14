const { createApp } = Vue;

createApp({
  data() {
    return {
      daten: emissionsDaten,
      filterLand: "",
      filterUnternehmen: "",
      sortSchluessel: "emissionen",
      aufsteigend: false
    };
  },

  computed: {
    // Filtert und sortiert Daten bei jeder Eingabe automatisch neu
    angezeigteDaten() {
      const land = this.filterLand.trim().toLowerCase();
      const unternehmen = this.filterUnternehmen.trim().toLowerCase();

      const gefiltert = this.daten.filter(eintrag =>
        eintrag.land.toLowerCase().includes(land) &&
        eintrag.unternehmen.toLowerCase().includes(unternehmen)
      );

      const richtung = this.aufsteigend ? 1 : -1;
      return [...gefiltert].sort((a, b) => {
        const wertA = a[this.sortSchluessel];
        const wertB = b[this.sortSchluessel];
        if (typeof wertA === "number") {
          return (wertA - wertB) * richtung;
        }
        return wertA.localeCompare(wertB, "de") * richtung;
      });
    }
  },

  
  
  methods: {
    sortierenNach(schluessel) {
      if (this.sortSchluessel === schluessel) {
        this.aufsteigend = !this.aufsteigend;
      } else {
        this.sortSchluessel = schluessel;
        this.aufsteigend = true;
      }
    },
    ariaSort(schluessel) {
      if (this.sortSchluessel !== schluessel) return "none";
      return this.aufsteigend ? "ascending" : "descending";
    },
    pfeil(schluessel) {
      if (this.sortSchluessel !== schluessel) return "↕";
      return this.aufsteigend ? "▲" : "▼";
    },
    formatieren(zahl) {
      return zahl.toLocaleString("de-DE", { minimumFractionDigits: 1 });
    },
    filterZuruecksetzen() {
      this.filterLand = "";
      this.filterUnternehmen = "";
    }
  }
}).mount("#app");
