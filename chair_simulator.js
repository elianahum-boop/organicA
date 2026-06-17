// סימולטור כסאות ציקלוהקסאן ויציבותם קונפורמטיבית
const chairSimulator = {
  // A-values in kJ/mol (approximate free energy cost of putting the substituent in axial position)
  substituents: {
    "H": { name: "מימן (H)", aValue: 0.0, color: "#94a3b8" },
    "CH3": { name: "מתיל (CH3)", aValue: 7.3, color: "#38bdf8" },
    "CH2CH3": { name: "אתיל (CH2CH3)", aValue: 7.5, color: "#22c55e" },
    "tBu": { name: "טרט-בוטיל (t-Bu)", aValue: 20.0, color: "#ec4899" },
    "Cl": { name: "כלור (Cl)", aValue: 2.2, color: "#a855f7" },
    "Br": { name: "ברום (Br)", aValue: 2.0, color: "#f43f5e" },
    "OH": { name: "הידרוקסיל (OH)", aValue: 4.0, color: "#eab308" }
  },

  // Check if position is axial (ax) or equatorial (eq) for Chair A
  // Rules for Chair A (Standard):
  // C1: Up is Axial, Down is Equatorial
  // C2: Up is Equatorial, Down is Axial
  // C3: Up is Axial, Down is Equatorial
  // C4: Up is Equatorial, Down is Axial
  // C5: Up is Axial, Down is Equatorial
  // C6: Up is Equatorial, Down is Axial
  getPositionType: function(carbonIndex, direction, isChairB) {
    // carbonIndex is 1 to 6
    // direction is 'up' or 'down'
    // if isChairB is true, axial and equatorial flip
    
    let isUpAxial = (carbonIndex % 2 !== 0); // C1, C3, C5 -> Up is Axial
    let isAxial = (direction === 'up') ? isUpAxial : !isUpAxial;
    
    if (isChairB) {
      return isAxial ? 'equatorial' : 'axial';
    }
    return isAxial ? 'axial' : 'equatorial';
  },

  // Calculate energy for a chair conformation
  calculateConformationEnergy: function(ringState, isChairB) {
    // ringState is an object: { 1: {sub: 'CH3', dir: 'up'}, 2: {sub: 'H', dir: 'up'}, ... }
    let totalEnergy = 0.0;
    let axialSubstituents = [];
    let equatorialSubstituents = [];

    for (let c = 1; c <= 6; c++) {
      let node = ringState[c];
      if (!node || node.sub === 'H') continue;
      
      let type = this.getPositionType(c, node.dir, isChairB);
      let subInfo = this.substituents[node.sub];
      
      if (type === 'axial') {
        totalEnergy += subInfo.aValue;
        axialSubstituents.push({ carbon: c, sub: node.sub, dir: node.dir, val: subInfo.aValue });
      } else {
        equatorialSubstituents.push({ carbon: c, sub: node.sub, dir: node.dir });
      }
    }
    
    return {
      energy: parseFloat(totalEnergy.toFixed(1)),
      axialList: axialSubstituents,
      eqList: equatorialSubstituents
    };
  },

  // Draw Chair SVG dynamically based on ring state and flip status
  getChairSVG: function(ringState, isChairB) {
    // Chair coordinates for drawing
    // We will draw a schematic chair projection
    // vertices of Chair A:
    // C1: (40, 70), C2: (90, 30), C3: (170, 30), C4: (150, 90), C5: (100, 130), C6: (20, 130) -- wait, let's make it look like a nice chair!
    let pts = isChairB ? 
      { // Chair B coordinates (flipped)
        1: {x: 60, y: 110},
        2: {x: 100, y: 70},
        3: {x: 180, y: 70},
        4: {x: 160, y: 30},
        5: {x: 120, y: 110},
        6: {x: 40, y: 70} // adjusted schematically
      } :
      { // Chair A coordinates
        1: {x: 40, y: 50},
        2: {x: 80, y: 90},
        3: {x: 160, y: 90},
        4: {x: 180, y: 30},
        5: {x: 140, y: 10},
        6: {x: 60, y: 10}
      };

    // Better standard chair A coordinates:
    // C1 (left-down): (40, 85)
    // C2 (mid-up): (90, 45)
    // C3 (right-up): (170, 45)
    // C4 (right-down): (150, 105)
    // C5 (mid-down): (100, 145)
    // C6 (left-down): (20, 145) -- wait let's use a verified set:
    if (!isChairB) {
      pts = {
        1: { x: 50,  y: 90 },
        2: { x: 100, y: 40 },
        3: { x: 180, y: 40 },
        4: { x: 160, y: 100 },
        5: { x: 110, y: 150 },
        6: { x: 30,  y: 150 }
      };
    } else {
      // Flipped chair coordinates
      pts = {
        1: { x: 50,  y: 100 },
        2: { x: 100, y: 150 },
        3: { x: 180, y: 150 },
        4: { x: 160, y: 90 },
        5: { x: 110, y: 40 },
        6: { x: 30,  y: 40 }
      };
    }

    let svgMarkup = `<svg viewBox="0 0 240 200" width="100%" height="200" style="background:#1e293b; border-radius:12px; padding:10px;">
      <!-- Grid/Guidelines (subtle) -->
      <path d="M ${pts[1].x},${pts[1].y} L ${pts[2].x},${pts[2].y} L ${pts[3].x},${pts[3].y} L ${pts[4].x},${pts[4].y} L ${pts[5].x},${pts[5].y} L ${pts[6].x},${pts[6].y} Z" 
            fill="none" stroke="#64748b" stroke-width="3" stroke-linejoin="round"/>`;

    // Draw Carbon labels
    for (let c = 1; c <= 6; c++) {
      svgMarkup += `<circle cx="${pts[c].x}" cy="${pts[c].y}" r="4" fill="#f8fafc"/>`;
      svgMarkup += `<text x="${pts[c].x - 12}" y="${pts[c].y + 4}" fill="#94a3b8" font-family="Arial" font-size="10" font-weight="bold">C${c}</text>`;
    }

    // Draw Substituents
    for (let c = 1; c <= 6; c++) {
      let node = ringState[c];
      if (!node) continue;
      
      let type = this.getPositionType(c, node.dir, isChairB);
      let subInfo = this.substituents[node.sub];
      
      // Calculate drawing angle for substituents
      let angle = 0; // degrees
      let len = 25;
      
      // Up/Down drawing vectors relative to vertex
      let isUp = (node.dir === 'up');
      
      // Determine line directions for axial vs equatorial on our 2D coordinate system
      let startX = pts[c].x;
      let startY = pts[c].y;
      let endX = startX;
      let endY = startY + (isUp ? -len : len); // default axial
      
      if (type === 'equatorial') {
        // Equatorial lines point outwards, slightly tilted opposite to axial direction
        let angleRad = 0;
        if (c === 1) angleRad = isUp ? Math.PI*1.2 : Math.PI*0.8;
        if (c === 2) angleRad = isUp ? Math.PI*0.2 : Math.PI*1.8;
        if (c === 3) angleRad = isUp ? Math.PI*0.1 : Math.PI*1.9;
        if (c === 4) angleRad = isUp ? Math.PI*0.8 : Math.PI*1.2;
        if (c === 5) angleRad = isUp ? Math.PI*1.9 : Math.PI*0.1;
        if (c === 6) angleRad = isUp ? Math.PI*1.8 : Math.PI*0.2;
        
        endX = startX + len * Math.cos(angleRad);
        endY = startY - len * Math.sin(angleRad);
      }
      
      // Draw bonds
      let bondColor = (type === 'axial') ? "#f43f5e" : "#38bdf8"; // axial is red (higher energy), equatorial is cyan
      if (node.sub === 'H') bondColor = "#475569";
      
      svgMarkup += `<line x1="${startX}" y1="${startY}" x2="${endX}" y2="${endY}" stroke="${bondColor}" stroke-width="2" ${type === 'axial' && node.sub !== 'H' ? 'stroke-dasharray="2,2"' : ''}/>`;
      
      // Draw substituent label
      if (node.sub !== 'H') {
        svgMarkup += `<circle cx="${endX}" cy="${endY}" r="10" fill="${subInfo.color}"/>`;
        svgMarkup += `<text x="${endX}" y="${endY + 3}" fill="#0f172a" font-family="Arial" font-size="8" font-weight="bold" text-anchor="middle">${node.sub}</text>`;
        
        // Add a small label indicating ax/eq
        let labelText = (type === 'axial') ? 'ax' : 'eq';
        svgMarkup += `<text x="${endX}" y="${endY + (isUp ? -12 : 16)}" fill="${bondColor}" font-family="Arial" font-size="8" font-weight="bold" text-anchor="middle">${labelText}</text>`;
      } else {
        // draw a small H label
        svgMarkup += `<text x="${endX}" y="${endY + (isUp ? -2 : 6)}" fill="#64748b" font-family="Arial" font-size="8" text-anchor="middle">H</text>`;
      }
    }
    
    svgMarkup += `</svg>`;
    return svgMarkup;
  },

  // Generate complete Hebrew comparison report
  getStabilityReport: function(ringState) {
    let chairA = this.calculateConformationEnergy(ringState, false);
    let chairB = this.calculateConformationEnergy(ringState, true);
    
    let diff = Math.abs(chairA.energy - chairB.energy).toFixed(1);
    let moreStable = "";
    
    if (chairA.energy < chairB.energy) {
      moreStable = "כסא א'";
    } else if (chairB.energy < chairA.energy) {
      moreStable = "כסא ב' (הקונפורמר שעבר היפוך)";
    } else {
      moreStable = "שני הקונפורמרים יציבים במידה שווה";
    }

    let report = `<h3 class="report-title">דוח יציבות קונפורמטיבית</h3>
<ul class="report-list">
  <li><span class="report-bullet"></span><strong>אנרגיית כסא א' (קבוצות אקסיאליות):</strong> ${chairA.energy} kJ/mol</li>
  <li><span class="report-bullet"></span><strong>אנרגיית כסא ב' (אחרי היפוך):</strong> ${chairB.energy} kJ/mol</li>
  <li><span class="report-bullet"></span><strong>הקונפורמר היציב ביותר:</strong> <span class="highlight-stable">${moreStable}</span></li>
  ${diff > 0 ? `<li><span class="report-bullet"></span><strong>הפרש אנרגיה (ΔG):</strong> ${diff} kJ/mol</li>` : ''}
</ul>

<h4 class="report-subtitle">הסבר מפורט:</h4>
<div class="report-explanation">`;

    if (chairA.energy === 0 && chairB.energy === 0) {
      report += `אין מתמירים נפחיים על הטבעת פרט למימנים. שתי קונפורמציות הכסא זהות לחלוטין ויציבות במידה שווה.`;
    } else {
      report += `הקונפורמציה המועדפת היא זו שבה קבוצות נפחיות גדולות נמצאות בעמדות <strong>אקווטוריאליות (equatorial)</strong> ומקלות על הלחץ הסטרי.
      <br><br>`;
      if (chairA.energy < chairB.energy) {
        report += `ב<strong>כסא א'</strong>, המתמירים הבאים נמצאים בעמדה אקווטוריאלית נוחה: <span class="eq-tag">${chairA.eqList.map(x => `C${x.carbon}-${x.sub}`).join(', ')}</span>. 
        <br>לעומת זאת, ב<strong>כסא ב'</strong> קבוצות אלו נאלצות לעבור לעמדה אקסיאלית מתוחה שיוצרת אינטראקציות 1,3-דו-אקסיאליות.`;
      } else if (chairB.energy < chairA.energy) {
        report += `ב<strong>כסא ב'</strong>, המתמירים הבאים נמצאים בעמדה אקווטוריאלית נוחה: <span class="eq-tag">${chairB.eqList.map(x => `C${x.carbon}-${x.sub}`).join(', ')}</span>. 
        <br>לעומת זאת, ב<strong>כסא א'</strong> קבוצות אלו נאלצות לעבור לעמדה אקסיאלית מתוחה שיוצרת אינטראקציות 1,3-דו-אקסיאליות.`;
      } else {
        report += `המתמירים מפוזרים באופן כזה שהיפוך הטבעת מעביר מספר שווה של קבוצות בעלות משקל זהה בין עמדות אקסיאליות ואקווטוריאליות, ולכן אין העדפה אנרגטית לאחת מהקונפורמציות.`;
      }
    }
    
    report += `</div>`;

    return {
      report: report,
      energyA: chairA.energy,
      energyB: chairB.energy,
      stableChair: chairA.energy < chairB.energy ? 'A' : (chairB.energy < chairA.energy ? 'B' : 'Equal')
    };
  }
};

if (typeof module !== 'undefined') {
if (typeof module !== 'undefined' && module.exports) {
  module.exports = chairSimulator;
}
}
