// ═══════════════════════════════════════════════════════════════
//  nl-schoolvakanties.nl
//  Bron: rijksoverheid.nl · Jaren 2027+ zijn indicatief
// ═══════════════════════════════════════════════════════════════

// ── Constants ────────────────────────────────────────────────────

const MONTHS_NL  = ['Januari','Februari','Maart','April','Mei','Juni',
                    'Juli','Augustus','September','Oktober','November','December'];
const MONTHS_SH  = ['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'];
const DAYS_SH    = ['Ma','Di','Wo','Do','Vr','Za','Zo'];

const C_NOORD  = '#B5A800';
const C_MIDDEN = '#6B96C4';
const C_ZUIDD  = '#7EBD8F';

const REGION_COLOR = { noord: C_NOORD, midden: C_MIDDEN, zuidd: C_ZUIDD };
const REGION_LABEL = { noord: 'Noord', midden: 'Midden', zuidd: 'Zuid' };

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
    voorjaar: '#B06A7A',
    mei:      '#C4A0CC',
};

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
            { naam:'Meivakantie', type:'mei', note:'Datums kunnen per school verschillen. Controleer bij de eigen school.', periodes:{
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
            { naam:'Meivakantie', type:'mei', note:'Datums kunnen per school verschillen. Controleer bij de eigen school.', periodes:{
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
            { naam:'Meivakantie', type:'mei', note:'Datums kunnen per school verschillen. Controleer bij de eigen school.', periodes:{
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
            { naam:'Meivakantie', type:'mei', note:'Datums kunnen per school verschillen. Controleer bij de eigen school.', periodes:{
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

// Start bij het eerste schooljaar dat nog toekomstige vakanties heeft
let activeYear = (() => {
    const t = today();
    for (const [y, yd] of Object.entries(DATA)) {
        if (yd.vakanties.some(v => Object.values(v.periodes).some(p => parseDate(p.tot) >= t)))
            return y;
    }
    return Object.keys(DATA)[0];
})();

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
    return `${d.getDate()} ${MONTHS_SH[d.getMonth()]}`;
}

function formatDateLong(s) {
    const d = parseDate(s);
    return `${d.getDate()} ${MONTHS_NL[d.getMonth()]} ${d.getFullYear()}`;
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
    let startDow   = (firstDay.getDay() + 6) % 7; // Mo=0

    let html = `<div class="mini-cal"><div class="mc-title">${MONTHS_SH[month]} ${year}</div><div class="mc-grid">`;

    for (const h of DAYS_SH) html += `<span class="mc-head">${h}</span>`;
    for (let i=0; i<startDow; i++) html += `<span></span>`;

    for (let day=1; day<=lastDay.getDate(); day++) {
        const date = new Date(year,month,day);
        const dow  = date.getDay(); // 0=Sun
        const isWe = dow===0 || dow===6;
        const isTd = date.getTime() === t.getTime();

        // Which regions have vacation on this day?
        const vacRegions = [];
        for (const [r,p] of Object.entries(v.periodes)) {
            if (date >= parseDate(p.van) && date <= parseDate(p.tot)) vacRegions.push(r);
        }

        let cls = 'mc-day';
        if (isWe) cls += ' weekend';
        if (isTd) cls += ' today';
        if (vacRegions.length) cls += ' vac';

        // Inline gradient for the dot
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
    const t  = today();
    let found = null;

    outer: for (const [year, yd] of Object.entries(DATA)) {
        for (const v of yd.vakanties) {
            const p = v.periodes[activeRegion];
            if (!p || t > parseDate(p.tot)) continue;
            found = {v, year};
            break outer;
        }
    }

    if (!found) {
        el.innerHTML = `<div class="cd-region">${REGION_LABEL[activeRegion]}</div>`;
        return;
    }

    const {v} = found;
    document.querySelector('.hero').dataset.season = v.type;

    const p = v.periodes[activeRegion];
    const startDate = parseDate(p.van);
    const endDate   = parseDate(p.tot);
    const isCurrent = t >= startDate && t <= endDate;

    let countdownHTML;
    if (isCurrent) {
        const daysLeft = daysBetween(t, endDate) + 1;
        countdownHTML = `<div class="cd-countdown">Nog <strong>${daysLeft} dag${daysLeft !== 1 ? 'en' : ''}</strong> ${v.naam.toLowerCase()}</div>`;
    } else {
        const daysTo = daysBetween(t, startDate);
        countdownHTML = `<div class="cd-countdown"><strong>${daysTo} dag${daysTo !== 1 ? 'en' : ''}</strong> tot ${v.naam}</div>`;
    }

    el.innerHTML = `
        <div class="cd-region">${REGION_LABEL[activeRegion]}</div>
        ${countdownHTML}`;
}

// ── Duration summary ──────────────────────────────────────────────

function durationSummary(v) {
    if (activeRegion !== 'alle') {
        const p = v.periodes[activeRegion];
        return `<strong>${durationDays(p.van, p.tot)} dagen</strong>`;
    }
    const days = Object.fromEntries(
        Object.entries(v.periodes).map(([r,p]) => [r, durationDays(p.van,p.tot)])
    );
    const vals = Object.values(days);
    const allSame = vals.every(d => d===vals[0]);
    if (allSame) return `<strong>${vals[0]} dagen</strong> voor alle regio's`;
    return Object.entries(days)
        .map(([r,d]) => `${REGION_LABEL[r]}: <strong>${d} dgn</strong>`)
        .join(' · ');
}

// ── Regio-countdown ───────────────────────────────────────────────

function renderRegionCountdown() {
    const el = document.getElementById('region-cd');
    if (!el) return;
    const t = today();
    const years = Object.keys(DATA).sort();

    for (const yr of years) {
        for (const v of DATA[yr].vakanties) {
            const p = v.periodes[activeRegion];
            const s = parseDate(p.van), e = parseDate(p.tot);
            if (t > e) continue;
            if (t >= s) {
                const daysLeft = daysBetween(t, e) + 1;
                el.innerHTML = `<div class="rcd rcd-current"><span class="pulse"></span> Nog <strong>${daysLeft} dag${daysLeft!==1?'en':''}</strong> vakantie</div>`;
            } else {
                const daysLeft = daysBetween(t, s);
                el.innerHTML = `<div class="rcd"><strong>${daysLeft} dag${daysLeft!==1?'en':''}</strong> tot ${v.naam}</div>`;
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

    // Mini calendars HTML
    const miniCals = months.map(({y,m}) => renderMiniCal(y,m,v)).join('');

    // Region rows
    const regions = ['noord','midden','zuidd'];
    let regionHTML = '';

    if (v.alleSame) {
        const p = v.periodes.noord;
        const d = durationDays(p.van, p.tot);
        regionHTML = `
            <div class="rrow-same">
                Alle regio's gelijk: ${formatDate(p.van)} – ${formatDate(p.tot)} &nbsp;·&nbsp; <strong>${d} dagen</strong>
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
                    <span class="rrow-name">${REGION_LABEL[r]}</span>
                    <span class="rrow-dates">${formatDate(p.van)} – ${formatDate(p.tot)}</span>
                    <span class="rrow-days">${d} dgn</span>
                </div>`;
            }).join('') +
        `</div>`;
    }

    const badgeText = {current:'Nu',upcoming:'',past:'Voorbij'}[status];
    const badgeCls  = {current:'badge-current',upcoming:'badge-upcoming',past:'badge-past'}[status];
    const noteHTML  = v.note ? `<div class="card-note">ℹ️ ${v.note}</div>` : '';
    const iconHTML  = TYPE_ICON[v.type] ? `<img class="season-icon" src="${TYPE_ICON[v.type]}" alt="${v.naam} icoon">` : '';

    return `<div class="card ${status}" data-type="${v.type}">
        <div class="card-img">
            <div class="card-img-deco">${TYPE_DECO[v.type]}</div>
            <div class="card-img-text">
                <div class="card-img-name">${v.naam}</div>
                <div class="card-img-year">Schooljaar ${year}</div>
            </div>
            <span class="card-badge ${badgeCls}">${badgeText}</span>
        </div>
        <div class="card-body">
            <div class="card-duration">Duur: ${durationSummary(v)}</div>
            ${iconHTML}
            <div class="mini-cal-wrap">${miniCals}</div>
            ${regionHTML}
            ${noteHTML}
        </div>
    </div>`;
}

// ── Mini cal dot CSS fix (set ::after via JS) ─────────────────────
// We use a style injection approach since ::after can't be set inline

function injectDotStyles() {
    // No-op: we handle dots via inline style on the element itself
    // by styling the span's border-bottom when it has data-dot attribute
    const style = document.createElement('style');
    style.textContent = `
        .mc-day[data-dot]::after { content:''; display:block; height:3px; border-radius:2px; margin-top:1px; }
        .mc-day[data-dot] { --dot:1; }
    `;
    document.head.appendChild(style);
}

// Actually simpler: set background on ::after via JS by wrapping
// We'll re-render using a different approach — add a <b> child element

function renderMiniCalFixed(year, month, v, selectedRegion, highlightColor) {
    const t = today();
    const firstDay = new Date(year, month, 1);
    const lastDay  = new Date(year, month+1, 0);
    let startDow   = (firstDay.getDay() + 6) % 7;

    const cells = [];
    for (const h of DAYS_SH) cells.push(`<span class="mc-head">${h}</span>`);
    for (let i=0; i<startDow; i++) cells.push(`<span></span>`);

    for (let day=1; day<=lastDay.getDate(); day++) {
        const date = new Date(year,month,day);
        const dow  = date.getDay();
        const isWe = dow===0||dow===6;
        const isTd = date.getTime()===t.getTime();

        // Filter vacation days to only the selected region
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
        const holidays = getDutchHolidays(year);
        const holidayName = holidays[dateKey(date)];
        if(holidayName) cls+=' holiday';

        const dot = dotBg ? `<b style="display:block;height:3px;border-radius:2px;background:${dotBg};margin-top:1px"></b>` : '';
        cells.push(`<span class="${cls}"${holidayName?` title="${holidayName}"`:''}>${day}${dot}</span>`);
    }

    return `<div class="mini-cal">
        <div class="mc-title">${MONTHS_SH[month]} ${year}</div>
        <div class="mc-grid">${cells.join('')}</div>
    </div>`;
}

function renderYearCalMonth(year, month, vakanties, region) {
    const t = today();
    const firstDay = new Date(year, month, 1);
    const lastDay  = new Date(year, month+1, 0);
    let startDow   = (firstDay.getDay() + 6) % 7;

    const cells = [];
    for (const h of DAYS_SH) cells.push(`<span class="mc-head">${h}</span>`);
    for (let i=0; i<startDow; i++) cells.push(`<span></span>`);

    for (let day=1; day<=lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
        const dow  = date.getDay();
        const isWe = dow===0||dow===6;
        const isTd = date.getTime()===t.getTime();

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
        const holidays = getDutchHolidays(year);
        const holidayName = holidays[dateKey(date)];
        if (holidayName) cls += ' holiday';

        const dot = vacType
            ? `<b style="display:block;height:3px;border-radius:2px;background:${TYPE_COLOR[vacType]};margin-top:1px"></b>`
            : '';
        cells.push(`<span class="${cls}"${holidayName?` title="${holidayName}"`:''}>${day}${dot}</span>`);
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
            `<span class="mc-vac-label"><b class="mc-vac-dot" style="background:${TYPE_COLOR[v.type]}"></b>${v.naam}</span>`
          ).join('')}</div>`
        : '';

    return `<div class="mini-cal">
        <div class="mc-title">${MONTHS_SH[month]} ${year}</div>
        <div class="mc-grid">${cells.join('')}</div>
        ${vacHTML}
    </div>`;
}

function buildYearCard(year) {
    const yd = DATA[year];
    const parts = year.split('-');
    const y2 = parseInt(parts[1]);

    // Voeg vakanties van het volgende schooljaar toe die in kalenderjaar y2 vallen
    const calStart = new Date(y2, 0, 1);
    const calEnd   = new Date(y2, 11, 31);
    const yearKeys = Object.keys(DATA);
    const nextKey  = yearKeys[yearKeys.indexOf(year) + 1];
    const extraVak = nextKey ? DATA[nextKey].vakanties.filter(v =>
        Object.values(v.periodes).some(p =>
            parseDate(p.van) <= calEnd && parseDate(p.tot) >= calStart
        )
    ) : [];
    const allVakanties = [...yd.vakanties, ...extraVak];

    // Jan y2 → Dec y2 (kalenderjaar van het tweede jaar)
    const months = [];
    for (let m = 0; m <= 11; m++) months.push({y: y2, m});

    // Legend: dedupliceer op type
    const seenTypes = new Set();
    const legendHTML = allVakanties
        .filter(v => { if (!v.periodes[activeRegion] || seenTypes.has(v.type)) return false; seenTypes.add(v.type); return true; })
        .map(v => `<span class="ycal-legend-item"><span class="ycal-swatch" style="background:${TYPE_COLOR[v.type]}"></span>${v.naam}</span>`)
        .join('');

    const monthsHTML = months.map(({y, m}) => renderYearCalMonth(y, m, allVakanties, activeRegion)).join('');

    const t = today();
    const yearTabsHTML = Object.keys(DATA)
        .filter(y => DATA[y].vakanties.some(v =>
            Object.values(v.periodes).some(p => parseDate(p.tot) >= t)
        ))
        .map(y => `<button class="ytab${y === activeYear ? ' active' : ''}" data-year="${y}">${y.replace('-','–')}</button>`)
        .join('');

    return `<div class="card year-card">
        <div class="card-img year-card-img">
            <div class="year-card-tabs">${yearTabsHTML}</div>
            <div class="card-img-text">
                <div class="card-img-name">Kalenderjaar ${y2}</div>
            </div>
        </div>
        <div class="card-body">
            <div class="ycal-legend">${legendHTML}</div>
            <div class="year-cal-grid">${monthsHTML}</div>
        </div>
    </div>`;
}

function buildCardFixed(v, year) {
    // Status based on selected region for accurate past/current/upcoming
    const status = activeRegion === 'alle'
        ? statusForAll(v)
        : cardStatus(v.periodes[activeRegion].van, v.periodes[activeRegion].tot);

    // Only render months relevant to the selected region
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
            regionHTML = `<div class="rrow-same">Alle regio's: ${formatDate(p.van)} – ${formatDate(p.tot)} · <strong>${d} dagen</strong></div>`;
        } else {
            regionHTML = `<div class="region-rows">${
                regions.map(r => {
                    const p = v.periodes[r];
                    const d = durationDays(p.van, p.tot);
                    return `<div class="rrow">
                        <span class="rrow-dot" style="background:${REGION_COLOR[r]}"></span>
                        <span class="rrow-name">${REGION_LABEL[r]}</span>
                        <span class="rrow-dates">${formatDate(p.van)} – ${formatDate(p.tot)}</span>
                        <span class="rrow-days">${d} dgn</span>
                    </div>`;
                }).join('')
            }</div>`;
        }
    } else {
        // Only show the selected region's row
        const p = v.periodes[activeRegion];
        const d = durationDays(p.van, p.tot);
        regionHTML = `<div class="region-rows">
            <div class="rrow active">
                <span class="rrow-dot" style="background:${REGION_COLOR[activeRegion]}"></span>
                <span class="rrow-name">${REGION_LABEL[activeRegion]}</span>
                <span class="rrow-dates">${formatDate(p.van)} – ${formatDate(p.tot)}</span>
                <span class="rrow-days">${d} dgn</span>
            </div>
        </div>`;
    }

    const badgeText = {current:'Nu',upcoming:'',past:'Voorbij'}[status];
    const badgeCls  = {current:'badge-current',upcoming:'badge-upcoming',past:'badge-past'}[status];
    const noteHTML  = v.note ? `<div class="card-note">ℹ️ ${v.note}</div>` : '';
    const iconHTML  = TYPE_ICON[v.type] ? `<img class="season-icon" src="${TYPE_ICON[v.type]}" alt="${v.naam} icoon">` : '';

    return `<div class="card ${status}${isWide ? ' card--wide' : ''}" data-type="${v.type}">
        <div class="card-img">
            <div class="card-img-text">
                <div class="card-img-name">${v.naam}</div>
                <div class="card-img-year">Schooljaar ${year}</div>
            </div>
            <span class="card-badge ${badgeCls}">${badgeText}</span>
        </div>
        <div class="card-body">
            <div class="card-duration">Duur: ${durationSummary(v)}</div>
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

    // Collect calendar years spanned by this school year
    const calYears = new Set();
    for (const v of yd.vakanties) {
        for (const p of Object.values(v.periodes)) {
            calYears.add(parseDate(p.van).getFullYear());
            calYears.add(parseDate(p.tot).getFullYear());
        }
    }

    // Collect start dates already in this school year to avoid duplicates
    const existingStarts = new Set(
        yd.vakanties.flatMap(v => Object.values(v.periodes).map(p => p.van))
    );

    // Append vacations from the next school year that start in the same calendar years
    const yearKeys = Object.keys(DATA);
    const nextYearKey = yearKeys[yearKeys.indexOf(activeYear) + 1];
    const extraCards = [];
    if (nextYearKey) {
        for (const v of DATA[nextYearKey].vakanties) {
            const starts = Object.values(v.periodes).map(p => p.van);
            // Skip if already present in current year's data
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
                   ${showPast ? 'Verberg voorbije vakanties' : `Toon voorbije vakanties (${pastVakanties.length})`}
               </button>
           </div>`
        : '';

    grid.innerHTML = buildYearCard(activeYear) + visibleVakanties.map(v => buildCardFixed(v, activeYear)).join('') + extraCards.join('') + pastHTML + toggleHTML;
    notice.hidden  = yd.confirmed;

    const toggleBtn = document.getElementById('btn-toggle-past');
    if (toggleBtn) toggleBtn.addEventListener('click', () => { showPast = !showPast; renderCards(); });
}

// ── Year tabs ─────────────────────────────────────────────────────

function renderYearBar() {
    const bar = document.getElementById('year-bar');
    const t = today();
    bar.innerHTML = Object.keys(DATA)
        .filter(y => DATA[y].vakanties.some(v =>
            Object.values(v.periodes).some(p => parseDate(p.tot) >= t)
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
                    summary: `${v.naam} (${REGION_LABEL[r]}) – ${year}`,
                    desc:    `Schoolvakantie regio ${REGION_LABEL[r]}`,
                    uid:     `${year}-${v.naam.replace(/\s/g,'-')}-${r}`,
                });
            }
        } else {
            const p = v.periodes[region];
            events.push({
                start:   padDate(parseDate(p.van)),
                end:     nextDay(p.tot),
                summary: `${v.naam} – ${year}`,
                desc:    `Schoolvakantie regio ${REGION_LABEL[region]}`,
                uid:     `${year}-${v.naam.replace(/\s/g,'-')}-${region}`,
            });
        }
    }

    const calName = region==='alle'
        ? `Schoolvakanties NL ${year}`
        : `Schoolvakanties ${REGION_LABEL[region]} ${year}`;

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
    const yd     = DATA[activeYear];
    const region = activeRegion;
    const root   = document.getElementById('print-root');

    // Gather all months in the school year
    const monthSet = new Set();
    for (const v of yd.vakanties) {
        for (const p of Object.values(v.periodes)) {
            let cur = new Date(parseDate(p.van).getFullYear(), parseDate(p.van).getMonth(), 1);
            const end = new Date(parseDate(p.tot).getFullYear(), parseDate(p.tot).getMonth(), 1);
            while (cur <= end) {
                monthSet.add(`${cur.getFullYear()}-${cur.getMonth()}`);
                cur = new Date(cur.getFullYear(), cur.getMonth()+1, 1);
            }
        }
    }

    const months = Array.from(monthSet)
        .map(s => { const [y,m]=s.split('-'); return {y:+y,m:+m}; })
        .sort((a,b)=>a.y-b.y||a.m-b.m);

    let html = `<div class="print-header">nl-schoolvakanties – Schoolvakanties Nederland</div>`;

    for (const {y,m} of months) {
        const firstDay = new Date(y,m,1);
        const lastDay  = new Date(y,m+1,0);
        let startDow   = (firstDay.getDay()+6)%7;

        // Legend — alleen geselecteerde regio(s)
        const legendRegions = region === 'alle'
            ? [['noord', C_NOORD, 'Noord'], ['midden', C_MIDDEN, 'Midden'], ['zuidd', C_ZUIDD, 'Zuid']]
            : [[region, REGION_COLOR[region], REGION_LABEL[region]]];
        const legend = `<div class="pm-legend">${legendRegions.map(([,kleur,label]) =>
            `<span class="pm-legend-item"><span class="pm-swatch" style="background:${kleur}"></span>${label}</span>`
        ).join('')}</div>`;

        let cells = DAYS_SH.map(h=>`<div class="pm-head">${h}</div>`).join('');
        for (let i=0;i<startDow;i++) cells += `<div class="pm-cell outside"></div>`;

        for (let day=1; day<=lastDay.getDate(); day++) {
            const date = new Date(y,m,day);
            const dow  = date.getDay();
            const isWe = dow===0||dow===6;
            let cls = 'pm-cell';
            if(isWe) cls+=' weekend';

            // Find vacations on this day
            let bars = '';
            for (const v of yd.vakanties) {
                for (const [r,p] of Object.entries(v.periodes)) {
                    if ((region==='alle'||region===r) && date>=parseDate(p.van) && date<=parseDate(p.tot)) {
                        bars += `<div class="pm-vac-bar" style="background:${REGION_COLOR[r]}">${REGION_LABEL[r].slice(0,1)}</div>`;
                    }
                }
            }

            cells += `<div class="${cls}"><span class="pm-num">${day}</span>${bars}</div>`;
        }

        html += `<div class="print-month">
            <div class="pm-title">${MONTHS_NL[m]} ${y}</div>
            ${legend}
            <div class="pm-grid">${cells}</div>
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

// Export panel
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

// Toggle past cards open/closed on header click
document.getElementById('cards').addEventListener('click', e => {
    const header = e.target.closest('.card.past .card-img');
    if (!header) return;
    header.closest('.card').classList.toggle('expanded');
});

// Close panel when clicking outside
document.addEventListener('click', e => {
    if (!exportPanel.hidden &&
        !exportPanel.contains(e.target) &&
        e.target.id !== 'btn-export') {
        exportPanel.hidden = true;
    }
});

// ── Init ──────────────────────────────────────────────────────────

// Zet actieve regio-knop op basis van URL-hash
document.querySelectorAll('.rbtn').forEach(b => b.classList.toggle('active', b.dataset.region === activeRegion));
if (!location.hash) setRegionURL(activeRegion);

renderYearBar();
renderCountdown();
renderCards();
