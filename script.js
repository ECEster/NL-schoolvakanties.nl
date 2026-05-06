// ═══════════════════════════════════════════════════════════════
//  nl-schoolvakanties.nl
//  Bron: rijksoverheid.nl · Jaren 2027+ zijn indicatief
// ═══════════════════════════════════════════════════════════════

// ── Constants ────────────────────────────────────────────────────

const MONTHS_NL  = ['Januari','Februari','Maart','April','Mei','Juni',
                    'Juli','Augustus','September','Oktober','November','December'];
const MONTHS_SH  = ['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'];
const DAYS_SH    = ['Ma','Di','Wo','Do','Vr','Za','Zo'];

const C_NOORD  = '#F9AB00';
const C_MIDDEN = '#1A73E8';
const C_ZUIDD  = '#34A853';

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
    zomer:    '🌊',
    herfst:   '🍁',
    kerst:    '⛄',
    voorjaar: '🌸',
    mei:      '🌼',
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
            { naam:'Herfstvakantie', type:'herfst', alleSame:true, periodes:{
                noord: {van:'2024-10-19',tot:'2024-10-27'},
                midden:{van:'2024-10-19',tot:'2024-10-27'},
                zuidd: {van:'2024-10-19',tot:'2024-10-27'},
            }},
            { naam:'Kerstvakantie', type:'kerst', alleSame:true, periodes:{
                noord: {van:'2024-12-21',tot:'2025-01-05'},
                midden:{van:'2024-12-21',tot:'2025-01-05'},
                zuidd: {van:'2024-12-21',tot:'2025-01-05'},
            }},
            { naam:'Voorjaarsvakantie', type:'voorjaar', periodes:{
                noord: {van:'2025-02-22',tot:'2025-03-02'},
                midden:{van:'2025-02-15',tot:'2025-02-23'},
                zuidd: {van:'2025-02-22',tot:'2025-03-02'},
            }},
            { naam:'Meivakantie', type:'mei', alleSame:true, periodes:{
                noord: {van:'2025-04-26',tot:'2025-05-11'},
                midden:{van:'2025-04-26',tot:'2025-05-11'},
                zuidd: {van:'2025-04-26',tot:'2025-05-11'},
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
                midden:{van:'2025-10-25',tot:'2025-11-02'},
                zuidd: {van:'2025-10-25',tot:'2025-11-02'},
            }},
            { naam:'Kerstvakantie', type:'kerst', alleSame:true, periodes:{
                noord: {van:'2025-12-27',tot:'2026-01-04'},
                midden:{van:'2025-12-27',tot:'2026-01-04'},
                zuidd: {van:'2025-12-27',tot:'2026-01-04'},
            }},
            { naam:'Voorjaarsvakantie', type:'voorjaar', periodes:{
                noord: {van:'2026-02-21',tot:'2026-03-01'},
                midden:{van:'2026-02-28',tot:'2026-03-08'},
                zuidd: {van:'2026-02-14',tot:'2026-02-22'},
            }},
            { naam:'Meivakantie', type:'mei', alleSame:true, periodes:{
                noord: {van:'2026-04-25',tot:'2026-05-10'},
                midden:{van:'2026-04-25',tot:'2026-05-10'},
                zuidd: {van:'2026-04-25',tot:'2026-05-10'},
            }},
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2026-07-11',tot:'2026-08-23'},
                midden:{van:'2026-07-18',tot:'2026-08-30'},
                zuidd: {van:'2026-07-04',tot:'2026-08-16'},
            }},
        ]
    },
    '2026-2027': {
        confirmed: false,
        vakanties: [
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2026-07-11',tot:'2026-08-23'},
                midden:{van:'2026-07-18',tot:'2026-08-30'},
                zuidd: {van:'2026-07-04',tot:'2026-08-16'},
            }},
            { naam:'Herfstvakantie', type:'herfst', periodes:{
                noord: {van:'2026-10-17',tot:'2026-10-25'},
                midden:{van:'2026-10-24',tot:'2026-11-01'},
                zuidd: {van:'2026-10-24',tot:'2026-11-01'},
            }},
            { naam:'Kerstvakantie', type:'kerst', alleSame:true, periodes:{
                noord: {van:'2026-12-26',tot:'2027-01-10'},
                midden:{van:'2026-12-26',tot:'2027-01-10'},
                zuidd: {van:'2026-12-26',tot:'2027-01-10'},
            }},
            { naam:'Voorjaarsvakantie', type:'voorjaar', periodes:{
                noord: {van:'2027-02-20',tot:'2027-02-28'},
                midden:{van:'2027-02-27',tot:'2027-03-07'},
                zuidd: {van:'2027-02-13',tot:'2027-02-21'},
            }},
            { naam:'Meivakantie', type:'mei', alleSame:true, periodes:{
                noord: {van:'2027-04-24',tot:'2027-05-09'},
                midden:{van:'2027-04-24',tot:'2027-05-09'},
                zuidd: {van:'2027-04-24',tot:'2027-05-09'},
            }},
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2027-07-10',tot:'2027-08-22'},
                midden:{van:'2027-07-17',tot:'2027-08-29'},
                zuidd: {van:'2027-07-03',tot:'2027-08-15'},
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
            { naam:'Meivakantie', type:'mei', alleSame:true, periodes:{
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
    '2028-2029': {
        confirmed: false,
        vakanties: [
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2028-07-08',tot:'2028-08-20'},
                midden:{van:'2028-07-15',tot:'2028-08-27'},
                zuidd: {van:'2028-07-01',tot:'2028-08-13'},
            }},
            { naam:'Herfstvakantie', type:'herfst', periodes:{
                noord: {van:'2028-10-21',tot:'2028-10-29'},
                midden:{van:'2028-10-28',tot:'2028-11-05'},
                zuidd: {van:'2028-10-28',tot:'2028-11-05'},
            }},
            { naam:'Kerstvakantie', type:'kerst', alleSame:true, periodes:{
                noord: {van:'2028-12-23',tot:'2029-01-07'},
                midden:{van:'2028-12-23',tot:'2029-01-07'},
                zuidd: {van:'2028-12-23',tot:'2029-01-07'},
            }},
            { naam:'Voorjaarsvakantie', type:'voorjaar', periodes:{
                noord: {van:'2029-02-23',tot:'2029-03-03'},
                midden:{van:'2029-03-02',tot:'2029-03-10'},
                zuidd: {van:'2029-02-16',tot:'2029-02-24'},
            }},
            { naam:'Meivakantie', type:'mei', alleSame:true, periodes:{
                noord: {van:'2029-04-28',tot:'2029-05-13'},
                midden:{van:'2029-04-28',tot:'2029-05-13'},
                zuidd: {van:'2029-04-28',tot:'2029-05-13'},
            }},
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2029-07-13',tot:'2029-08-25'},
                midden:{van:'2029-07-20',tot:'2029-09-01'},
                zuidd: {van:'2029-07-06',tot:'2029-08-18'},
            }},
        ]
    },
    '2029-2030': {
        confirmed: false,
        vakanties: [
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2029-07-13',tot:'2029-08-25'},
                midden:{van:'2029-07-20',tot:'2029-09-01'},
                zuidd: {van:'2029-07-06',tot:'2029-08-18'},
            }},
            { naam:'Herfstvakantie', type:'herfst', periodes:{
                noord: {van:'2029-10-19',tot:'2029-10-27'},
                midden:{van:'2029-10-26',tot:'2029-11-03'},
                zuidd: {van:'2029-10-26',tot:'2029-11-03'},
            }},
            { naam:'Kerstvakantie', type:'kerst', alleSame:true, periodes:{
                noord: {van:'2029-12-21',tot:'2030-01-05'},
                midden:{van:'2029-12-21',tot:'2030-01-05'},
                zuidd: {van:'2029-12-21',tot:'2030-01-05'},
            }},
            { naam:'Voorjaarsvakantie', type:'voorjaar', periodes:{
                noord: {van:'2030-02-22',tot:'2030-03-02'},
                midden:{van:'2030-03-01',tot:'2030-03-09'},
                zuidd: {van:'2030-02-15',tot:'2030-02-23'},
            }},
            { naam:'Meivakantie', type:'mei', alleSame:true, periodes:{
                noord: {van:'2030-04-27',tot:'2030-05-12'},
                midden:{van:'2030-04-27',tot:'2030-05-12'},
                zuidd: {van:'2030-04-27',tot:'2030-05-12'},
            }},
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2030-07-13',tot:'2030-08-25'},
                midden:{van:'2030-07-20',tot:'2030-09-01'},
                zuidd: {van:'2030-07-06',tot:'2030-08-18'},
            }},
        ]
    },
    '2030-2031': {
        confirmed: false,
        vakanties: [
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2030-07-13',tot:'2030-08-25'},
                midden:{van:'2030-07-20',tot:'2030-09-01'},
                zuidd: {van:'2030-07-06',tot:'2030-08-18'},
            }},
            { naam:'Herfstvakantie', type:'herfst', periodes:{
                noord: {van:'2030-10-18',tot:'2030-10-26'},
                midden:{van:'2030-10-25',tot:'2030-11-02'},
                zuidd: {van:'2030-10-25',tot:'2030-11-02'},
            }},
            { naam:'Kerstvakantie', type:'kerst', alleSame:true, periodes:{
                noord: {van:'2030-12-21',tot:'2031-01-05'},
                midden:{van:'2030-12-21',tot:'2031-01-05'},
                zuidd: {van:'2030-12-21',tot:'2031-01-05'},
            }},
            { naam:'Voorjaarsvakantie', type:'voorjaar', periodes:{
                noord: {van:'2031-02-22',tot:'2031-03-02'},
                midden:{van:'2031-03-01',tot:'2031-03-09'},
                zuidd: {van:'2031-02-15',tot:'2031-02-23'},
            }},
            { naam:'Meivakantie', type:'mei', alleSame:true, periodes:{
                noord: {van:'2031-04-26',tot:'2031-05-11'},
                midden:{van:'2031-04-26',tot:'2031-05-11'},
                zuidd: {van:'2031-04-26',tot:'2031-05-11'},
            }},
            { naam:'Zomervakantie', type:'zomer', periodes:{
                noord: {van:'2031-07-12',tot:'2031-08-24'},
                midden:{van:'2031-07-19',tot:'2031-08-31'},
                zuidd: {van:'2031-07-05',tot:'2031-08-17'},
            }},
        ]
    },
};

// ── State ─────────────────────────────────────────────────────────

let activeYear   = '2025-2026';
let activeRegion = 'alle';

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

    let html = `<div class="mini-cal"><div class="mc-title">${MONTHS_NL[month].slice(0,3)} ${year}</div><div class="mc-grid">`;

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
            const all = Object.values(v.periodes);
            if (all.every(p => t > parseDate(p.tot))) continue;
            const isCurrent = all.some(p => t >= parseDate(p.van) && t <= parseDate(p.tot));
            found = {v, year, isCurrent};
            break outer;
        }
    }

    if (!found) {
        el.innerHTML = `<div class="cd-name">nl-schoolvakanties.nl</div>`;
        return;
    }

    const {v, isCurrent} = found;

    if (isCurrent) {
        const maxEnd  = latestEnd(v);
        const daysLeft = daysBetween(t, maxEnd) + 1;
        el.innerHTML = `
            <div class="cd-label">Je bent nu op vakantie 🎉</div>
            <div class="cd-name">${TYPE_EMOJI[v.type]} ${v.naam}</div>
            <div class="cd-dates">Tot en met ${maxEnd.toLocaleDateString('nl-NL',{day:'numeric',month:'long'})}</div>
            <div class="cd-on-vacation">
                <span class="pulse"></span>
                Nog <strong>&nbsp;${daysLeft}&nbsp;</strong> dag${daysLeft!==1?'en':''}
            </div>`;
    } else {
        const start    = earliestStart(v);
        const daysLeft = daysBetween(t, start);
        el.innerHTML = `
            <div class="cd-label">Volgende vakantie</div>
            <div class="cd-name">${TYPE_EMOJI[v.type]} ${v.naam}</div>
            <div class="cd-dates">Vanaf ${start.toLocaleDateString('nl-NL',{day:'numeric',month:'long',year:'numeric'})}</div>
            <div class="cd-pill">
                <span class="cd-num">${daysLeft}</span>
                <span class="cd-unit">dag${daysLeft!==1?'en':''}</span>
            </div>`;
    }
}

// ── Duration summary ──────────────────────────────────────────────

function durationSummary(v) {
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

    const badgeText = {current:'Nu',upcoming:'Binnenkort',past:'Voorbij'}[status];
    const badgeCls  = {current:'badge-current',upcoming:'badge-upcoming',past:'badge-past'}[status];

    return `<div class="card ${status}" data-type="${v.type}">
        <div class="card-img">
            <div class="card-img-deco">${TYPE_DECO[v.type]}</div>
            <div class="card-img-text">
                <div class="card-img-name">${TYPE_EMOJI[v.type]} ${v.naam}</div>
                <div class="card-img-year">Schooljaar ${year}</div>
            </div>
            <span class="card-badge ${badgeCls}">${badgeText}</span>
        </div>
        <div class="card-body">
            <div class="card-duration">Duur: ${durationSummary(v)}</div>
            <div class="mini-cal-wrap">${miniCals}</div>
            ${regionHTML}
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

function renderMiniCalFixed(year, month, v) {
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

        const vacRegions = Object.entries(v.periodes)
            .filter(([,p]) => date>=parseDate(p.van) && date<=parseDate(p.tot))
            .map(([r]) => r);

        let dotBg = '';
        if (vacRegions.length===1) dotBg = REGION_COLOR[vacRegions[0]];
        else if (vacRegions.length===2) {
            const [c1,c2]=vacRegions.map(r=>REGION_COLOR[r]);
            dotBg=`linear-gradient(to right,${c1} 50%,${c2} 50%)`;
        } else if (vacRegions.length>=3) {
            const [c1,c2,c3]=vacRegions.map(r=>REGION_COLOR[r]);
            dotBg=`linear-gradient(to right,${c1} 33%,${c2} 33% 66%,${c3} 66%)`;
        }

        let cls='mc-day';
        if(isWe) cls+=' weekend';
        if(isTd) cls+=' today';

        const dot = dotBg ? `<b style="display:block;height:3px;border-radius:2px;background:${dotBg};margin-top:1px"></b>` : '';
        cells.push(`<span class="${cls}">${day}${dot}</span>`);
    }

    return `<div class="mini-cal">
        <div class="mc-title">${MONTHS_NL[month].slice(0,3)} ${year}</div>
        <div class="mc-grid">${cells.join('')}</div>
    </div>`;
}

function buildCardFixed(v, year) {
    const status = statusForAll(v);
    const months = getMonthsForVakantie(v);
    const miniCals = months.map(({y,m}) => renderMiniCalFixed(y,m,v)).join('');

    const regions = ['noord','midden','zuidd'];
    let regionHTML = '';

    if (v.alleSame) {
        const p = v.periodes.noord;
        const d = durationDays(p.van, p.tot);
        regionHTML = `<div class="rrow-same">Alle regio's: ${formatDate(p.van)} – ${formatDate(p.tot)} · <strong>${d} dagen</strong></div>`;
    } else {
        regionHTML = `<div class="region-rows">${
            regions.map(r => {
                const p = v.periodes[r];
                const d = durationDays(p.van, p.tot);
                let cls = 'rrow';
                if (activeRegion===r) cls+=' active';
                else if (activeRegion!=='alle') cls+=' dimmed';
                return `<div class="${cls}">
                    <span class="rrow-dot" style="background:${REGION_COLOR[r]}"></span>
                    <span class="rrow-name">${REGION_LABEL[r]}</span>
                    <span class="rrow-dates">${formatDate(p.van)} – ${formatDate(p.tot)}</span>
                    <span class="rrow-days">${d} dgn</span>
                </div>`;
            }).join('')
        }</div>`;
    }

    const badgeText = {current:'Nu',upcoming:'Binnenkort',past:'Voorbij'}[status];
    const badgeCls  = {current:'badge-current',upcoming:'badge-upcoming',past:'badge-past'}[status];

    return `<div class="card ${status}" data-type="${v.type}">
        <div class="card-img">
            <div class="card-img-deco">${TYPE_DECO[v.type]}</div>
            <div class="card-img-text">
                <div class="card-img-name">${TYPE_EMOJI[v.type]} ${v.naam}</div>
                <div class="card-img-year">Schooljaar ${year}</div>
            </div>
            <span class="card-badge ${badgeCls}">${badgeText}</span>
        </div>
        <div class="card-body">
            <div class="card-duration">Duur: ${durationSummary(v)}</div>
            <div class="mini-cal-wrap">${miniCals}</div>
            ${regionHTML}
        </div>
    </div>`;
}

// ── Render grid ───────────────────────────────────────────────────

function renderCards() {
    const yd     = DATA[activeYear];
    const grid   = document.getElementById('cards');
    const notice = document.getElementById('notice-provisional');

    grid.innerHTML = yd.vakanties.map(v => buildCardFixed(v, activeYear)).join('');
    notice.hidden  = yd.confirmed;
}

// ── Year tabs ─────────────────────────────────────────────────────

function renderYearBar() {
    const bar = document.getElementById('year-bar');
    bar.innerHTML = Object.keys(DATA).map(y => {
        const cls = y===activeYear ? 'ytab active' : 'ytab';
        const confirmed = DATA[y].confirmed;
        return `<button class="${cls}" data-year="${y}">${y.replace('-','–')}${confirmed?'':' ⚡'}</button>`;
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
    const regionLabel = region==='alle' ? 'Alle regio\'s' : REGION_LABEL[region];
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

    let html = `<div class="print-cover">
        <h1>🇳🇱 nl-schoolvakanties.nl</h1>
        <p>Schoolvakanties ${activeYear} · ${regionLabel}</p>
        <p style="font-size:.85rem;color:#888;margin-top:8px">Bron: rijksoverheid.nl${!yd.confirmed?' · Indicatief':''}</p>
    </div>`;

    for (const {y,m} of months) {
        const firstDay = new Date(y,m,1);
        const lastDay  = new Date(y,m+1,0);
        let startDow   = (firstDay.getDay()+6)%7;

        // Legend
        const legend = `<div class="pm-legend">
            <span class="pm-legend-item"><span class="pm-swatch" style="background:${C_NOORD}"></span>Noord</span>
            <span class="pm-legend-item"><span class="pm-swatch" style="background:${C_MIDDEN}"></span>Midden</span>
            <span class="pm-legend-item"><span class="pm-swatch" style="background:${C_ZUIDD}"></span>Zuid</span>
        </div>`;

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

document.getElementById('year-bar').addEventListener('click', e => {
    const btn = e.target.closest('.ytab');
    if (!btn) return;
    activeYear = btn.dataset.year;
    document.querySelectorAll('.ytab').forEach(b => b.classList.toggle('active', b===btn));
    renderCards();
});

document.getElementById('region-row').addEventListener('click', e => {
    const btn = e.target.closest('.rbtn');
    if (!btn) return;
    activeRegion = btn.dataset.region;
    document.querySelectorAll('.rbtn').forEach(b => b.classList.toggle('active', b===btn));
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

// Close panel when clicking outside
document.addEventListener('click', e => {
    if (!exportPanel.hidden &&
        !exportPanel.contains(e.target) &&
        e.target.id !== 'btn-export') {
        exportPanel.hidden = true;
    }
});

// ── Init ──────────────────────────────────────────────────────────

renderYearBar();
renderCountdown();
renderCards();
