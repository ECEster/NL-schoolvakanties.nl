// ═══════════════════════════════════════════════════════════════
//  nl-schoolvakanties.nl
//  Bron: rijksoverheid.nl · Jaren 2027+ zijn indicatief
// ═══════════════════════════════════════════════════════════════

// ── Constants ────────────────────────────────────────────────────

const MONTHS_NL  = ['Januari','Februari','Maart','April','Mei','Juni',
                    'Juli','Augustus','September','Oktober','November','December'];
const MONTHS_SH  = ['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'];
const DAYS_SH    = ['Ma','Di','Wo','Do','Vr','Za','Zo'];

// ── Language / i18n ───────────────────────────────────────────────

let activeLang = localStorage.getItem('lang') || 'nl';

const MONTHS_EN    = ['January','February','March','April','May','June',
                      'July','August','September','October','November','December'];
const MONTHS_SH_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAYS_SH_EN   = ['Mo','Tu','We','Th','Fr','Sa','Su'];

function months()   { return activeLang === 'en' ? MONTHS_EN    : MONTHS_NL; }
function monthsSh() { return activeLang === 'en' ? MONTHS_SH_EN : MONTHS_SH; }
function daysSh()   { return activeLang === 'en' ? DAYS_SH_EN   : DAYS_SH; }

const TYPE_NAAM = {
    nl: { zomer:'Zomervakantie', herfst:'Herfstvakantie', kerst:'Kerstvakantie', voorjaar:'Voorjaarsvakantie', mei:'Meivakantie' },
    en: { zomer:'Summer holiday', herfst:'Autumn holiday', kerst:'Christmas holiday', voorjaar:'Spring holiday', mei:'May holiday' },
};
const REGION_LABEL_TRANS = {
    nl: { noord:'Noord', midden:'Midden', zuidd:'Zuid' },
    en: { noord:'North', midden:'Central', zuidd:'South' },
};
const HOLIDAY_NAMES_EN = {
    'Nieuwjaarsdag':      "New Year's Day",
    'Koningsdag':         "King's Day",
    'Bevrijdingsdag':     "Liberation Day",
    'Goede Vrijdag':      "Good Friday",
    'Eerste Paasdag':     "Easter Sunday",
    'Tweede Paasdag':     "Easter Monday",
    'Hemelvaartsdag':     "Ascension Day",
    'Eerste Pinksterdag': "Whit Sunday",
    'Tweede Pinksterdag': "Whit Monday",
    'Eerste Kerstdag':    "Christmas Day",
    'Tweede Kerstdag':    "Boxing Day",
    'Oudjaarsdag':        "New Year's Eve",
};

function vacName(v)     { return TYPE_NAAM[activeLang][v.type] || v.naam; }
function regionLabel(r) { return REGION_LABEL_TRANS[activeLang][r]; }
function holName(n)     { return activeLang === 'en' ? (HOLIDAY_NAMES_EN[n] || n) : n; }

const UI = {
    nl: {
        nu:              'Nu',
        voorbij:         'Voorbij',
        duur:            'Duur:',
        dagen:           'dagen',
        dag:             'dag',
        dgn:             'dgn',
        alle_gelijk:     "Alle regio's gelijk:",
        voor_alle:       "voor alle regio's",
        alle_regio:      "Alle regio's:",
        schooljaar:      'Schooljaar',
        kalenderjaar:    'Kalenderjaar',
        wk:              'wk',
        region_noord:    'Noord',
        region_midden:   'Midden',
        region_zuidd:    'Zuid',
        all_regions:     "Alle regio's",
        export_title:    'Exporteer naar agenda (.ics)',
        export_label:    'Schooljaar',
        import_hint:     'Importeer het .ics bestand in Google Agenda, Outlook of Apple Agenda.',
        postit_long:     'Print hier gemakkelijk de kalender voor op<br>je koelkast!',
        postit_short:    'Print!',
        provisional:     '⚠️ Jaren 2028 en later zijn <strong>indicatief</strong>. Controleer de officiële data op <a href="https://www.rijksoverheid.nl/onderwerpen/schoolvakanties" target="_blank" rel="noopener">rijksoverheid.nl</a>.',
        footer_seo:      'Alle schoolvakanties van Nederland voor regio Noord, Midden en Zuid — zomervakantie, herfstvakantie, kerstvakantie, voorjaarsvakantie en meivakantie overzichtelijk op één pagina.',
        footer_indicatief: 'Jaren 2028+ zijn indicatief. Raadpleeg altijd de officiële bron.',
        toon_voorbij:    n      => `Toon voorbije vakanties (${n})`,
        verberg_voorbij: 'Verberg voorbije vakanties',
        mei_note:        'Data kunnen per school verschillen. Controleer bij de eigen school.',
        nog_vakantie:    n      => `Nog <strong>${n} dag${n!==1?'en':''}</strong> vakantie`,
        nog_x_dagen:     (n,nm) => `Nog <strong>${n} dag${n!==1?'en':''}</strong> ${nm}`,
        x_tot:           (n,nm) => `<strong>${n} dag${n!==1?'en':''}</strong> tot ${nm}`,
        cal_name_all:    y      => `Schoolvakanties NL ${y}`,
        cal_name:        (r,y)  => `Schoolvakanties ${regionLabel(r)} ${y}`,
        region_desc:     r      => `Schoolvakantie regio ${regionLabel(r)}`,
        iab_text:        'Je opent deze pagina via de Instagram-app. <strong>Export</strong> en <strong>Afdrukken</strong> werken alleen in een echte browser. Tik rechtsonder op <strong>⋯</strong> en kies <em>Openen in browser</em>.',
        iab_close:       'Sluiten',
    },
    en: {
        nu:              'Now',
        voorbij:         'Past',
        duur:            'Duration:',
        dagen:           'days',
        dag:             'day',
        dgn:             'd',
        alle_gelijk:     'All regions equal:',
        voor_alle:       'for all regions',
        alle_regio:      'All regions:',
        schooljaar:      'School year',
        kalenderjaar:    'Calendar year',
        wk:              'wk',
        region_noord:    'North',
        region_midden:   'Central',
        region_zuidd:    'South',
        all_regions:     'All regions',
        export_title:    'Export to calendar (.ics)',
        export_label:    'School year',
        import_hint:     'Import the .ics file into Google Calendar, Outlook or Apple Calendar.',
        postit_long:     'Easily print the calendar for your fridge!',
        postit_short:    'Print!',
        provisional:     '⚠️ Years 2028 and later are <strong>indicative</strong>. Check the official dates at <a href="https://www.rijksoverheid.nl/onderwerpen/schoolvakanties" target="_blank" rel="noopener">rijksoverheid.nl</a>.',
        footer_seo:      'All Dutch school holidays for regions North, Central and South — summer, autumn, Christmas, spring and May holidays at a glance.',
        footer_indicatief: 'Years 2028+ are indicative. Always check the official source.',
        toon_voorbij:    n      => `Show past holidays (${n})`,
        verberg_voorbij: 'Hide past holidays',
        mei_note:        'Dates may vary by school. Check with your school.',
        nog_vakantie:    n      => `<strong>${n} day${n!==1?'s':''}</strong> of holiday left`,
        nog_x_dagen:     (n,nm) => `<strong>${n} day${n!==1?'s':''}</strong> left of ${nm}`,
        x_tot:           (n,nm) => `<strong>${n} day${n!==1?'s':''}</strong> until ${nm}`,
        cal_name_all:    y      => `School Holidays NL ${y}`,
        cal_name:        (r,y)  => `School Holidays ${regionLabel(r)} ${y}`,
        region_desc:     r      => `School holiday region ${regionLabel(r)}`,
        iab_text:        'You are opening this page via the Instagram app. <strong>Export</strong> and <strong>Print</strong> only work in a real browser. Tap <strong>⋯</strong> at the bottom right and choose <em>Open in browser</em>.',
        iab_close:       'Close',
    },
};

function t(key, ...args) {
    const val = UI[activeLang][key];
    return typeof val === 'function' ? val(...args) : (val ?? '');
}

function isoWeek(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const y0 = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - y0) / 86400000 + 1) / 7);
}

const C_NOORD  = '#B5A800';
const C_MIDDEN = '#6B96C4';
const C_ZUIDD  = '#7EBD8F';

const REGION_COLOR = { noord: C_NOORD, midden: C_MIDDEN, zuidd: C_ZUIDD };

const TYPE_EMOJI = {
    zomer:    '☀️',
    herfst:   '🍂',
    kerst:    '❄️',
    voorjaar: '🌱',
    mei:      '🌷',
};

const TYPE_DECO = {
    zomer:    '<img src="images/clay-zomer.svg" class="deco-clay" alt="">',
    herfst:   '<img src="images/clay-herfst.svg" class="deco-clay" alt="">',
    kerst:    '<img src="images/clay-kerst.svg" class="deco-clay" alt="">',
    voorjaar: '🌸',
    mei:      '🌼',
};

const TYPE_ICON = {
    zomer:    'images/icons_seasons/IconSummerGreen.png',
    herfst:   'images/icons_seasons/IconFall.png',
    kerst:    'images/icons_seasons/IconWinterGreen.png',
    voorjaar: 'images/icons_seasons/IconPreyear.png',
    mei:      'images/icons_seasons/IconLenteBright.png',
};

const TYPE_COLOR = {
    zomer:    '#C8A000',
    herfst:   '#B8541A',
    kerst:    '#1A5C2A',
    voorjaar: '#F5C518',
    mei:      '#C4A0CC',
};

const HOLIDAY_COLOR = '#9878C8';
const KONINGSDAG_COLOR = '#FF9227';
const KERSTDAG_COLOR = '#D6362A';
const PAASDAG_COLOR = '#A8BCC9';
const GOEDE_VRIJDAG_COLOR = '#4CAF6E';
const BEVRIJDINGSDAG_COLOR = '#C1D82F';
const HEMELVAART_COLOR = '#3EA8A6';
const PINKSTEREN_COLOR = '#EFA8C4';
const JAARWISSELING_COLOR = '#C9A876';
const holidayColor = name => {
    if (name === 'Koningsdag') return KONINGSDAG_COLOR;
    if (name === 'Eerste Kerstdag' || name === 'Tweede Kerstdag') return KERSTDAG_COLOR;
    if (name === 'Eerste Paasdag' || name === 'Tweede Paasdag') return PAASDAG_COLOR;
    if (name === 'Goede Vrijdag') return GOEDE_VRIJDAG_COLOR;
    if (name === 'Bevrijdingsdag') return BEVRIJDINGSDAG_COLOR;
    if (name === 'Hemelvaartsdag') return HEMELVAART_COLOR;
    if (name === 'Eerste Pinksterdag' || name === 'Tweede Pinksterdag') return PINKSTEREN_COLOR;
    if (name === 'Oudjaarsdag' || name === 'Nieuwjaarsdag') return JAARWISSELING_COLOR;
    return HOLIDAY_COLOR;
};

const EGG_DOODLE =
    '<path d="M12 21c-4 0-6-3.6-6-7.6C6 8.4 9 3.3 12 3.3s6 5.1 6 10.1c0 4-2 7.6-6 7.6Z"/>' +
    '<path d="M8 12.3l1.4 1.4 1.4-1.4 1.4 1.4 1.4-1.4 1.4 1.4" stroke-width="1.3"/>';
const FLAME_DOODLE =
    '<path d="M12 21c-3 0-5-2-5-5 0-3 2-4 3-7 1 2 1 3 2 3 .5-2-.5-4 0-6 2 2 4 5 4 8.5 0 3.5-1 6.5-4 6.5Z"/>';
const TREE_DOODLE =
    '<path d="M12 2 7 9h3l-4 6h4l-4 6h12l-4-6h4l-4-6h3Z"/><path d="M12 21v1.5"/>';

const HOLIDAY_DOODLES = {
    'Nieuwjaarsdag':
        '<path d="M12 2 13.6 9.4 21 11 13.6 12.6 12 20 10.4 12.6 3 11 10.4 9.4Z"/>',
    'Oudjaarsdag':
        '<g transform="rotate(-18 6 9)"><path d="M2 3 6 8 10 3"/><path d="M6 8v6"/><path d="M4 15h4"/></g>' +
        '<g transform="rotate(18 18 9)"><path d="M14 3 18 8 22 3"/><path d="M18 8v6"/><path d="M16 15h4"/></g>' +
        '<path d="M12 0.5v2M10.8 1.7l0.9 0.9M13.2 1.7l-0.9 0.9"/>',
    'Koningsdag':
        '<path d="M4 18h16M4 18l1.4-8 4.1 4 2.5-6.6 2.5 6.6 4.1-4 1.4 8"/>' +
        '<circle cx="5.6" cy="10" r=".6" fill="currentColor" stroke="none"/>' +
        '<circle cx="12" cy="8.1" r=".6" fill="currentColor" stroke="none"/>' +
        '<circle cx="18.4" cy="10" r=".6" fill="currentColor" stroke="none"/>',
    'Bevrijdingsdag':
        '<path d="M5 22V3"/><path d="M5 3.5c2.8 1.3 4.2-1.3 7 0 2.8 1.3 4.2-1.3 7 0v8.5c-2.8-1.3-4.2 1.3-7 0-2.8-1.3-4.2 1.3-7 0Z"/>',
    'Goede Vrijdag':
        '<path d="M12 3v18M7.3 8.3h9.4"/>',
    'Eerste Paasdag': EGG_DOODLE,
    'Tweede Paasdag': EGG_DOODLE,
    'Hemelvaartsdag':
        '<path d="M7 17a4 4 0 0 1-.5-7.97A5 5 0 0 1 16.2 8.1 4.5 4.5 0 0 1 17 17Z"/>',
    'Eerste Pinksterdag': FLAME_DOODLE,
    'Tweede Pinksterdag': FLAME_DOODLE,
    'Eerste Kerstdag': TREE_DOODLE,
    'Tweede Kerstdag': TREE_DOODLE,
};
function holidayIcon(name) {
    const inner = HOLIDAY_DOODLES[name] || '<circle cx="12" cy="12" r="7"/>';
    return `<svg class="doodle" viewBox="0 0 24 24" fill="none" stroke="currentColor" ` +
        `stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ` +
        `style="color:${holidayColor(name)}">${inner}</svg>`;
}

// ── School holiday data ──────────────────────────────────────────
// Bron: rijksoverheid.nl
// Jaren 2024-2026: bevestigd. 2027+: indicatief.

const DATA = {
    '2024-2025': {
        confirmed: true,
        vakanties: [
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2024-07-13',tot:'2024-08-25'},
                midden:{van:'2024-07-20',tot:'2024-09-01'},
                zuidd: {van:'2024-07-06',tot:'2024-08-18'},
            }},
            { naam:'Herfstvakantie', type:'herfst', periodes:{
                noord: {van:'2024-10-26',tot:'2024-11-03'},
                midden:{van:'2024-10-26',tot:'2024-11-03'},
                zuidd: {van:'2024-10-19',tot:'2024-10-27'},
            }},
            { naam:'Kerstvakantie', type:'kerst', alleSame:true, periodes:{
                noord: {van:'2024-12-21',tot:'2025-01-05'},
                midden:{van:'2024-12-21',tot:'2025-01-05'},
                zuidd: {van:'2024-12-21',tot:'2025-01-05'},
            }},
            { naam:'Voorjaarsvakantie', type:'voorjaar', periodes:{
                noord: {van:'2025-02-15',tot:'2025-02-23'},
                midden:{van:'2025-02-22',tot:'2025-03-02'},
                zuidd: {van:'2025-02-22',tot:'2025-03-02'},
            }},
            { naam:'Meivakantie', type:'mei', note:true, periodes:{
                noord: {van:'2025-04-26',tot:'2025-05-04'},
                midden:{van:'2025-04-26',tot:'2025-05-04'},
                zuidd: {van:'2025-04-26',tot:'2025-05-04'},
            }},
        ]
    },
    '2025-2026': {
        confirmed: true,
        vakanties: [
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2025-07-12',tot:'2025-08-24'},
                midden:{van:'2025-07-19',tot:'2025-08-31'},
                zuidd: {van:'2025-07-05',tot:'2025-08-17'},
            }},
            { naam:'Herfstvakantie', type:'herfst', periodes:{
                noord: {van:'2025-10-18',tot:'2025-10-26'},
                midden:{van:'2025-10-18',tot:'2025-10-26'},
                zuidd: {van:'2025-10-11',tot:'2025-10-19'},
            }},
            { naam:'Kerstvakantie', type:'kerst', alleSame:true, periodes:{
                noord: {van:'2025-12-20',tot:'2026-01-04'},
                midden:{van:'2025-12-20',tot:'2026-01-04'},
                zuidd: {van:'2025-12-20',tot:'2026-01-04'},
            }},
            { naam:'Voorjaarsvakantie', type:'voorjaar', periodes:{
                noord: {van:'2026-02-21',tot:'2026-03-01'},
                midden:{van:'2026-02-14',tot:'2026-02-22'},
                zuidd: {van:'2026-02-14',tot:'2026-02-22'},
            }},
            { naam:'Meivakantie', type:'mei', note:true, periodes:{
                noord: {van:'2026-04-25',tot:'2026-05-03'},
                midden:{van:'2026-04-25',tot:'2026-05-03'},
                zuidd: {van:'2026-04-25',tot:'2026-05-03'},
            }},
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2026-07-04',tot:'2026-08-16'},
                midden:{van:'2026-07-18',tot:'2026-08-30'},
                zuidd: {van:'2026-07-11',tot:'2026-08-23'},
            }},
        ]
    },
    '2026-2027': {
        confirmed: true,
        vakanties: [
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2026-07-04',tot:'2026-08-16'},
                midden:{van:'2026-07-18',tot:'2026-08-30'},
                zuidd: {van:'2026-07-11',tot:'2026-08-23'},
            }},
            { naam:'Herfstvakantie', type:'herfst', periodes:{
                noord: {van:'2026-10-10',tot:'2026-10-18'},
                midden:{van:'2026-10-17',tot:'2026-10-25'},
                zuidd: {van:'2026-10-17',tot:'2026-10-25'},
            }},
            { naam:'Kerstvakantie', type:'kerst', alleSame:true, periodes:{
                noord: {van:'2026-12-19',tot:'2027-01-03'},
                midden:{van:'2026-12-19',tot:'2027-01-03'},
                zuidd: {van:'2026-12-19',tot:'2027-01-03'},
            }},
            { naam:'Voorjaarsvakantie', type:'voorjaar', periodes:{
                noord: {van:'2027-02-20',tot:'2027-02-28'},
                midden:{van:'2027-02-20',tot:'2027-02-28'},
                zuidd: {van:'2027-02-13',tot:'2027-02-21'},
            }},
            { naam:'Meivakantie', type:'mei', note:true, periodes:{
                noord: {van:'2027-04-24',tot:'2027-05-02'},
                midden:{van:'2027-04-24',tot:'2027-05-02'},
                zuidd: {van:'2027-04-24',tot:'2027-05-02'},
            }},
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2027-07-10',tot:'2027-08-22'},
                midden:{van:'2027-07-17',tot:'2027-08-29'},
                zuidd: {van:'2027-07-24',tot:'2027-09-05'},
            }},
        ]
    },
    '2027-2028': {
        confirmed: false,
        vakanties: [
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2027-07-10',tot:'2027-08-22'},
                midden:{van:'2027-07-17',tot:'2027-08-29'},
                zuidd: {van:'2027-07-03',tot:'2027-08-15'},
            }},
            { naam:'Herfstvakantie', type:'herfst', periodes:{
                noord: {van:'2027-10-16',tot:'2027-10-24'},
                midden:{van:'2027-10-23',tot:'2027-10-31'},
                zuidd: {van:'2027-10-23',tot:'2027-10-31'},
            }},
            { naam:'Kerstvakantie', type:'kerst', alleSame:true, periodes:{
                noord: {van:'2027-12-25',tot:'2028-01-09'},
                midden:{van:'2027-12-25',tot:'2028-01-09'},
                zuidd: {van:'2027-12-25',tot:'2028-01-09'},
            }},
            { naam:'Voorjaarsvakantie', type:'voorjaar', periodes:{
                noord: {van:'2028-02-19',tot:'2028-02-27'},
                midden:{van:'2028-02-26',tot:'2028-03-05'},
                zuidd: {van:'2028-02-12',tot:'2028-02-20'},
            }},
            { naam:'Meivakantie', type:'mei', note:true, periodes:{
                noord: {van:'2028-04-29',tot:'2028-05-14'},
                midden:{van:'2028-04-29',tot:'2028-05-14'},
                zuidd: {van:'2028-04-29',tot:'2028-05-14'},
            }},
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2028-07-08',tot:'2028-08-20'},
                midden:{van:'2028-07-15',tot:'2028-08-27'},
                zuidd: {van:'2028-07-01',tot:'2028-08-13'},
            }},
        ]
    },
};

// ── State ─────────────────────────────────────────────────────────

const VALID_REGIONS   = ['noord', 'midden', 'zuidd'];
let activeRegion      = VALID_REGIONS.includes(location.hash.slice(1)) ? location.hash.slice(1) : (window.__defaultRegion || 'noord');
let yearExplicit      = false;
let showPast          = false;

function setRegionURL(region) {
    history.pushState(null, '', '#' + region);
}

let activeYear = (() => {
    const t = today();
    for (const [y, yd] of Object.entries(DATA)) {
        if (yd.vakanties.some(v => Object.values(v.periodes).some(p => parseDate(p.tot) >= t)))
            return y;
    }
    return Object.keys(DATA)[0];
})();

let activeCalYear = new Date().getFullYear();

// ── Date helpers ──────────────────────────────────────────────────

function parseDate(s) {
    const [y,m,d] = s.split('-').map(Number);
    return new Date(y, m-1, d);
}

function today() {
    const d = new Date();
    d.setHours(0,0,0,0);
    return d;
}

function daysBetween(a,b) {
    return Math.round((b-a)/86400000);
}

function durationDays(van,tot) {
    return daysBetween(parseDate(van), parseDate(tot)) + 1;
}

function formatDate(s) {
    const d = parseDate(s);
    return `${d.getDate()} ${monthsSh()[d.getMonth()]}`;
}

function formatDateLong(s) {
    const d = parseDate(s);
    return `${d.getDate()} ${months()[d.getMonth()]} ${d.getFullYear()}`;
}

function cardStatus(van,tot) {
    const t = today(), s = parseDate(van), e = parseDate(tot);
    if (t > e) return 'past';
    if (t >= s) return 'current';
    return 'upcoming';
}

function statusForAll(v) {
    const t = today();
    const all = Object.values(v.periodes);
    if (all.every(p => t > parseDate(p.tot))) return 'past';
    if (all.some(p => t >= parseDate(p.van) && t <= parseDate(p.tot))) return 'current';
    return 'upcoming';
}

function earliestStart(v) {
    return Object.values(v.periodes)
        .map(p => parseDate(p.van))
        .reduce((a,b) => a < b ? a : b);
}

function latestEnd(v) {
    return Object.values(v.periodes)
        .map(p => parseDate(p.tot))
        .reduce((a,b) => a > b ? a : b);
}

// ── Nederlandse feestdagen ────────────────────────────────────────

function easterDate(y) {
    const a=y%19, b=Math.floor(y/100), c=y%100, d=Math.floor(b/4), e=b%4,
          f=Math.floor((b+8)/25), g=Math.floor((b-f+1)/3),
          h=(19*a+b-d-g+15)%30, i=Math.floor(c/4), k=c%4,
          l=(32+2*e+2*i-h-k)%7, m=Math.floor((a+11*h+22*l)/451),
          mo=Math.floor((h+l-7*m+114)/31), da=((h+l-7*m+114)%31)+1;
    return new Date(y, mo-1, da);
}

const HOLIDAY_CACHE = {};

function getDutchHolidays(year) {
    if (HOLIDAY_CACHE[year]) return HOLIDAY_CACHE[year];
    const h = {};
    const dk = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const add = (d, name) => { h[dk(d)] = name; };
    const shift = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate()+n);

    add(new Date(year,0,1),  'Nieuwjaarsdag');
    let kd = new Date(year,3,27);
    if (kd.getDay()===0) kd = shift(kd,-1);
    add(kd, 'Koningsdag');
    add(new Date(year,4,5),  'Bevrijdingsdag');
    add(new Date(year,11,25),'Eerste Kerstdag');
    add(new Date(year,11,26),'Tweede Kerstdag');
    add(new Date(year,11,31),'Oudjaarsdag');

    const easter = easterDate(year);
    add(shift(easter,-2), 'Goede Vrijdag');
    add(easter,           'Eerste Paasdag');
    add(shift(easter,1),  'Tweede Paasdag');
    add(shift(easter,39), 'Hemelvaartsdag');
    add(shift(easter,49), 'Eerste Pinksterdag');
    add(shift(easter,50), 'Tweede Pinksterdag');

    HOLIDAY_CACHE[year] = h;
    return h;
}

function dateKey(d) {
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

// ── Mini calendar ─────────────────────────────────────────────────

function getMonthsForVakantie(v) {
    const seen = new Set();
    const months = [];
    for (const p of Object.values(v.periodes)) {
        let cur = new Date(parseDate(p.van).getFullYear(), parseDate(p.van).getMonth(), 1);
        const end = new Date(parseDate(p.tot).getFullYear(), parseDate(p.tot).getMonth(), 1);
        while (cur <= end) {
            const key = `${cur.getFullYear()}-${cur.getMonth()}`;
            if (!seen.has(key)) { seen.add(key); months.push({y:cur.getFullYear(),m:cur.getMonth()}); }
            cur = new Date(cur.getFullYear(), cur.getMonth()+1, 1);
        }
    }
    return months.sort((a,b) => a.y - b.y || a.m - b.m);
}

function renderMiniCal(year, month, v) {
    const t = today();
    const firstDay = new Date(year, month, 1);
    const lastDay  = new Date(year, month+1, 0);
    let startDow   = (firstDay.getDay() + 6) % 7;

    let html = `<div class="mini-cal"><div class="mc-title">${monthsSh()[month]} ${year}</div><div class="mc-grid">`;

    for (const h of daysSh()) html += `<span class="mc-head">${h}</span>`;
    for (let i=0; i<startDow; i++) html += `<span></span>`;

    for (let day=1; day<=lastDay.getDate(); day++) {
        const date = new Date(year,month,day);
        const dow  = date.getDay();
        const isWe = dow===0 || dow===6;
        const isTd = date.getTime() === t.getTime();

        const vacRegions = [];
        for (const [r,p] of Object.entries(v.periodes)) {
            if (date >= parseDate(p.van) && date <= parseDate(p.tot)) vacRegions.push(r);
        }

        let cls = 'mc-day';
        if (isWe) cls += ' weekend';
        if (isTd) cls += ' today';
        if (vacRegions.length) cls += ' vac';

        let dotStyle = '';
        if (vacRegions.length === 1) {
            dotStyle = `background:${REGION_COLOR[vacRegions[0]]}`;
        } else if (vacRegions.length === 2) {
            const [c1,c2] = vacRegions.map(r=>REGION_COLOR[r]);
            dotStyle = `background:linear-gradient(to right,${c1} 50%,${c2} 50%)`;
        } else if (vacRegions.length === 3) {
            const [c1,c2,c3] = vacRegions.map(r=>REGION_COLOR[r]);
            dotStyle = `background:linear-gradient(to right,${c1} 33%,${c2} 33% 66%,${c3} 66%)`;
        }

        html += `<span class="${cls}" style="${dotStyle ? `--dot:1` : ''}" ${dotStyle ? `data-dot` : ''}>${day}</span>`;
    }

    html += `</div></div>`;
    return html;
}

// ── Countdown ─────────────────────────────────────────────────────

function renderCountdown() {
    const el = document.getElementById('countdown');
    const td  = today();
    let found = null;

    outer: for (const [year, yd] of Object.entries(DATA)) {
        for (const v of yd.vakanties) {
            const p = v.periodes[activeRegion];
            if (!p || td > parseDate(p.tot)) continue;
            found = {v, year};
            break outer;
        }
    }

    if (!found) {
        el.innerHTML = `<div class="cd-region">${regionLabel(activeRegion)}</div>`;
        return;
    }

    const {v} = found;
    document.querySelector('.hero').dataset.season = v.type;

    const p = v.periodes[activeRegion];
    const startDate = parseDate(p.van);
    const endDate   = parseDate(p.tot);
    const isCurrent = td >= startDate && td <= endDate;

    let countdownHTML;
    if (isCurrent) {
        const daysLeft = daysBetween(td, endDate) + 1;
        countdownHTML = `<div class="cd-countdown">${t('nog_x_dagen', daysLeft, vacName(v).toLowerCase())}</div>`;
    } else {
        const daysTo = daysBetween(td, startDate);
        countdownHTML = `<div class="cd-countdown">${t('x_tot', daysTo, vacName(v))}</div>`;
    }

    el.innerHTML = `
        <div class="cd-region">${regionLabel(activeRegion)}</div>
        ${countdownHTML}`;
}

// ── Duration summary ──────────────────────────────────────────────

function durationSummary(v) {
    if (activeRegion !== 'alle') {
        const p = v.periodes[activeRegion];
        return `<strong>${durationDays(p.van, p.tot)} ${t('dagen')}</strong>`;
    }
    const days = Object.fromEntries(
        Object.entries(v.periodes).map(([r,p]) => [r, durationDays(p.van,p.tot)])
    );
    const vals = Object.values(days);
    const allSame = vals.every(d => d===vals[0]);
    if (allSame) return `<strong>${vals[0]} ${t('dagen')}</strong> ${t('voor_alle')}`;
    return Object.entries(days)
        .map(([r,d]) => `${regionLabel(r)}: <strong>${d} ${t('dgn')}</strong>`)
        .join(' · ');
}

// ── Regio-countdown ───────────────────────────────────────────────

function renderRegionCountdown() {
    const el = document.getElementById('region-cd');
    if (!el) return;
    const td = today();
    const years = Object.keys(DATA).sort();

    for (const yr of years) {
        for (const v of DATA[yr].vakanties) {
            const p = v.periodes[activeRegion];
            const s = parseDate(p.van), e = parseDate(p.tot);
            if (td > e) continue;
            if (td >= s) {
                const daysLeft = daysBetween(td, e) + 1;
                el.innerHTML = `<div class="rcd rcd-current"><span class="pulse"></span> ${t('nog_vakantie', daysLeft)}</div>`;
            } else {
                const daysLeft = daysBetween(td, s);
                el.innerHTML = `<div class="rcd">${t('x_tot', daysLeft, vacName(v))}</div>`;
            }
            return;
        }
    }
    el.innerHTML = '';
}

// ── Card renderer ─────────────────────────────────────────────────

function buildCard(v, year) {
    const status = statusForAll(v);
    const months = getMonthsForVakantie(v);

    const miniCals = months.map(({y,m}) => renderMiniCal(y,m,v)).join('');

    const regions = ['noord','midden','zuidd'];
    let regionHTML = '';

    if (v.alleSame) {
        const p = v.periodes.noord;
        const d = durationDays(p.van, p.tot);
        regionHTML = `
            <div class="rrow-same">
                ${t('alle_gelijk')} ${formatDate(p.van)} – ${formatDate(p.tot)} &nbsp;·&nbsp; <strong>${d} ${t('dagen')}</strong>
            </div>`;
    } else {
        regionHTML = `<div class="region-rows">` +
            regions.map(r => {
                const p = v.periodes[r];
                const d = durationDays(p.van, p.tot);
                let cls = 'rrow';
                if (activeRegion === r) cls += ' active';
                else if (activeRegion !== 'alle') cls += ' dimmed';
                return `<div class="${cls}" data-region="${r}">
                    <span class="rrow-dot" style="background:${REGION_COLOR[r]}"></span>
                    <span class="rrow-dates">${formatDate(p.van)} – ${formatDate(p.tot)}</span>
                    <span class="rrow-days">${d} ${t('dgn')}</span>
                </div>`;
            }).join('') +
        `</div>`;
    }

    const badgeText = {current:t('nu'),upcoming:'',past:t('voorbij')}[status];
    const badgeCls  = {current:'badge-current',upcoming:'badge-upcoming',past:'badge-past'}[status];
    const noteHTML  = v.note ? `<div class="card-note">ℹ️ ${t('mei_note')}</div>` : '';
    const iconHTML  = TYPE_ICON[v.type] ? `<img class="season-icon" src="${TYPE_ICON[v.type]}" alt="${vacName(v)} icoon">` : '';

    return `<div class="card ${status}" data-type="${v.type}">
        <div class="card-img">
            <div class="card-img-deco">${TYPE_DECO[v.type]}</div>
            <div class="card-img-text">
                <div class="card-img-name">${vacName(v)}</div>
                <div class="card-img-year">${t('schooljaar')} ${year}</div>
            </div>
            <span class="card-badge ${badgeCls}">${badgeText}</span>
        </div>
        <div class="card-body">
            <div class="card-duration">${t('duur')} ${durationSummary(v)}</div>
            ${iconHTML}
            <div class="mini-cal-wrap">${miniCals}</div>
            ${regionHTML}
            ${noteHTML}
        </div>
    </div>`;
}

// ── Mini cal dot CSS fix ──────────────────────────────────────────

function injectDotStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .mc-day[data-dot]::after { content:''; display:block; height:3px; border-radius:2px; margin-top:1px; }
        .mc-day[data-dot] { --dot:1; }
    `;
    document.head.appendChild(style);
}

function renderMiniCalFixed(year, month, v, selectedRegion, highlightColor) {
    const td = today();
    const firstDay = new Date(year, month, 1);
    const lastDay  = new Date(year, month+1, 0);
    let startDow   = (firstDay.getDay() + 6) % 7;

    const monthHolidays = getDutchHolidays(year);
    const mPad = String(month+1).padStart(2,'0');
    const cells = [];
    const holidaysInMonth = [];
    cells.push(`<span class="mc-head mc-wk-cell">${t('wk')}</span>`);
    for (const h of daysSh()) cells.push(`<span class="mc-head">${h}</span>`);
    const firstMonday = new Date(year, month, 1 - startDow);
    cells.push(`<span class="mc-wk-cell">${isoWeek(firstMonday)}</span>`);
    for (let i=0; i<startDow; i++) cells.push(`<span></span>`);

    for (let day=1; day<=lastDay.getDate(); day++) {
        const date = new Date(year,month,day);
        const dow  = date.getDay();
        if ((dow+6)%7 === 0 && day > 1) cells.push(`<span class="mc-wk-cell">${isoWeek(date)}</span>`);
        const isWe = dow===0||dow===6;
        const isTd = date.getTime()===td.getTime();

        const vacRegions = Object.entries(v.periodes)
            .filter(([r,p]) => {
                if (selectedRegion !== 'alle' && r !== selectedRegion) return false;
                return date >= parseDate(p.van) && date <= parseDate(p.tot);
            })
            .map(([r]) => r);

        let dotBg = '';
        if (vacRegions.length===1) dotBg = highlightColor || REGION_COLOR[vacRegions[0]];
        else if (vacRegions.length===2) {
            const [c1,c2] = highlightColor
                ? [highlightColor, highlightColor]
                : vacRegions.map(r=>REGION_COLOR[r]);
            dotBg=`linear-gradient(to right,${c1} 50%,${c2} 50%)`;
        } else if (vacRegions.length>=3) {
            const [c1,c2,c3] = highlightColor
                ? [highlightColor, highlightColor, highlightColor]
                : vacRegions.map(r=>REGION_COLOR[r]);
            dotBg=`linear-gradient(to right,${c1} 33%,${c2} 33% 66%,${c3} 66%)`;
        }

        let cls='mc-day';
        if(isWe) cls+=' weekend';
        if(isTd) cls+=' today';
        const holidayName = monthHolidays[`${year}-${mPad}-${String(day).padStart(2,'0')}`];
        if(holidayName) { cls+=' holiday'; holidaysInMonth.push(holidayName); }

        const dot  = dotBg      ? `<b style="display:block;height:3px;border-radius:2px;background:${dotBg};margin-top:1px"></b>` : '';
        const hdot = holidayName ? `<b style="display:block;height:3px;border-radius:2px;background:${holidayColor(holidayName)};margin-top:1px"></b>` : '';
        cells.push(`<span class="${cls}"${holidayName?` title="${holName(holidayName)}"`:''}>${day}${dot}${hdot}</span>`);
    }

    const holHTML = holidaysInMonth.length
        ? `<div class="mc-vac-row">${holidaysInMonth.map(name =>
            `<span class="mc-vac-label"><b class="mc-vac-dot" style="background:${holidayColor(name)}"></b>${holName(name)}</span>`
          ).join('')}</div>`
        : '';

    return `<div class="mini-cal">
        <div class="mc-title">${monthsSh()[month]} ${year}</div>
        <div class="mc-grid mc-grid--wk">${cells.join('')}</div>
        ${holHTML}
    </div>`;
}

function renderYearCalMonth(year, month, vakanties, region) {
    const td = today();
    const firstDay = new Date(year, month, 1);
    const lastDay  = new Date(year, month+1, 0);
    let startDow   = (firstDay.getDay() + 6) % 7;

    const monthHolidays = getDutchHolidays(year);
    const mPad = String(month+1).padStart(2,'0');
    const cells = [];
    const holidaysInMonth = [];
    cells.push(`<span class="mc-head mc-wk-cell">${t('wk')}</span>`);
    for (const h of daysSh()) cells.push(`<span class="mc-head">${h}</span>`);
    const firstMonday = new Date(year, month, 1 - startDow);
    cells.push(`<span class="mc-wk-cell">${isoWeek(firstMonday)}</span>`);
    for (let i=0; i<startDow; i++) cells.push(`<span></span>`);

    for (let day=1; day<=lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
        const dow  = date.getDay();
        if ((dow+6)%7 === 0 && day > 1) cells.push(`<span class="mc-wk-cell">${isoWeek(date)}</span>`);
        const isWe = dow===0||dow===6;
        const isTd = date.getTime()===td.getTime();

        let vacType = null;
        for (const v of vakanties) {
            const p = v.periodes[region];
            if (p && date >= parseDate(p.van) && date <= parseDate(p.tot)) {
                vacType = v.type;
                break;
            }
        }

        let cls = 'mc-day';
        if (isWe) cls += ' weekend';
        if (isTd) cls += ' today';
        const holidayName = monthHolidays[`${year}-${mPad}-${String(day).padStart(2,'0')}`];
        if (holidayName) { cls += ' holiday'; holidaysInMonth.push(holidayName); }

        const dot  = vacType
            ? `<b style="display:block;height:3px;border-radius:2px;background:${TYPE_COLOR[vacType]};margin-top:1px"></b>`
            : '';
        const hdot = holidayName
            ? `<b style="display:block;height:3px;border-radius:2px;background:${holidayColor(holidayName)};margin-top:1px"></b>`
            : '';
        cells.push(`<span class="${cls}"${holidayName?` title="${holName(holidayName)}"`:''}>${day}${dot}${hdot}</span>`);
    }

    const seenVacNames = new Set();
    const vacInMonth = vakanties.filter(v => {
        const p = v.periodes[region];
        if (!p || parseDate(p.van) > lastDay || parseDate(p.tot) < firstDay) return false;
        if (seenVacNames.has(v.naam)) return false;
        seenVacNames.add(v.naam);
        return true;
    });
    const vacHTML = vacInMonth.length
        ? `<div class="mc-vac-row">${vacInMonth.map(v =>
            `<span class="mc-vac-label"><b class="mc-vac-dot" style="background:${TYPE_COLOR[v.type]}"></b>${vacName(v)}</span>`
          ).join('')}</div>`
        : '';
    const holHTML = holidaysInMonth.length
        ? `<div class="mc-vac-row">${holidaysInMonth.map(name =>
            `<span class="mc-vac-label"><b class="mc-vac-dot" style="background:${holidayColor(name)}"></b>${holName(name)}</span>`
          ).join('')}</div>`
        : '';

    return `<div class="mini-cal">
        <div class="mc-title">${monthsSh()[month]} ${year}</div>
        <div class="mc-grid mc-grid--wk">${cells.join('')}</div>
        ${vacHTML}${holHTML}
    </div>`;
}

function buildYearCard() {
    const calYear  = activeCalYear;
    const calStart = new Date(calYear, 0, 1);
    const calEnd   = new Date(calYear, 11, 31);

    // Vacations that start in calYear come from the school year starting in calYear
    const primaryKey = `${calYear}-${calYear + 1}`;
    const prevKey    = `${calYear - 1}-${calYear}`;
    const primaryVak = DATA[primaryKey] ? DATA[primaryKey].vakanties : [];
    // Christmas (and similar) that starts in Dec of prev year and spills into Jan of calYear
    const spillVak = DATA[prevKey] ? DATA[prevKey].vakanties.filter(v =>
        Object.values(v.periodes).some(p =>
            parseDate(p.van) < calStart && parseDate(p.tot) >= calStart
        )
    ) : [];
    const allVakanties = [...spillVak, ...primaryVak];

    const months = [];
    for (let m = 0; m <= 11; m++) months.push({y: calYear, m});

    const monthsHTML = months.map(({y, m}) => renderYearCalMonth(y, m, allVakanties, activeRegion)).join('');

    // Calendar year tabs: all unique years present in DATA, from current year onwards
    const currentYear = new Date().getFullYear();
    const availYears  = new Set();
    for (const key of Object.keys(DATA)) {
        const [y1, y2] = key.split('-').map(Number);
        if (y1 >= currentYear) availYears.add(y1);
        if (y2 >= currentYear) availYears.add(y2);
    }
    const tabsHTML = [...availYears].sort((a, b) => a - b)
        .map(y => `<button class="ycal-tab${y === calYear ? ' active' : ''}" data-calyear="${y}">${y}</button>`)
        .join('');

    return `<div class="card year-card">
        <div class="card-img year-card-img">
            <div class="year-card-tabs">${tabsHTML}</div>
            <div class="card-img-text">
                <div class="card-img-name">${t('kalenderjaar')} ${calYear}</div>
            </div>
        </div>
        <div class="card-body">
            <div class="year-cal-grid">${monthsHTML}</div>
            <div class="ycal-scrollhint" aria-hidden="true"></div>
        </div>
    </div>`;
}

function buildCardFixed(v, year) {
    const status = activeRegion === 'alle'
        ? statusForAll(v)
        : cardStatus(v.periodes[activeRegion].van, v.periodes[activeRegion].tot);

    const months = activeRegion === 'alle'
        ? getMonthsForVakantie(v)
        : (() => {
            const p = v.periodes[activeRegion];
            const result = [];
            let cur = new Date(parseDate(p.van).getFullYear(), parseDate(p.van).getMonth(), 1);
            const end = new Date(parseDate(p.tot).getFullYear(), parseDate(p.tot).getMonth(), 1);
            while (cur <= end) { result.push({y:cur.getFullYear(),m:cur.getMonth()}); cur=new Date(cur.getFullYear(),cur.getMonth()+1,1); }
            return result;
          })();

    const isWide = months.length >= 2;
    const miniCals = months.map(({y,m}) => renderMiniCalFixed(y,m,v,activeRegion,TYPE_COLOR[v.type])).join('');

    const regions = ['noord','midden','zuidd'];
    let regionHTML = '';

    if (activeRegion === 'alle') {
        if (v.alleSame) {
            const p = v.periodes.noord;
            const d = durationDays(p.van, p.tot);
            regionHTML = `<div class="rrow-same">${t('alle_regio')} ${formatDate(p.van)} – ${formatDate(p.tot)} · <strong>${d} ${t('dagen')}</strong></div>`;
        } else {
            regionHTML = `<div class="region-rows">${
                regions.map(r => {
                    const p = v.periodes[r];
                    const d = durationDays(p.van, p.tot);
                    return `<div class="rrow">
                        <span class="rrow-dot" style="background:${REGION_COLOR[r]}"></span>
                        <span class="rrow-dates">${formatDate(p.van)} – ${formatDate(p.tot)}</span>
                        <span class="rrow-days">${d} ${t('dgn')}</span>
                    </div>`;
                }).join('')
            }</div>`;
        }
    } else {
        const p = v.periodes[activeRegion];
        const d = durationDays(p.van, p.tot);
        regionHTML = `<div class="region-rows">
            <div class="rrow active">
                <span class="rrow-dot" style="background:${REGION_COLOR[activeRegion]}"></span>
                <span class="rrow-dates">${formatDate(p.van)} – ${formatDate(p.tot)}</span>
                <span class="rrow-days">${d} ${t('dgn')}</span>
            </div>
        </div>`;
    }

    const badgeText = {current:t('nu'),upcoming:'',past:t('voorbij')}[status];
    const badgeCls  = {current:'badge-current',upcoming:'badge-upcoming',past:'badge-past'}[status];
    const noteHTML  = v.note ? `<div class="card-note">ℹ️ ${t('mei_note')}</div>` : '';
    const iconHTML  = TYPE_ICON[v.type] ? `<img class="season-icon" src="${TYPE_ICON[v.type]}" alt="${vacName(v)}">` : '';

    return `<div class="card ${status}${isWide ? ' card--wide' : ''}" data-type="${v.type}">
        <div class="card-img">
            <div class="card-img-text">
                <div class="card-img-name">${vacName(v)}</div>
                <div class="card-img-year">${t('schooljaar')} ${year}</div>
            </div>
            <span class="card-badge ${badgeCls}">${badgeText}</span>
        </div>
        <div class="card-body">
            <div class="card-duration">${t('duur')} ${durationSummary(v)}</div>
            ${iconHTML}
            <div class="mini-cal-wrap">${miniCals}</div>
            ${regionHTML}
            ${noteHTML}
        </div>
    </div>`;
}

// ── Render grid ───────────────────────────────────────────────────

function renderCards() {
    renderRegionCountdown();
    const yd     = DATA[activeYear];
    const grid   = document.getElementById('cards');
    const notice = document.getElementById('notice-provisional');

    const calYears = new Set();
    for (const v of yd.vakanties) {
        for (const p of Object.values(v.periodes)) {
            calYears.add(parseDate(p.van).getFullYear());
            calYears.add(parseDate(p.tot).getFullYear());
        }
    }

    const existingStarts = new Set(
        yd.vakanties.flatMap(v => Object.values(v.periodes).map(p => p.van))
    );

    const yearKeys = Object.keys(DATA);
    const nextYearKey = yearKeys[yearKeys.indexOf(activeYear) + 1];
    const extraCards = [];
    if (nextYearKey) {
        for (const v of DATA[nextYearKey].vakanties) {
            const starts = Object.values(v.periodes).map(p => p.van);
            if (starts.some(s => existingStarts.has(s))) continue;
            const startYear = Math.min(...starts.map(s => parseDate(s).getFullYear()));
            if (calYears.has(startYear)) {
                extraCards.push(buildCardFixed(v, nextYearKey));
            }
        }
    }

    const getStatus = v => activeRegion === 'alle' ? statusForAll(v) : cardStatus(v.periodes[activeRegion]?.van, v.periodes[activeRegion]?.tot);

    const visibleVakanties = yearExplicit
        ? yd.vakanties
        : yd.vakanties.filter(v => getStatus(v) !== 'past');

    const pastVakanties = yearExplicit ? [] : yd.vakanties.filter(v => getStatus(v) === 'past');

    const pastHTML = showPast ? pastVakanties.map(v => buildCardFixed(v, activeYear)).join('') : '';
    const toggleHTML = !yearExplicit && pastVakanties.length
        ? `<div class="past-toggle-wrap">
               <button class="past-toggle-btn" id="btn-toggle-past">
                   ${showPast ? t('verberg_voorbij') : t('toon_voorbij', pastVakanties.length)}
               </button>
           </div>`
        : '';

    grid.innerHTML = buildYearCard() + visibleVakanties.map(v => buildCardFixed(v, activeYear)).join('') + extraCards.join('') + pastHTML + toggleHTML;
    notice.hidden  = yd.confirmed;

    const toggleBtn = document.getElementById('btn-toggle-past');
    if (toggleBtn) toggleBtn.addEventListener('click', () => { showPast = !showPast; renderCards(); });
}

// ── Year tabs ─────────────────────────────────────────────────────

function renderYearBar() {
    const bar = document.getElementById('year-bar');
    const td = today();
    bar.innerHTML = Object.keys(DATA)
        .filter(y => DATA[y].vakanties.some(v =>
            Object.values(v.periodes).some(p => parseDate(p.tot) >= td)
        ))
        .map(y => {
            const cls = y === activeYear ? 'ytab active' : 'ytab';
            return `<button class="${cls}" data-year="${y}">${y.replace('-','–')}</button>`;
        }).join('');
}

// ── ICS export ────────────────────────────────────────────────────

function padDate(d) {
    return d.toISOString().split('T')[0].replace(/-/g,'');
}

function nextDay(s) {
    const d = parseDate(s);
    d.setDate(d.getDate()+1);
    return padDate(d);
}

function generateICS(events, calName) {
    const lines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        `PRODID:-//nl-schoolvakanties.nl//NL`,
        `X-WR-CALNAME:${calName}`,
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
    ];
    for (const e of events) {
        lines.push(
            'BEGIN:VEVENT',
            `DTSTART;VALUE=DATE:${e.start}`,
            `DTEND;VALUE=DATE:${e.end}`,
            `SUMMARY:${e.summary}`,
            `DESCRIPTION:${e.desc}`,
            `UID:${e.uid}@nl-schoolvakanties.nl`,
            'END:VEVENT'
        );
    }
    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
}

function doExport(region, year) {
    const yd     = DATA[year];
    const events = [];

    for (const v of yd.vakanties) {
        if (region==='alle') {
            for (const [r,p] of Object.entries(v.periodes)) {
                events.push({
                    start:   padDate(parseDate(p.van)),
                    end:     nextDay(p.tot),
                    summary: `${v.naam} (${regionLabel(r)}) – ${year}`,
                    desc:    t('region_desc', r),
                    uid:     `${year}-${v.naam.replace(/\s/g,'-')}-${r}`,
                });
            }
        } else {
            const p = v.periodes[region];
            events.push({
                start:   padDate(parseDate(p.van)),
                end:     nextDay(p.tot),
                summary: `${v.naam} – ${year}`,
                desc:    t('region_desc', region),
                uid:     `${year}-${v.naam.replace(/\s/g,'-')}-${region}`,
            });
        }
    }

    const calName = region==='alle'
        ? t('cal_name_all', year)
        : t('cal_name', region, year);

    const ics  = generateICS(events, calName);
    const blob = new Blob([ics], {type:'text/calendar;charset=utf-8'});
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `schoolvakanties-${region}-${year}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ── Print view ────────────────────────────────────────────────────

function buildPrintView() {
    const region = activeRegion;
    const root   = document.getElementById('print-root');

    const y1 = parseInt(activeYear.split('-')[0]);
    const y2 = parseInt(activeYear.split('-')[1]);
    const calStart = new Date(y1, 8, 1);   // September of y1
    const calEnd   = new Date(y2, 11, 31);
    const yearKeys = Object.keys(DATA);
    const nextKey  = yearKeys[yearKeys.indexOf(activeYear) + 1];
    const extraVak = nextKey ? DATA[nextKey].vakanties.filter(v =>
        Object.values(v.periodes).some(p =>
            parseDate(p.van) <= calEnd && parseDate(p.tot) >= calStart
        )
    ) : [];
    const allVakanties = [...DATA[activeYear].vakanties, ...extraVak];

    const monthsList = [];
    for (let m = 8; m <= 11; m++) monthsList.push({y: y1, m}); // Sept–Dec of first year
    for (let m = 0; m <= 11; m++) monthsList.push({y: y2, m}); // Jan–Dec of second year

    let html = '';

    for (const {y,m} of monthsList) {
        const firstDay = new Date(y,m,1);
        const lastDay  = new Date(y,m+1,0);
        let startDow   = (firstDay.getDay()+6)%7;
        const monthHolidays = getDutchHolidays(y);
        const mPad = String(m+1).padStart(2,'0');

        const legendRegions = region === 'alle'
            ? [['noord', C_NOORD, regionLabel('noord')], ['midden', C_MIDDEN, regionLabel('midden')], ['zuidd', C_ZUIDD, regionLabel('zuidd')]]
            : [[region, REGION_COLOR[region], regionLabel(region)]];
        const legend = `<div class="pm-legend">${legendRegions.map(([,kleur,label]) =>
            `<span class="pm-legend-item"><span class="pm-swatch" style="background:${kleur}"></span>${label}</span>`
        ).join('')}</div>`;

        let cells = daysSh().map(h=>`<div class="pm-head">${h}</div>`).join('');
        for (let i=0;i<startDow;i++) cells += `<div class="pm-cell outside"></div>`;

        const seenVacNames = new Set();
        const vacInMonth = [];
        const holidaysInMonth = [];

        for (let day=1; day<=lastDay.getDate(); day++) {
            const date = new Date(y,m,day);
            const dow  = date.getDay();
            const isWe = dow===0||dow===6;
            let cls = 'pm-cell';
            if(isWe) cls+=' weekend';

            let bars = '';
            const seenTodayVac = new Set();
            for (const v of allVakanties) {
                if (seenTodayVac.has(v.naam)) continue;
                for (const [r,p] of Object.entries(v.periodes)) {
                    if ((region==='alle'||region===r) && date>=parseDate(p.van) && date<=parseDate(p.tot)) {
                        seenTodayVac.add(v.naam);
                        bars += `<div class="pm-vac-bar" style="background:${TYPE_COLOR[v.type]}" title="${vacName(v)}"></div>`;
                        if (!seenVacNames.has(v.naam)) { seenVacNames.add(v.naam); vacInMonth.push(v); }
                        break;
                    }
                }
            }

            const holidayName = monthHolidays[`${y}-${mPad}-${String(day).padStart(2,'0')}`];
            const holidayMark = holidayName
                ? `<div class="pm-holiday-icon" title="${holName(holidayName)}">${holidayIcon(holidayName)}</div>`
                : '';
            if (holidayName) holidaysInMonth.push(holidayName);

            cells += `<div class="${cls}"><span class="pm-num">${day}</span>${bars}${holidayMark}</div>`;
        }

        const vacLegendHTML = vacInMonth.map(v =>
            `<span class="pm-vac-label"><b class="pm-vac-dot" style="background:${TYPE_COLOR[v.type]}"></b><span class="pm-vac-name" data-text="${vacName(v)}">${vacName(v)}</span></span>`
        ).join('');
        const holLegendHTML = [...new Set(holidaysInMonth)].map(name =>
            `<span class="pm-vac-label"><span class="pm-vac-icon">${holidayIcon(name)}</span>${holName(name)}</span>`
        ).join('');
        const belowHTML = (vacLegendHTML || holLegendHTML)
            ? `<div class="pm-vac-row">${vacLegendHTML}${holLegendHTML}</div>`
            : '';

        const titleText = `${months()[m]} ${y}`;
        html += `<div class="print-month">
            <div class="pm-title" data-text="${titleText}">${titleText}</div>
            ${legend}
            <div class="pm-grid">${cells}</div>
            ${belowHTML}
        </div>`;
    }

    root.innerHTML = html;
}

function triggerPrint() {
    buildPrintView();
    window.print();
}

// ── Event listeners ───────────────────────────────────────────────

document.addEventListener('click', e => {
    const calBtn = e.target.closest('.ycal-tab');
    if (calBtn) {
        activeCalYear = parseInt(calBtn.dataset.calyear);
        renderCards();
        return;
    }
    const btn = e.target.closest('.ytab');
    if (!btn) return;
    activeYear    = btn.dataset.year;
    yearExplicit  = true;
    showPast      = false;
    renderCards();
});

document.getElementById('region-row').addEventListener('click', e => {
    const btn = e.target.closest('.rbtn');
    if (!btn) return;
    activeRegion = btn.dataset.region;
    showPast     = false;
    setRegionURL(activeRegion);
    document.querySelectorAll('.rbtn').forEach(b => b.classList.toggle('active', b===btn));
    renderCountdown();
    renderRegionCountdown();
    renderCards();
});

window.addEventListener('popstate', () => {
    const region = VALID_REGIONS.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'noord';
    activeRegion = region;
    showPast     = false;
    document.querySelectorAll('.rbtn').forEach(b => b.classList.toggle('active', b.dataset.region === region));
    renderCountdown();
    renderRegionCountdown();
    renderCards();
});

const exportPanel = document.getElementById('export-panel');
const exportYearSel = document.getElementById('export-year-sel');

document.getElementById('btn-export').addEventListener('click', () => {
    exportPanel.hidden = !exportPanel.hidden;
    if (!exportPanel.hidden) {
        exportYearSel.innerHTML = Object.keys(DATA)
            .map(y => `<option value="${y}"${y===activeYear?' selected':''}>${y}</option>`).join('');
    }
});

document.getElementById('export-close').addEventListener('click', () => {
    exportPanel.hidden = true;
});

exportPanel.addEventListener('click', e => {
    const btn = e.target.closest('.ebtn');
    if (!btn) return;
    const region = btn.dataset.region;
    const year   = exportYearSel.value;
    doExport(region, year);
    exportPanel.hidden = true;
});

document.getElementById('cards').addEventListener('click', e => {
    const header = e.target.closest('.card.past .card-img');
    if (!header) return;
    header.closest('.card').classList.toggle('expanded');
});

document.addEventListener('click', e => {
    if (!exportPanel.hidden &&
        !exportPanel.contains(e.target) &&
        e.target.id !== 'btn-export') {
        exportPanel.hidden = true;
    }
});

// ── Language toggle ───────────────────────────────────────────────

function applyStaticTranslations() {
    document.documentElement.lang = activeLang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const val = UI[activeLang][key];
        if (val !== undefined) el.innerHTML = val;
    });
    const label = document.getElementById('lang-label');
    if (label) label.textContent = activeLang === 'nl' ? 'EN' : 'NL';
    const btn = document.getElementById('btn-lang');
    if (btn) btn.title = activeLang === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands';
}

function setLang(lang) {
    activeLang = lang;
    localStorage.setItem('lang', lang);
    applyStaticTranslations();
    renderCountdown();
    renderRegionCountdown();
    renderCards();
}
window.setLang = setLang;

// ── Init ──────────────────────────────────────────────────────────

document.querySelectorAll('.rbtn').forEach(b => b.classList.toggle('active', b.dataset.region === activeRegion));
if (!location.hash) setRegionURL(activeRegion);

document.getElementById('btn-lang').addEventListener('click', () => {
    setLang(activeLang === 'nl' ? 'en' : 'nl');
});

renderYearBar();
renderCountdown();
renderCards();
applyStaticTranslations();

// ── Week-nummer post-it ───────────────────────────────────────────
(function() {
    const el = document.getElementById('postit-wk');
    if (!el) return;
    const wk = isoWeek(new Date());
    el.innerHTML = `<span class="postit-wk-label">${t('wk')}</span><span class="postit-wk-num">${wk}</span>`;
})();

// ── In-app browser notice ─────────────────────────────────────────
(function() {
    const ua = navigator.userAgent || '';
    if (!/Instagram|FBAN|FBAV|FB_IAB/.test(ua)) return;

    const notice = document.createElement('div');
    notice.className = 'iab-notice';
    notice.innerHTML = `
        <span class="iab-text">${t('iab_text')}</span>
        <button class="iab-close" aria-label="${t('iab_close')}">✕</button>`;
    notice.querySelector('.iab-close').addEventListener('click', () => notice.remove());
    document.body.prepend(notice);
})();
