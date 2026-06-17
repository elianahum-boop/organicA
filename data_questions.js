// מפתח השאלות לתרגול אורגנית א' - מאגר מורחב (30 שאלות ברמת קורס)
const organicQuestions = [
  // --- נומנקלטורה ---
  {
    id: 1,
    category: "nomenclature_functional",
    title: "נומנקלטורה של אלקנים",
    text: "קבעו מהו השם הסיסטמתי (IUPAC) הנכון עבור המולקולה הבאה (כולל קונפיגורציית E/Z במידת הצורך):",
    svg: `<svg viewBox="0 0 300 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Main chain -->
      <line x1="50" y1="80" x2="100" y2="40" stroke="#f8fafc" stroke-width="3"/>
      <line x1="100" y1="40" x2="160" y2="40" stroke="#f8fafc" stroke-width="5"/> <!-- double bond base -->
      <line x1="100" y1="46" x2="160" y2="46" stroke="#f8fafc" stroke-width="2"/> <!-- double bond double line -->
      <line x1="160" y1="40" x2="210" y2="80" stroke="#f8fafc" stroke-width="3"/>
      <!-- Substituents -->
      <line x1="100" y1="40" x2="70" y2="10" stroke="#38bdf8" stroke-width="3"/> <!-- H on C2 -->
      <line x1="160" y1="40" x2="190" y2="10" stroke="#f43f5e" stroke-width="3"/> <!-- Br on C3 -->
      <!-- Labels -->
      <text x="65" y="8" fill="#38bdf8" font-family="Arial" font-size="12" font-weight="bold">H</text>
      <text x="195" y="12" fill="#f43f5e" font-family="Arial" font-size="12" font-weight="bold">Br</text>
      <text x="35" y="92" fill="#94a3b8" font-family="Arial" font-size="12">CH3</text>
      <text x="215" y="92" fill="#94a3b8" font-family="Arial" font-size="12">CH2-CH3</text>
    </svg>`,
    options: [
      "(E)-3-bromo-2-pentene",
      "(Z)-3-bromo-2-pentene",
      "(E)-3-bromo-2-hexene",
      "(Z)-3-bromo-2-hexene"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון לקביעת את השם הנכון:

**שלב 1: מציאת שרשרת הבסיס הארוכה ביותר**
נמצא את שרשרת הפחמנים הארוכה ביותר שמכילה את הקשר הכפול:
- השרשרת מתחילה בפחמן השמאלי התחתון (C1), עוברת דרך הקשר הכפול (C2 ו-C3), וממשיכה לקבוצת האתיל בימין למטה (C4 ו-C5).
- סך הכל יש לנו 5 פחמנים בשרשרת הראשי. שרשרת של 5 פחמנים עם קשר כפול נקראת **2-pentene** (המספר 2 מציין שהקשר הכפול מתחיל בפחמן מספר 2).

**שלב 2: קביעת כיוון המספור**
אנחנו ממספרים את השרשרת מהקצה שנותן לקשר הכפול את המספר הנמוך ביותר:
- אם נמספר משמאל לימין: הקשר הכפול מתחיל ב-C2.
- אם נמספר מימין לשמאל: הקשר הכפול מתחיל ב-C3.
- לכן נבחר במספור משמאל לימין. הברום יושב על פחמן 3 (3-bromo).

**שלב 3: קביעת קונפיגורציית E/Z (סדר קדימויות CIP)**
נשווה את הקבוצות המחוברות לכל אחד מפחמני הקשר הכפול:
- **על פחמן C2:** מחוברים אטום מימן (H, מספר אטומי 1) וקבוצת מתיל (CH₃, פחמן מספר אטומי 6). קבוצת המתיל היא בעלת העדיפות הגבוהה יותר (פונה למטה בציור).
- **על פחמן C3:** מחוברים אטום ברום (Br, מספר אטומי 35) וקבוצת אתיל (CH₂CH₃, פחמן מספר אטומי 6). אטום הברום הוא בעל העדיפות הגבוהה יותר (פונה למעלה בציור).
- **הכרעה:** שתי הקבוצות בעלות העדיפות הגבוהה ביותר (מתיל ב-C2 וברום ב-C3) פונות לכיוונים מנוגדים בציור (אחת למטה ואחת למעלה). מצב כזה נקרא **E** (מלשון entgegen - מנגד בגרמנית).
לכן השם המלא הוא **(E)-3-bromo2-pentene**.
<svg viewBox="0 0 320 140" width="100%" height="140" style="background:#1e293b; border-radius:8px; display:block; margin: 10px auto; direction: ltr;"><line x1="120" y1="70" x2="200" y2="70" stroke="#f8fafc" stroke-width="4"/><line x1="120" y1="76" x2="200" y2="76" stroke="#f8fafc" stroke-width="2"/><line x1="120" y1="73" x2="80" y2="33" stroke="#94a3b8" stroke-width="2"/><line x1="120" y1="73" x2="80" y2="113" stroke="#f8fafc" stroke-width="3"/><line x1="200" y1="73" x2="240" y2="33" stroke="#f8fafc" stroke-width="3"/><line x1="200" y1="73" x2="240" y2="113" stroke="#94a3b8" stroke-width="2"/><text x="75" y="25" fill="#94a3b8" font-family="Arial" font-size="10" text-anchor="end">H (עדיפות 2)</text><text x="75" y="117" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold" text-anchor="end">CH3 (עדיפות 1 ⭐)</text><text x="245" y="25" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold" text-anchor="start">Br (עדיפות 1 ⭐)</text><text x="245" y="117" fill="#94a3b8" font-family="Arial" font-size="10" text-anchor="start">CH2CH3 (עדיפות 2)</text><line x1="100" y1="73" x2="220" y2="73" stroke="#eab308" stroke-width="1.5" stroke-dasharray="3,3"/><text x="160" y="92" fill="#eab308" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">מישור הקשר הכפול</text><line x1="85" y1="113" x2="235" y2="33" stroke="#10b981" stroke-width="2" stroke-dasharray="2,2"/><text x="160" y="55" fill="#10b981" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">כיוונים מנוגדים (E)</text></svg>

**להלן הסבר למה שאר האפשרויות שגויות:**
- **(Z)-3-bromo2-pentene שגויה כי:** היא מניחה קונפיגורציית Z. קונפיגורציית Z (מלשון zusammen - ביחד) מתארת מצב שבו שתי הקבוצות בעלות העדיפות הגבוהה פונות לאותו הכיוון. בציור שלנו הן פונות לכיוונים מנוגדים.
- **(E)-3-bromo-2-hexene ו-(Z)-3-bromo-2-hexene שגויות כי:** הן מניחות ששרשרת הבסיס מכילה 6 פחמנים (hexene), אך השרשרת הארוכה ביותר במולקולה זו מכילה רק 5 פחמנים (pentene).

**דגש חשוב למבחן (מלכודת נפוצה): ⚠️**
הרבה סטודנטים נופלים בשאלה הזו ומסמנים **(Z)** מהסיבה הבאה: הם מסתכלים על שלד הפחמנים ורואים שקבוצת המתיל (CH₃) וקבוצת האתיל (CH₂CH₃) פונות שתיהן למטה (כלומר, השלד הפחמני נראה כמו קונפיגורציית "cis").
**אבל קביעת E/Z לא נעשית לפי כיוון שרשרת הפחמנים!**
לפי כללי קדימות CIP (Cahn-Ingold-Prelog), אנחנו קובעים קדימות לכל פחמן בנפרד לפי **המספר האטומי**:
- בפחמן C3, הקבוצות המחוברות הן ברום (Br, מספר אטומי 35) וקבוצת אתיל (C, מספר אטומי 6). מכיוון שהמספר האטומי של ברום גדול בהרבה מזה של פחמן (35 > 6), **הברום הוא בעל הקדימות הגבוהה ביותר על פחמן C3** (והוא פונה **למעלה**).
- בפחמן C2, הקבוצות המחוברות הן מתיל (C, מספר אטומי 6) ומימן (H, מספר אטומי 1). קבוצת המתיל היא בעלת הקדימות הגבוהה ביותר (והיא פונה **למטה**).
מכיוון שהקבוצות בעלות הקדימות הגבוהה ביותר (המתיל משמאל והברום מימין) נמצאות בצדדים מנוגדים של הקשר הכפול (אחת למטה ואחת למעלה), הקונפיגורציה היא בוודאות **E** (Entgegen - מנוגד).`
  },


  {
    id: 2,
    category: "nomenclature_alkanes",
    title: "תיקון שמות שגויים",
    text: "עבור מולקולה מסוימת ניתן השם השגוי 2-ethylbutane. קבעו מהו השם הסיסטמתי (IUPAC) הנכון של המולקולה:",
    svg: `<svg viewBox="0 0 300 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- 2-ethylbutane drawn -->
      <line x1="60" y1="90" x2="110" y2="50" stroke="#94a3b8" stroke-width="3"/>
      <line x1="110" y1="50" x2="160" y2="90" stroke="#f8fafc" stroke-width="3"/>
      <line x1="160" y1="90" x2="210" y2="50" stroke="#f8fafc" stroke-width="3"/>
      <!-- ethyl group on C2 -->
      <line x1="110" y1="50" x2="110" y2="10" stroke="#f8fafc" stroke-width="3"/>
      <line x1="110" y1="10" x2="150" y2="-10" stroke="#f8fafc" stroke-width="3"/>
      
      <circle cx="110" cy="50" r="6" fill="#38bdf8"/>
      <text x="95" y="70" fill="#38bdf8" font-family="Arial" font-size="12" font-weight="bold">C2</text>
    </svg>`,
    options: [
      "3-methylpentane",
      "2-methylpentane",
      "3-ethylbutane",
      "hexane"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון כדי לתקן שמות שגויים:

**שלב 1: זיהוי הטעות בבחירת שרשרת הבסיס**
- מי שנתן את השם "2-ethylbutane" ספר 4 פחמנים (butane) וחשב שיש קבוצת אתיל (CH₂CH₃) המחוברת לפחמן מספר 2.
- אולם, כלל הברזל של IUPAC קובע שחייבים לבחור את **שרשרת הפחמנים הרציפה הארוכה ביותר**.

**שלב 2: מציאת שרשרת הבסיס הנכונה**
- אם נתחיל מקבוצת האתיל (שני פחמנים), נעבור דרך פחמן 2, ונמשיך לקצה השני של הבוטאן - נקבל שרשרת רציפה של **5 פחמנים** (pentane).
- שרשרת זו ארוכה יותר מהשרשרת של 4 פחמנים (butane), ולכן היא שרשרת הבסיס הנכונה.

**שלב 3: מיקום המתמירים והמספור**
- השרשרת היא פנטן (5 פחמנים).
- על פחמן מספר 3 (הפחמן האמצעי) נשארה קבוצת מתיל (CH₃) אחת שלא נכללה בשרשרת הבסיס.
- לכן, השם הנכון הוא **3-methylpentane**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **2-methylpentane שגויה כי:** במולקולה זו קבוצת המתיל ממוקמת על פחמן 3 (הפחמן האמצעי), ולא על פחמן 2. אם היינו מניחים מתיל ב-C2, המבנה היה שונה ופחות סימטרי.
- **3-ethylbutane שגויה כי:** היא מבוססת על בחירת שרשרת בסיס שגויה (butane) ובנוסף, קבוצת אתיל לא יכולה להיות בעמדה 3 של בוטאן מבלי להאריך את השרשרת לפנטן.
- **hexane שגויה כי:** הקסאן מתאר שרשרת ישרה ולא מפוצלת של 6 פחמנים (n-hexane). המולקולה שלנו אמנם בעלת 6 פחמנים סך הכל, אך היא מפוצלת ויש לה שרשרת בסיס של 5 פחמנים בלבד.`
  },
  {
    id: 3,
    category: "nomenclature_alkanes",
    title: "נומנקלטורה של ציקלואלקנים",
    text: "קבעו מהו השם הסיסטמתי (IUPAC) הנכון של הציקלואלקן הדו-מותמר הבא:",
    svg: `<svg viewBox="0 0 300 150" width="100%" height="150" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Hexane ring -->
      <polygon points="150,25 195,50 195,100 150,125 105,100 105,50" fill="none" stroke="#f8fafc" stroke-width="3"/>
      <!-- Substituents -->
      <polygon points="150,25 145,5 155,5" fill="#38bdf8"/>
      <text x="138" y="0" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold">CH3</text>
      <line x1="150" y1="125" x2="150" y2="150" stroke="#f43f5e" stroke-width="3" stroke-dasharray="3,3"/>
      <text x="138" y="160" fill="#f43f5e" font-family="Arial" font-size="11" font-weight="bold">CH3</text>
      
      <text x="155" y="38" fill="#94a3b8" font-family="Arial" font-size="10">1</text>
      <text x="155" y="118" fill="#94a3b8" font-family="Arial" font-size="10">4</text>
    </svg>`,
    options: [
      "cis-1,4-dimethylcyclohexane",
      "trans-1,4-dimethylcyclohexane",
      "trans-1,3-dimethylcyclohexane",
      "cis-1,4-dimethylcyclopentane"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון לקביעת את השם הסטריאוכימי הנכון:

**שלב 1: זיהוי הטבעת הראשי**
- המבנה הוא טבעת משושה סגורה המכילה 6 פחמנים, ולכן שם הבסיס הוא **cyclohexane**.

**שלב 2: זיהוי המתמירים והמספור**
- יש לנו שתי קבוצות מתיל (CH₃) המחוברות לטבעת.
- נמספר את הטבעת כך שהמתמירים יקבלו את המספרים הנמוכים ביותר האפשריים. המספור יתחיל באחד המתילים (C1) ויעבור למתיל השני (C4).
- לכן שם המבנה ללא סטריאוכימיה הוא **1,4-dimethylcyclohexane**.

**שלב 3: קביעת הסטריאוכימיה (cis/trans)**
- המתיל ב-C1 מיוצג על ידי טריז מלא (Wedge) המצביע "למעלה" (או קדימה, אלייך).
- המתיל ב-C4 מיוצג על ידי קו מקווקו (Dash) המצביע "למטה" (או אחורה, הרחק ממך).
- מאחר ששני המתמירים פונים לכיוונים מנוגדים (אחד למעלה ואחד למטה), מדובר בקונפיגורציית **trans**.
- לכן השם המלא הוא **trans-1,4-dimethylcyclohexane**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **cis-1,4-dimethylcyclohexane שגויה כי:** קונפיגורציית cis דורשת ששני המתמירים יפנו לאותו הכיוון (למשל, שניהם בטריז מלא או שניהם במקווקו).
- **trans-1,3-dimethylcyclohexane שגויה כי:** היא מניחה שקבוצות המתיל נמצאות בעמדות 1 ו-3, אך בציור הן ממוקמות בעמדות 1 ו-4 (בדיוק משני עברי הטבעת).
- **cis-1,4-dimethylcyclopentane שגויה כי:** היא מניחה שהטבעת היא מחומש (cyclopentane), אך בציור ישנה טבעת משושה בעלת 6 פחמנים (cyclohexane).`
  },
  {
    id: 4,
    category: "resonance_structures",
    title: "זיהוי מבנים רזונטיביים",
    text: "איזה מזוגות המבנים הבאים מייצג מבנים רזונטיביים (resonance structures) ולא איזומרים מבניים (constitutional isomers)?",
    svg: `<svg viewBox="0 0 350 140" width="100%" height="140" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Pair A -->
      <text x="10" y="30" fill="#38bdf8" font-family="Arial" font-size="14" font-weight="bold">א.</text>
      <text x="30" y="30" fill="#f8fafc" font-family="Arial" font-size="12">CH3-CH=CH-CH3</text>
      <text x="145" y="30" fill="#94a3b8" font-family="Arial" font-size="12">ו-</text>
      <text x="170" y="30" fill="#f8fafc" font-family="Arial" font-size="12">CH2=CH-CH2-CH3</text>
      
      <!-- Pair B -->
      <text x="10" y="70" fill="#38bdf8" font-family="Arial" font-size="14" font-weight="bold">ב.</text>
      <text x="30" y="70" fill="#f8fafc" font-family="Arial" font-size="12">CH2=CH-CH2(+) </text>
      <text x="145" y="70" fill="#94a3b8" font-family="Arial" font-size="12">ו-</text>
      <text x="170" y="70" fill="#f8fafc" font-family="Arial" font-size="12">(+)CH2-CH=CH2</text>
      
      <!-- Pair C -->
      <text x="10" y="110" fill="#38bdf8" font-family="Arial" font-size="14" font-weight="bold">ג.</text>
      <text x="30" y="110" fill="#f8fafc" font-family="Arial" font-size="12">CH3-O-CH3</text>
      <text x="145" y="110" fill="#94a3b8" font-family="Arial" font-size="12">ו-</text>
      <text x="170" y="110" fill="#f8fafc" font-family="Arial" font-size="12">CH3-CH2-OH</text>
    </svg>`,
    options: [
      "זוג א'",
      "זוג ב'",
      "זוג ג'",
      "אף אחד מהזוגות"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון כדי להבדיל בין רזוננס לאיזומרים:

**שלב 1: הבנת חוק הזהב של רזוננס**
- במבנים רזונטיביים, **רק אלקטרונים (קשרי פאי וזוגות אלקטרונים בלתי קושרים) רשאים לזוז**.
- אטומי המולקולה והגרעינים חייבים להישאר קבועים לחלוטין במקומם!

**שלב 2: ניתוח זוג ב' (קטיון אלילי)**
- שלד הפחמנים C-C-C זהה לחלוטין בשני המבנים (אף פחמן או מימן לא שינה מיקום).
- הדבר היחיד שזז הוא קשר הפאי (הקשר הכפול) ומטען הפלוס שנעו מצד אחד לצד השני לאורך המערכת האלילית.
- לכן, זוג ב' מייצג מבנים רזונטיביים אמיתיים.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **זוג א' שגוי כי:** אם נסתכל מקרוב, נראה שאטומי המימן שינו את מיקומם בשלד (במולקולה השמאלית הקשר הכפול במרכז ובמולקולה הימנית הוא בקצה). מכיוון שאטומים זזו, אלו **איזומרים מבניים** (1-butene ו-2-butene) ולא מבני רזוננס.
- **זוג ג' שגוי כי:** אטום החמצן שינה את מיקומו (במולקולה השמאלית הוא במרכז השרשרת ובמולקולה הימנית הוא בקצה השרשרת). שינוי קישוריות של אטומים כבדים פירושו שמדובר ב**איזומרים מבניים** (דימתיל אתר לעומת אתנול) ולא ברזוננס.`
  },
  {
    id: 5,
    category: "resonance_structures",
    title: "יציבות מבנים רזונטיביים",
    text: "לפניכם שלושה מבנים רזונטיביים (III-I) של קטיון אמיד. קבעו איזה מהם הוא התורם העיקרי (היציב ביותר) להיבריד הרזוננס:",
    svg: `<svg viewBox="0 0 460 120" width="100%" height="120" style="background:#0f172a; border-radius:8px; direction: ltr;">
      <!-- Structure I Card -->
      <rect x="10" y="10" width="140" height="100" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
      <text x="80" y="35" fill="#38bdf8" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">מבנה I</text>
      <text x="80" y="70" fill="#f8fafc" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle">H₂N—CH═O⁺—H</text>

      <!-- Structure II Card -->
      <rect x="160" y="10" width="140" height="100" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
      <text x="230" y="35" fill="#38bdf8" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">מבנה II</text>
      <text x="230" y="70" fill="#f8fafc" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle">H₂N⁺═CH—OH</text>

      <!-- Structure III Card -->
      <rect x="310" y="10" width="140" height="100" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
      <text x="380" y="35" fill="#38bdf8" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">מבנה III</text>
      <text x="380" y="70" fill="#f8fafc" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle">H₂N—C⁺H—OH</text>
    </svg>`,
    options: [
      "מבנה I (חמצן חיובי, כולם עם אוקטט מלא)",
      "מבנה II (חנקן חיובי, כולם עם אוקטט מלא)",
      "מבנה III (פחמן חיובי, לפחמן אין אוקטט מלא)",
      "מבנים I ו-II תורמים במידה שווה, ו-III פחות"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון כדי שלא תתבלבלי אף פעם בשאלות יציבות רזוננס:

**שלב 1: בדיקת אוקטטים (החוק הכי חשוב!)**
אנחנו בודקים למי מהמבנים יש אוקטט מלא (8 אלקטרונים) לכל האטומים:
- ב**מבנה I** ו**מבנה II**, לכל האטומים (פחמן, חנקן וחמצן) יש אוקטט מלא.
- ב**מבנה III**, לפחמן המרכזי יש רק 3 קשרים (6 אלקטרונים) ואין לו זוג אלקטרונים חופשי. כלומר, **חסר לו אוקטט!**
*כלל ברזל בכימיה אורגנית*: מבנה שבו לאחד האטומים (במיוחד C, N, O) חסר אוקטט הוא **הרבה פחות יציב** ממבנים עם אוקטט מלא. לכן, אנחנו פוסלים מיד את מבנה III מלהיות היציב ביותר.

**שלב 2: בדיקת אלקטרושליליות (מי נושא את המטען החיובי?)**
נשארנו עם מבנה I ומבנה II (לשניהם אוקטט מלא). איך מכריעים ביניהם?
נביט איפה ממוקם המטען החיובי (+):
- ב**מבנה I** המטען החיובי נמצא על **החמצן (O)**.
- ב**מבנה II** המטען החיובי נמצא על **החנקן (N)**.
חמצן הוא אטום אלקטרושלילי מאוד (מושך אלקטרונים חזק), ולכן הוא ממש "שונא" להיות בעל מטען חיובי. חנקן פחות אלקטרושלילי מחמצן, ולכן הוא יציב ופתוח יותר לשאת את המטען החיובי.
לכן, **מבנה II הוא היציב ביותר!**

**להלן הסבר למה שאר האפשרויות פשוט לא נכונות:**
- **מבנה I לא נכון כי:** למרות שיש לו אוקטט מלא, המטען החיובי יושב על החמצן (האלקטרושלילי יותר) במקום על החנקן (האלקטרושלילי פחות). לכן הוא פחות יציב ממבנה II.
- **מבנה III לא נכון כי:** לפחמן חסר אוקטט (יש לו רק 6 אלקטרונים קושרים). חוסר אוקטט הוא גורם אי-יציבות קיצוני שמוריד משמעותית את תרומתו של מבנה זה להיבריד.
- **מבנים I ו-II תורמים במידה שווה לא נכון כי:** מאחר ויש הבדלי אלקטרושליליות מובהקים בין חנקן לחמצן, המבנים אינם שווי אנרגיה ומבנה II עם המטען על החנקן יציב ותורם משמעותית יותר.`
  },


  {
    id: 6,
    category: "acid_base",
    title: "רזוננס וחומציות (ARIO)",
    text: "לפניכם שלוש תרכובות (א-ג). קבעו מי מהן היא החומצה החזקה ביותר על סמך יציבות הבסיס המצומד:",
    svg: `<svg viewBox="0 0 320 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Phenol (A) -->
      <g transform="translate(10, 20)">
        <polygon points="40,20 60,30 60,55 40,65 20,55 20,30" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <circle cx="40" cy="42" r="12" fill="none" stroke="#f8fafc" stroke-dasharray="3,3"/>
        <line x1="40" y1="20" x2="40" y2="2" stroke="#f8fafc" stroke-width="2"/>
        <text x="35" y="-3" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold">OH</text>
        <text x="25" y="80" fill="#94a3b8" font-family="Arial" font-size="12" font-weight="bold">א. פנול</text>
      </g>
      <!-- Cyclohexanol (B) -->
      <g transform="translate(110, 20)">
        <polygon points="40,20 60,30 60,55 40,65 20,55 20,30" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <line x1="40" y1="20" x2="40" y2="2" stroke="#f8fafc" stroke-width="2"/>
        <text x="35" y="-3" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold">OH</text>
        <text x="12" y="80" fill="#94a3b8" font-family="Arial" font-size="12" font-weight="bold">ב. ציקלוהקסנול</text>
      </g>
      <!-- Acetic Acid (C) -->
      <g transform="translate(220, 20)">
        <line x1="15" y1="50" x2="45" y2="30" stroke="#f8fafc" stroke-width="2"/>
        <line x1="45" y1="30" x2="75" y2="50" stroke="#f8fafc" stroke-width="2"/>
        <!-- carbonyl -->
        <line x1="42" y1="30" x2="42" y2="5" stroke="#f8fafc" stroke-width="2"/>
        <line x1="48" y1="30" x2="48" y2="5" stroke="#f8fafc" stroke-width="2"/>
        <text x="42" y="-1" fill="#f8fafc" font-family="Arial" font-size="11" font-weight="bold">O</text>
        <text x="75" y="62" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold">OH</text>
        <text x="12" y="80" fill="#94a3b8" font-family="Arial" font-size="12" font-weight="bold">ג. חומצה אצטית</text>
      </g>
    </svg>`,
    options: [
      "פנול (א')",
      "ציקלוהקסנול (ב')",
      "חומצה אצטית (ג')",
      "כולן בעלות חומציות זהה כי בכולן הפרוטון יורד מאטום חמצן"
    ],
    correctIndex: 2,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון לפי כללי ARIO כדי לקבוע את חוזק החומצה:

**שלב 1: Atom (אטום הנושא את המטען השלילי בבסיס המצומד)**
- אם נסיר פרוטון (+H) מכל אחת מהחומצות, המטען השלידי שייווצר יתמקם על אטום חמצן (O⁻) בכל שלושת המקרים. לכן, שלב זה הוא תיקו ואינו עוזר לנו להכריע.

**שלב 2: Resonance (רזוננס בבסיס המצומד - הכרעה!)**
נבדוק את פיזור המטען השלילי בבסיס המצומד of כל מולקולה:
- **בבסיס המצומד של חומצה אצטית (אצטט - ג'):** המטען השלילי מבוזר ברזוננס מושלם וסימטרי בין **שני אטומי חמצן** אלקטרושליליים מאוד.
- **בבסיס המצומד של פנול (פנוקסיד - א'):** המטען השלילי מבוזר לתוך הטבעת הארומטית ומתפזר על פני אטומי **פחמן**. מאחר ופחמן פחות אלקטרושלילי מחמצן, הוא פחות יציב עם מטען שלילי בהשוואה לחמצן.
- **בבסיס המצומד של ציקלוהקסנול (ב'):** אין קשרים כפולים סמוכים, ולכן אין רזוננס בכלל. המטען השלילי תקוע (Localized) על חמצן יחיד.
- **הכרעה:** פיזור מטען על שני חמצנים (חומצה אצטית) הוא המייצב ביותר, ולכן היא החומצה החזקה ביותר.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **פנול (א') שגויה כי:** למרות שיש לו רזוננס, המטען השלילי זולג לפחמנים בטבעת שהם פחות אלקטרושליליים מחמצן. לכן הבסיס המצומד שלו פחות יציב מזה של חומצה אצטית (pKa של פנול הוא 10 לעומת 4.76 של חומצה אצטית).
- **ציקלוהקסנול (ב') שגויה כי:** אין לבסיס המצומד שלו שום יציבות רזונטיבית, ולכן הוא החומצה החלשה ביותר מבין השלוש (pKa ~16).
- **כולן בעלות חומציות זהה שגויה כי:** למרות שבכולן הפרוטון יורד מאטום חמצן, אפקט הרזוננס בבסיס המצומד יוצר הבדלי חומציות אדירים של פי 10,000,000,000 (10 בחזקת 10).`
  },

  // --- קונפורמציות ---
  {
    id: 7,
    category: "conformations_newman",
    title: "היטלי ניומן ויציבות",
    text: "עבור המולקולה 3-methylpentane, במבט לאורך הקשר C2-C3, קבעו איזו קונפורמציית ניומן היא היציבה ביותר (בעלת האנרגיה הנמוכה ביותר):",
    svg: `<svg viewBox="0 0 350 140" width="100%" height="140" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Newman A (Anti-like) -->
      <g transform="translate(60, 60)">
        <circle cx="0" cy="0" r="25" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <!-- Front carbon (Y shape) -->
        <line x1="0" y1="0" x2="0" y2="-25" stroke="#38bdf8" stroke-width="2"/>
        <line x1="0" y1="0" x2="-22" y2="13" stroke="#38bdf8" stroke-width="2"/>
        <line x1="0" y1="0" x2="22" y2="13" stroke="#38bdf8" stroke-width="2"/>
        <text x="-8" y="-30" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">CH3</text>
        <text x="-34" y="24" fill="#38bdf8" font-family="Arial" font-size="10">H</text>
        <text x="26" y="24" fill="#38bdf8" font-family="Arial" font-size="10">H</text>
        
        <!-- Back carbon (inverted Y) -->
        <line x1="0" y1="25" x2="0" y2="45" stroke="#f43f5e" stroke-width="2"/>
        <line x1="-22" y1="-13" x2="-38" y2="-23" stroke="#f43f5e" stroke-width="2"/>
        <line x1="22" y1="-13" x2="38" y2="-23" stroke="#f43f5e" stroke-width="2"/>
        <text x="-15" y="56" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">CH2CH3</text>
        <text x="-48" y="-26" fill="#f43f5e" font-family="Arial" font-size="10">CH3</text>
        <text x="42" y="-26" fill="#f43f5e" font-family="Arial" font-size="10">H</text>
        
        <text x="-45" y="-54" fill="#94a3b8" font-family="Arial" font-size="12" font-weight="bold">קונפורמציה א'</text>
      </g>
      <!-- Newman B (Gauche-like) -->
      <g transform="translate(220, 60)">
        <circle cx="0" cy="0" r="25" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <!-- Front carbon (Y shape) -->
        <line x1="0" y1="0" x2="0" y2="-25" stroke="#38bdf8" stroke-width="2"/>
        <line x1="0" y1="0" x2="-22" y2="13" stroke="#38bdf8" stroke-width="2"/>
        <line x1="0" y1="0" x2="22" y2="13" stroke="#38bdf8" stroke-width="2"/>
        <text x="-8" y="-30" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">CH3</text>
        <text x="-34" y="24" fill="#38bdf8" font-family="Arial" font-size="10">H</text>
        <text x="26" y="24" fill="#38bdf8" font-family="Arial" font-size="10">H</text>
        
        <!-- Back carbon (inverted Y but rotated) -->
        <line x1="0" y1="25" x2="-22" y2="35" stroke="#f43f5e" stroke-width="2"/>
        <line x1="0" y1="25" x2="22" y2="35" stroke="#f43f5e" stroke-width="2"/>
        <line x1="-22" y1="-13" x2="-40" y2="0" stroke="#f43f5e" stroke-width="2"/>
        
        <text x="-48" y="-42" fill="#f43f5e" font-family="Arial" font-size="10">H</text>
        <text x="-36" y="48" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">CH2CH3</text>
        <text x="26" y="46" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">CH3</text>
        
        <text x="-45" y="-54" fill="#94a3b8" font-family="Arial" font-size="12" font-weight="bold">קונפורמציה ב'</text>
      </g>
    </svg>`,
    options: [
      "קונפורמציה א' (Staggered, עם קבוצות נפחיות במצב Anti)",
      "קונפורמציה ב' (Staggered, עם אינטראקציות Gauche רבות)",
      "שתי הקונפורמציות בעלות אנרגיה זהה",
      "קונפורמציה אקליפסית (Eclipsed) תהיה יציבה יותר"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון לקביעת את יציבות הקונפורמציה בהיטל ניומן:

**שלב 1: staggered לעומת eclipsed**
- שתי הקונפורמציות (א' ו-ב') הן במצב **staggered** (מתחלפות) – מצב שבו הקשרים מרוחקים זה מזה, והן יציבות בהרבה מקונפורמציות אקליפסיות (eclipsed) שבהן הקשרים חופפים.

**שלב 2: זיהוי הקבוצות הנפחיות ומיקומן**
- לאורך הקשר C2-C3 של 3-methylpentane:
  - על פחמן C2 (הקדמי) מחוברים: מתיל (CH₃) ושני מימנים (H).
  - על פחמן C3 (האחורי) מחוברים: אתיל (CH₂CH₃), מתיל (CH₃), ומימן (H).
- הקבוצות הנפחיות ביותר הן האתיל האחורית והמתיל הקדמית.

**שלב 3: אינטראקציות Gauche ו-Anti**
- **בקונפורמציה א':** קבוצת האתיל האחורית וקבוצת המתיל הקדמית נמצאות בזווית של 180 מעלות (מצב **Anti** - המרחק המקסימלי והיציב ביותר). ישנה רק אינטראקציה מפריעה אחת בזווית של 60 מעלות בין המתיל האחורי למתיל הקדמי (מצב Gauche אחד).
- **בקונפורמציה ב':** גם קבוצת האתיל האחורית וגם קבוצת המתיל האחורית נמצאות בזווית של 60 מעלות מול המתיל הקדמי. כלומר, יש כאן **שתי אינטראקציות Gauche** של קבוצות נפחיות. הצטברות זו מעלה את האנרגיה הסטרית ומפחיתה את היציבות.
- לכן, **קונפורמציה א' היא בעלת האנרגיה הנמוכה ביותר (היציבה ביותר)**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **קונפורמציה ב' שגויה כי:** היא מכילה יותר הפרעות סטריות מסוג Gauche (מתיל-מתיל ומתיל-אתיל) שגורמות לדחייה בין ענני האלקטרונים ומעלות את האנרגיה הכללית.
- **שתי הקונפורמציות בעלות אנרגיה זהה שגויה כי:** המרחקים הסטריים בין הקבוצות הנפחיות שונים באופן מובהק בין המצבים.
- **קונפורמציה אקליפסית תהיה יציבה יותר שגויה כי:** קונפורמציות אקליפסיות סובלות ממתח פיתולי (torsional strain) קשה והן תמיד בעלות האנרגיה הגבוהה ביותר (הכי פחות יציבות).`
  },
  {
    id: 8,
    category: "conformations_chair",
    title: "קונפורמציית כסא של ציקלוהקסאן",
    text: "קבעו מהי קונפורמציית הכיסא היציבה ביותר (המועדפת אנרגטית) עבור cis-1,3-dimethylcyclohexane:",
    svg: `<svg viewBox="0 0 350 140" width="100%" height="140" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Conformer A (both axial) -->
      <g transform="translate(10, 20)">
        <path d="M 20,40 L 50,20 L 90,20 L 80,60 L 50,80 L 10,80 Z" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <!-- Axial at C1 (up) -->
        <line x1="20" y1="40" x2="20" y2="10" stroke="#f43f5e" stroke-width="2"/>
        <text x="12" y="5" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">CH3</text>
        <!-- Axial at C3 (up) -->
        <line x1="90" y1="20" x2="90" y2="-10" stroke="#f43f5e" stroke-width="2"/>
        <text x="82" y="-15" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">CH3</text>
        
        <text x="25" y="100" fill="#94a3b8" font-family="Arial" font-size="12">א. שני המתילים אקסיאליים</text>
      </g>
      <!-- Conformer B (both equatorial) -->
      <g transform="translate(180, 20)">
        <path d="M 20,40 L 50,20 L 90,20 L 80,60 L 50,80 L 10,80 Z" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <!-- Equatorial at C1 (down/out) -->
        <line x1="20" y1="40" x2="-2" y2="52" stroke="#38bdf8" stroke-width="2"/>
        <text x="-25" y="62" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">CH3</text>
        <!-- Equatorial at C3 (down/out) -->
        <line x1="90" y1="20" x2="115" y2="28" stroke="#38bdf8" stroke-width="2"/>
        <text x="120" y="32" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">CH3</text>
        
        <text x="25" y="100" fill="#94a3b8" font-family="Arial" font-size="12">ב. שני המתילים אקווטוריאליים</text>
      </g>
    </svg>`,
    options: [
      "קונפורמציה א' (שתי הקבוצות במצב אקסיאלי axial)",
      "קונפורמציה ב' (שתי הקבוצות במצב אקווטוריאלי equatorial)",
      "שתיהן בעלות יציבות שווה בגלל שחלוף כסא מהיר",
      "קונפורמציה שבה מתיל אחד אקסיאלי ואחד אקווטוריאלי"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון לקביעת את יציבות קונפורמציית הכיסא:

**שלב 1: הבנת המצב cis בטבעת**
- במולקולת cis-1,3-dimethylcyclohexane שתי קבוצות המתיל (CH₃) פונות לאותו כיוון (למשל, שתיהן למעלה).

**שלב 2: ניתוח קונפורמציה א' (שני המתילים אקסיאליים)**
- כאשר שני המתילים פונים למעלה בעמדות 1 ו-3, שניהם נמצאים בעמדות **אקסיאליות** (axial) המצביעות ישר למעלה.
- מצב זה יוצר דחייה סטרית קשה מאוד המכונה **1,3-diaxial interaction** (הפרעה דו-אקסיאלית) בין שתי קבוצות המתיל הנפחיות ובין המימן האקסיאלי שבעמדה 5. זוהי קונפורמציה לא יציבה ויקרה מאוד אנרגטית.

**שלב 3: ניתוח קונפורמציה ב' (שני המתילים אקווטוריאליים)**
- לאחר היפוך כיסא (ring flip), שתי העמדות שהיו אקסיאליות הופכות לעמדות **אקווטוריאליות** (equatorial) המצביעות הצידה אל מישור הטבעת.
- במצב אקווטוריאלי, קבוצות המתיל מרוחקות מאוד משאר אטומי הטבעת ואין שום מתח סטרי או אינטראקציות דו-אקסיאליות.
- לכן, **קונפורמציה ב' היא היציבה ביותר בהפרש עצום**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **קונפורמציה א' שגויה כי:** שתי קבוצות המתיל במצב אקסיאלי גורמות להפרעה מרחבית קשה מאוד (1,3-diaxial strain) שמעלה את האנרגיה הכללית בכ-23 kJ/mol ומורידה את היציבות.
- **שתיהן בעלות יציבות שווה שגויה כי:** למרות שיש היפוך כיסא מהיר ודינמי בטמפרטורת החדר, שיווי המשקל נוטה כמעט לחלוטין (מעל 99.9%) לטובת הקונפורמציה הדו-אקווטוריאלית בגלל היציבות המועדפת שלה.
- **קונפורמציה שבה מתיל אחד אקסיאלי ואחד אקווטוריאלי שגויה כי:** במצב cis בעמדות 1,3, שתי הקבוצות חייבות להיות או שניהן אקסיאליות או שניהם אקווטוריאליות. המצב המעורב (ax, eq) מאפיין את איזומר ה-trans ולא את ה-cis.`
  },

  // --- סטריאוכימיה ---
  {
    id: 9,
    category: "stereochemistry_centers",
    title: "קביעת קונפיגורציית R/S",
    text: "קבעי את הקונפיגורציה המוחלטת (R או S) של המרכז הכיראלי במולקולה הבאה:",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Chiral center at center -->
      <circle cx="150" cy="65" r="5" fill="#f8fafc"/>
      <!-- Substituents -->
      <!-- OH: Up (solid line) -->
      <line x1="150" y1="65" x2="150" y2="25" stroke="#f43f5e" stroke-width="3"/>
      <text x="142" y="18" fill="#f43f5e" font-family="Arial" font-size="12" font-weight="bold">OH</text>
      <!-- Cl: Wedge (solid triangle, left down) -->
      <polygon points="150,65 110,90 115,95" fill="#38bdf8"/>
      <text x="80" y="102" fill="#38bdf8" font-family="Arial" font-size="12" font-weight="bold">Cl</text>
      <!-- CH3: Right down (solid line) -->
      <line x1="150" y1="65" x2="190" y2="90" stroke="#f8fafc" stroke-width="3"/>
      <text x="195" y="98" fill="#f8fafc" font-family="Arial" font-size="12" font-weight="bold">CH3</text>
      <!-- H: Dash (dashed line, back) -->
      <line x1="150" y1="65" x2="150" y2="105" stroke="#a1a1aa" stroke-width="3" stroke-dasharray="3,3"/>
      <text x="146" y="120" fill="#a1a1aa" font-family="Arial" font-size="12" font-weight="bold">H</text>
    </svg>`,
    options: [
      "R",
      "S",
      "אין למולקולה פחמן כיראלי",
      "לא ניתן לקבוע ללא היטל פישר"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון לקביעת קונפיגורציית R/S בקלות:

**שלב 1: קביעת עדיפויות לקבוצות המחוברות לפחמן הכיראלי (לפי מספר אטומי Z)**
נרשום את מספר האטום של האטום המחובר ישירות לפחמן הכיראלי:
1. **Cl (כלור):** מספר אטומי 17 ⬅️ עדיפות ראשונה (**1**).
2. **OH (חמצן):** מספר אטומי 8 ⬅️ עדיפות שנייה (**2**).
3. **CH₃ (פחמן):** מספר אטומי 6 ⬅️ עדיפות שלישית (**3**).
4. **H (מימן):** מספר אטומי 1 ⬅️ עדיפות רביעית (**4**).

**שלב 2: בדיקת מיקום קבוצה 4 (המימן)**
- בציור, קבוצה 4 (מימן) מחוברת בקו מקווקו (Dash) הפונה אחורה. 
- זהו המצב האידיאלי! כשהקבוצה בעלת העדיפות הנמוכה ביותר פונה אחורה, אנחנו פשוט עוקבים אחרי כיוון התנועה 1 ⬅️ 2 ⬅️ 3 ללא שום שינוי.

**שלב 3: מעקב אחר כיוון התנועה 1 ⬅️ 2 ⬅️ 3**
- נצא מ-Cl (שמאל למטה, עדיפות 1), נעבור דרך OH (למעלה, עדיפות 2), ונמשיך ל-CH₃ (ימין למטה, עדיפות 3).
- כיוון התנועה הזה הוא **עם כיוון השעון** (Clockwise).
- תנועה עם כיוון השעון מסמנים ב-**R** (מלטינית: rectus - ימין).
- לכן המרכז הכיראלי הוא בעל קונפיגורציית **R**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **S שגויה כי:** קונפיגורציית S (מלטינית: sinister - שמאל) מתארת תנועה נגד כיוון השעון. כאן התנועה היא עם כיוון השעון.
- **אין למולקולה פחמן כיראלי שגויה כי:** הפחמן המרכזי קשור לארבע קבוצות שונות לחלוטין (Cl, OH, CH3, H) ולכן הוא פחמן כיראלי (אסימטרי) מובהק.
- **לא ניתן לקבוע ללא היטל פישר שגויה כי:** היטל טריז-קווקו (Wedge-Dash) מייצג מידע תלת-ממדי מלא ומדויק המאפשר לקבוע קונפיגורציה מוחלטת בקלות.`
  },


  {
    id: 10,
    category: "stereochemistry_relationships",
    title: "יחסים בין סטריאואיזומרים",
    text: "מהו היחס בין זוג המולקולות הבאות המיוצגות בהיטלי פישר?",
    svg: `<svg viewBox="0 0 340 140" width="100%" height="140" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Molecule 1 -->
      <g transform="translate(60, 10)">
        <line x1="50" y1="20" x2="50" y2="100" stroke="#f8fafc" stroke-width="2"/>
        <line x1="20" y1="50" x2="80" y2="50" stroke="#f8fafc" stroke-width="2"/>
        <line x1="20" y1="80" x2="80" y2="80" stroke="#f8fafc" stroke-width="2"/>
        <text x="40" y="15" fill="#f8fafc" font-family="Arial" font-size="10">CHO</text>
        <text x="40" y="112" fill="#f8fafc" font-family="Arial" font-size="10">CH2OH</text>
        <!-- Substituents -->
        <text x="5" y="54" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">H</text>
        <text x="83" y="54" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">OH</text>
        <text x="5" y="84" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">H</text>
        <text x="83" y="84" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">OH</text>
        <text x="35" y="130" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold">מולקולה 1</text>
      </g>
      <!-- Molecule 2 -->
      <g transform="translate(200, 10)">
        <line x1="50" y1="20" x2="50" y2="100" stroke="#f8fafc" stroke-width="2"/>
        <line x1="20" y1="50" x2="80" y2="50" stroke="#f8fafc" stroke-width="2"/>
        <line x1="20" y1="80" x2="80" y2="80" stroke="#f8fafc" stroke-width="2"/>
        <text x="40" y="15" fill="#f8fafc" font-family="Arial" font-size="10">CHO</text>
        <text x="40" y="112" fill="#f8fafc" font-family="Arial" font-size="10">CH2OH</text>
        <!-- Substituents -->
        <text x="5" y="54" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">OH</text>
        <text x="83" y="54" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">H</text>
        <text x="5" y="84" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">H</text>
        <text x="83" y="84" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">OH</text>
        <text x="35" y="130" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold">מולקולה 2</text>
      </g>
    </svg>`,
    options: [
      "אננטיומרים (Enantiomers)",
      "דיאסטראומרים (Diastereomers)",
      "איזומרים מבניים (Constitutional isomers)",
      "מולקולות זהות לחלוטין"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון לקביעת את היחס הסטריאוכימי בין המולקולות:

**שלב 1: השוואת שלד המולקולות**
- לשתי המולקולות יש את אותו שלד פחמנים (CHO בראש, CH₂OH בתחתית ושני פחמנים כיראליים במרכז). הקישוריות זהה לחלוטין, ולכן אלו סטריאואיזומרים.

**שלב 2: ניתוח קונפיגורציית הפחמנים הכיראליים**
נסתכל על המיקום של קבוצות ה-OH בשני המרכזים הכיראליים (העליון והתחתון):
- **בפחמן הכיראלי העליון (C2):** במולקולה 1 קבוצת ה-OH נמצאת בימין. במולקולה 2 קבוצת ה-OH עברה לשמאל. כלומר, **הקונפיגורציה התהפכה (Inverted)**.
- **בפחמן הכיראלי התחתון (C3):** במולקולה 1 קבוצת ה-OH נמצאת בימין. במולקולה 2 קבוצת ה-OH נשארה בימין. כלומר, **הקונפיגורציה נשארה זהה (Preserved)**.

**שלב 3: הגדרת יחסי האיזומריה**
- אם **כל** המרכזים הכיראליים היו מתהפכים ⬅️ המולקולות היו תמונת ראי לא חופפת (אננטיומרים).
- אם **רק חלק** מהמרכזים הכיראליים מתהפכים וחלק נשארים זהים ⬅️ המולקולות הן סטריאואיזומרים שאינם תמונת ראי, המכונים **דיאסטראומרים (Diastereomers)**.
- לכן, המולקולות הן דיאסטראומריות.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **אננטיומרים שגויה כי:** באננטיומרים כל המרכזים הכיראליים חייבים להתהפך. במקרה כזה, במולקולה 2 שתי קבוצות ה-OH היו צריכות להיות בצד שמאל.
- **איזומרים מבניים שגויה כי:** הקישוריות בין האטומים זהה לחלוטין (בשני המקרים מדובר ב-2,3-dihydroxybutanal).
- **מולקולות זהות שגויה כי:** המולקולות אינן חופפות זו לזו במרחב (אם נסובב אחת מהן, לא נצליח להלביש אותה בצורה מושלמת על השנייה בגלל השוני בקונפיגורציית C2).`
  },

  // --- תגובות ומנגנונים ---
  {
    id: 11,
    category: "reactions_addition",
    title: "תגובות סיפוח לאלקנים ושחלופים",
    text: "מהו התוצר העיקרי בתגובת הסיפוח הבאה של HBr לאלקן?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Alkene: 3-methyl-1-butene -->
      <line x1="40" y1="80" x2="90" y2="50" stroke="#f8fafc" stroke-width="4"/> <!-- double bond base -->
      <line x1="40" y1="74" x2="90" y2="44" stroke="#f8fafc" stroke-width="2"/> <!-- double bond double line -->
      <line x1="90" y1="50" x2="140" y2="80" stroke="#f8fafc" stroke-width="3"/>
      <line x1="140" y1="80" x2="190" y2="50" stroke="#f8fafc" stroke-width="3"/>
      <line x1="140" y1="80" x2="140" y2="115" stroke="#f8fafc" stroke-width="3"/> <!-- methyl -->
      
      <!-- Reagent arrow -->
      <line x1="200" y1="65" x2="250" y2="65" stroke="#38bdf8" stroke-width="3"/>
      <polygon points="250,60 260,65 250,70" fill="#38bdf8"/>
      <text x="210" y="55" fill="#38bdf8" font-family="Arial" font-size="12" font-weight="bold">HBr</text>
    </svg>`,
    options: [
      "2-bromo-3-methylbutane (סיפוח מרקובניקוב רגיל ללא שחלוף)",
      "2-bromo-2-methylbutane (תוצר שחלוף הידריד ליצירת קרבוקטיון שלישוני)",
      "1-bromo-3-methylbutane (סיפוח אנטי-מרקובניקוב)",
      "1-bromo-2-methylbutane"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון של מנגנון הסיפוח והשחלופים:

**שלב 1: פרוטונציה ויצירת הקרבוקטיון הראשוני**
- הקשר הכפול של 3-methyl-1-butene תוקף את הפרוטון (+H) של HBr.
- הפרוטון נקשר לפחמן הקצה (C1) כדי ליצור את הקרבוקטיון היציב יותר (לפי כלל מרקובניקוב).
- נוצר **קרבוקטיון שניוני (2°)** על פחמן C2.

**שלב 2: בדיקת אפשרות לשחלוף (השלב המכריע!)**
- נביט על הפחמן השכן C3: זהו פחמן שלישוני (3°) המחובר לקבוצת מתיל, לקבוצת מתיל נוספת, למימן (H) ולפחמן C2.
- יון הידריד (מימן יחד עם זוג האלקטרונים שלו, ⁻H) נודד מפחמן C3 לפחמן C2 (תהליך שנקרא **Hydride Shift**).
- מעבר המטען החיובי לפחמן C3 יוצר **קרבוקטיון שלישוני (3°)**, שהוא יציב בהרבה מקרבוקטיון שניוני.

**שלב 3: התקפה נוקלאופילית**
- יון הברומיד (⁻Br) שנותר בתמיסה תוקף את הקרבוקטיון השלישוני היציב ב-C3.
- התוצר העיקרי המתקבל הוא **2-bromo-2-methylbutane**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **2-bromo-3-methylbutane שגויה כי:** זהו תוצר הסיפוח הישיר ללא שחלוף. במציאות, שחלוף הידריד מהיר בהרבה מהתקפת הברומיד, ולכן מוצר זה יהיה זניח (minor).
- **1-bromo-3-methylbutane שגויה כי:** זהו תוצר סיפוח אנטי-מרקובניקוב (הברום בקצה). סיפוח HBr רגיל ללא נוכחות פראוקסידים (ROOR) תמיד יוצר קרבוקטיון ומניב מוצר מרקובניקוב.
- **1-bromo-2-methylbutane שגויה כי:** היא מניחה גם קישוריות שגויה של השלד וגם רגיוכימיה הפוכה של הסיפוח.`
  },
  {
    id: 12,
    category: "reactions_addition",
    title: "הידרובורציה-חמצון (Hydroboration-Oxidation)",
    text: "מהו התוצר העיקרי בתגובה הבאה של אלקן עם בוראן ולאחר מכן מי חמצן בבסיס?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Alkene: 1-methylcyclopentene -->
      <polygon points="60,30 100,50 90,95 50,95 35,55" fill="none" stroke="#f8fafc" stroke-width="3"/>
      <line x1="60" y1="30" x2="100" y2="50" stroke="#f8fafc" stroke-width="5"/> <!-- double bond -->
      <line x1="62" y1="38" x2="94" y2="54" stroke="#f8fafc" stroke-width="2"/> <!-- double bond line -->
      <!-- Methyl on C1 -->
      <line x1="100" y1="50" x2="135" y2="40" stroke="#f8fafc" stroke-width="3"/>
      
      <!-- Reagent arrow -->
      <line x1="160" y1="65" x2="220" y2="65" stroke="#38bdf8" stroke-width="3"/>
      <polygon points="220,60 230,65 220,70" fill="#38bdf8"/>
      <text x="165" y="45" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">1. BH3/THF</text>
      <text x="165" y="60" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">2. H2O2, OH-</text>
    </svg>`,
    options: [
      "trans-2-methylcyclopentanol (תוצר אנטי-מרקובניקוב, סיפוח Syn)",
      "cis-2-methylcyclopentanol (תוצר אנטי-מרקובניקוב, סיפוח Anti)",
      "1-methylcyclopentanol (תוצר מרקובניקוב)",
      "2-methylcyclopentanone (קטון)"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח שיטתי של שלבי תגובת הידרובורציה-חמצון:

**שלב 1: קביעת הרגיוכימיה (לאן נכנס ה-OH?)**
- המגיבים BH₃/THF ולאחר מכן H₂O₂/⁻OH מבצעים סיפוח מים המכוון לתוצר **אנטי-מרקובניקוב**.
- קבוצת ה-OH תיקשר לפחמן הפחות מותמר של הקשר הכפול (C2 של הטבעת), בעוד המימן (H) ייקשר לפחמן המותמר יותר (C1, הנושא את קבוצת המתיל).

**שלב 2: קביעת הסטריאוכימיה (מאיזה צד הם נכנסים?)**
- תגובת הסיפוח של BH₃ לקשר הכפול מתרחשת בשלב אחד מתואם מאותו צד של המישור (סיפוח מסוג **Syn-addition**). כלומר, המימן (H) והבורון (BH₂) נכנסים שניהם מאותו הצד (למשל, שניהם בטריז או שניהם במקווקו).
- בשלב החמצון, הבורון מוחלף בקבוצת ה-OH תוך שמירה מלאה על הסטריאוכימיה. לכן, ה-H וה-OH שהתווספו חייבים להיות באותו הצד (cis זה לזה).

**שלב 3: השפעה על קבוצת המתיל הקיימת**
- מכיוון שהמימן (H) נכנס מאותו הצד של ה-OH (למשל, שניהם בטריז מלמעלה), קבוצת המתיל שהייתה ב-C1 נדחפת לצד הנגדי (למטה, במקווקו).
- כתוצאה מכך, קבוצת ה-OH ב-C2 וקבוצת המתיל ב-C1 יפנו לכיוונים מנוגדים, כלומר הן במצב **trans** זו לזו.
- לכן התוצר הוא **trans-2-methylcyclopentanol**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **cis-2-methylcyclopentanol שגויה כי:** היא מניחה שהמתיל וה-OH באותו צד (cis), מה שהיה דורש סיפוח מסוג Anti-addition (כניסה מצדדים מנוגדים) שאינו מתרחש בהידרובורציה.
- **1-methylcyclopentanol שגויה כי:** זהו תוצר מרקובניקוב (קבוצת ה-OH יושבת על הפחמן השלישוני המותמר יותר). תוצר כזה מתקבל בהידרציה חומצית רגילה.
- **2-methylcyclopentanone שגויה כי:** התגובה מייצרת אלכוהול (קבוצת OH) ולא קטון (קשר כפול לחמצן).`
  },
  {
    id: 13,
    category: "mechanisms_substitution",
    title: "תחרות מנגנוני התמרה ואלימינציה",
    text: "מה יהיה התוצר העיקרי של התגובה הבאה ומהו המנגנון השולט?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Substrate: 2-bromo-2-methylpropane (t-butyl bromide) -->
      <circle cx="90" cy="65" r="5" fill="#f8fafc"/>
      <line x1="90" y1="65" x2="40" y2="65" stroke="#f8fafc" stroke-width="3"/> <!-- methyl -->
      <line x1="90" y1="65" x2="115" y2="25" stroke="#f8fafc" stroke-width="3"/> <!-- methyl -->
      <line x1="90" y1="65" x2="115" y2="105" stroke="#f8fafc" stroke-width="3"/> <!-- methyl -->
      <!-- Leaving group: Br -->
      <line x1="90" y1="65" x2="140" y2="65" stroke="#f43f5e" stroke-width="3"/>
      <text x="145" y="70" fill="#f43f5e" font-family="Arial" font-size="12" font-weight="bold">Br</text>
      
      <!-- Reagents -->
      <line x1="170" y1="65" x2="230" y2="65" stroke="#38bdf8" stroke-width="3"/>
      <polygon points="230,60 240,65 230,70" fill="#38bdf8"/>
      <text x="175" y="45" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">NaOCH2CH3</text>
      <text x="175" y="60" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">Ethanol, Heat</text>
    </svg>`,
    options: [
      "t-butyl ethyl ether באמצעות מנגנון SN2",
      "t-butyl ethyl ether באמצעות מנגנון SN1",
      "2-methylpropene (isobutylene) באמצעות מנגנון E2",
      "2-methylpropene (isobutylene) באמצעות מנגנון E1"
    ],
    correctIndex: 2,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון כדי להכריע בתחרות המנגנונים:

**שלב 1: ניתוח המצע (אלקיל הליד)**
- המצע t-butyl bromide הוא אלקיל הליד **שלישוני (3°)**.
- *חוק ברזל של התמרה*: מצע שלישוני חסום מרחבית לחלוטין מאחור. לכן, **מנגנון SN2 חסום לחלוטין ולא יכול להתרחש בשום אופן**.

**שלב 2: ניתוח המגיב (נוקלאופיל ובסיס)**
- המגיב NaOCH₂CH₃ (סודיום אתוקסיד) הוא **בסיס חזק ונוקלאופיל חזק (טעון שלילית)**.
- בסיס חזק וטעון מעדיף תמיד מנגנונים דו-מולקולריים מהירים (E2 או SN2) על פני יצירת קרבוקטיון איטית (SN1 או E1).
- מאחר ו-SN2 חסום, המנגנון השולט יהיה בהכרח **E2** (אלימינציה בי-מולקולרית).

**שלב 3: השפעת החום**
- נוכחות חימום (Heat) מעודדת אלימינציה על פני התמרה מסיבות אנטרופיות (באלימינציה נוצרות 3 מולקולות מתוך 2). הבסיס החזק קוטף מימן מאחד המתילים, הברום יוצא, ונוצר קשר כפול לקבלת **2-methylpropene**.
- לכן התוצר נוצר במנגנון **E2**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **t-butyl ethyl ether באמצעות מנגנון SN2 שגויה כי:** המצע שלישוני וחסום מרחבית. התקפה מאחור (Backside attack) של אתוקסיד על פחמן שלישוני אינה אפשרית.
- **t-butyl ethyl ether באמצעות מנגנון SN1 שגויה כי:** למרות שנוצר קרבוקטיון שלישוני יציב, הבסיס החזק והטעון (OEt⁻) והחימום מטים את התגובה ישירות למסלול ה-E2 המהיר בהרבה לפני שמתאפשרת סולבוליזה איטית של SN1.
- **2-methylpropene באמצעות מנגנון E1 שגויה כי:** מנגנון E1 דורש תנאים של בסיס חלש וניטרלי (כמו אתנול לבד). בסיס חזק וטעון כמו אתוקסיד כופה מנגנון E2 מהיר שאינו ממתין ליצירת קרבוקטיון חופשי.`
  },
  {
    id: 14,
    category: "mechanisms_substitution",
    title: "סטריאוכימיה של תגובות התמרה (SN2)",
    text: "עבור התגובה של (R)-2-bromobutane עם NaCN בממס DMF, מה תהיה הקונפיגורציה של המרכז הכיראלי בתוצר?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- R-2-bromobutane simplified -->
      <line x1="40" y1="90" x2="80" y2="50" stroke="#f8fafc" stroke-width="3"/>
      <line x1="80" y1="50" x2="120" y2="90" stroke="#f8fafc" stroke-width="3"/>
      <line x1="120" y1="90" x2="160" y2="50" stroke="#f8fafc" stroke-width="3"/>
      <!-- Br on C2 wedge (looking R) -->
      <polygon points="80,50 85,15 75,15" fill="#f43f5e"/>
      <text x="75" y="10" fill="#f43f5e" font-family="Arial" font-size="12" font-weight="bold">Br</text>
      
      <!-- Reagents -->
      <line x1="180" y1="65" x2="240" y2="65" stroke="#38bdf8" stroke-width="3"/>
      <polygon points="240,60 250,65 240,70" fill="#38bdf8"/>
      <text x="190" y="45" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">NaCN</text>
      <text x="190" y="60" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">DMF (polar apr.)</text>
    </svg>`,
    options: [
      "תערובת רצמית של (R) ו-(S) בגלל מנגנון SN1",
      "(S)-2-methylbutanenitrile עקב היפוך ולדן (Inversion) במנגנון SN2",
      "(R)-2-methylbutanenitrile עקב שמירה על הקונפיגורציה במנגנון SN2",
      "לא תתרחש תגובה כי המצע חסום מרחבית"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי התגובה והסטריאוכימיה שלה:

**שלב 1: ניתוח המצע והמגיבים**
- המצע 2-bromobutane הוא אלקיל הליד **שניוני (2°)** (יכול להגיב גם ב-SN1 וגם ב-SN2).
- הנוקלאופיל ⁻CN הוא נוקלאופיל חזק וטעון.
- הממס DMF (דימתילפורמאמיד) הוא ממס פולרי א-פרוטי (מונע סולבציה של הנוקלאופיל ומשאיר אותו חופשי לתקוף).
- שילוב של נוקלאופיל חזק וממס א-פרוטי מכוון את התגובה ישירות לממנגנון **SN2** מהיר.

**שלב 2: קביעת הסטריאוכימיה של SN2**
- מנגנון SN2 מתרחש בשלב אחד מתואם שבו הנוקלאופיל תוקף בדיוק מהצד האחורי (Backside attack) של הקבוצה העוזבת (הברום).
- התקפה אחורית זו גורמת ל**היפוך קונפיגורציה מלא (Walden Inversion)**.
- המרכז הכיראלי שהתחיל כ-(R) מתהפך והופך ל-(S).

**שלב 3: שיום התוצר**
- קבוצת הציאניד (CN) מתחברת לשרשרת. פחמן הניטריל הופך להיות פחמן מספר 1 בשרשרת הבסיס (המכילה כעת 4 פחמנים - butanenitrile).
- פחמן 2 נושא קבוצת מתיל. לכן שם התוצר הוא **(S)-2-methylbutanenitrile**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **תערובת רצמית של R ו-S שגויה כי:** תערובת רצמית (חוסר פעילות אופטית עקב תקיפה משני הצדדים) אופיינית למנגנון SN1 שבו נוצר קרבוקטיון מישורי שטוח. כאן התנאים מונעים יצירת קרבוקטיון ומקדמים SN2.
- **(R)-2-methylbutanenitrile שגויה כי:** היא מניחה שמירה על הקונפיגורציה. שמירה על הקונפיגורציה אינה מתרחשת בתגובות SN2 קלאסיות בשל הדרישה להתקפה מאחור.
- **לא תתרחש תגובה שגויה כי:** מצע שניוני (2°) אינו חסום מרחבית עד כדי מניעת תגובה, והוא מגיב מצוין ב-SN2 עם נוקלאופיל חזק.`
  },
  {
    id: 15,
    category: "mechanisms_elimination",
    title: "תגובות אלימינציה Zaitsev vs Hofmann",
    text: "איזה בסיס יתן את האחוז הגבוה ביותר של **תוצר הופמן** (אלקן פחות מותמר/פחות יציב) בתגובת אלימינציה של 2-bromobutane?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- 2-bromobutane -->
      <line x1="40" y1="80" x2="90" y2="40" stroke="#f8fafc" stroke-width="3"/>
      <line x1="90" y1="40" x2="140" y2="80" stroke="#f8fafc" stroke-width="3"/>
      <line x1="140" y1="80" x2="190" y2="40" stroke="#f8fafc" stroke-width="3"/>
      <!-- Br on C2 -->
      <line x1="90" y1="40" x2="90" y2="10" stroke="#f43f5e" stroke-width="3"/>
      <text x="85" y="3" fill="#f43f5e" font-family="Arial" font-size="12" font-weight="bold">Br</text>
      
      <!-- Reagents -->
      <line x1="200" y1="65" x2="250" y2="65" stroke="#38bdf8" stroke-width="3"/>
      <polygon points="250,60 260,65 250,70" fill="#38bdf8"/>
      <text x="210" y="52" fill="#38bdf8" font-family="Arial" font-size="12" font-weight="bold">Base?</text>
    </svg>`,
    options: [
      "Sodium hydroxide (NaOH)",
      "Sodium ethoxide (NaOCH2CH3)",
      "Potassium tert-butoxide (t-BuOK)",
      "Sodium methoxide (NaOCH3)"
    ],
    correctIndex: 2,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון להבנת אלימינציית זייצב לעומת הופמן:

**שלב 1: זיהוי עמדות בטא (Beta Hydrogens)**
בתגובת אלימינציה של 2-bromobutane, הבסיס קוטף מימן מאחד הפחמנים השכנים לפחמן הנושא את הברום (עמדות בטא):
- **עמדת בטא פנימית (C3):** הסרת מימן מכאן נותנת אלקן מותמר יותר ויציב יותר (2-butene, המכונה **תוצר זייצב**).
- **עמדת בטא חיצונית (C1):** הסרת מימן מכאן נותנת אלקן פחות מותמר ופחות יציב (1-butene, המכונה **תוצר הופמן**).

**שלב 2: השפעת גודל הבסיס (הפרעה סטרית)**
- בסיסים קטנים ורגילים (כמו ⁻OH, ⁻OMe, ⁻OEt) יכולים לגשת בקלות לפחמן C3 הפנימי והחסום יותר. הם יכוונו תמיד לתוצר זייצב היציב יותר (המוצר התרמודינמי).
- בסיס **נפחי ומפריע מרחבית (Bulky base)** כמו **t-BuOK** (אשלגן טרט-בוטוקסיד) מתקשה מאוד לגשת לפחמן C3 הפנימי והצפוף. במקום זאת, הוא מעדיף לתקוף את המימנים הנגישים והחשופים ביותר בקצה השרשרת (C1), ובכך מייצר את תוצר הופמן כתוצר העיקרי.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **Sodium hydroxide, Sodium ethoxide ו-Sodium methoxide שגויות כי:** אלו בסיסים קטנים ובלתי מופרעים מרחבית. הם יתקפו בעדיפות את פחמן C3 הפנימי ויתנו את תוצר זייצב היציב (2-butene) כתוצר העיקרי (בדרך כלל מעל 80% מהתוצרים).`
  },
  {
    id: 16,
    category: "nomenclature_functional",
    title: "נומנקלטורה של אלכוהולים בלתי רווים",
    text: "מהו השם הנכון לפי כללי IUPAC עבור המולקולה הבאה?",
    svg: `<svg viewBox="0 0 300 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- CH2=CH-CH2-CH(OH)-CH3 (4-penten-2-ol) -->
      <line x1="40" y1="80" x2="80" y2="40" stroke="#f8fafc" stroke-width="4"/> <!-- double bond -->
      <line x1="40" y1="74" x2="80" y2="34" stroke="#f8fafc" stroke-width="2"/>
      <line x1="80" y1="40" x2="130" y2="80" stroke="#f8fafc" stroke-width="3"/> <!-- C2-C3 -->
      <line x1="130" y1="80" x2="180" y2="40" stroke="#f8fafc" stroke-width="3"/> <!-- C3-C4 -->
      <line x1="180" y1="40" x2="230" y2="80" stroke="#f8fafc" stroke-width="3"/> <!-- C4-C5 -->
      <!-- OH substituent on C4 -->
      <line x1="180" y1="40" x2="180" y2="10" stroke="#38bdf8" stroke-width="2"/>
      <text x="172" y="5" fill="#38bdf8" font-family="Arial" font-size="12" font-weight="bold">OH</text>
      
      <text x="30" y="95" fill="#94a3b8" font-family="Arial" font-size="10">C5</text>
      <text x="75" y="25" fill="#94a3b8" font-family="Arial" font-size="10">C4</text>
      <text x="125" y="95" fill="#94a3b8" font-family="Arial" font-size="10">C3</text>
      <text x="175" y="55" fill="#94a3b8" font-family="Arial" font-size="10">C2</text>
      <text x="225" y="95" fill="#94a3b8" font-family="Arial" font-size="10">C1</text>
    </svg>`,
    options: [
      "1-penten-4-ol",
      "4-penten-2-ol",
      "2-penten-4-ol",
      "4-penten-1-ol"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי שיום אלקנים המכילים קבוצות כוהל:

**שלב 1: זיהוי קבוצות פונקציונליות וקדימויות**
- המולקולה מכילה קשר כפול (alkene, סיומת: -en) וקבוצת כוהל (alcohol, סיומת: -ol).
- לפי כללי IUPAC, לקבוצת הכוהל יש קדימות (Priority) גבוהה יותר מאשר לקשר הכפול, ולכן השרשרת חייבת להיות ממוספרת כך שהכוהל יקבל את המספר הנמוך ביותר האפשרי.

**שלב 2: קביעת כיוון המספור**
- אם נמספר מימין לשמאל: הכוהל יקבל את המיקום **C2** והקשר הכפול יתחיל ב-**C4**.
- אם נמספר משמאל לימין: הקשר הכפול יתחיל ב-C1 והכוהל יקבל את המיקום C4 (שגוי, כי לכוהל מגיע המספר הנמוך ביותר).
- לכן נמספר מימין לשמאל.

**שלב 3: הרכבת השם השיסטתי**
- שרשרת של 5 פחמנים ⬅️ pent.
- קשר כפול ב-C4 ⬅️ 4-en.
- קבוצת כוהל ב-C2 ⬅️ 2-ol.
- השם המלא לפי הכללים המודרניים הוא **4-penten-2-ol**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **1-penten-4-ol שגויה כי:** היא מניחה מספור משמאל לימין המעניק עדיפות לקשר הכפול על פני הכוהל, בניגוד מוחלט לכללי הקדימויות של IUPAC.
- **4-penten-2-ol פחות מועדפת כי:** זהו השם בשיטה הישנה (שבה מיקום הקשר הכפול נכתב לפני שם השרשרת). אף על פי שהיא מקובלת ונפוצה מאוד (ולעיתים משתמשים בה לסירוגין גם בקורס ובפתרונות תרגילי הבית שלכם), כללי IUPAC המודרניים והרשמיים דורשים להכניס את מספרי המיקום מיד לפני הסיומת המתאימה (כלומר 4-penten-2-ol). מאחר ושתי האפשרויות קיימות, שיטה זו היא המקובלת ביותר בחומר הלימוד והבחינות בקורס שלכם.
- **1-penten-4-ol שגויה כי:** היא משלבת גם מספור שגוי מהכיוון ההפוך וגם את שיטת השיום הישנה.`
  },
  {
    id: 17,
    category: "nomenclature_functional",
    title: "נומנקלטורה של אתרים (Ethers)",
    text: "מהו השם הנכון לפי כללי IUPAC עבור האתר הבא?",
    svg: `<svg viewBox="0 0 300 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Ethyl tert-butyl ether -->
      <line x1="40" y1="60" x2="80" y2="80" stroke="#f8fafc" stroke-width="3"/> <!-- ethyl part -->
      <line x1="80" y1="80" x2="110" y2="60" stroke="#f8fafc" stroke-width="3"/> 
      <text x="112" y="58" fill="#38bdf8" font-family="Arial" font-size="14" font-weight="bold">O</text> <!-- oxygen -->
      <line x1="125" y1="60" x2="165" y2="60" stroke="#f8fafc" stroke-width="3"/> <!-- to t-butyl carbon -->
      <!-- tert-butyl three methyls -->
      <line x1="165" y1="60" x2="195" y2="35" stroke="#f8fafc" stroke-width="3"/>
      <line x1="165" y1="60" x2="195" y2="85" stroke="#f8fafc" stroke-width="3"/>
      <line x1="165" y1="60" x2="205" y2="60" stroke="#f8fafc" stroke-width="3"/>
    </svg>`,
    options: [
      "ethyl tert-butyl ether",
      "2-ethoxy-2-methylpropane",
      "1,1-dimethyl-1-ethoxyethane",
      "2-ethoxybutane"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי שיום אתרים (Ethers):

**שלב 1: זיהוי שרשרת הבסיס הארוכה ביותר**
- לפי כללי IUPAC השיטתיים, אתר נקרא כקבוצת אלקוקסי (Alkoxy) המהווה מתמיר על שרשרת הפחמנים הארוכה ביותר.
- במולקולה זו יש שני חלקים המחוברים לחמצן האתר: קבוצת אתיל (2 פחמנים) וקבוצת tert-butyl (4 פחמנים).
- השרשרת הארוכה ביותר בקבוצת ה-tert-butyl היא של **3 פחמנים** (propane). זוהי שרשרת הבסיס שלנו.

**שלב 2: זיהוי ומיקום המתמירים**
- נמספר את שרשרת הפרופאן (3 פחמנים) מהקצה הקרוב ביותר למתמירים. מאחר והיא סימטרית, הפחמן האמצעי הוא **C2**.
- על פחמן C2 מחוברים שני מתמירים:
  1. קבוצת מתיל (CH₃).
  2. קבוצת אתוקסי (OCH₂CH₃ - שהיא קבוצת האתיל המחוברת לחמצן).

**שלב 3: הרכבת השם לפי סדר אלפביתי**
- סדר אלפביתי באנגלית: ethoxy קודם ל-methyl.
- לכן השם השיטתי המלא הוא **2-ethoxy-2-methylpropane**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **ethyl tert-butyl ether שגויה כי:** זהו השם הנפוץ/השימושי (Common name) של המולקולה, אך הוא אינו השם השיטתי הרשמי לפי כללי IUPAC המבוקש בשאלה.
- **1,1-dimethyl-1-ethoxyethane שגויה כי:** היא בוחרת שרשרת בסיס קצרה מדי של 2 פחמנים (ethane) ומניחה עליה מתמירים, במקום לבחור בשרשרת הארוכה ביותר האפשרית של 3 פחמנים (propane).
- **2-ethoxybutane שגויה כי:** היא מניחה שרשרת בסיס של 4 פחמנים רציפים (butane), אך במולקולה זו אין שרשרת רציפה של 4 פחמנים אלא שרשרת מפוצלת בעלת 3 פחמנים לכל היותר.`
  },
  {
    id: 18,
    category: "nomenclature_functional",
    title: "נומנקלטורה סטריאוכימית",
    text: "מהו השם השיטתי הנכון המשלב הגדרה סטריאוכימית עבור המולקולה הבאה?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- (2S,3R)-3-chloro-2-butanol represented as wedge-dash -->
      <!-- Main skeleton -->
      <line x1="50" y1="80" x2="100" y2="40" stroke="#f8fafc" stroke-width="3"/> <!-- C1-C2 -->
      <line x1="100" y1="40" x2="160" y2="80" stroke="#f8fafc" stroke-width="3"/> <!-- C2-C3 -->
      <line x1="160" y1="80" x2="210" y2="40" stroke="#f8fafc" stroke-width="3"/> <!-- C3-C4 -->
      
      <!-- C2: OH is dash (upwards) -->
      <line x1="100" y1="40" x2="100" y2="10" stroke="#f43f5e" stroke-width="3" stroke-dasharray="3,3"/>
      <text x="92" y="5" fill="#f43f5e" font-family="Arial" font-size="11" font-weight="bold">OH</text>
      <text x="110" y="45" fill="#94a3b8" font-family="Arial" font-size="10">2</text>
      
      <!-- C3: Cl is wedge (downwards) -->
      <polygon points="160,80 155,110 165,110" fill="#38bdf8"/>
      <text x="154" y="122" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold">Cl</text>
      <text x="170" y="85" fill="#94a3b8" font-family="Arial" font-size="10">3</text>
    </svg>`,
    options: [
      "(2R,3S)-3-chloro-2-butanol",
      "(2S,3R)-3-chloro-2-butanol",
      "(2S,3S)-3-chloro-2-butanol",
      "(2R,3R)-3-chloro-2-butanol"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון לקביעת את השם והקונפיגורציה של שני המרכזים הכיראליים:

**שלב 1: מספור שרשרת הפחמנים**
- קבוצת הכוהל (OH) בעלת קדימות גבוהה יותר מההלוגן (Cl), ולכן נמספר את שרשרת הבסיס (4 פחמנים, בוטאן) מימין לשמאל:
  - C1: פחמן המתיל השמאלי (המסומן כפחמן 1).
  - C2: פחמן 2 המחובר ל-OH.
  - C3: פחמן 3 המחובר ל-Cl.
  - C4: פחמן 4 (מתיל בימין).
  השם הבסיסי הוא **3-chloro-2-butanol**.

**שלב 2: קביעת הקונפיגורציה בפחמן 2 (C2)**
- **קביעת עדיפויות ב-C2:** 1) OH, 2) פחמן C3, 3) פחמן המתיל C1, 4) מימן (H).
- **קביעת קונפיגורציה באמצעות היטל פישר:**
  - נטיל את המולקולה להיטל פישר (כאשר שרשרת הפחמנים C1-C4 אנכית).
  - בפחמן C2, קבוצת ה-OH פונה ימינה ואטום המימן (H) פונה שמאלה.
  - כיוון הסיבוב מ-1 (OH) ⬅️ 2 (C3) ⬅️ 3 (CH3) הוא **עם כיוון השעון (R)**.
  - מאחר והמימן (4) נמצא על קו אופקי, נהפוך את התוצאה מ-R ל-**S**. לכן פחמן 2 הוא **2S**.

**שלב 3: קביעת הקונפיגורציה בפחמן 3 (C3)**
- **קביעת עדיפויות ב-C3:** 1) Cl, 2) פחמן C2, 3) פחמן המתיל C4, 4) מימן (H).
- **קביעת קונפיגורציה באמצעות היטל פישר:**
  - בפחמן C3, קבוצת ה-Cl פונה ימינה ואטום המימן (H) פונה שמאלה.
  - כיוון הסיבוב מ-1 (Cl) ⬅️ 2 (C2) ⬅️ 3 (CH3) הוא **נגד כיוון השעון (S)**.
  - מאחר והמימן (4) נמצא על קו אופקי, נהפוך את התוצאה מ-S ל-**R**. לכן פחמן 3 הוא **3R**.

הנה היטל הפישר המלא של המולקולה ושלבי קביעת ה-R/S עבור כל פחמן:
<svg viewBox="0 0 480 180" width="100%" height="180" style="background:#1e293b; border-radius:8px; display:block; margin: 10px auto; direction: ltr;"><defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#eab308"/></marker></defs><text x="70" y="18" fill="#f8fafc" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">היטל פישר של המולקולה</text><line x1="70" y1="35" x2="70" y2="135" stroke="#f8fafc" stroke-width="2.5"/><line x1="35" y1="65" x2="105" y2="65" stroke="#f8fafc" stroke-width="2.5"/><line x1="35" y1="105" x2="105" y2="105" stroke="#f8fafc" stroke-width="2.5"/><text x="70" y="30" fill="#a1a1aa" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">CH3 (C1)</text><text x="70" y="147" fill="#a1a1aa" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">CH3 (C4)</text><text x="27" y="69" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="end">H</text><text x="113" y="69" fill="#f43f5e" font-family="Arial" font-size="11" font-weight="bold" text-anchor="start">OH</text><text x="77" y="61" fill="#f8fafc" font-family="Arial" font-size="9">2</text><text x="27" y="109" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="end">H</text><text x="113" y="109" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="start">Cl</text><text x="77" y="101" fill="#f8fafc" font-family="Arial" font-size="9">3</text><line x1="150" y1="15" x2="150" y2="165" stroke="#334155" stroke-width="1.5" stroke-dasharray="2,2"/><text x="230" y="18" fill="#f8fafc" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">קביעת R/S עבור C2</text><!-- C2 Vertical dashed bonds (pointing backward) --><line x1="230" y1="85" x2="230" y2="45" stroke="#475569" stroke-width="2" stroke-dasharray="3,3"/><line x1="230" y1="85" x2="230" y2="125" stroke="#475569" stroke-width="2" stroke-dasharray="3,3"/><!-- C2 Horizontal wedged bonds (pointing forward) --><polygon points="230,85 195,81 195,89" fill="#475569"/><polygon points="230,85 265,81 265,89" fill="#475569"/><circle cx="230" cy="85" r="4" fill="#e2e8f0"/><text x="230" y="36" fill="#94a3b8" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">3 (CH3)</text><text x="230" y="137" fill="#94a3b8" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">2 (C3)</text><text x="187" y="89" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold" text-anchor="end">4 (H)</text><text x="273" y="89" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold" text-anchor="start">1 (OH)</text><path d="M 247,75 A 20,20 0 1,1 213,75" fill="none" stroke="#eab308" stroke-width="2" marker-end="url(#arrow)"/><text x="230" y="152" fill="#eab308" font-family="Arial" font-size="9" font-weight="bold" text-anchor="middle">עם השעון (R)</text><text x="230" y="164" fill="#38bdf8" font-family="Arial" font-size="8" text-anchor="middle">המימן אופקי ← הופכים ל-S</text><line x1="310" y1="15" x2="310" y2="165" stroke="#334155" stroke-width="1.5" stroke-dasharray="2,2"/><text x="390" y="18" fill="#f8fafc" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">קביעת R/S עבור C3</text><!-- C3 Vertical dashed bonds (pointing backward) --><line x1="390" y1="85" x2="390" y2="45" stroke="#475569" stroke-width="2" stroke-dasharray="3,3"/><line x1="390" y1="85" x2="390" y2="125" stroke="#475569" stroke-width="2" stroke-dasharray="3,3"/><!-- C3 Horizontal wedged bonds (pointing forward) --><polygon points="390,85 355,81 355,89" fill="#475569"/><polygon points="390,85 425,81 425,89" fill="#475569"/><circle cx="390" cy="85" r="4" fill="#e2e8f0"/><text x="390" y="36" fill="#94a3b8" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">2 (C2)</text><text x="390" y="137" fill="#94a3b8" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">3 (CH3)</text><text x="347" y="89" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold" text-anchor="end">4 (H)</text><text x="433" y="89" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold" text-anchor="start">1 (Cl)</text><path d="M 407,75 A 20,20 0 1,0 407,95" fill="none" stroke="#eab308" stroke-width="2" marker-end="url(#arrow)"/><text x="390" y="152" fill="#eab308" font-family="Arial" font-size="9" font-weight="bold" text-anchor="middle">נגד השעון (S)</text><text x="390" y="164" fill="#38bdf8" font-family="Arial" font-size="8" text-anchor="middle">המימן אופקי ← הופכים ל-R</text></svg>

- לכן השם המלא הוא **(2S,3R)-3-chloro-2-butanol**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **(2R,3S)-3-chloro-2-butanol שגויה כי:** היא מניחה קביעה הפוכה לחלוטין של שני המרכזים הכיראליים.
- **(2S,3S)-3-chloro-2-butanol שגויה כי:** היא קובעת נכון את פחמן 2 כ-(S), אך קובעת בטעות את פחמן 3 כ-(S) במקום כ-(R).
- **(2R,3R)-3-chloro-2-butanol שגויה כי:** היא קובעת בטעות את פחמן 2 כ-(R) במקום כ-(S).`
  }
  ,
  {
    id: 19,
    category: "acid_base",
    title: "השפעות אינדוקטיביות ורזונטיביות על חומציות",
    text: "קבעי מי מהפנולים הבאים הוא **החומצה החזקה ביותר** על בסיס השפעות מתמירים על יציבות האניון?",
    svg: `<svg viewBox="0 0 350 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Para-nitrophenol (A) -->
      <g transform="translate(20, 20)">
        <polygon points="40,20 60,30 60,55 40,65 20,55 20,30" fill="none" stroke="#f8fafc" stroke-width="1.5"/>
        <circle cx="40" cy="42" r="10" fill="none" stroke="#f8fafc" stroke-dasharray="2,2"/>
        <line x1="40" y1="20" x2="40" y2="5" stroke="#f8fafc" stroke-width="1.5"/>
        <text x="32" y="2" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">OH</text>
        <!-- Nitro group at para -->
        <line x1="40" y1="65" x2="40" y2="80" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="30" y="92" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">NO2</text>
        <text x="18" y="105" fill="#94a3b8" font-family="Arial" font-size="10" font-weight="bold">א. p-nitrophenol</text>
      </g>
      <!-- Phenol (B) -->
      <g transform="translate(130, 20)">
        <polygon points="40,20 60,30 60,55 40,65 20,55 20,30" fill="none" stroke="#f8fafc" stroke-width="1.5"/>
        <circle cx="40" cy="42" r="10" fill="none" stroke="#f8fafc" stroke-dasharray="2,2"/>
        <line x1="40" y1="20" x2="40" y2="5" stroke="#f8fafc" stroke-width="1.5"/>
        <text x="32" y="2" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">OH</text>
        <text x="24" y="105" fill="#94a3b8" font-family="Arial" font-size="10" font-weight="bold">ב. phenol</text>
      </g>
      <!-- Para-methoxyphenol (C) -->
      <g transform="translate(240, 20)">
        <polygon points="40,20 60,30 60,55 40,65 20,55 20,30" fill="none" stroke="#f8fafc" stroke-width="1.5"/>
        <circle cx="40" cy="42" r="10" fill="none" stroke="#f8fafc" stroke-dasharray="2,2"/>
        <line x1="40" y1="20" x2="40" y2="5" stroke="#f8fafc" stroke-width="1.5"/>
        <text x="32" y="2" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">OH</text>
        <!-- Methoxy group at para -->
        <line x1="40" y1="65" x2="40" y2="80" stroke="#eab308" stroke-width="1.5"/>
        <text x="28" y="92" fill="#eab308" font-family="Arial" font-size="10" font-weight="bold">OCH3</text>
        <text x="12" y="105" fill="#94a3b8" font-family="Arial" font-size="10" font-weight="bold">ג. p-methoxyphenol</text>
      </g>
    </svg>`,
    options: [
      "phenol (ב')",
      "p-nitrophenol (א')",
      "p-methoxyphenol (ג')",
      "שלושתם בעלות חומציות זהה"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון להבנת השפעת מתמירים על חומציות פנולים:

**שלב 1: הבנת הבסיס המצומד**
- חומציות מוגדרת לפי יציבות הבסיס המצומד (האניון שנוצר לאחר שחרור הפרוטון +H).
- בבסיס המצומד של פנול (פנוקסיד), המטען השלילי מבוזר ברזוננס על פני טבעת הבנזן בעמדות אורתו ופארה.

**שלב 2: ניתוח השפעת מתמיר מושך אלקטרונים (קבוצת ניטרו - NO₂)**
- ב-**p-nitrophenol (א')**, קבוצת ה-NO₂ ממוקמת בעמדת פארה.
- קבוצה זו היא **מושכת אלקטרונים חזקה מאוד** (הן אינדוקטיבית בגלל החנקן הטעון חיובית והן ברזוננס).
- היא מסוגלת למשוך את המטען השלילי מהטבעת ישירות אליה ולפזר אותו על פני אטומי החמצן שלה. ביזור זה מייצב מאוד את האניון, מה שמקל על שחרור הפרוטון ומגביר את החומציות באופן דרמטי.

**שלב 3: ניתוח השפעת מתמיר תורם אלקטרונים (קבוצת מתוקסי - OCH₃)**
- ב-**p-methoxyphenol (ג')**, קבוצת ה-OCH₃ תורמת אלקטרונים לתוך הטבעת ברזוננס (זוג אלקטרונים חופשי של החמצן זולג פנימה).
- דחיפת מטען שלילי לתוך אניון שלילי קיים יוצרת דחייה ומחלישה את יציבות האניון, מה שמחליש את החומציות.
- לכן, **p-nitrophenol היא החומצה החזקה ביותר**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **phenol (ב') שגויה כי:** היא חסרה את קבוצת הניטרו המייצבת, ולכן היא חומצה חלשה יותר מ-p-nitrophenol (pKa 10 לעומת 7.15).
- **p-methoxyphenol (ג') שגויה כי:** קבוצת המתוקסי תורמת אלקטרונים ומחלישה את החומציות, ולכן היא החלשה ביותר מבין השלוש (pKa 10.2).
- **שלושתם בעלות חומציות זהה שגויה כי:** מתמירים שונים על הטבעת הארומטית משנים דרמטית את צפיפות האלקטרונים ואת יציבות האניון, ובכך משנים את ערכי ה-pKa במאות מונים.`
  },
  {
    id: 20,
    category: "resonance_structures",
    title: "היבריד הרזוננס של יון הקרבונט",
    text: "עבור יון הקרבונט (CO3 2-), מהו סדר הקשר (Bond Order) הממוצע של קשרי הפחמן-חמצן בהיבריד הרזוננס?",
    svg: `<svg viewBox="0 0 300 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Carbonate ion dynamic hybrid representation -->
      <circle cx="150" cy="60" r="4" fill="#f8fafc"/>
      <text x="145" y="54" fill="#f8fafc" font-family="Arial" font-size="14" font-weight="bold">C</text>
      <!-- Bonds -->
      <line x1="150" y1="60" x2="150" y2="25" stroke="#f8fafc" stroke-width="2"/>
      <line x1="150" y1="60" x2="150" y2="25" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="144" y="20" fill="#f8fafc" font-family="Arial" font-size="14" font-weight="bold">O</text>
      
      <line x1="150" y1="60" x2="115" y2="80" stroke="#f8fafc" stroke-width="2"/>
      <line x1="150" y1="60" x2="115" y2="80" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="98" y="92" fill="#f8fafc" font-family="Arial" font-size="14" font-weight="bold">O</text>
      
      <line x1="150" y1="60" x2="185" y2="80" stroke="#f8fafc" stroke-width="2"/>
      <line x1="150" y1="60" x2="185" y2="80" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="190" y="92" fill="#f8fafc" font-family="Arial" font-size="14" font-weight="bold">O</text>
      
      <text x="210" y="30" fill="#38bdf8" font-family="Arial" font-size="14" font-weight="bold">2-</text>
    </svg>`,
    options: [
      "1.5 (קשר וחצי)",
      "1.0 (קשר יחיד)",
      "1.33 (קשר ושליש)",
      "2.0 (קשר כפול)"
    ],
    correctIndex: 2,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון לחישוב את סדר הקשר הממוצע:

**שלב 1: ספירת קשרי פאי וסיגמא במבני הרזוננס**
- ליון הקרבונט (⁻²CO₃) יש שלושה מבנים רזונטיביים שווי-ערך לחלוטין.
- בכל אחד מהמבנים ישנו קשר כפול C=O אחד ושני קשרי C-O יחידים.
- בסך הכל, ישנם **4 קשרים** (קשרי סיגמא ופאי) המשותפים בין פחמן אחד לשלושה חמצנים.

**שלב 2: הבנת היבריד הרזוננס**
- במציאות, אלקטרוני הפאי (הקשר הכפול) אינם ממוקמים במקום אחד אלא מבוזרים באופן שווה לחלוטין בין שלושת קשרי הפחמן-חמצן.
- כל קשר פחמן-חמצן מורכב מקשר סיגמא יחיד קבוע, בתוספת שליש מהקשר הכפול המבוזר.

**שלב 3: חישוב סדר הקשר (Bond Order)**
- הנוסחה הפשוטה היא: סך כל זוגות האלקטרונים הקושרים חלקי מספר אטומי החמצן סביב הפחמן:
  $$\text{Bond Order} = \frac{4 \text{ קשרים}}{3 \text{ חמצנים}} = 1.33$$
- לכן, סדר הקשר הממוצע הוא **1.33 (קשר ושליש)**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **1.5 (קשר וחצי) שגויה כי:** סדר קשר של 1.5 מתקבל כאשר מחלקים קשר כפול אחד בין שני קשרים בלבד (כמו ביון הקרבוקסילט ⁻RCOO שבו יש 3 קשרים חלקי 2 חמצנים).
- **1.0 (קשר יחיד) שגויה כי:** היא מתעלמת לחלוטין מקיומם של אלקטרוני הפאי המבוזרים שמחזקים ומקצרים את הקשרים מעבר לקשר סיגמא יחיד.
- **2.0 (קשר כפול) שגויה כי:** היא מניחה קשר כפול סטטי מלא, דבר שאינו נכון משום שאין במציאות קשר אחד קצר וחזק ושניים ארוכים, אלא שלושה קשרים שווים לחלוטין באורכם ובחוזקם.`
  },
  {
    id: 21,
    category: "acid_base",
    title: "בסיסיות של אמינים ארומטיים",
    text: "מדוע אנילין (Aniline) הוא בסיס חלש בהרבה מאשר ציקלוהקסילאמין (Cyclohexylamine)?",
    svg: `<svg viewBox="0 0 320 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Aniline -->
      <g transform="translate(20, 20)">
        <polygon points="40,20 60,30 60,55 40,65 20,55 20,30" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <circle cx="40" cy="42" r="12" fill="none" stroke="#f8fafc" stroke-dasharray="3,3"/>
        <line x1="40" y1="20" x2="40" y2="2" stroke="#f8fafc" stroke-width="2"/>
        <text x="30" y="-3" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold">NH2</text>
        <text x="25" y="80" fill="#94a3b8" font-family="Arial" font-size="12" font-weight="bold">Aniline</text>
      </g>
      <!-- Cyclohexylamine -->
      <g transform="translate(160, 20)">
        <polygon points="40,20 60,30 60,55 40,65 20,55 20,30" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <line x1="40" y1="20" x2="40" y2="2" stroke="#f8fafc" stroke-width="2"/>
        <text x="30" y="-3" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold">NH2</text>
        <text x="12" y="80" fill="#94a3b8" font-family="Arial" font-size="12" font-weight="bold">Cyclohexylamine</text>
      </g>
    </svg>`,
    options: [
      "בגלל השפעה סטרית של הטבעת באנילין",
      "זוג האלקטרונים הבלתי קושר של החנקן באנילין מבוזר ברזוננס לתוך הטבעת הארומטית",
      "חנקן באנילין הוא בהיברידיזציה sp",
      "ציקלוהקסילאמין אינו יציב ועובר ביקוע טבעת"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון להבנת זמינות האלקטרונים וחומציות-בסיסיות:

**שלב 1: הגדרת בסיסיות**
- בסיסיות מוגדרת כנטיית אטום לתרום את זוג האלקטרונים החופשי שלו כדי לקטוף פרוטון חיובי (+H). ככל שזוג האלקטרונים חופשי וזמין יותר, הבסיס חזק יותר.

**שלב 2: ניתוח cyclohexylamine (בסיס חזק)**
- ב-cyclohexylamine, זוג האלקטרונים הבלתי קושר של החנקן יושב על פחמן רווי (sp3). הוא ממוקם מקומית (Localized) על החנקן ואינו משתתף בשום מערכת קשרים כפולים. לכן הוא זמין מאוד לקטיפת פרוטון.

**שלב 3: ניתוח aniline (בסיס חלש)**
- באנילין, זוג האלקטרונים החופשי של החנקן נמצא צמוד לטבעת הבנזן הארומטית.
- זוג האלקטרונים הזה משתתף ב**דלוקליזציה של רזוננס** לתוך הטבעת (ניתן לצייר מבנים רזונטיביים שבהם המטען השלילי נודד לפחמני הטבעת בעמדות אורתו ופארה).
- מכיוון שהאלקטרונים "עסוקים" בייצוב ופיזור בתוך הטבעת, הם פחות פנויים לתקוף פרוטון חיצוני, מה שמחליש את הבסיסיות באופן דרמטי (בכמעט פי מיליון!).

**להלן הסבר למה שאר האפשרויות שגויות:**
- **השפעה סטרית שגויה כי:** טבעת הבנזן היא שטוחה לחלוטין ואינה יוצרת שום הפרעה סטרית משמעותית המונעת גישת פרוטונים לחנקן.
- **חנקן באנילין בהיברידיזציה sp שגויה כי:** החנקן באנילין הוא בהיברידיזציית sp3 (בעלת אופי sp2 חזק בשל השתתפותו ברזוננס), ולא sp (המאפיינת קשרים משולשים כמו בניטרילים).
- **ציקלוהקסילאמין אינו יציב שגויה כי:** זוהי מולקולה יציבה לחלוטין שאינה עוברת שום ביקוע טבעת בתנאי חומצה-בסיס רגילים.`
  },

  // --- קונפורמציות ---
  {
    id: 22,
    category: "conformations_newman",
    title: " Newman של 1,2-dichloroethane",
    text: "עבור 1,2-dichloroethane, איזו קונפורמציה staggered היא היציבה ביותר במצב גז?",
    svg: `<svg viewBox="0 0 350 140" width="100%" height="140" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Newman Anti -->
      <g transform="translate(70, 60)">
        <circle cx="0" cy="0" r="25" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <!-- Front -->
        <line x1="0" y1="0" x2="0" y2="-25" stroke="#38bdf8" stroke-width="2"/>
        <line x1="0" y1="0" x2="-22" y2="13" stroke="#f8fafc" stroke-width="2"/>
        <line x1="0" y1="0" x2="22" y2="13" stroke="#f8fafc" stroke-width="2"/>
        <text x="-5" y="-30" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">Cl</text>
        <text x="-32" y="24" fill="#f8fafc" font-family="Arial" font-size="10">H</text>
        <text x="24" y="24" fill="#f8fafc" font-family="Arial" font-size="10">H</text>
        <!-- Back -->
        <line x1="0" y1="25" x2="0" y2="45" stroke="#38bdf8" stroke-width="2"/>
        <line x1="-22" y1="-13" x2="-38" y2="-23" stroke="#f8fafc" stroke-width="2"/>
        <line x1="22" y1="-13" x2="38" y2="-23" stroke="#f8fafc" stroke-width="2"/>
        <text x="-6" y="56" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">Cl</text>
        <text x="-48" y="-26" fill="#f8fafc" font-family="Arial" font-size="10">H</text>
        <text x="42" y="-26" fill="#f8fafc" font-family="Arial" font-size="10">H</text>
        <text x="-35" y="-45" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold">א. Anti</text>
      </g>
      <!-- Newman Gauche -->
      <g transform="translate(230, 60)">
        <circle cx="0" cy="0" r="25" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <!-- Front -->
        <line x1="0" y1="0" x2="0" y2="-25" stroke="#38bdf8" stroke-width="2"/>
        <line x1="0" y1="0" x2="-22" y2="13" stroke="#f8fafc" stroke-width="2"/>
        <line x1="0" y1="0" x2="22" y2="13" stroke="#f8fafc" stroke-width="2"/>
        <text x="-5" y="-30" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">Cl</text>
        <text x="-32" y="24" fill="#f8fafc" font-family="Arial" font-size="10">H</text>
        <text x="24" y="24" fill="#f8fafc" font-family="Arial" font-size="10">H</text>
        <!-- Back with Gauche Cl -->
        <line x1="0" y1="25" x2="22" y2="35" stroke="#f8fafc" stroke-width="2"/>
        <line x1="-22" y1="-13" x2="-38" y2="-23" stroke="#38bdf8" stroke-width="2"/>
        <line x1="22" y1="-13" x2="38" y2="-23" stroke="#f8fafc" stroke-width="2"/>
        <text x="-52" y="-26" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">Cl</text>
        <text x="42" y="-26" fill="#f8fafc" font-family="Arial" font-size="10">H</text>
        <text x="22" y="46" fill="#f8fafc" font-family="Arial" font-size="10">H</text>
        <text x="-35" y="-45" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold">ב. Gauche</text>
      </g>
    </svg>`,
    options: [
      "קונפורמציית Anti (א') בגלל היעדר דחייה דיפולרית ונפחית בין הכלורים",
      "קונפורמציית Gauche (ב') בגלל כוחות משיכה אלקטרוסטטיים",
      "שתיהן בעלות יציבות זהה במצב גז",
      "הקונפורמציה האקליפסית היא היציבה ביותר"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון להבנת יציבות קונפורמציות staggered ב-1,2-dichloroethane:

**שלב 1: הבנת המבנה והקוטביות**
- מולקולת 1,2-dichloroethane מכילה שני קשרי C-Cl מקוטבים מאוד (מטען שלילי חלקי על הכלור ומטען חיובי חלקי על הפחמן).
- אטומי הכלור (Cl) הם אטומים נפחיים יחסית ומלאי אלקטרונים.

**שלב 2: ניתוח קונפורמציית Anti (א')**
- בקונפורמציית Anti, שני אטומי הכלור הגדולים והאלקטרושליליים ממוקמים בזווית דו-מישורית של 180 מעלות (בדיוק משני עברי המולקולה).
- מיקום זה ממזער לחלוטין את הדחייה הסטרית ביניהם ומבטל את הדחייה הדיפול-דיפול בין שני הקשרים המקוטבים. לכן זהו המצב היציב ביותר.

**שלב 3: ניתוח קונפורמציית Gauche (ב')**
- בקונפורמציית Gauche, אטומי הכלור נמצאים בזווית של 60 מעלות זה מזה.
- קרבה זו יוצרת גם מתח סטרי וגם דחייה אלקטרוסטטית (דיפול-דיפול) קשה בין שני אטומי הכלור בעלי המטען השלילי החלקי. דבר זה מעלה את האנרגיה ב-5 kJ/mol בהשוואה ל-Anti ומפחית את היציבות.
- לכן, **קונפורמציית Anti היא היציבה ביותר**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **קונפורמציית Gauche שגויה כי:** קרבת אטומי הכלור מייצרת דחייה דיפולרית קשה ומתח סטרי, המעלים את האנרגיה הכללית ומפחיתה את היציבות.
- **שתיהן בעלות יציבות זהה שגויה כי:** ישנו הפרש אנרגטי ברור ומוכח לטובת ה-Anti בשל הדחייה המקוטבת במצב גז.
- **הקונפורמציה האקליפסית היא היציבה ביותר שגויה כי:** קונפורמציות אקליפסיות (חופפות) הן תמיד בעלות האנרגיה הגבוהה ביותר (הכי פחות יציבות) בגלל מתח פיתולי קשה ומתח סטרי מקסימלי.`
  },
  {
    id: 23,
    category: "conformations_chair",
    title: "קונפורמציות כסא של 1,2-dimethylcyclohexane",
    text: "עבור איזומרי 1,2-dimethylcyclohexane, איזה איזומר יכול להתקיים בקונפורמציה שבה שתי קבוצות המתיל הן אקווטוריאליות (equatorial)?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Schematic ring flip representations -->
      <path d="M 50,75 L 80,45 L 130,45 L 110,95 L 80,115 L 40,115 Z" fill="none" stroke="#f8fafc" stroke-width="2"/>
      <!-- C1 C2 bonds -->
      <line x1="50" y1="75" x2="30" y2="65" stroke="#38bdf8" stroke-width="2"/>
      <text x="12" y="60" fill="#38bdf8" font-family="Arial" font-size="10">CH3(eq)</text>
      <line x1="80" y1="45" x2="70" y2="15" stroke="#f43f5e" stroke-width="2"/>
      <text x="65" y="10" fill="#f43f5e" font-family="Arial" font-size="10">CH3(ax)</text>
      
      <text x="150" y="70" fill="#94a3b8" font-family="Arial" font-size="12" font-weight="bold">Ring Flip</text>
      <path d="M 170,60 L 210,60 L 230,20 L 260,50 L 230,90 L 190,90 Z" fill="none" stroke="#94a3b8" stroke-width="1"/>
    </svg>`,
    options: [
      "האיזומר cis בלבד",
      "האיזומר trans בלבד",
      "גם cis וגם trans יכולים לקבל קונפורמציית diequatorial",
      "אף אחד מהם"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון כדי להבין אילו עמדות מתקבלות בהיפוך כיסא:

**שלב 1: הבנת גיאומטריית הכיסא בעמדות סמוכות (1,2)**
בעמדות סמוכות (1,2) של ציקלוהקסאן, כיווני העמדות הם הפוכים:
- בפחמן C1: עמדה למעלה היא אקסיאלית (ax), עמדה למטה היא אקווטוריאלית (eq).
- בפחמן C2: עמדה למעלה היא אקווטוריאלית (eq), עמדה למטה היא אקסיאלית (ax).

**שלב 2: ניתוח האיזומר cis (מתילים באותו כיוון - שניהם למעלה)**
- אם שתי קבוצות המתיל פונות למעלה: ב-C1 המתיל יהיה אקסיאלי (ax) וב-C2 המתיל יהיה אקווטוריאלי (eq).
- קונפורמציה זו היא מעורבת: **(ax, eq)**.
- אם נבצע היפוך כיסא (ring flip), העמדות מתהפכות: ה-ax הופך ל-eq וה-eq הופך ל-ax. נקבל קונפורמציה מעורבת שנייה: **(eq, ax)**.
- לכן, באיזומר cis מתיל אחד תמיד חייב להיות אקסיאלי מתוח. הוא לעולם אינו יכול להיות דו-אקווטוריאלי.

**שלב 3: ניתוח האיזומר trans (מתילים בכיוונים מנוגדים - אחד למעלה ואחד למטה)**
- בכסא אחד: מתיל C1 למעלה (ax) ומתיל C2 למטה (ax) ⬅️ קונפורמציה דו-אקסיאלית לא יציבה **(ax, ax)**.
- לאחר היפוך כיסא (ring flip), שתי העמדות מתהפכות: מתיל C1 למטה (eq) ומתיל C2 למעלה (eq) ⬅️ **קונפורמציה דו-אקווטוריאלית יציבה במיוחד (eq, eq)**.
- לכן, **רק האיזומר trans יכול להתקיים בקונפורמציה diequatorial**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **האיזומר cis בלבד שגויה כי:** גיאומטריית הכיסא בעמדות סמוכות מונעת מהאיזומר cis לקבל עמדה דו-אקווטוריאלית (שניהם למעלה דורש ax אחד ו-eq אחד).
- **גם cis וגם trans יכולים שגויה כי:** כאמור, איזומר ה-cis מוגבל גיאומטרית למצב מעורב שבו מתיל אחד תמיד אקסיאלי מתוח.`
  },
  {
    id: 24,
    category: "conformations_chair",
    title: "יציבות קונפורמציית כסא",
    text: "מדוע קונפורמציית הכסא (Chair) של cyclohexane יציבה בהרבה מקונפורמציית הסירה (Boat)?",
    svg: `<svg viewBox="0 0 320 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Chair schematic -->
      <g transform="translate(10, 10)">
        <path d="M 20,50 L 50,25 L 100,25 L 85,75 L 50,95 L 10,95 Z" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <text x="35" y="110" fill="#94a3b8" font-family="Arial" font-size="12">כסא (Chair)</text>
      </g>
      <!-- Boat schematic -->
      <g transform="translate(170, 10)">
        <path d="M 15,30 L 50,70 L 95,70 L 120,30 L 70,95 L 30,95 Z" fill="none" stroke="#f43f5e" stroke-width="2"/>
        <!-- flagpole hydrogens interaction representation -->
        <line x1="15" y1="30" x2="35" y2="10" stroke="#f43f5e" stroke-width="1"/>
        <line x1="120" y1="30" x2="100" y2="10" stroke="#f43f5e" stroke-width="1"/>
        <circle cx="35" cy="10" r="3" fill="#f43f5e"/>
        <circle cx="100" cy="10" r="3" fill="#f43f5e"/>
        <path d="M 38,10 Q 67,20 97,10" fill="none" stroke="#f43f5e" stroke-width="1" stroke-dasharray="2,2"/>
        <text x="35" y="110" fill="#94a3b8" font-family="Arial" font-size="12">סירה (Boat)</text>
      </g>
    </svg>`,
    options: [
      "קונפורמציית הסירה חסרה קשרים קוולנטיים",
      "בקונפורמציית הסירה יש מתח פיתולי גבוה (קשרים חופפים - eclipsed) והפרעה סטרית בין מימני התורן (flagpole)",
      "הכסא מתוח זוויתית בהשוואה לסירה",
      "הסירה יציבה יותר בטמפרטורת החדר"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון להבנת ההבדלים בין קונפורמציות כיסא וסירה:

**שלב 1: ניתוח קונפורמציית הכיסא (Chair - יציבה מאוד)**
- כל קשרי ה-C-H השכנים נמצאים במצב staggered (מתחלף) מושלם, ולכן אין מתח פיתולי (torsional strain).
- זוויות הקשר של הפחמנים בטבעת הן כ-109.5 מעלות, ולכן אין מתח זוויתי (angle strain).

**שלב 2: ניתוח קונפורמציית הסירה (Boat - לא יציבה)**
בקונפורמציית הסירה יש שני גורמי אי-יציבות חמורים:
1. **מתח פיתולי (Torsional strain):** פחמני בסיס הסירה (הדפנות) מקבילים וחופפים לחלוטין זה לזה (מצב eclipsing), מה שיוצר דחייה קשה בין קשרי הפחמן-מימן שלהם.
2. **הפרעה סטרית של מימני התורן (Flagpole hydrogens):** שני המימנים בחרטום ובירכתיים של הסירה (הפונים למעלה זה כלפי זה) קרובים מאוד מרחבית ויוצרים דחייה סטרית קשה.
- גורמים אלו מעלים את האנרגיה של הסירה בכ-29 kJ/mol בהשוואה לכיסא.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **קונפורמציית הסירה חסרה קשרים קוולנטיים שגויה כי:** מדובר באותה מולקולה בדיוק (ציקלוהקסאן) עם אותה קישוריות ואותם קשרים קוולנטיים, רק בסידור מרחבי שונה (קונפורמרים).
- **הכיסא מתוח זוויתית שגויה כי:** הכיסא הוא הקונפורמציה המשוחררת והרגועה ביותר ממתחים זוויתיים, ודווקא בה זוויות הקשר sp3 הן אידיאליות.
- **הסירה יציבה יותר בטמפרטורת החדר שגויה כי:** במציאות, עקב יציבותו המכרעת של הכיסא, כמעט 100% ממולקולות הציקלוהקסאן נמצאות במצב כיסא בכל רגע נתון.`
  },

  // --- סטריאוכימיה ---
  {
    id: 25,
    category: "stereochemistry_centers",
    title: "קיראליות במערכות טבעתיות",
    text: "מי מהאיזומרים הבאים של 1,2-dichlorocyclopropane הוא **מולקולת מזו (meso compound) א-קיראלית**?",
    svg: `<svg viewBox="0 0 350 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Cis-isomer (A) -->
      <g transform="translate(40, 20)">
        <polygon points="40,25 70,75 10,75" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <!-- wedges for Cl at C1, C2 -->
        <polygon points="40,25 35,5 45,5" fill="#38bdf8"/>
        <text x="32" y="2" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">Cl</text>
        <polygon points="70,75 75,55 85,55" fill="#38bdf8"/>
        <text x="75" y="52" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">Cl</text>
        <text x="25" y="100" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold">א. cis-isomer</text>
      </g>
      <!-- Trans-isomer (B) -->
      <g transform="translate(190, 20)">
        <polygon points="40,25 70,75 10,75" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <!-- one wedge, one dash -->
        <polygon points="40,25 35,5 45,5" fill="#38bdf8"/>
        <text x="32" y="2" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">Cl</text>
        
        <line x1="70" y1="75" x2="85" y2="95" stroke="#f43f5e" stroke-width="2" stroke-dasharray="2,2"/>
        <text x="88" y="105" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">Cl</text>
        <text x="25" y="100" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold">ב. trans-isomer</text>
      </g>
    </svg>`,
    options: [
      "האיזומר cis (א') כי יש לו מישור סימטריה פנימי",
      "האיזומר trans (ב') כי יש לו מרכז סימטריה",
      "שני האיזומרים הם קיראליים",
      "שני האיזומרים הם א-קיראליים (מזו)"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון להבנת תרכובות מזו (meso):

**שלב 1: הגדרת תרכובת מזו**
- תרכובת מזו היא מולקולה המכילה פחמנים כיראליים (אסימטריים), אך המולקולה עצמה היא **א-קיראלית** (אינה פעילה אופטית ואינה בעלת אננטיומר) בגלל קיומו של אלמנט סימטריה פנימי, בדרך כלל **מישור סימטריה**.

**שלב 2: ניתוח האיזומר cis (א')**
- ב-cis-1,2-dichlorocyclopropane, שני אטומי הכלור (Cl) פונים לאותו הכיוון (שניהם למעלה, בטריז).
- אם נעביר מישור דמיוני שחוצה את משולש הטבעת מהקדקוד העליון (CH₂) כלפי מטה, נקבל שני חצאים שהם תמונת ראי מושלמת זה של זה (החצי הימני עם הכלור שלו משתקף בדיוק בחצי השמאלי עם הכלור שלו).
- קיומו של מישור סימטריה זה הופך את המולקולה ל**א-קיראלית (מזו)**.

**שלב 3: ניתוח האיזומר trans (ב')**
- ב-trans-1,2-dichlorocyclopropane, כלור אחד פונה למעלה (טריז) והשני פונה למטה (מקווקו).
- לא משנה איך ננסה לחצות את המולקולה, לא נמצא מישור סימטריה פנימי (חצי עם כלור למעלה ישתקף ככלור למעלה, אך בפועל בצד השני יש כלור למטה).
- לכן, האיזומר trans הוא מולקולה קיראלית שקיימת כזוג אננטיומרים פעילים אופטית.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **האיזומר trans שגויה כי:** הוא חסר מישור סימטריה ולכן הוא קיראלי ואינו תרכובת מזו.
- **שני האיזומרים הם קיראליים שגויה כי:** כאמור, האיזומר cis הוא א-קיראלי (מזו) עקב הסימטריה המלאה שלו.
- **שני האיזומרים הם א-קיראליים שגויה כי:** האיזומר trans הוא בהחלט קיראלי ויש לו אננטיומר שאינו חופף איתו.`
  },
  {
    id: 26,
    category: "stereochemistry_centers",
    title: "היטלי פישר וקביעת R/S",
    text: "עבור היטל פישר הבא, מהי הקונפיגורציה של המרכז הכיראלי?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <line x1="150" y1="20" x2="150" y2="100" stroke="#f8fafc" stroke-width="3"/> <!-- vertical -->
      <line x1="100" y1="60" x2="200" y2="60" stroke="#f8fafc" stroke-width="3"/> <!-- horizontal -->
      <text x="135" y="15" fill="#f8fafc" font-family="Arial" font-size="12" font-weight="bold">COOH</text>
      <text x="138" y="115" fill="#f8fafc" font-family="Arial" font-size="12" font-weight="bold">CH3</text>
      <text x="75" y="65" fill="#38bdf8" font-family="Arial" font-size="12" font-weight="bold">NH2</text>
      <text x="210" y="65" fill="#f43f5e" font-family="Arial" font-size="12" font-weight="bold">H</text>
    </svg>`,
    options: [
      "R",
      "S",
      "הפחמן המרכזי אינו כיראלי",
      "לא ניתן לקבוע"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון לקביעת קונפיגורציית R/S בהיטל פישר:

**שלב 1: קביעת עדיפויות לפי כללי CIP (מספר אטומי Z)**
נרשום את מספר האטום של האטום המחובר ישירות לפחמן הכיראלי:
1. **NH₂ (חנקן):** מספר אטומי 7 ⬅️ עדיפות ראשונה (**1**).
2. **COOH (פחמן הקשור ל-O, O, O):** עדיפות שנייה (**2**).
3. **CH₃ (פחמן הקשור ל-H, H, H):** עדיפות שלישית (**3**).
4. **H (מימן):** מספר אטומי 1 ⬅️ עדיפות רביעית (**4**).

**שלב 2: בדיקת מיקום קבוצה 4 (המימן - כלל פישר!)**
- בציור, קבוצה 4 (מימן) ממוקמת על הקו האופקי (בצד ימין).
- *כלל פישר*: בהיטל פישר, הקווים האופקיים מייצגים קבוצות הבולטות קדימה אלינו. מאחר וקבוצה 4 פונה קדימה, אנחנו קובעים את הכיוון 1 ⬅️ 2 ⬅️ 3 כרגיל, ואז **הופכים את התוצאה**.

**שלב 3: מעקב אחר כיוון התנועה 1 ⬅️ 2 ⬅️ 3**
- נצא מ-NH₂ (שמאל, עדיפות 1), נעבור דרך COOH (למעלה, עדיפות 2), ונמשיך ל-CH₃ (למטה, עדיפות 3).
- כיוון התנועה הזה (משמאל ⬅️ למעלה ⬅️ למטה) הוא **עם כיוון השעון** (שמייצג R).
- מאחר והמימן אופקי, נהפוך את התוצאה מ-R ל-**S**.
- לכן, הקונפיגורציה היא **S**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **R שגויה כי:** היא מתעלמת מכלל פישר הדורש להפוך את התוצאה כאשר קבוצה 4 נמצאת על קו אופקי.
- **הפחמן המרכזי אינו כיראלי שגויה כי:** הוא קשר לארבע קבוצות שונות לחלוטין (NH2, COOH, CH3, H) ולכן הוא כיראלי.
- **לא ניתן לקבוע שגויה כי:** היטל פישר מייצג תלת-ממד בצורה חד-משמעית ומקובלת המאפשרת קביעה מיידית.`
  },
  {
    id: 27,
    category: "stereochemistry_relationships",
    title: "תרכובות מזו של חומצה טרטרית",
    text: "חומצה טרטרית (Tartaric acid) מכילה שני פחמנים כיראליים. כמה סטריאואיזומרים סך הכל קיימים עבורה?",
    svg: `<svg viewBox="0 0 300 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Fischer for Tartaric acid -->
      <line x1="150" y1="20" x2="150" y2="100" stroke="#f8fafc" stroke-width="2"/>
      <line x1="110" y1="50" x2="190" y2="50" stroke="#f8fafc" stroke-width="2"/>
      <line x1="110" y1="80" x2="190" y2="80" stroke="#f8fafc" stroke-width="2"/>
      
      <text x="135" y="15" fill="#f8fafc" font-family="Arial" font-size="10">COOH</text>
      <text x="135" y="112" fill="#f8fafc" font-family="Arial" font-size="10">COOH</text>
      
      <text x="92" y="54" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">OH</text>
      <text x="195" y="54" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">H</text>
      <text x="92" y="84" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">OH</text>
      <text x="195" y="84" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">H</text>
    </svg>`,
    options: [
      "4 סטריאואיזומרים",
      "3 סטריאואיזומרים (זוג אננטיומרים ותרכובת מזו אחת)",
      "2 סטריאואיזומרים בלבד",
      "8 סטריאואיזומרים"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון לחישוב את מספר הסטריאואיזומרים במולקולה סימטרית:

**שלב 1: חישוב המקסימום התיאורטי**
- לחומצה טרטרית יש 2 פחמנים כיראליים בעלי אותם מתמירים בדיוק.
- לפי נוסחת $2^n$ (כאשר $n$ הוא מספר המרכזים הכיראליים), המקסימום התיאורטי הוא:
  $$2^2 = 4 \text{ סטריאואיזומרים}$$
  שהם: (2R,3R), (2S,3S), (2R,3S), (2S,3R).

**שלב 2: בדיקת סימטריה וזיהוי תרכובת מזו**
- המולקולה היא סימטרית לחלוטין (חציה העליון והתחתון זהים במתמיריהם).
- אם נבחן את האיזומר (2R,3S): שתי קבוצות ה-OH נמצאות באותו צד בהיטל פישר, מה שיוצר מישור סימטריה פנימי החוצה את המולקולה לרוחב.
- קיומו של מישור סימטריה זה הופך את המולקולה ל**א-קיראלית (מזו)**.
- המשמעות של מולקולת מזו היא שהאיזומר (2R,3S) והאיזומר (2S,3R) הם למעשה **אותה מולקולה בדיוק** (הן חופפות זו לזו במרחב לאחר סיבוב ב-180 מעלות).

**שלב 3: סיכום הסטריאואיזומרים הקיימים**
במקום 4, קיימים רק **3 סטריאואיזומרים**:
1. זוג אננטיומרים קיראליים פעילים אופטית: (2R,3R) ו-(2S,3S).
2. איזומר מזו אחד א-קיראלי: (2R,3S).
- לכן התשובה הנכונה היא **3 סטריאואיזומרים**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **4 סטריאואיזומרים שגויה כי:** היא סופרת את צורת ה-(2R,3S) ו-(2S,3R) כשתי מולקולות שונות, בעוד שזו מולקולה אחת זהה (מזו).
- **2 סטריאואיזומרים שגויה כי:** היא משמיטה את צורת המזו או את אחד מהאננטיומרים.
- **8 סטריאואיזומרים שגויה כי:** מספר הסטריאואיזומרים המקסימלי ל-2 פחמנים כיראליים הוא 4, ואינו יכול לעלות על כך.`
  },

  // --- תגובות אלקנים ---
  {
    id: 28,
    category: "reactions_cleavage",
    title: "אוזונוליזה של אלקנים טבעתיים",
    text: "מהו התוצר המתקבל בתגובת האוזונוליזה המחזרת הבאה של 1-methylcyclohexene?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- 1-methylcyclohexene -->
      <polygon points="50,30 90,50 90,90 50,110 20,90 20,50" fill="none" stroke="#f8fafc" stroke-width="3"/>
      <line x1="50" y1="30" x2="90" y2="50" stroke="#f8fafc" stroke-width="5"/> <!-- double bond -->
      <!-- Methyl on C1 -->
      <line x1="90" y1="50" x2="125" y2="35" stroke="#f8fafc" stroke-width="3"/>
      
      <!-- Arrow -->
      <line x1="150" y1="65" x2="210" y2="65" stroke="#38bdf8" stroke-width="3"/>
      <polygon points="210,60 220,65 210,70" fill="#38bdf8"/>
      <text x="155" y="45" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">1. O3</text>
      <text x="155" y="60" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">2. DMS (workup)</text>
    </svg>`,
    options: [
      "heptanedial (דיאלדהיד)",
      "6-oxoheptanal (מולקולה המכילה גם קטון וגם אלדהיד)",
      "6-hydroxyheptanal",
      "methylcyclohexane"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון כדי להבין את מנגנון האוזונוליזה המחזרת:

**שלב 1: ביקוע הקשר הכפול (ה"מספריים" של האוזון)**
- תגובת אוזונוליזה מחזרת (O₃ ולאחר מכן DMS או Zn/AcOH) פועלת כמו מספריים גיאומטריים: היא גוזרת את הקשר הכפול C=C לשניים, ומחברת חמצן לכל אחד משני הקצוות. כל פחמן שהיה בקשר כפול הופך לקבוצת קרבוניל (C=O).

**שלב 2: פתיחת הטבעת**
- מכיוון שהקשר הכפול היה חלק מטבעת סגורה (1-methylcyclohexene), ביקוע הקשר אינו מפרק את המולקולה לשני חלקים נפרדים, אלא **פותח את הטבעת** לשרשרת ישרה אחת ארוכה.

**שלב 3: זיהוי סוג הקרבונילים שנוצרו**
נסתכל על מתמירי פחמני הקשר הכפול לפני החיתוך:
- **פחמן C1 (הקשור לקבוצת מתיל):** אין עליו מימנים. לאחר קבלת החמצן הוא הופך לקרבוניל הקשור לשני פחמנים (פחמן השרשרת ופחמן המתיל) ⬅️ קבוצת **קטון (Ketone)**.
- **פחמן C2 (הקשור למימן):** יש עליו מימן נסתר. לאחר קבלת החמצן הוא הופך לקרבוניל הקשור למימן ⬅️ קבוצת **אלדהיד (Aldehyde)**.

**שלב 4: ספירת השרשרת**
- שרשרת הבסיס מכילה 7 פחמנים סך הכל (6 מהטבעת שנפתחה + 1 מהמתיל).
- פחמן 1 הוא האלדהיד ופחמן 6 נושא את הקטון (oxo).
- שם החומר הוא **6-oxoheptanal**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **heptanedial שגויה כי:** היא מניחה ששני הקצוות הם אלדהידים (דיאלדהיד). זה היה קורה רק אילו הקשר הכפול בטבעת היה חסר מתמירים (כמו ב-cyclohexene).
- **6-hydroxyheptanal שגויה כי:** אוזונוליזה יוצרת קבוצות קרבוניל (אלדהידים וקטונים) מחומצנות, ולא כוהל (hydroxy).
- **methylcyclohexane שגויה כי:** זוהי מולקולה מחוזרת לחלוטין (אלקאן), בעוד שאוזונוליזה היא תגובת חמצון המבקעת את הקשר לגמרי.`
  },
  {
    id: 29,
    category: "reactions_addition",
    title: "סיפוח מים ללא שחלוף (Oxymercuration)",
    text: "מהו התוצר העיקרי המתקבל בתגובת Oxymercuration-Demercuration של 3,3-dimethyl-1-butene?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- 3,3-dimethyl-1-butene -->
      <line x1="40" y1="80" x2="80" y2="40" stroke="#f8fafc" stroke-width="4"/> <!-- double bond -->
      <line x1="40" y1="74" x2="80" y2="34" stroke="#f8fafc" stroke-width="2"/>
      <line x1="80" y1="40" x2="130" y2="80" stroke="#f8fafc" stroke-width="3"/>
      <!-- t-butyl carbon with 3 methyls -->
      <line x1="130" y1="80" x2="180" y2="80" stroke="#f8fafc" stroke-width="3"/>
      <line x1="130" y1="80" x2="130" y2="115" stroke="#f8fafc" stroke-width="3"/>
      <line x1="130" y1="80" x2="130" y2="45" stroke="#f8fafc" stroke-width="3"/>
      
      <!-- Reagents -->
      <line x1="190" y1="65" x2="250" y2="65" stroke="#38bdf8" stroke-width="3"/>
      <polygon points="250,60 260,65 250,70" fill="#38bdf8"/>
      <text x="192" y="45" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">1. Hg(OAc)2, H2O</text>
      <text x="192" y="60" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">2. NaBH4</text>
    </svg>`,
    options: [
      "2,3-dimethyl-2-butanol (תוצר עם שחלוף קבוצת מתיל)",
      "3,3-dimethyl-2-butanol (תוצר ללא שחלוף)",
      "3,3-dimethyl-1-butanol (תוצר אנטי-מרקובניקוב)",
      "2,3-dimethyl-2-butene"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי תגובת Oxymercuration-Demercuration:

**שלב 1: הבנת המנגנון והיעדר שחלופים (החוק הכי חשוב!)**
- בתגובת הידרציה חומצית רגילה (H₂O/H⁺), נוצר קרבוקטיון שניוני חופשי ב-C2 אשר עובר מיד **שחלוף מתיל (Methyl shift)** לקבלת קרבוקטיון שלישוני יציב יותר (מה שנותן את המוצר המשוחלף 2,3-dimethyl-2-butanol).
- אולם, בתגובת **Oxymercuration-Demercuration** המנגנון עובר דרך **יון מרקורוניום טבעתי תלת-איברי** יציב. אין יצירת קרבוקטיון חופשי פתוח, ולכן **לא מתרחשים שחלופים כלל!**

**שלב 2: קביעת הרגיוכימיה (כלל מרקובניקוב)**
- המים (הנוקלאופיל) תוקפים את הפחמן המותמר יותר של טבעת המרקורוניום (C2 של הקשר הכפול המקורי).
- קבוצת ה-OH מתחברת ל-C2 ללא שום שינוי בשלד הפחמנים.

**שלב 3: שלב החיזור (Demercuration)**
- המגיב NaBH₄ מחליף את אטום הכספית במימן (H) על פחמן C1.
- התוצר הסופי המתקבל הוא **3,3-dimethyl-2-butanol** (ללא שחלוף).

**להלן הסבר למה שאר האפשרויות שגויות:**
- **2,3-dimethyl-2-butanol שגויה כי:** זהו תוצר השחלוף. הוא מתקבל רק בתנאי הידרציה חומציים קלאסיים (מים וחומצה) שבהם נוצר קרבוקטיון חופשי פתוח, אך לא תחת תנאי מרקורציה המונעים שחלופים.
- **3,3-dimethyl-1-butanol שגויה כי:** זהו מוצר אנטי-מרקובניקוב (הכוהל ב-C1). תגובה זו עוקבת אחר כלל מרקובניקוב.
- **2,3-dimethyl-2-butene שגויה כי:** זהו אלקן (תוצר אלימינציה/חיסור), בעוד שהתגובה שלנו היא סיפוח מים (הידרציה) המניבה אלכוהול רווי.`
  },
  {
    id: 30,
    category: "mechanisms_elimination",
    title: "סטריאוספציפיות של אלימינציה (E2)",
    text: "מהו התוצר העיקרי בתגובת E2 של האיזומר (2R,3R)-2-bromo-3-phenylbutane עם בסיס חזק (NaOEt)?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Schematic E2 stereospecificity -->
      <line x1="60" y1="80" x2="110" y2="50" stroke="#f8fafc" stroke-width="3"/>
      <line x1="110" y1="50" x2="160" y2="80" stroke="#f8fafc" stroke-width="3"/>
      
      <!-- C2: Br (Wedge) -->
      <polygon points="110,50 115,20 105,20" fill="#f43f5e"/>
      <text x="105" y="15" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">Br</text>
      
      <!-- C3: Ph (Dash) -->
      <line x1="160" y1="80" x2="160" y2="110" stroke="#38bdf8" stroke-width="3" stroke-dasharray="3,3"/>
      <text x="152" y="122" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">Ph</text>
      
      <!-- Reagents -->
      <line x1="190" y1="65" x2="240" y2="65" stroke="#38bdf8" stroke-width="3"/>
      <polygon points="240,60 250,65 240,70" fill="#38bdf8"/>
      <text x="200" y="52" fill="#38bdf8" font-family="Arial" font-size="12" font-weight="bold">NaOEt</text>
    </svg>`,
    options: [
      "(Z)-2-phenyl-2-butene",
      "(E)-2-phenyl-2-butene",
      "תערובת 50:50 של איזומרי E ו-Z",
      "2-phenyl-2-butanol (תוצר התמרה)"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון להבנת הסטריאוספציפיות במנגנון E2:

**שלב 1: הבנת הדרישה הגיאומטרית של E2**
- מנגנון E2 הוא **סטריאוספציפי ומחייב** שהמימן הנסחט (H) והקבוצה העוזבת (Br) יהיו במצב **Anti-periplanar** (כלומר מנוגדים ב-180 מעלות זה מזה, אחד למעלה ואחד למטה במישור).

**שלב 2: ציור היטל ניומן וסבוב לקונפורמציית Anti**
- עבור המצע בעל הקונפיגורציה (2R,3R)-2-bromo-3-phenylbutane:
  - אם נצייר את היטל ניומן של המצע ונסובב את הקשר האמצעי כך שהמימן (H) ב-C3 והברום (Br) ב-C2 יהיו בדיוק ב-180 מעלות זה מזה (Anti):
  - נגלה ששתי הקבוצות הנפחיות הגדולות – קבוצת הפניל (Ph) וקבוצת המתיל (CH₃) השכנה – מסתדרות **באותו הצד של המישור** (cis זו לזו).

**שלב 3: יצירת הקשר הכפול**
- כאשר הבסיס NaOEt קוטף את המימן והברום עוזב בשלב אחד מתואם, הקשר הכפול נוצר מיד כאשר קבוצת הפניל (Ph) וקבוצת המתיל (CH₃) ננעלות באותו הצד.
- קביעת עדיפויות לקשר הכפול שנוצר: Ph (עדיפות גבוהה) ומתיל (עדיפות גבוהה) באותו צד ⬅️ קונפיגורציית **Z** (Zusammen - ביחד).
- לכן התוצר העיקרי הוא **(Z)-2-phenyl-2-butene**.

**להלן הסבר למה שאר האפשרויות שגויות:**
- **(E)-2-phenyl-2-butene שגויה כי:** היא הייתה מתקבלת אילו היינו מתחילים מהדיאסטראומר השני של המצע - (2R, 3S) או (2S, 3R). בשל הדרישה הגיאומטרית הקשיחה של E2, מצע (2R,3R) ספציפית אינו יכול לתת מוצר E.
- **תערובת 50:50 שגויה כי:** מנגנון E2 אינו עובר דרך קרבוקטיון חופשי שיכול להסתובב. מצב המעבר מתואם וקשיח, ולכן מתקבל מוצר סטריאוכימי יחיד וספציפי בלבד.
- **2-phenyl-2-butanol שגויה כי:** היא מתארת מוצר התמרה (כוהל), אך שילוב של בסיס חזק וחימום מונע התמרה ומקדם אלימינציה מלאה.`
  }
  ,
  {
    id: 31,
    category: "conformations_chair",
    title: "יציבות קונפורמציות כסא של אלקאן דו-מותמר",
    text: "עבור trans-1-isopropyl-4-methylcyclohexane, מהו המשפט הנכון לגבי קונפורמציות הכסא שלו?",
    svg: `<svg viewBox="0 0 350 140" width="100%" height="140" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Conformer A (both equatorial) -->
      <g transform="translate(20, 10)">
        <path d="M 20,60 L 50,30 L 100,30 L 80,80 L 50,100 L 10,100 Z" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <!-- C1 Methyl: equatorial (up/out) -->
        <line x1="100" y1="30" x2="120" y2="20" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="122" y="17" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">CH3(eq)</text>
        <!-- C4 Isopropyl: equatorial (down/out) -->
        <line x1="50" y1="100" x2="35" y2="120" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="5" y="130" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">iPr(eq)</text>
        <text x="40" y="115" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold">קונפורמר א' (יציב)</text>
      </g>
      <!-- Conformer B (both axial) -->
      <g transform="translate(190, 10)">
        <path d="M 20,60 L 50,30 L 100,30 L 80,80 L 50,100 L 10,100 Z" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <!-- C1 Methyl: axial (down) -->
        <line x1="100" y1="30" x2="100" y2="58" stroke="#f43f5e" stroke-width="2.5"/>
        <text x="90" y="70" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">CH3(ax)</text>
        <!-- C4 Isopropyl: axial (up) -->
        <line x1="50" y1="100" x2="50" y2="68" stroke="#f43f5e" stroke-width="2.5"/>
        <text x="40" y="60" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">iPr(ax)</text>
        <text x="40" y="115" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold">קונפורמר ב' (לא יציב)</text>
      </g>
    </svg>`,
    options: [
      "קונפורמר א' (diequatorial) יציב בהרבה מקונפורמר ב' (diaxial) מכיוון ששני המתמירים נמצאים בעמדות אקווטוריאליות ללא הפרעה סטרית",
      "קונפורמר ב' יציב יותר בגלל משיכה אלקטרוסטטית בין המתמירים האקסיאליים",
      "שני הקונפורמרים בעלי יציבות זהה בשיווי משקל דינמי",
      "האיזומר trans אינו יכול לקבל קונפורמציה שבה שתי הקבוצות הן אקווטוריאליות"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון לקביעת את יציבות קונפורמציות הכסא:

**שלב 1: הבנת גיאומטריית trans-1,4-dimethylcyclohexane (או מתמירים אחרים ב-1,4)**
בעמדות 1 ו-4 של ציקלוהקסאן, כיווני העמדות הם הפוכים:
- כדי לקבל יחס **trans** (מתמיר אחד למעלה ואחד למטה):
  - פחמן C1: מתיל למעלה (ax) ומימן למטה (eq) ⬅️ המתיל אקסיאלי.
  - פחמן C4: איזופרופיל למטה (ax) ומימן למעלה (eq) ⬅️ האיזופרופיל אקסיאלי.
  - קונפורמציה זו היא **דו-אקסיאלית (ax, ax)** (קונפורמר ב').
  - לאחר היפוך כיסא (ring flip), שתי העמדות הופכות לאקווטוריאליות: **(eq, eq)** (קונפורמר א').

**שלב 2: השוואת אנרגיות**
- **קונפורמר א' (eq, eq):** שתי הקבוצות פונות הצידה במישור הטבעת. הן רחוקות מאוד משאר אטומי המימן בטבעת, ואין שום מתח סטרי או אינטראקציות 1,3-diaxial. לכן זהו המצב היציב ביותר (הפרש אנרגטי עצום של כ-19 kJ/mol).
- **קונפורמר ב' (ax, ax):** שתי הקבוצות נמצאות בעמדות אקסיאליות. קבוצת האיזופרופיל האקסיאלית הגדולה וקבוצת המתיל האקסיאלית יוצרות אינטראקציות 1,3-diaxial קשות מאוד עם מימנים אקסיאליים אחרים בטבעת. זהו קונפורמר לא יציב במיוחד.
- לכן, **קונפורמר א' הוא היציבה ביותר בהפרש עצום**.`
  },
  {
    id: 32,
    category: "stereochemistry_relationships",
    title: "סטריאואיזומרים במערכות טבעתיות קטנות",
    text: "כמה סטריאואיזומרים סך הכל קיימים עבור המולקולה 1,2-dimethylcyclobutane?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Cyclobutane square -->
      <polygon points="50,30 110,30 110,90 50,90" fill="none" stroke="#f8fafc" stroke-width="2.5"/>
      <!-- cis-isomer (both wedges) -->
      <polygon points="50,30 35,10 45,10" fill="#38bdf8"/>
      <text x="22" y="5" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">CH3</text>
      <polygon points="110,30 115,10 125,10" fill="#38bdf8"/>
      <text x="115" y="5" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">CH3</text>
      <text x="45" y="105" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold">cis (מזו)</text>

      <!-- trans-isomer (one wedge, one dash) -->
      <g transform="translate(130, 0)">
        <polygon points="50,30 110,30 110,90 50,90" fill="none" stroke="#f8fafc" stroke-width="2.5"/>
        <polygon points="50,30 35,10 45,10" fill="#38bdf8"/>
        <text x="22" y="5" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold">CH3</text>
        <!-- dash -->
        <line x1="110" y1="30" x2="130" y2="15" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="2,2"/>
        <text x="132" y="12" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">CH3</text>
        <text x="45" y="105" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold">trans (קיראלי)</text>
      </g>
    </svg>`,
    options: [
      "2 סטריאואיזומרים",
      "3 סטריאואיזומרים (זוג אננטיומרים של trans, ותרכובת מזו אחת של cis)",
      "4 סטריאואיזומרים",
      "8 סטריאואיזומרים"
    ],
    correctIndex: 1,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון לחישוב את מספר הסטריאואיזומרים במולקולה טבעתית סימטרית:

**שלב 1: חישוב המקסימום התיאורטי**
- במולקולת 1,2-dimethylcyclobutane ישנם 2 פחמנים כיראליים הנושאים בדיוק את אותם מתמירים.
- לפי נוסחת $2^n$ (כאשר $n=2$ הוא מספר המרכזים הכיראליים), המקסימום התיאורטי הוא:
  $$2^2 = 4 \text{ סטריאואיזומרים}$$
  שהם: (1R,2R), (1S,2S), (1R,2S), (1S,2R).

**שלב 2: ניתוח איזומר ה-cis (שני המתילים באותו צד)**
- באיזומר ה-cis, שתי קבוצות המתיל פונות לאותו הכיוון (למשל, שתיהן בטריז).
- במבנה זה קיים **מישור סימטריה פנימי** החוצה את הטבעת בדיוק באמצע בין שני המתילים.
- קיומו של מישור סימטריה הופך את המולקולה ל**א-קיראלית (תרכובת מזו)**.
- פירוש הדבר הוא שהמבנה (1R,2S) והמבנה (1S,2R) הם למעשה **מולקולה אחת זהה** (הן חופפות זו לזו במרחב לאחר סיבוב).

**שלב 3: ניתוח איזומר ה-trans (מתילים בצדדים מנוגדים)**
- באיזומר ה-trans, מתיל אחד בטריז והשני במקווקו.
- מולקולה זו היא **קיראלית** ואין לה מישור סימטריה פנימי.
- לכן היא קיימת כזוג אננטיומרים (1R,2R) ו-(1S,2S) שאינם חופפים זה עם זה.

**סיכום:**
המולקולה קיימת ב-**3 סטריאואיזומרים בלבד**:
1. (1R,2R)-1,2-dimethylcyclobutane (קיראלי)
2. (1S,2S)-1,2-dimethylcyclobutane (קיראלי)
3. cis-1,2-dimethylcyclobutane (א-קיראלי, מזו)`
  },
  {
    id: 33,
    category: "mechanisms_elimination",
    title: "דה-הידרציה חומצית של כוהל ושחלופים מורכבים",
    text: "מהו התוצר העיקרי שיתקבל בתגובת הדה-הידרציה החומצית הבאה של 1-cyclobutylethanol בסביבה חומצית חמה?",
    svg: `<svg viewBox="0 0 320 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- 1-cyclobutylethanol -->
      <polygon points="40,40 80,40 80,80 40,80" fill="none" stroke="#f8fafc" stroke-width="2.5"/>
      <line x1="80" y1="60" x2="120" y2="60" stroke="#f8fafc" stroke-width="3"/> <!-- C-C bond -->
      <!-- CH(OH)CH3 -->
      <line x1="120" y1="60" x2="150" y2="30" stroke="#f8fafc" stroke-width="3"/>
      <line x1="120" y1="60" x2="150" y2="90" stroke="#f8fafc" stroke-width="3"/>
      <!-- OH on C -->
      <line x1="120" y1="60" x2="120" y2="30" stroke="#38bdf8" stroke-width="2"/>
      <text x="112" y="25" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold">OH</text>
      <!-- Reagents arrow -->
      <line x1="170" y1="60" x2="230" y2="60" stroke="#f8fafc" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="200" y="50" fill="#f8fafc" font-family="Arial" font-size="10" text-anchor="middle">H2SO4, D</text>
      <!-- Target box -->
      <rect x="250" y="40" width="60" height="40" rx="5" fill="none" stroke="#eab308" stroke-width="2"/>
      <text x="280" y="65" fill="#eab308" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">?</text>
    </svg>`,
    options: [
      "1-methylcyclopentene (תוצר שחלוף של הרחבת טבעת ושחלוף הידריד)",
      "methylenecyclobutane (אלקן עם קשר כפול מחוץ לטבעת ללא הרחבה)",
      "3-methylcyclopentene (אלקן בתוך טבעת מורחבת ללא שחלוף הידריד)",
      "1-cyclobutylethene (אלקן ללא שחלוף כלל)"
    ],
    correctIndex: 0,
    explanation: `נעקוב אחר שלבי המנגנון של התגובה הזו (המשלבת הרחבת טבעת ושחלוף הידריד):

**שלב 1: פרוטונציה ועזיבת מים לקבלת קרבוקטיון**
- קבוצת ה-OH של 1-cyclobutylethanol עוברת פרוטונציה בסביבה החומצית והופכת לקבוצה עוזבת מצוינת ($\ce{-OH2+}$).
- מולקולת מים עוזבת, ונוצר **קרבוקטיון שניוני (2°)** על הפחמן מחוץ לטבעת:
  $$\text{cyclobutyl}-\text{CH}^+-\text{CH}_3$$

**שלב 2: שחלוף הרחבת טבעת (Ring Expansion - הפחתת מתח טבעת!)**
- הקרבוקטיון השניוני נמצא בעמדת אלפא לטבעת הציקלובוטאן (טבעת 4-איברית מתוחה מאוד זוויתית).
- קשר פחמן-פחמן של הטבעת נפתח ויוצר קשר חדש עם הפחמן החיובי מחוץ לטבעת. 
- הטבעת מתרחבת לטבעת 5-איברית (cyclopentyl) יציבה ומשוחררת ממתח.
- המטען החיובי נודד לפחמן בטבעת, ומתקבל **קרבוקטיון שניוני (2°) בתוך טבעת מחומשת** (2-methylcyclopentyl cation).

**שלב 3: שחלוף הידריד (Hydride Shift - יצירת קרבוקטיון שלישוני)**
- הקרבוקטיון שנוצר הוא שניוני, והוא ממוקם צמוד לפחמן C1 הנושא את קבוצת המתיל (שהוא פחמן שלישוני).
- יון הידריד (⁻H) נודד מפחמן C1 לפחמן C2.
- המטען החיובי עובר ל-C1 ומתקבל **קרבוקטיון שלישוני (3°) יציב בהרבה** (1-methylcyclopentyl cation).

**שלב 4: אלימינציה (E1 - יצירת אלקן זייצב)**
- מולקולת מים (בסיס חלש) קוטפת מימן מפחמן C2 הסמוך לקבלת האלקן המותמר והיציב ביותר (אלקן טרי-מותמר בתוך הטבעת).
- התוצר העיקרי הוא **1-methylcyclopentene**.

*זהו תהליך סינתטי קלאסי ברמת מבחן המראה כיצד מולקולה מעדיפה שרשרת שחלופים כדי להגיע ליציבות מקסימלית (שחרור מתח טבעת + יצירת קרבוקטיון שלישוני + אלקן מותמר).*`
  },
  {
    id: 34,
    category: "reactions_addition",
    title: "סטריאוספציפיות בסיפוח הלוגן לאלקן",
    text: "מהו התוצר המתקבל בתגובת הסיפוח של Br2 בממס דיכלורומתאן (CH2Cl2) ל-cis-2-butene?",
    svg: `<svg viewBox="0 0 320 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- cis-2-butene -->
      <line x1="40" y1="60" x2="100" y2="60" stroke="#f8fafc" stroke-width="5"/> <!-- C=C -->
      <line x1="40" y1="54" x2="100" y2="54" stroke="#f8fafc" stroke-width="2"/>
      <line x1="40" y1="60" x2="15" y2="85" stroke="#f8fafc" stroke-width="3"/> <!-- methyl -->
      <line x1="100" y1="60" x2="125" y2="85" stroke="#f8fafc" stroke-width="3"/> <!-- methyl -->
      
      <text x="145" y="65" fill="#f8fafc" font-family="Arial" font-size="14" font-weight="bold">+</text>
      <text x="175" y="65" fill="#f43f5e" font-family="Arial" font-size="14" font-weight="bold">Br2</text>
      
      <line x1="210" y1="60" x2="260" y2="60" stroke="#f8fafc" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="235" y="50" fill="#f8fafc" font-family="Arial" font-size="10" text-anchor="middle">CH2Cl2</text>
    </svg>`,
    options: [
      "תערובת רצימית (50:50) של האננטיומרים (2R,3R)-2,3-dibromobutane ו-(2S,3S)-2,3-dibromobutane",
      "תוצר מיזו (meso) יחיד וא-קיראלי: (2R,3S)-2,3-dibromobutane",
      "תערובת של ארבעה דיאסטראומרים שונים של דיהליד",
      "2-bromobutane עקב הוספה של מימן וברום יחד"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח של הסטריאוספציפיות של הלוגנציה:

**שלב 1: מנגנון התגובה (יון ברומוניום)**
- האלקן תוקף את מולקולת הברום ($\ce{Br2}$) ליצירת **יון ברומוניום טבעתי תלת-איברי**.
- הברום הטבעתי חוסם צד אחד של המישור (נניח, את הצד העליון).

**שלב 2: התקפה מהצד האחורי (Anti-addition)**
- יון הברומיד השני ($\ce{Br-}$) שנוצר חייב לתקוף את יון הברומוניום מהצד ההפוך (התקפה מאחור, Anti-addition).
- המשמעות היא שאטום ברום אחד ייכנס בטריז (Wedge) והשני במקווקו (Dash).

**שלב 3: סטריאוכימיה של מגיב cis**
- מאחר והתחלנו מ-**cis-2-butene** (האלקן הסימטרי עם המתילים באותו צד):
- התקפה של הברומיד על פחמן C2 נותנת אננטיומר אחד (למשל, 2R,3R).
- התקפה של הברומיד על פחמן C3 נותנת את האננטיומר השני (למשל, 2S,3S).
- מכיוון שההסתברות להתקפה על שני הפחמנים זהה לחלוטין, נקבל תערובת שווה (רצימית) של שני האננטיומרים הפעילים אופטית.
- לכן, התוצר הוא **תערובת רצימית של (2R,3R) ו-(2S,3S)**.

*כלל ברזל חשוב למבחן (CAR/TED)*:
- סיפוח **A**nti לאלקן **C**is נותן תערובת **R**acemic (**CAR**).
- סיפוח **A**nti לאלקן **T**rans נותן תוצר **M**eso (**TAM**).
לכן אילו היינו מתחילים מ-trans-2-butene, התוצר היה מולקולת מזו (meso) יחידה!`
  },
  {
    id: 35,
    category: "reactions_addition",
    title: "הידרובורציה-חמצון של אלקן טבעתי",
    text: "מהו התוצר העיקרי שיתקבל בתגובת הידרובורציה-חמצון של 1-methylcyclohexene?",
    svg: `<svg viewBox="0 0 320 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- 1-methylcyclohexene -->
      <polygon points="40,30 80,30 100,60 80,90 40,90 20,60" fill="none" stroke="#f8fafc" stroke-width="2"/>
      <line x1="40" y1="30" x2="80" y2="30" stroke="#f8fafc" stroke-width="4"/> <!-- double bond -->
      <line x1="80" y1="30" x2="105" y2="15" stroke="#f8fafc" stroke-width="3"/> <!-- methyl group -->
      
      <!-- Arrow with reagents -->
      <line x1="130" y1="60" x2="210" y2="60" stroke="#f8fafc" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="170" y="45" fill="#f8fafc" font-family="Arial" font-size="9" text-anchor="middle">1. BH3-THF</text>
      <text x="170" y="57" fill="#f8fafc" font-family="Arial" font-size="9" text-anchor="middle">2. H2O2, OH-</text>
      
      <!-- Target box -->
      <rect x="230" y="40" width="70" height="40" rx="5" fill="none" stroke="#eab308" stroke-width="2"/>
      <text x="265" y="65" fill="#eab308" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">?</text>
    </svg>`,
    options: [
      "trans-2-methylcyclohexanol (תוצר אנטי-מרקובניקוב, סיפוח Syn)",
      "cis-2-methylcyclohexanol (תוצר אנטי-מרקובניקוב, סיפוח Anti)",
      "1-methylcyclohexanol (תוצר מרקובניקוב)",
      "2-methylcyclohexanone (קטון שנוצר עקב חמצון יתר)"
    ],
    correctIndex: 0,
    explanation: `ניתוח של הסטריאוכימיה והרגיוכימיה של הידרובורציה-חמצון:

**שלב 1: קביעת הרגיוכימיה (כיווניות)**
- הידרובורציה-חמצון מספחת מים (H ו-OH) לקשר כפול בכיווניות של **אנטי-מרקובניקוב**.
- קבוצת ה-OH תיקשר לפחמן הפחות מותמר של הקשר הכפול (C2), והמימן (H) ייקשר לפחמן המותמר יותר (C1, הנושא את קבוצת המתיל).

**שלב 2: קביעת הסטריאוכימיה (Syn-addition)**
- הסיפוח של $\ce{BH3}$ לקשר הכפול מתרחש בשלב אחד מתואם מאותו צד של המישור (**Syn-addition**).
- המשמעות היא שהמימן (H) והבורון (שיוחלף בהמשך ב-OH ללא שינוי סטריאוכימי) מתווספים **מאותו צד של הטבעת** (למשל, שניהם בטריז Wedge מלמעלה).

**שלב 3: קביעת המצב המרחבי של המתיל**
- מאחר והמימן (H) נכנס בטריז מלמעלה אל פחמן C1, הוא דוחף את קבוצת המתיל הקיימת ב-C1 למקווקו (Dash, למטה).
- קבוצת ה-OH שנכנסה גם היא בטריז מלמעלה ב-C2 נמצאת כעת בצד הנגדי לקבוצת המתיל (OH למעלה, מתיל למטה).
- לכן, קבוצת ה-OH וקבוצת המתיל נמצאות במצב **trans** זו לזו.
- התוצר העיקרי הוא **trans-2-methylcyclohexanol** (כתערובת רצימית של שני האננטיומרים).`
  },
  {
    id: 36,
    category: "reactions_cleavage",
    title: "אוזונוליזה של דיאן טבעתי",
    text: "מהו התוצר המתקבל בתגובת האוזונוליזה המחזרת הבאה של 1,5-dimethyl-1,5-cyclooctadiene?",
    svg: `<svg viewBox="0 0 320 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- 1,5-dimethyl-1,5-cyclooctadiene (simplified octagon with double bonds) -->
      <g transform="translate(20, 10)">
        <polygon points="40,20 70,30 80,60 70,90 40,100 10,90 0,60 10,30" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <!-- Double bonds C1-C2 and C5-C6 -->
        <line x1="40" y1="20" x2="70" y2="30" stroke="#f8fafc" stroke-width="4"/>
        <line x1="40" y1="100" x2="10" y2="90" stroke="#f8fafc" stroke-width="4"/>
        <!-- Methyls -->
        <line x1="40" y1="20" x2="45" y2="0" stroke="#f8fafc" stroke-width="2"/>
        <line x1="40" y1="100" x2="45" y2="120" stroke="#f8fafc" stroke-width="2"/>
      </g>
      
      <!-- Arrow -->
      <line x1="130" y1="60" x2="210" y2="60" stroke="#f8fafc" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="170" y="45" fill="#f8fafc" font-family="Arial" font-size="9" text-anchor="middle">1. O3</text>
      <text x="170" y="57" fill="#f8fafc" font-family="Arial" font-size="9" text-anchor="middle">2. Zn, AcOH</text>
      
      <!-- Target box -->
      <rect x="230" y="40" width="70" height="40" rx="5" fill="none" stroke="#eab308" stroke-width="2"/>
      <text x="265" y="65" fill="#eab308" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">?</text>
    </svg>`,
    options: [
      "שתי מולקולות זהות של 5-oxohexanal (מולקולות המכילות קטון ואלדהיד)",
      "שתי מולקולות זהות של 2,5-hexanedione (דיקטון)",
      "מולקולה יחידה של 1,5-dimethylcyclooctane-1,5-diol",
      "ארבע מולקולות של acetaldehyde"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח שיטתי של שלבי ביקוע הדיאן באוזונוליזה:

**שלב 1: ביקוע קשרים כפולים (גזירה של הטבעת)**
- המגיבים הם אוזון ($O_3$) ותנאי חיזור ($Zn/AcOH$ או $DMS$). 
- אנו "גוזרים" את שני הקשרים הכפולים בטבעת, ומחברים קבוצת קרבוניל ($C=O$) לכל אחד מהפחמנים שנגזרו.
- מכיוון שהיו בטבעת שני קשרים כפולים, הטבעת השמיניה תיפתח ותישבר ל**שתי שרשראות נפרדות**.

**שלב 2: זיהוי סוגי הקרבונילים בכל קצה**
בכל קשר כפול שהיה לנו:
- פחמן אחד קשור למתיל ופחמן שכן (פחמן C1 ו-C5): אין עליהם מימנים. לכן לאחר הביקוע הם הופכים לקבוצת **קטון (Ketone)**:
  $$\text{CH}_3-\text{C}(=\text{O})-$$
- פחמן שני קשור למימן (פחמן C2 ו-C6): יש עליהם מימן. לכן לאחר הביקוע הם הופכים לקבוצת **אלדהיד (Aldehyde)**:
  $$-\text{CH}=\text{O}$$

**שלב 3: ספירה וקישוריות השרשרת**
- נספור את מספר הפחמנים בכל שרשרת שנוצרה:
  - פחמן C1 (הקטון שנוצר, הקשור למתיל).
  - פחמן C8 (קבוצת $\ce{CH2}$).
  - פחמן C7 (קבוצת $\ce{CH2}$).
  - פחמן C6 (האלדהיד שנוצר).
  סך הכל שרשרת של 6 פחמנים (כולל המתיל).
- השרשרת השנייה שנוצרת (מביקוע פחמנים C5-C4-C3-C2) זהה לה לחלוטין.
- המולקולה שנוצרה מכילה קטון בקצה אחד (פחמן 2) ואלדהיד בקצה השני (פחמן 1).
- שם המולקולה הוא **5-oxohexanal**.
- לכן, מתקבלות **שתי מולקולות זהות של 5-oxohexanal**.`
  },
  {
    id: 37,
    category: "mechanisms_elimination",
    title: "סטריאוכימיה של אלימינציה E2 בטבעות",
    text: "בתגובת E2 של menthyl chloride עם בסיס חזק (NaOEt/EtOH), מהו התוצר העיקרי המתקבל ומדוע התגובה איטית יחסית?",
    svg: `<svg viewBox="0 0 350 140" width="100%" height="140" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Menthyl chloride chair conformation showing trans-diaxial requirement -->
      <g transform="translate(10, 10)">
        <path d="M 20,60 L 50,30 L 100,30 L 80,80 L 50,100 L 10,100 Z" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <!-- Substituents in stable conformation (all equatorial) -->
        <line x1="100" y1="30" x2="120" y2="20" stroke="#38bdf8" stroke-width="2"/> <!-- iPr (eq) -->
        <text x="122" y="17" fill="#38bdf8" font-family="Arial" font-size="9" font-weight="bold">iPr(eq)</text>
        <line x1="80" y1="80" x2="95" y2="95" stroke="#f43f5e" stroke-width="2"/> <!-- Cl (eq) -->
        <text x="98" y="105" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">Cl(eq)</text>
        <line x1="10" y1="100" x2="-10" y2="110" stroke="#38bdf8" stroke-width="2"/> <!-- Me (eq) -->
        <text x="-35" y="120" fill="#38bdf8" font-family="Arial" font-size="9" font-weight="bold">Me(eq)</text>
        <text x="40" y="115" fill="#94a3b8" font-family="Arial" font-size="10" font-weight="bold">קונפורמר יציב (אין אלימינציה)</text>
      </g>
      <!-- Unstable conformer after ring flip where Cl is axial -->
      <g transform="translate(185, 10)">
        <path d="M 20,60 L 50,30 L 100,30 L 80,80 L 50,100 L 10,100 Z" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <line x1="80" y1="80" x2="80" y2="50" stroke="#f43f5e" stroke-width="2"/> <!-- Cl (ax, up) -->
        <text x="75" y="42" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold">Cl(ax)</text>
        <line x1="100" y1="30" x2="100" y2="0" stroke="#38bdf8" stroke-width="2"/> <!-- iPr (ax, down) -->
        <text x="90" y="-3" fill="#38bdf8" font-family="Arial" font-size="9" font-weight="bold">iPr(ax)</text>
        <text x="40" y="115" fill="#94a3b8" font-family="Arial" font-size="10" font-weight="bold">קונפורמר אקסיאלי (אלימינציה איטית)</text>
      </g>
    </svg>`,
    options: [
      "2-menthene (תוצר הופמן), מכיוון שהבסיס קוטף את המימן האקסיאלי היחיד הזמין בעמדת בטא הפחות מותמרת",
      "3-menthene (תוצר זייצב), מכיוון שהוא האלקן המותמר והיציב ביותר והתגובה מהירה מאוד",
      "menthol (תוצר התמרה במנגנון SN2)",
      "לא מתרחשת תגובה כלל כי המצע שלישוני וחסום מרחבית"
    ],
    correctIndex: 0,
    explanation: `זוהי שאלה קלאסית ברמת מבחן המשלבת קונפורמציות כסא וסטריאוכימיה של אלימינציה E2:

**שלב 1: הבנת הדרישה הגיאומטרית של E2**
- מנגנון E2 דורש שקבוצת העוזבת (הכלור) והמימן הנתקף ($eta$-hydrogen) יהיו במצב **Anti-coplanar** (זווית של 180 מעלות).
- בטבעת ציקלוהקסאן, מצב זה מתקיים **אך ורק כאשר גם הכלור וגם המימן השכן נמצאים בעמדות אקסיאליות (Axial)**.

**שלב 2: ניתוח קונפורמציית menthyl chloride**
- במולקולת menthyl chloride, שלוש הקבוצות (כלור, מתיל ואיזופרופיל) נמצאות ביחס trans סמוך.
- בקונפורמציה היציבה ביותר של המולקולה, כל שלוש הקבוצות נמצאות בעמדות **אקווטוריאליות (equatorial)** (הן פונות הצידה). 
- במצב זה, הכלור אינו אקסיאלי ולכן **אינו יכול לעבור אלימינציה כלל!**
- כדי שהתגובה תתרחש, המולקולה חייבת לעבור היפוך כיסא (ring flip) לקונפורמציה הלא-יציבה שבה כל שלוש הקבוצות הגדולות הופכות ל**אקסיאליות (axial)**.
- מאחר וריכוז הקונפורמר הלא-יציב הזה בתמיסה נמוך מאוד, קצב התגובה הכולל הוא **איטי במיוחד**.

**שלב 3: זיהוי המימנים האקסיאליים הזמינים**
בקונפורמציה האקסיאלית שבה הכלור פונה למעלה (C3-axial):
- בפחמן C4 השכן (הנושא את קבוצת האיזופרופיל האקסיאלית למטה): המימן היחיד הוא בעמדה אקווטוריאלית (כי האיזופרופיל אקסיאלי). לכן **אין מימן אקסיאלי ב-C4!**
- בפחמן C2 השכן (הפחות מותמר, הנושא מימנים): ישנו מימן אקסיאלי הפונה למטה (Anti לכלור).
- הבסיס NaOEt חייב לתקוף את המימן האקסיאלי היחיד הזמין ב-C2.
- כתוצאה מכך, הקשר הכפול נוצר לכיוון פחמן C2, לקבלת **2-menthene** (האלקן הפחות מותמר, המכונה תוצר הופמן).

*לסיכום:* 
Menthyl chloride מגיב לאט מאוד ונותן רק את אלקן הופמן (**2-menthene**) בשל מגבלות סטריאוכימיות קשיחות של הטבעת.`
  },
  {
    id: 38,
    category: "mechanisms_substitution",
    title: "השפעת הממס על נוקלאופיליות של הלוגנים",
    text: "כיצד משתנה סדר הנוקלאופיליות של יוני ההלוגן בתגובת SN2 כאשר עוברים מממס פרוטי (Methanol) לממס פולרי א-פרוטי (DMSO)?",
    svg: `<svg viewBox="0 0 320 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Table showing solvent effect -->
      <rect x="15" y="15" width="135" height="90" rx="5" fill="#0f172a" stroke="#f8fafc" stroke-width="1.5"/>
      <text x="82" y="35" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">ממס פרוטי (MeOH)</text>
      <text x="82" y="65" fill="#f8fafc" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">I⁻ > Br⁻ > Cl⁻ > F⁻</text>
      <text x="82" y="85" fill="#94a3b8" font-family="Arial" font-size="9" text-anchor="middle">ייצוב קשרי מימן חזק של F⁻</text>
      
      <rect x="170" y="15" width="135" height="90" rx="5" fill="#0f172a" stroke="#f8fafc" stroke-width="1.5"/>
      <text x="237" y="35" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">ממס א-פרוטי (DMSO)</text>
      <text x="237" y="65" fill="#f8fafc" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">F⁻ > Cl⁻ > Br⁻ > I⁻</text>
      <text x="237" y="85" fill="#94a3b8" font-family="Arial" font-size="9" text-anchor="middle">אניונים חופשיים (Naked)</text>
    </svg>`,
    options: [
      "בממס פרוטי הסדר הוא I⁻ > Br⁻ > Cl⁻ > F⁻, ובממס פולרי א-פרוטי הסדר מתהפך לחלוטין ל-F⁻ > Cl⁻ > Br⁻ > I⁻",
      "בממס פרוטי הסדר הוא F⁻ > Cl⁻ > Br⁻ > I⁻, ובממס פולרי א-פרוטי הסדר מתהפך ל-I⁻ > Br⁻ > Cl⁻ > F⁻",
      "סדר הנוקלאופיליות הוא תמיד I⁻ > Br⁻ > Cl⁻ > F⁻ ללא קשר לממס עקב הגודל והפולריזביליות של יון היוד",
      "סדר הנוקלאופיליות הוא תמיד F⁻ > Cl⁻ > Br⁻ > I⁻ בשל הבסיסיות והענן האלקטרוני הקטן של פלואור"
    ],
    correctIndex: 0,
    explanation: `זוהי שאלה חשובה מאוד למבחנים המסבירה את תפקיד הסולבציה (Solvation):

**שלב 1: התנהגות בממס קוטבי פרוטי (כמו מים או מתנול)**
- ממס פרוטי מכיל מימנים חומציים היכולים ליצור קשרי מימן חזקים.
- אניונים קטנים בעלי צפיפות מטען גבוהה, כמו פלואוריד (⁻F), יוצרים **קשרי מימן חזקים במיוחד** עם הממס. הממס מקיף את יון הפלואוריד ב"כלוב" הדוק של מולקולות ממס (סולבציה חזקה).
- כלוב זה מונע מהפלואוריד לתקוף את האלקטרופיל, ובכך מוריד את הנוקלאופיליות שלו לרמה אפסית.
- יון יודיד (⁻I) גדול ומפוזר, כמעט ואינו עובר סולבציה ולכן הוא חופשי לתקוף.
- לכן, בממס פרוטי הסדר הוא: **I⁻ > Br⁻ > Cl⁻ > F⁻**.

**שלב 2: התנהגות בממס קוטבי א-פרוטי (כמו DMSO, DMF, אצטון)**
- ממס א-פרוטי אינו יכול ליצור קשרי מימן. הוא מייצב היטב קטיונים מתכתיים (כמו ⁺Na) אך כמעט ואינו מייצב את האניונים, שנותרים "ערומים" (Naked anions) וחופשיים לפעולה.
- במצב זה, אין סולבציה שתפריע לנוקלאופיל, והנוקלאופיליות מקבילה ישירות לבסיסיות (עוצמת המטען של האניון):
- פלואוריד (⁻F) הוא הבסיס החזק ביותר מבין הארבעה, ולכן הוא הופך לנוקלאופיל החזק והמהיר ביותר.
- לכן, בממס א-פרוטי הסדר מתהפך לחלוטין: **F⁻ > Cl⁻ > Br⁻ > I⁻**.`
  },
  {
    id: 39,
    category: "mechanisms_elimination",
    title: "מנגנון דה-הידרציה חומצית של כהלים",
    text: "כיצד משתנה מנגנון תגובת הדה-הידרציה (אלימינציה של מים) של כהלים בסביבה חומצית כתלות במבנה הכוהל?",
    svg: `<svg viewBox="0 0 320 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Reaction pathways -->
      <text x="160" y="30" fill="#f8fafc" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">מנגנוני דה-הידרציה של כהלים</text>
      
      <text x="30" y="60" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold">כהל שלישוני ושניוני</text>
      <text x="250" y="60" fill="#f43f5e" font-family="Arial" font-size="11" font-weight="bold">כהל ראשוני</text>
      
      <text x="80" y="85" fill="#f8fafc" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">מנגנון E1</text>
      <text x="80" y="105" fill="#94a3b8" font-family="Arial" font-size="9" text-anchor="middle">(קרבוקטיון יציב + שחלופים)</text>
      
      <text x="240" y="85" fill="#f8fafc" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">מנגנון E2</text>
      <text x="240" y="105" fill="#94a3b8" font-family="Arial" font-size="9" text-anchor="middle">(ללא קרבוקטיון חופשי)</text>
    </svg>`,
    options: [
      "כהלים שניוניים ושלישוניים מגיבים במנגנון E1 (יצירת קרבוקטיון חופשי), בעוד שכהל ראשוני מגיב במנגנון E2 (שלב אחד מתואם ללא קרבוקטיון)",
      "כל הכהלים מגיבים במנגנון E1 ללא קשר למבנה שלהם עקב הסביבה החומצית החזקה",
      "כהלים ראשוניים עוברים דה-הידרציה במנגנון SN1 מהיר",
      "כהלים מגיבים באלימינציה רק בסביבה בסיסית חזקה"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח שיטתי של שלבי הפתרון להבנת מנגנון הדה-הידרציה החומצית:

**שלב 1: הבנת תפקיד החומצה**
- קבוצת ה-OH היא קבוצה עוזבת גרועה מאוד (בסיס חזק, ⁻OH).
- בסביבה חומצית, ה-OH עובר פרוטונציה מהירה לקבלת $\ce{-OH2+}$, שהיא קבוצה עוזבת מעולה (מולקולת מים ניטרלית ויציבה).

**שלב 2: ניתוח כהלים שלישוניים ושניוניים (מנגנון E1)**
- כהל שלישוני ($3^\circ$) או שניוני ($2^\circ$) עובר יינון: מולקולת המים עוזבת ונוצר קרבוקטיון שלישוני או שניוני יציב יחסית.
- מכיוון שנוצר קרבוקטיון חופשי, השלב הבא הוא קטיפת מימן בטא על ידי מולקולת מים (בסיס חלש) ליצירת הקשר הכפול. 
- המנגנון הוא **E1** (דו-שלבי), ובמהלכו ייתכנו שחלופים.

**שלב 3: ניתוח כהל ראשוני (מנגנון E2)**
- כהל ראשוני ($1^\circ$) אינו יכול לעבור יינון ליצירת קרבוקטיון ראשוני, שהוא צורון לא יציב אנרגטית בצורה קיצונית.
- לכן, התגובה חייבת להתרחש בשלב אחד מתואם (Concerted): מולקולת מים (בסיס חלש) קוטפת מימן בטא, ובאותו זמן נוצר הקשר הכפול ומולקולת המים העוזבת נדחפת החוצה.
- המנגנון הוא **E2** (שלב אחד).

*הערה חשובה לגבי סביבה בסיסית:* 
כהלים לעולם אינם עוברים אלימינציה בסביבה בסיסית, משום שבסיס חזק פשוט יקטוף את המימן החומצי של ה-OH לקבלת יון אלקוקסיד ($\ce{RO-}$), והתגובה תיעצר.`
  },
  {
    id: 40,
    category: "mechanisms_substitution",
    title: "מלכודת ה-SN2 הסטרית: נאופנטיל הליד",
    text: "מדוע נאופנטיל ברומיד, (CH3)3C-CH2-Br, מגיב באטיות קיצונית (כמעט אפסית) בתגובות התמרה נוקלאופילית מסוג SN2, למרות שהוא אלקיל הליד ראשוני (1°)?",
    svg: `<svg viewBox="0 0 320 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Neopentyl bromide structure showing steric blocking -->
      <line x1="80" y1="60" x2="130" y2="60" stroke="#f8fafc" stroke-width="3"/> <!-- beta-alpha C-C -->
      <circle cx="80" cy="60" r="5" fill="#f8fafc"/> <!-- beta C -->
      <circle cx="130" cy="60" r="5" fill="#38bdf8"/> <!-- alpha C -->
      
      <!-- Methyls on beta C -->
      <line x1="80" y1="60" x2="80" y2="25" stroke="#f8fafc" stroke-width="3"/>
      <line x1="80" y1="60" x2="50" y2="40" stroke="#f8fafc" stroke-width="3"/>
      <line x1="80" y1="60" x2="50" y2="80" stroke="#f8fafc" stroke-width="3"/>
      
      <!-- Br on alpha C -->
      <line x1="130" y1="60" x2="175" y2="60" stroke="#f43f5e" stroke-width="3"/>
      <text x="180" y="65" fill="#f43f5e" font-family="Arial" font-size="11" font-weight="bold">Br</text>
      
      <!-- Nucleophile path blocked -->
      <path d="M 230,90 Q 170,90 145,70" fill="none" stroke="#eab308" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow)"/>
      <text x="235" y="95" fill="#eab308" font-family="Arial" font-size="11" font-weight="bold">Nu⁻</text>
      <text x="75" y="112" fill="#94a3b8" font-family="Arial" font-size="10" font-weight="bold">פחמן בטא נפחי מאוד חוסם את הגישה מאחור</text>
    </svg>`,
    options: [
      "בגלל הפרעה סטרית עצומה של פחמן בטא (הפחמן הרביעוני הסמוך) שחוסם את גישת הנוקלאופיל לביצוע התקפה אחורית (Backside attack)",
      "מכיוון שהוא אלקיל הליד ראשוני, והוא מעדיף לעבור התמרה במנגנון SN1 מהיר בהרבה",
      "בגלל היעדר קוטביות בקשר הפחמן-ברום עקב השפעה השראתית תורמת של המתילים",
      "הברום בנאופנטיל הוא קבוצה עוזבת גרועה במיוחד בהשוואה להלוגנים אחרים"
    ],
    correctIndex: 0,
    explanation: `זוהי שאלת תיאוריה קלאסית ונפוצה מאוד בבחינות:

**שלב 1: הבנת המבנה של נאופנטיל ברומיד**
- נאופנטיל ברומיד הוא אכן אלקיל הליד **ראשוני ($1^\circ$)** – הפחמן שאליו מחובר הברום (פחמן אלפא) מחובר לפחמן אחד בלבד (פחמן בטא).
- אולם, פחמן בטא הסמוך הוא פחמן רביעוני ($4^\circ$) הנושא שלוש קבוצות מתיל נפחיות: קבוצת **tert-butyl** גדולה.

**שלב 2: גורם ההפרעה הסטרית ב-SN2**
- מנגנון SN2 מחייב שהנוקלאופיל יתקרב לפחמן אלפא מהצד האחורי (Backside attack) בזווית של 180 מעלות ביחס לברום.
- למרות שפחמן אלפא עצמו אינו חסום, קבוצת ה-tert-butyl הנפחית והענקית היושבת ממש מאחוריו בעמדת בטא יוצרת **צפיפות אלקטרונים וחסימה מרחבית עצומה**.
- הנוקלאופיל אינו מסוגל להתקרב לפחמן אלפא מהצד האחורי עקב דחייה סטרית קשה עם קבוצות המתיל של פחמן בטא.
- קצב התגובה של נאופנטיל ברומיד ב-SN2 הוא **איטי פי 100,000** מקצב התגובה של אתיל ברומיד, והוא כמעט ואינו מגיב במנגנון זה.

**שלב 3: התנהגות במנגנון SN1**
- נאופנטיל ברומיד גם אינו מגיב ב-SN1 בקלות, מכיוון שיינון של ברום ייתן קרבוקטיון ראשוני לא יציב (אם כי בתנאים תרמיים קיצוניים הוא יכול להתיינן ולעבור שחלוף מתיל בו-זמנית).

*לסיכום:*
נאופנטיל הוא הדוגמה המובילה לכך ש**הפרעה סטרית בפחמן השכן (פחמן בטא)** יכולה לשתק לחלוטין את מנגנון ה-SN2, גם אם הפחמן המותקף הוא ראשוני.`
  }
  ,
  {
    id: 41,
    category: "mechanisms_substitution",
    title: "נטייה לשחלופי קרבוקטיון",
    text: "עבור ארבעת הקרבוקטיונים הבאים, אילו מהם בעלי נטייה גבוהה במיוחד לעבור שחלוף (rearrangement) ליצירת קרבוקטיון יציב יותר?",
    svg: `<svg viewBox="0 0 400 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- I: 3,3-dimethyl-2-butyl cation -->
      <g transform="translate(10, 15)">
        <line x1="10" y1="50" x2="35" y2="50" stroke="#f8fafc" stroke-width="2"/>
        <line x1="35" y1="50" x2="60" y2="30" stroke="#f8fafc" stroke-width="2"/>
        <line x1="60" y1="30" x2="85" y2="50" stroke="#f8fafc" stroke-width="2"/>
        <!-- methyls on C3 -->
        <line x1="60" y1="30" x2="60" y2="5" stroke="#f8fafc" stroke-width="2"/>
        <!-- positive charge on C2 -->
        <circle cx="35" cy="50" r="8" fill="#f43f5e" opacity="0.2"/>
        <text x="35" y="53" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">+</text>
        <text x="45" y="80" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">I</text>
      </g>
      <!-- II: 3-methyl-2-butyl cation -->
      <g transform="translate(110, 15)">
        <line x1="10" y1="50" x2="35" y2="50" stroke="#f8fafc" stroke-width="2"/>
        <line x1="35" y1="50" x2="60" y2="30" stroke="#f8fafc" stroke-width="2"/>
        <line x1="60" y1="30" x2="85" y2="50" stroke="#f8fafc" stroke-width="2"/>
        <!-- positive charge on C2 -->
        <circle cx="35" cy="50" r="8" fill="#f43f5e" opacity="0.2"/>
        <text x="35" y="53" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">+</text>
        <text x="45" y="80" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">II</text>
      </g>
      <!-- III: 2-methyl-2-butyl cation -->
      <g transform="translate(210, 15)">
        <line x1="10" y1="50" x2="35" y2="50" stroke="#f8fafc" stroke-width="2"/>
        <line x1="35" y1="50" x2="60" y2="30" stroke="#f8fafc" stroke-width="2"/>
        <line x1="35" y1="50" x2="35" y2="25" stroke="#f8fafc" stroke-width="2"/>
        <!-- positive charge on C2 (tertiary) -->
        <circle cx="35" cy="50" r="8" fill="#38bdf8" opacity="0.2"/>
        <text x="35" y="53" fill="#38bdf8" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">+</text>
        <text x="45" y="80" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">III</text>
      </g>
      <!-- IV: 2-pentyl cation -->
      <g transform="translate(300, 15)">
        <line x1="10" y1="50" x2="35" y2="50" stroke="#f8fafc" stroke-width="2"/>
        <line x1="35" y1="50" x2="60" y2="30" stroke="#f8fafc" stroke-width="2"/>
        <line x1="60" y1="30" x2="85" y2="50" stroke="#f8fafc" stroke-width="2"/>
        <!-- positive charge on C3 -->
        <circle cx="60" cy="30" r="8" fill="#f8fafc" opacity="0.2"/>
        <text x="60" y="33" fill="#f8fafc" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">+</text>
        <text x="45" y="80" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">IV</text>
      </g>
    </svg>`,
    options: [
      "קרבוקטיונים I ו-II בלבד (שניהם שניוניים וסמוכים לפחמנים מותמרים ביותר, ויכולים לעבור שחלוף לקרבוקטיון שלישוני)",
      "קרבוקטיון III בלבד (כי הוא שלישוני ויכול לעבור שחלוף בקלות רבה)",
      "קרבוקטיונים II ו-IV בלבד",
      "כל הארבעה בעלי אותה נטייה לשחלוף"
    ],
    correctIndex: 0,
    explanation: `זוהי שאלת הבנה קלאסית ממבחנים בנושא יציבות ושחלוף קרבוקטיונים:
    
**שלב 1: ניתוח יציבות התחלתית**
- **צורון I (3,3-dimethyl-2-butyl cation):** קרבוקטיון שניוני (2°). הוא סמוך לפחמן רביעוני הנושא שלוש קבוצות מתיל.
- **צורון II (3-methyl-2-butyl cation):** קרבוקטיון שניוני (2°). הוא סמוך לפחמן שלישוני הנושא מימן ומתיל.
- **צורון III (2-methyl-2-butyl cation):** קרבוקטיון שלישוני (3°). הוא כבר יציב מאוד ולכן אין לו כוח מניע (driving force) תרמודינמי להשתחלף.
- **צורון IV (3-pentyl cation):** קרבוקטיון שניוני (2°). הוא מוקף בפחמנים שניוניים/ראשוניים פשוטים. מעבר הידריד ייתן רק קרבוקטיון שניוני אחר באותה רמת אנרגיה (ללא שיפור ביציבות).

**שלב 2: ניתוח אפשרות השחלוף ליציב יותר**
- **עבור I:** מעבר של קבוצת מתיל (Methyl shift) מפחמן רביעוני סמוך לפחמן החיובי הופך את הקרבוקטיון השניוני ל**קרבוקטיון שלישוני (3°) יציב בהרבה**. התהליך מהיר ומועדף ביותר.
- **עבור II:** מעבר של יון הידריד (Hydride shift) מהפחמן השלישוני הסמוך ל-C2 הופך את הקרבוקטיון השניוני ל**קרבוקטיון שלישוני (3°) יציב בהרבה**. תהליך זה בעל אנרגיית שפעול נמוכה במיוחד.
- לכן, **I ו-II הם בעלי הנטייה החזקה ביותר להשתחלף**.`
  },
  {
    id: 42,
    category: "resonance_structures",
    title: "זיהוי נוקלאופילים ואי-נוקלאופילים",
    text: "על פי המבנה האלקטרוני וזוגות האלקטרונים, מי מהחומרים הבאים אינו יכול לתפקד כנוקלאופיל (Nucleophile)?",
    svg: `<svg viewBox="0 0 320 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Show structures -->
      <g transform="translate(10, 15)">
        <text x="30" y="30" fill="#f43f5e" font-family="Arial" font-size="14" font-weight="bold">A. H-H</text>
        <text x="30" y="70" fill="#38bdf8" font-family="Arial" font-size="14" font-weight="bold">B. CH3-OH</text>
      </g>
      <g transform="translate(170, 15)">
        <text x="30" y="30" fill="#38bdf8" font-family="Arial" font-size="14" font-weight="bold">C. CH2=CH2</text>
        <text x="30" y="70" fill="#38bdf8" font-family="Arial" font-size="14" font-weight="bold">D. N(CH3)3</text>
      </g>
    </svg>`,
    options: [
      "H2 (גז מימן)",
      "CH3OH (מתנול)",
      "CH2=CH2 (אתילן)",
      "N(CH3)3 (טרימתילאמין)"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח שיטתי בשאלת יסוד זו על נוקלאופילים:
    
**שלב 1: מה הופך מולקולה לנוקלאופיל?**
נוקלאופיל ("אוהב גרעין/חיובי") הוא בסיס לואיס - צורון התורם זוג אלקטרונים ליצירת קשר קוולנטי חדש. כדי שמולקולה תהיה נוקלאופיל, היא חייבת להחזיק באחד מהשניים:
1. **זוג אלקטרונים בלתי קושר (Lone pair):** כפי שיש לחמצן במתנול ($\ce{CH3\ddot{O}H}$) ולחנקן בטרימתילאמין ($\ce{\ddot{N}(CH3)3}$).
2. **אלקטרוני פאי ($\pi$ electrons) זמינים:** כפי שיש בקשר הכפול של אלקנים ($\ce{CH2=CH2}$). ענן הפאי חשוף ומכיל צפיפות אלקטרונים גבוהה שיכולה לתקוף אלקטרופילים.

**שלב 2: ניתוח גז מימן (H2)**
- במולקולת $\ce{H-H}$ (מימן), שני האלקטרונים היחידים במולקולה נעולים בתוך **קשר סיגמא ($\sigma$) יחיד ויציב מאוד**.
- למימן אין זוג אלקטרונים חופשי, ואין לו קשר פאי.
- מאחר ואין לו אלקטרונים פנויים או קשרים חלשים לתרומה, **H2 אינו מסוגל לתפקד כנוקלאופיל** בתגובות אורגניות.`
  },
  {
    id: 43,
    category: "mechanisms_substitution",
    title: "מהירות סולבוליזה במנגנון SN1",
    text: "איזה מהאלקיל הלידים הבאים יעבור תגובת סולבוליזה (solvolysis) בממס אתנול (EtOH) בקצב המהיר ביותר?",
    svg: `<svg viewBox="0 0 350 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- A: 3-bromocyclohexene -->
      <g transform="translate(10, 10)">
        <polygon points="30,20 60,20 75,45 60,70 30,70 15,45" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <line x1="30" y1="20" x2="60" y2="20" stroke="#f8fafc" stroke-width="4"/> <!-- double bond -->
        <line x1="75" y1="45" x2="95" y2="45" stroke="#38bdf8" stroke-width="2"/>
        <text x="98" y="49" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold">Br</text>
        <text x="45" y="90" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">א'</text>
      </g>
      <!-- B: bromocyclohexane -->
      <g transform="translate(120, 10)">
        <polygon points="30,20 60,20 75,45 60,70 30,70 15,45" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <line x1="75" y1="45" x2="95" y2="45" stroke="#f8fafc" stroke-width="2"/>
        <text x="98" y="49" fill="#f8fafc" font-family="Arial" font-size="11" font-weight="bold">Br</text>
        <text x="45" y="90" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">ב'</text>
      </g>
      <!-- C: 1-bromocyclohexene -->
      <g transform="translate(230, 10)">
        <polygon points="30,20 60,20 75,45 60,70 30,70 15,45" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <line x1="30" y1="20" x2="60" y2="20" stroke="#f8fafc" stroke-width="4"/> <!-- double bond -->
        <line x1="60" y1="20" x2="75" y2="5" stroke="#f43f5e" stroke-width="2"/>
        <text x="75" y="3" fill="#f43f5e" font-family="Arial" font-size="11" font-weight="bold">Br</text>
        <text x="45" y="90" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">ג'</text>
      </g>
    </svg>`,
    options: [
      "מולקולה א' (3-bromocyclohexene), המניבה קרבוקטיון אלילי יציב במיוחד בזכות רזוננס",
      "מולקולה ב' (bromocyclohexane), המניבה קרבוקטיון שניוני פשוט ללא רזוננס",
      "מולקולה ג' (1-bromocyclohexene), מכיוון שהיא אלקן מצומד",
      "שלושת המצעים יגיבו באותה מהירות בדיוק"
    ],
    correctIndex: 0,
    explanation: `שאלה נפוצה מאוד במבחנים המשלבת יציבות קרבוקטיונים ורזוננס:
    
**שלב 1: הבנת מנגנון הסולבוליזה (SN1)**
- סולבוליזה באתנול ($\ce{EtOH}$ הוא נוקלאופיל חלש וממס פרוטי) מתרחשת במנגנון **SN1**.
- השלב קובע הקצב הוא עזיבת קבוצת הברום לקבלת יון קרבוקטיון.
- מהירות התגובה תלויה ישירות ביציבות הקרבוקטיון שנוצר.

**שלב 2: ניתוח יציבות הקרבוקטיון בכל מקרה**
- **מצע א' (3-bromocyclohexene):** עזיבת הברום מותירה מטען חיובי על פחמן סמוך לקשר כפול. זהו **קרבוקטיון אלילי (Allylic carbocation)**. המטען החיובי מיוצב על ידי אל-לוקליזציה (רזוננס) עם אלקטרוני הפאי של הקשר הכפול:
  $$\ce{[C^+-C=C <=> C=C-C^+]}$$
  ייצוב רזונטיבי זה מוריד משמעותית את אנרגיית המעבר, ולכן תגובה זו מהירה ביותר.
- **מצע ב' (bromocyclohexane):** עזיבת הברום מותירה קרבוקטיון שניוני פשוט בתוך טבעת. הוא מיוצב רק על ידי אינדוקציה והיפרקונפוגציה (יציב בינוני, מגיב לאט).
- **מצע ג' (1-bromocyclohexene):** הברום מחובר ישירות לפחמן של קשר כפול (הליד וינילי). עזיבת ברום תיצור **קרבוקטיון וינילי** בלתי יציב באופן קיצוני (הפחמן החיובי בעל היברידיזציה sp שבה המטען החיובי קרוב מאוד לגרעין). לכן, מצע זה **אינו מגיב כלל ב-SN1**.

**לסיכום:** מצע א' יוצר קרבוקטיון אלילי מיוצב רזוננס ולכן הוא המהיר ביותר.`
  },
  {
    id: 44,
    category: "stereochemistry_centers",
    title: "שינוי קונפיגורציה בתגובות התמרה",
    text: "בתגובת SN2 מלאה של המולקולה (S)-2-bromobutane עם יון ציאניד (⁻CN), מה תהיה הקונפיגורציה של התוצר 2-methylbutanenitrile?",
    svg: `<svg viewBox="0 0 320 125" width="100%" height="125" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Reactant (S) -->
      <g transform="translate(10, 15)">
        <path d="M 20,80 L 50,50 L 90,50" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <line x1="90" y1="50" x2="110" y2="80" stroke="#f8fafc" stroke-width="2"/>
        <!-- Br on wedge (up) -->
        <polygon points="50,50 45,20 55,20" fill="#f43f5e"/>
        <text x="50" y="15" fill="#f43f5e" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">Br</text>
        <text x="50" y="95" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">(S)-2-bromobutane</text>
      </g>
      <!-- SN2 arrow -->
      <g transform="translate(130, 15)">
        <line x1="0" y1="50" x2="50" y2="50" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="25" y="42" fill="#38bdf8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">CN⁻</text>
        <text x="25" y="62" fill="#94a3b8" font-family="Arial" font-size="9" text-anchor="middle">SN2</text>
      </g>
      <!-- Product (R) -->
      <g transform="translate(200, 15)">
        <path d="M 20,80 L 50,50 L 90,50" fill="none" stroke="#f8fafc" stroke-width="2"/>
        <line x1="90" y1="50" x2="110" y2="80" stroke="#f8fafc" stroke-width="2"/>
        <!-- CN on dash (down/in) -->
        <line x1="50" y1="50" x2="50" y2="22" stroke="#10b981" stroke-width="2" stroke-dasharray="2,2"/>
        <text x="50" y="15" fill="#10b981" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">CN</text>
        <text x="50" y="95" fill="#94a3b8" font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">(R)-תוצר</text>
      </g>
    </svg>`,
    options: [
      "(R) - מכיוון שהתקיים היפוך קונפיגורציה (Walden inversion) וסדר העדיפויות CIP של קבוצת הציאניד זהה לזה של הברום",
      "(S) - מכיוון שלמרות היפוך המיקום, קבוצת הציאניד שינתה את דירוג הקדימויות של פחמן 2",
      "תערובת רצימית של R ו-S עקב יצירת קרבוקטיון מישורי",
      "התוצר אינו כיראלי עקב אובדן הברום"
    ],
    correctIndex: 0,
    explanation: `שאלה מצוינת בנושא סטריאוכימיה של מנגנוני התמרה:

**שלב 1: מנגנון התגובה (SN2)**
- התגובה נעשית עם יון ציאניד ($\ce{CN-}$), שהוא נוקלאופיל חזק וטעון, המצביע על מנגנון **SN2**.
- מנגנון SN2 מתרחש בשלב אחד מתואם שבו הנוקלאופיל תוקף מהצד האחורי (Backside attack) של הקבוצה העוזבת ($\ce{Br-}$).
- התקפה אחורית זו גורמת פיזית ל**היפוך מרחבי מלא (Walden inversion)** של שלוש הקבוצות הנותרות על הפחמן הכיראלי (כמו מטריה המתהפכת ברוח).

**שלב 2: קביעת עדיפויות CIP (Cahn-Ingold-Prelog)**
נבדוק את סדר הקדימויות של ארבע הקבוצות המחוברות לפחמן הכיראלי במגיב ובתוצר:
- **במגיב (2-bromobutane):**
  1. $\ce{-Br}$ (עדיפות 1)
  2. $\ce{-CH2CH3}$ (עדיפות 2)
  3. $\ce{-CH3}$ (עדיפות 3)
  4. $\ce{-H}$ (עדיפות 4)
- **בתוצר (2-methylbutanenitrile):**
  1. $\ce{-CN}$ (עדיפות 1 - הפחמן של הציאניד קשור בקשר משולש לחנקן, ולכן נחשב כקשור לשלושה חנקנים, מה שמעניק לו עדיפות על פני פחמן האתיל הקשור לפחמן ושני מימנים).
  2. $\ce{-CH2CH3}$ (עדיפות 2)
  3. $\ce{-CH3}$ (עדיפות 3)
  4. $\ce{-H}$ (עדיפות 4)

**שלב 3: קביעת הקונפיגורציה הסופית**
- מכיוון שהקבוצה הנכנסת ($\ce{-CN}$) מחליפה ישירות את הקבוצה העוזבת ($\ce{-Br}$) בדירוג העדיפות הראשון (שניהם במקום 1), והתרחש היפוך גיאומטרי:
- הקונפיגורציה הפיזית והכימית מתהפכות בדיוק מ-**S** ל-**R**.`
  },
  {
    id: 45,
    category: "stereochemistry_relationships",
    title: "תגובות סטריאוספציפיות ויצירת תוצר מיזו",
    text: "איזו מתגובות הסיפוח הבאות לקשר כפול תפיק מולקולת מיזו (Meso compound) יחידה ואקיראלית כתוצר עיקרי?",
    svg: `<svg viewBox="0 0 350 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- cis-2-butene + OsO4 -->
      <g transform="translate(10, 10)">
        <line x1="10" y1="50" x2="50" y2="50" stroke="#f8fafc" stroke-width="4"/>
        <line x1="10" y1="54" x2="50" y2="54" stroke="#f8fafc" stroke-width="2"/>
        <line x1="10" y1="52" x2="-5" y2="70" stroke="#f8fafc" stroke-width="2"/>
        <line x1="50" y1="52" x2="65" y2="70" stroke="#f8fafc" stroke-width="2"/>
        
        <text x="80" y="55" fill="#f8fafc" font-family="Arial" font-size="12" font-weight="bold">+</text>
        <text x="105" y="45" fill="#38bdf8" font-family="Arial" font-size="10" text-anchor="middle">OsO4</text>
        <text x="105" y="62" fill="#38bdf8" font-family="Arial" font-size="10" text-anchor="middle">H2O2, OH-</text>
        <line x1="125" y1="52" x2="165" y2="52" stroke="#f8fafc" stroke-width="2" marker-end="url(#arrow)"/>
        
        <!-- Target Meso Diol -->
        <g transform="translate(175, 10)">
          <path d="M 10,60 L 40,40 L 70,60" fill="none" stroke="#f8fafc" stroke-width="2"/>
          <polygon points="40,40 35,15 45,15" fill="#10b981"/>
          <polygon points="70,60 65,85 75,85" fill="#10b981"/>
          <!-- Wait, showing syn on cis -->
          <text x="40" y="10" fill="#10b981" font-family="Arial" font-size="9" font-weight="bold" text-anchor="middle">OH</text>
          <text x="70" y="97" fill="#10b981" font-family="Arial" font-size="9" font-weight="bold" text-anchor="middle">OH</text>
        </g>
      </g>
    </svg>`,
    options: [
      "סיפוח OsO4 (סיפוח Syn) ל-cis-2-butene",
      "סיפוח Br2 (סיפוח Anti) ל-cis-2-butene",
      "סיפוח OsO4 (סיפוח Syn) ל-trans-2-butene",
      "סיפוח HBr ל-trans-2-butene"
    ],
    correctIndex: 0,
    explanation: `להלן הסבר לעומק את נושא הסטריאוספציפיות (Stereospecificity) – אחד הנושאים החשובים ביותר בבחינות:

**שלב 1: הבנת ההגדרות**
- **תגובה סטריאוספציפית:** תגובה שבה המבנה הסטריאוכימי של המגיב (cis או trans) קובע באופן בלעדי וישיר את הסטריאוכימיה של התוצר.
- **סיפוח Syn:** הוספת שתי הקבוצות מאותו צד של הקשר הכפול (למשל, שתי קבוצות $\ce{-OH}$ נכנסות שתיהן כ-Wedges).
- **סיפוח Anti:** הוספת שתי הקבוצות מצדדים מנוגדים של הקשר הכפול (למשל, אטום ברום אחד נכנס כ-Wedge והשני כ-Dash).

**שלב 2: שימוש בחוקי הברזל של סיפוחים (CAR / TAM)**
עבור אלקנים סימטריים מטיפוס 2-butene:
1. **סיפוח Anti לאלקן Cis** ⬅️ נותן תערובת **רצימית (Racemic)**. קיצור: **CAR** (Cis + Anti = Racemic).
2. **סיפוח Anti לאלקן Trans** ⬅️ נותן תוצר **מיזו (Meso)**. קיצור: **TAM** (Trans + Anti = Meso).
3. **סיפוח Syn לאלקן Cis** ⬅️ נותן תוצר **מיזו (Meso)**. (הפוך מ-CAR).
4. **סיפוח Syn לאלקן Trans** ⬅️ נותן תערובת **רצימית (Racemic)**. (הפוך מ-TAM).

**שלב 3: בדיקת האפשרויות בשאלה**
- **אפשרות 1: סיפוח $\ce{OsO4}$ ל-cis-2-butene.**
  - המגיב הוא **cis**-alkene.
  - התגובה היא **Syn**-addition (חמצון לדיול).
  - לפי הכלל, סיפוח Syn לאלקן Cis נותן תוצר **Meso**. בתוצר זה שתי קבוצות ה-OH פונות לאותו הכיוון במרחב, ומאחר והמולקולה סימטרית יש לה מישור סימטריה פנימי. היא אקיראלית ואינה פעילה אופטית (תוצר מיזו יחיד). לכן זו התשובה הנכונה!
  
- **אפשרות 2: סיפוח $\ce{Br2}$ ל-cis-2-butene.**
  - מגיב cis + סיפוח Anti (ברומינציה). לפי כלל **CAR**, התוצר הוא תערובת רצימית (אננטיומרים R,R ו-S,S).
  
- **אפשרות 3: סיפוח $\ce{OsO4}$ ל-trans-2-butene.**
  - מגיב trans + סיפוח Syn. התוצר הוא תערובת רצימית (כי trans + syn = racemic).`
  }
  ,
  {
    id: 46,
    category: "nomenclature_alkanes",
    title: "נומנקלטורה של אלקנים מסועפים מורכבים",
    text: "מהו השם הסיסטמתי (IUPAC) הנכון עבור האלקן הבא המכיל מתמיר מסועף?",
    svg: `<svg viewBox="0 0 340 140" width="100%" height="140" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Octane chain -->
      <line x1="30" y1="90" x2="70" y2="60" stroke="#f8fafc" stroke-width="3"/>
      <line x1="70" y1="60" x2="110" y2="90" stroke="#f8fafc" stroke-width="3"/>
      <line x1="110" y1="90" x2="150" y2="60" stroke="#f8fafc" stroke-width="3"/>
      <line x1="150" y1="60" x2="190" y2="90" stroke="#f8fafc" stroke-width="3"/>
      <line x1="190" y1="90" x2="230" y2="60" stroke="#f8fafc" stroke-width="3"/>
      <line x1="230" y1="60" x2="270" y2="90" stroke="#f8fafc" stroke-width="3"/>
      <line x1="270" y1="90" x2="310" y2="60" stroke="#f8fafc" stroke-width="3"/>
      <!-- Isopropyl at C4 (150, 60) -->
      <line x1="150" y1="60" x2="150" y2="25" stroke="#38bdf8" stroke-width="3"/>
      <line x1="150" y1="25" x2="120" y2="10" stroke="#38bdf8" stroke-width="3"/>
      <line x1="150" y1="25" x2="180" y2="10" stroke="#38bdf8" stroke-width="3"/>
      <!-- Numbers for carbon identification -->
      <text x="30" y="105" fill="#94a3b8" font-size="10" font-family="Arial">1</text>
      <text x="70" y="50" fill="#94a3b8" font-size="10" font-family="Arial">2</text>
      <text x="110" y="105" fill="#94a3b8" font-size="10" font-family="Arial">3</text>
      <text x="145" y="75" fill="#38bdf8" font-size="11" font-weight="bold" font-family="Arial">4</text>
      <text x="190" y="105" fill="#94a3b8" font-size="10" font-family="Arial">5</text>
      <text x="230" y="50" fill="#94a3b8" font-size="10" font-family="Arial">6</text>
      <text x="270" y="105" fill="#94a3b8" font-size="10" font-family="Arial">7</text>
      <text x="310" y="50" fill="#94a3b8" font-size="10" font-family="Arial">8</text>
    </svg>`,
    options: [
      "4-(1-methylethyl)octane",
      "4-isopropyloctane",
      "2-methyl-3-propylheptane",
      "5-(1-methylethyl)octane"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח שיטתי של קביעת שם ה-IUPAC הסיסטמתי:

**שלב 1: מציאת השרשרת הראשית הארוכה ביותר**
השרשרת הארוכה ביותר שמכילה את מירב הפחמנים היא שרשרת בת 8 פחמנים (Octane).

**שלב 2: מספור השרשרת הראשית**
עלינו למספר את השרשרת כך שהמתמיר יקבל את המספר הנמוך ביותר:
- מספור משמאל לימין: המתמיר נמצא על פחמן 4.
- מספור מימין לשמאל: המתמיר נמצא על פחמן 5.
לכן, המספור הנכון הוא משמאל לימין, והמתמיר יושב על פחמן מספר 4.

**שלב 3: זיהוי וקריאת המתמיר**
המתמיר המחובר לפחמן 4 הוא קבוצת איסופרופיל (Isopropyl).
על פי כללי IUPAC הרשמיים והסיסטמתיים ביותר (הנדרשים במבחני האוניברסיטה), שם המתמיר המסועף נקבע לפי השרשרת הארוכה ביותר בתוך המתמיר החל מהפחמן המחובר לשרשרת הראשית:
- הפחמן המחובר לשרשרת הראשית מסומן כ-1' של המתמיר.
- שרשרת זו בת שני פחמנים (ethyl) ועליה מתיל בעמדה 1'.
- לכן, השם הסיסטמתי של המתמיר הוא **(1-methylethyl)**.

שילוב הכללים נותן את השם הסיסטמתי המלא: **4-(1-methylethyl)octane**.`
  },
  {
    id: 47,
    category: "nomenclature_alkanes",
    title: "נומנקלטורה של מערכות דו-טבעתיות (Bicyclic)",
    text: "מהו השם הסיסטמתי הנכון עבור הפחמימן הדו-טבעתי הבא המכיל גשר?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Bicyclo[2.2.1]heptane system -->
      <line x1="80" y1="80" x2="110" y2="110" stroke="#f8fafc" stroke-width="3"/>
      <line x1="110" y1="110" x2="160" y2="110" stroke="#f8fafc" stroke-width="3"/>
      <line x1="160" y1="110" x2="190" y2="80" stroke="#f8fafc" stroke-width="3"/>
      <line x1="80" y1="80" x2="135" y2="45" stroke="#f8fafc" stroke-width="3"/>
      <line x1="135" y1="45" x2="190" y2="80" stroke="#f8fafc" stroke-width="3"/>
      <!-- Bridge C7 -->
      <line x1="80" y1="80" x2="135" y2="85" stroke="#38bdf8" stroke-width="3"/>
      <line x1="135" y1="85" x2="190" y2="80" stroke="#38bdf8" stroke-width="3"/>
      <!-- Labels for bridgeheads -->
      <text x="65" y="85" fill="#f8fafc" font-size="11" font-weight="bold">1</text>
      <text x="200" y="85" fill="#f8fafc" font-size="11" font-weight="bold">4</text>
    </svg>`,
    options: [
      "bicyclo[2.2.1]heptane",
      "bicyclo[3.2.1]octane",
      "bicyclo[2.2.2]octane",
      "bicyclo[3.1.1]heptane"
    ],
    correctIndex: 0,
    explanation: `להלן הסבר על כללי שיטת הדו-טבעת (Bicyclic Nomenclature):

**שלב 1: זיהוי פחמני הגשר (Bridgeheads)**
פחמני הגשר הם הפחמנים המשותפים לשתי הטבעות (המסומנים כ-1 ו-4 בשרטוט).

**שלב 2: ספירת פחמנים במסלולים השונים**
נספור את מספר הפחמנים בכל אחד משלושת המסלולים המחברים את שני פחמני הגשר (לא כולל פחמני הגשר עצמם):
- מסלול עליון: 2 פחמנים (פחמנים 5 ו-6).
- מסלול תחתון: 2 פחמנים (פחמנים 2 ו-3).
- מסלול הגשר המרכזי: פחמן 1 (פחמן 7, מסומן בכחול).

**שלב 3: כתיבת השם במבנה Bicyclo[X.Y.Z]alkane**
- רושמים את מספרי הפחמנים בסדר יורד בסוגריים מרובעים: **[2.2.1]**.
- סופרים את סך כל הפחמנים במולקולה: 2 פחמני גשר + 2 + 2 + 1 = 7 פחמנים.
- אלקן בעל 7 פחמנים נקרא Heptane.

לכן השם המלא הוא **bicyclo[2.2.1]heptane** (הידוע גם בשם הנפוץ נורבורנאן - Norbornane).`
  },
  {
    id: 48,
    category: "nomenclature_alkanes",
    title: "קביעת סדר מספור בציקלואלקן רב-מותמר",
    text: "מהו שם ה-IUPAC הנכון עבור הציקלואלקן הבא המכיל מתמירי אתיל ומתיל?",
    svg: `<svg viewBox="0 0 300 150" width="100%" height="150" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Hexagon ring -->
      <polygon points="120,40 160,65 160,105 120,130 80,105 80,65" fill="none" stroke="#f8fafc" stroke-width="3"/>
      <!-- Ethyl at C1 (120, 40) -->
      <line x1="120" y1="40" x2="120" y2="15" stroke="#38bdf8" stroke-width="3"/>
      <line x1="120" y1="15" x2="145" y2="5" stroke="#38bdf8" stroke-width="3"/>
      <!-- Methyl at C2 (160, 65) -->
      <line x1="160" y1="65" x2="190" y2="55" stroke="#f43f5e" stroke-width="3"/>
      <!-- Methyl at C4 (120, 130) -->
      <line x1="120" y1="130" x2="120" y2="155" stroke="#f43f5e" stroke-width="3"/>
      <!-- Identification Labels -->
      <text x="115" y="55" fill="#38bdf8" font-size="11" font-weight="bold">1</text>
      <text x="150" y="75" fill="#f43f5e" font-size="11" font-weight="bold">2</text>
      <text x="125" y="123" fill="#f43f5e" font-size="11" font-weight="bold">4</text>
    </svg>`,
    options: [
      "1-ethyl-2,4-dimethylcyclohexane",
      "2-ethyl-1,4-dimethylcyclohexane",
      "4-ethyl-1,3-dimethylcyclohexane",
      "1-ethyl-3,5-dimethylcyclohexane"
    ],
    correctIndex: 0,
    explanation: `להלן כללי מספור טבעות ציקלואלקן בעלות מספר מתמירים שונים:

**שלב 1: קביעת קבוצות המתמירים**
בטבעת הציקלוהקסאן ישנם שלושה מתמירים: קבוצת אתיל (Ethyl) ושתי קבוצות מתיל (Methyl).

**שלב 2: קביעת סט המספרים הנמוך ביותר (Lowest Locants rule)**
עלינו לבחור מסלול מספור המעניק לנקודות הקישור את המספרים הנמוכים ביותר האפשריים:
- אם נתחיל מהאתיל וננוע לכיוון ימין (עם השעון): המתמירים יהיו בעמדות **1, 2, 4**. (זהו סט המספרים הנמוך ביותר האפשרי).
- אם נתחיל מהמתיל הימני וננוע שמאלה (נגד השעון): נקבל עמדות 1, 2, 5 (גבוה יותר).
- אם נתחיל מהמתיל התחתון: נקבל עמדות 1, 3, 4 (גבוה יותר).
לכן, המתמירים חייבים לשבת על פחמנים 1, 2 ו-4.

**שלב 3: מתן עדיפות במקרה של שוויון (Alphabetical Priority)**
בסט 1,2,4 יש לנו שתי אפשרויות מספור תיאורטיות:
1. פחמן 1 מוקצה לאתיל, פחמן 2 למתיל ופחמן 4 למתיל השני ⬅️ **1-ethyl-2,4-dimethylcyclohexane**.
2. פחמן 1 מוקצה למתיל, פחמן 2 לאתיל ו-4 למתיל השני ⬅️ **2-ethyl-1,4-dimethylcyclohexane** (המספרים זהים אך אתיל על 2).
על פי כללי IUPAC, כאשר יש שוויון במספרים, ניתן את המספר הנמוך ביותר (1) למתמיד בעל העדיפות האלפביתית ראשונה:
- **E**thyl מופיע לפני **M**ethyl.
- לכן אתיל מקבל את המספר 1, והשם הנכון הוא **1-ethyl-2,4-dimethylcyclohexane**.`
  },
  {
    id: 49,
    category: "nomenclature_functional",
    title: "סדר קדימויות של קבוצות פונקציונליות מרובות",
    text: "מהו שם ה-IUPAC הנכון עבור המולקולה הבאה המכילה אלכוהול, קשר כפול והלוגן?",
    svg: `<svg viewBox="0 0 320 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Pentene chain -->
      <line x1="50" y1="80" x2="90" y2="50" stroke="#f8fafc" stroke-width="3"/>
      <line x1="90" y1="50" x2="130" y2="80" stroke="#f8fafc" stroke-width="3"/>
      <line x1="130" y1="80" x2="180" y2="50" stroke="#f8fafc" stroke-width="5"/> <!-- double bond -->
      <line x1="133" y1="74" x2="177" y2="44" stroke="#f8fafc" stroke-width="2"/>
      <line x1="180" y1="50" x2="220" y2="80" stroke="#f8fafc" stroke-width="3"/>
      <!-- OH at C2 (90, 50) -->
      <line x1="90" y1="50" x2="90" y2="25" stroke="#38bdf8" stroke-width="3"/>
      <text x="82" y="20" fill="#38bdf8" font-size="12" font-weight="bold">OH</text>
      <!-- Br at C5 (220, 80) -->
      <line x1="220" y1="80" x2="220" y2="105" stroke="#f43f5e" stroke-width="3"/>
      <text x="212" y="122" fill="#f43f5e" font-size="12" font-weight="bold">Br</text>
      <!-- Numbering labels -->
      <text x="45" y="95" fill="#94a3b8" font-size="10">1</text>
      <text x="85" y="62" fill="#38bdf8" font-size="10">2</text>
      <text x="125" y="95" fill="#94a3b8" font-size="10">3</text>
      <text x="175" y="62" fill="#94a3b8" font-size="10">4</text>
      <text x="215" y="95" fill="#f43f5e" font-size="10">5</text>
    </svg>`,
    options: [
      "(E)-5-bromopent-3-en-2-ol",
      "(Z)-5-bromopent-3-en-2-ol",
      "(E)-1-bromopent-2-en-4-ol",
      "(E)-5-bromopent-2-en-4-ol"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח לקביעת השם הסיסטמתי של מולקולה רב-פונקציונלית:

**שלב 1: זיהוי הקבוצה הפונקציונלית בעלת העדיפות הגבוהה ביותר**
במולקולה זו יש שלוש קבוצות: אלכוהול ($\ce{-OH}$), קשר כפול ($\ce{C=C}$) והלוגן ($\ce{-Br}$).
סדר קדימויות של קבוצות פונקציונליות לקביעת הסיומת של המולקולה הוא:
**אלכוהול > אלקן (קשר כפול) > הלוגן**.
לכן, המולקולה תסתיים ב-**ol** (אלכוהול) והוא חייב לקבל את המספור הנמוך ביותר האפשרי.

**שלב 2: מספור השרשרת הראשית**
- מספור משמאל לימין: קבוצת ה-$\ce{-OH}$ מקבלת את עמדה 2 ⬅️ **pent-3-en-2-ol**.
- מספור מימין לשמאל: קבוצת ה-$\ce{-OH}$ מקבלת את עמדה 4.
לכן, המספור הנכון הוא משמאל לימין (פחמנים 1 עד 5), מה שנותן להלוגן ברום את עמדה 5 ולקשר הכפול את עמדה 3.

**שלב 3: קביעת הסטריאוכימיה של הקשר הכפול (E/Z)**
נסתכל על פחמני הקשר הכפול (3 ו-4):
- בפחמן 3: הקבוצה בעלת העדיפות הגבוהה היא $\ce{-CH(OH)CH3}$ (השרשרת הפחמנית עם האלכוהול) והיא פונה למעלה/שמאלה.
- בפחמן 4: הקבוצה בעלת העדיפות הגבוהה היא $\ce{-CH2Br}$ והיא פונה למטה/ימינה.
מאחר ושתי הקבוצות בעלות העדיפות הגבוהה פונות לכיוונים מנוגדים ביחס לקשר הכפול, לקשר יש קונפיגורציית **E** (Trans).

שילוב הכללים נותן: **(E)-5-bromopent-3-en-2-ol**.`
  },
  {
    id: 50,
    category: "resonance_structures",
    title: "יציבות יחסית של מבני רזוננס – חוק האוקטט",
    text: "עבור שני מבני הרזוננס הבאים של צורון הביניים, מהו המשפט הנכון לגבי יציבותם היחסית?",
    svg: `<svg viewBox="0 0 350 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Struct I -->
      <text x="20" y="60" fill="#f8fafc" font-size="14" font-family="Arial" font-weight="bold">H₃C—O—CH₂⁺ (I)</text>
      <!-- Resonance double arrow -->
      <text x="165" y="60" fill="#38bdf8" font-size="16" font-weight="bold">↔</text>
      <!-- Struct II -->
      <text x="200" y="60" fill="#f8fafc" font-size="14" font-family="Arial" font-weight="bold">H₃C—O⁺=CH₂ (II)</text>
    </svg>`,
    options: [
      "מבנה II יציב בהרבה ממבנה I, מכיוון שבו לכל האטומים (כולל הפחמן והחמצן) יש אוקטט מלא.",
      "מבנה I יציב בהרבה ממבנה II, מכיוון שהמטען החיובי נמצא על הפחמן ולא על החמצן האלקטרושלילי.",
      "שני המבנים תורמים במידה שווה לחלוטין להיבריד הרזוננס כי הם מבני לואיס תקינים.",
      "מבנה I יציב יותר מכיוון שחמצן טעון חיובי מבטל לחלוטין את הרזוננס של המולקולה."
    ],
    correctIndex: 0,
    explanation: `זהו אחד הכללים החשובים והנפוצים ביותר במבחנים לגבי יציבות מבני רזוננס:

**חוק היסוד של יציבות רזוננס:**
1. **חוק האוקטט (הכלל הראשון והחזק ביותר):** מבנה שבו לכל האטומים יש אוקטט מלא (8 אלקטרונים ברמת הערכיות) תמיד יהיה יציב משמעותית ממבנה שבו לאחד האטומים יש אוקטט חסר (למשל פחמן עם 6 אלקטרונים - קרבוקטיון).
2. **אלקטרושליליות (הכלל השני):** רק כאשר לשני המבנים בהשוואה יש אוקטט מלא, נעדיף את המבנה שבו המטען השלילי נמצא על האטום האלקטרושלילי יותר או המטען החיובי על האטום הפחות אלקטרושלילי.

**ניתוח המבנים בשאלה:**
- **במבנה I ($\ce{H3C-O-CH2+}$):** הפחמן הימני הוא קרבוקטיון ($\ce{C+}$) ובעל אוקטט חסר (רק 6 אלקטרונים סביבו).
- **במבנה II ($\ce{H3C-O+=CH2}$):** החמצן תרם זוג אלקטרונים חופשי ליצירת קשר כפול. במבנה זה לפחמן יש 4 קשרים (8 אלקטרונים) וגם לחמצן יש 3 קשרים וזוג אלקטרונים לא קושר (8 אלקטרונים סביבו). 

לכן, למרות שהמטען החיובי ממוקם על אטום החמצן האלקטרושלילי, **מבנה II יציב משמעותית** מכיוון שהוא מקיים אוקטט מלא לכל אטומי המולקולה. מבנה II הוא התורם העיקרי (Major contributor) להיבריד הרזוננס.`
  },
  {
    id: 51,
    category: "acid_base",
    title: "השפעת ההיברידיזציה של הפחמן על החומציות",
    text: "סדרו את הפחמימנים הבאים לפי סדר חומציות יורד (מהחומצי ביותר לבסיסי ביותר):",
    svg: `<svg viewBox="0 0 350 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <text x="30" y="40" fill="#f8fafc" font-size="14" font-weight="bold">A: HC≡CH (Acetylene)</text>
      <text x="30" y="70" fill="#f8fafc" font-size="14" font-weight="bold">B: H₂C=CH₂ (Ethylene)</text>
      <text x="30" y="100" fill="#f8fafc" font-size="14" font-weight="bold">C: H₃C—CH₃ (Ethane)</text>
    </svg>`,
    options: [
      "A > B > C",
      "C > B > A",
      "B > A > C",
      "A > C > B"
    ],
    correctIndex: 0,
    explanation: `להלן הניתוח של השפעת סוג ההיברידיזציה על חומציות המימן (C-H acidity):

**שלב 1: הבנת הקשר בין יציבות הבסיס המצומד לחומציות**
ככל שהבסיס המצומד (האניון שנוצר לאחר איבוד הפרוטון $+H$) יציב יותר, כך חומצת האם חומצית יותר.

**שלב 2: בחינת אחוז אופי s (s-character) בהיברידיזציות השונות**
- **בבסיס המצומד של אצטילן ($\ce{HC\equiv C^-}$):** הפחמן הטעון שלילית הוא בהיברידיזציית **sp** (בעל 50% אופי s).
- **בבסיס המצומד של אתילן ($\ce{H2C=CH^-}$):** הפחמן הטעון שלילית הוא בהיברידיזציית **sp²** (בעל 33% אופי s).
- **בבסיס המצומד של אתאן ($\ce{H3C-CH2^-}$):** הפחמן הטעון שלילית הוא בהיברידיזציית **sp³** (בעל 25% אופי s).

**שלב 3: קישור אופי s ליציבות המטען**
אורביטלי s קרובים יותר לגרעין האטום מאשר אורביטלי p. לכן, ככל שאחוז אופי s של האורביטל ההיברידי גבוה יותר, האורביטל קרוב יותר לגרעין הטעון חיובית, ומייצב טוב יותר את זוג האלקטרונים הלא-קושר (המטען השלילי האניוני).
- פחמן sp הוא האלקטרושלילי ביותר ויציב ביותר עם מטען שלילי.
- ערכי ה-$pK_a$ המקורבים הם: אצטילן (25) > אתילן (44) > אתאן (50).

לכן סדר החומציות הנכון הוא: **A > B > C** (אצטילן הוא החומצי ביותר בקבוצה זו).`
  },
  {
    id: 52,
    category: "acid_base",
    title: "אפקט אינדוקטיבי מושך וחומציות של חומצות קרבוקסיליות",
    text: "דרגו את החומצות הבאות לפי סדר חומציות עולה (מהחלשה ביותר לחזקה ביותר):",
    svg: `<svg viewBox="0 0 350 120" width="100%" height="120" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <text x="30" y="45" fill="#f8fafc" font-size="13" font-weight="bold">I. CF₃COOH</text>
      <text x="30" y="85" fill="#f8fafc" font-size="13" font-weight="bold">II. CCl₃COOH</text>
      <text x="200" y="45" fill="#f8fafc" font-size="13" font-weight="bold">III. CH₂ClCOOH</text>
      <text x="200" y="85" fill="#f8fafc" font-size="13" font-weight="bold">IV. CH₃COOH</text>
    </svg>`,
    options: [
      "IV < III < II < I",
      "I < II < III < IV",
      "IV < III < I < II",
      "III < IV < II < I"
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח השפעת האפקט האינדוקטיבי (Inductive Effect) על עוצמת החומציות:

**שלב 1: הבנת מנגנון האפקט האינדוקטיבי**
אטומים בעלי אלקטרושליליות גבוהה (כגון הלוגנים) מושכים צפיפות אלקטרונית דרך קשרי סיגמא ($\sigma$). משיכה זו מפזרת ומייצבת את המטען השלילי של יון הקרבוקסילאט ($\ce{-COO^-}$) שנוצר לאחר עזיבת הפרוטון, ובכך מגדילה את חומציות המולקולה.

**שלב 2: השוואת עוצמת האלקטרושליליות ומספר האטומים**
- **חומצה אצטית (IV - $\ce{CH3COOH}$):** ללא הלוגנים מושכי אלקטרונים. קבוצת המתיל אף תורמת צפיפות אלקטרונית קלה (מחלשת את החומציות). זוהי החומצה החלשה ביותר בקבוצה זו.
- **חומצה מונוכלורואצטית (III - $\ce{CH2ClCOOH}$):** מכילה אטום כלור יחיד מושך אלקטרונים.
- **חומצה טריכלורואצטית (II - $\ce{CCl3COOH}$):** מכילה 3 אטומי כלור המושכים אלקטרונים בחוזקה ומייצבים מאוד את הבסיס המצומד.
- **חומצה טריפלואורואצטית (I - $\ce{CF3COOH}$):** מכילה 3 אטומי פלואור. מאחר ופלואור הוא היסוד האלקטרושלילי ביותר בטבלה המחזורית (אלקטרושלילי יותר מכלור), הוא מייצר את האפקט האינדוקטיבי המושך החזק ביותר שיש. זוהי החומצה החזקה ביותר בקבוצה.

לכן, סדר החומציות העולה (מהחלשה לחזקה) הוא: **IV < III < II < I**.`
  },
  {
    id: 53,
    category: "conformations_newman",
    title: "אנרגיה ומומנט דו-קוטב בקונפורמציות של 1,2-dichloroethane",
    text: "עבור מולקולת 1,2-dichloroethane, מהו המשפט הנכון לגבי היציבות ומומנט הדו-קוטב (Dipole Moment) של קונפורמציות ה-anti וה-gauche?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Newman Anti projection -->
      <circle cx="150" cy="65" r="30" fill="none" stroke="#f8fafc" stroke-width="3"/>
      <!-- Front (C2) -->
      <line x1="150" y1="65" x2="150" y2="25" stroke="#38bdf8" stroke-width="3"/>
      <text x="145" y="20" fill="#38bdf8" font-size="12" font-weight="bold">Cl</text>
      <line x1="150" y1="65" x2="115" y2="85" stroke="#f8fafc" stroke-width="3"/>
      <line x1="150" y1="65" x2="185" y2="85" stroke="#f8fafc" stroke-width="3"/>
      <!-- Back (C3) -->
      <line x1="150" y1="95" x2="150" y2="120" stroke="#38bdf8" stroke-width="3"/>
      <text x="145" y="132" fill="#38bdf8" font-size="12" font-weight="bold">Cl</text>
      <line x1="124" y1="50" x2="100" y2="35" stroke="#f8fafc" stroke-width="3"/>
      <line x1="176" y1="50" x2="200" y2="35" stroke="#f8fafc" stroke-width="3"/>
    </svg>`,
    options: [
      "קונפורמציית anti היא היציבה ביותר (במינימום האנרגטי הגלובלי), ומומנט הדו-קוטב הכללי שלה הוא אפס (μ = 0).",
      "קונפורמציית gauche היא היציבה ביותר בשל יצירת קשרי מימן פנימיים, ומומנט הדו-קוטב שלה שווה לאפס.",
      "קונפורמציית anti היא היציבה ביותר, אך מומנט הדו-קוטב שלה גדול מאפס בשל קוטביות קשרי C-Cl.",
      "שתי הקונפורמציות בעלות אנרגיה זהה לחלוטין, אך מומנט הדו-קוטב של gauche קטן יותר."
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח קונפורמציות המולקולה 1,2-dichloroethane:

**1. יציבות אנרגטית:**
בקונפורמציית **anti**, שני אטומי הכלור הגדולים והאלקטרושליליים נמצאים במרחק המקסימלי זה מזה (זווית דיהדרלית של 180°). זה מפחית למינימום את הדחייה הסטרית ביניהם וכן את הדחייה האלקטרוסטטית בין הדיפולים של קשרי $\ce{C-Cl}$. לכן קונפורמציה זו היא היציבה ביותר (הנמוכה ביותר באנרגיה חופשית).

**2. מומנט דו-קוטב (Dipole Moment):**
קשר $\ce{C-Cl}$ הוא קשר קוטבי מאוד עם דיפול המכוון לכיוון הכלור האלקטרושלילי:
- בקונפורמציית **anti**, שני הדיפולים של קשרי ה-$\ce{C-Cl}$ מכוונים בדיוק לכיוונים מנוגדים (אחד למעלה ואחד למטה). מאחר והמולקולה סימטרית, שני וקטורי הדיפול הללו מבטלים זה את זה לחלוטין, ולכן מומנט הדו-קוטב השקול הוא אפס ($\mu = 0$).
- בקונפורמציית **gauche**, שני הדיפולים נמצאים בזווית של 60° זה לזה, ולכן הם מחזקים חלקית זה את זה ויוצרים מומנט דו-קוטב שקול הגדול מאפס ($\mu > 0$).`
  },
  {
    id: 54,
    category: "conformations_newman",
    title: "ניתוח יציבות קונפורמציות staggered של 2-methylbutane",
    text: "בניתוח קונפורמציות של 2-methylbutane במבט לאורך קשר C2-C3, מהו המשפט הנכון לגבי קונפורמציות ה-staggered המתקבלות?",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Newman looking down C2-C3 -->
      <circle cx="150" cy="65" r="30" fill="none" stroke="#f8fafc" stroke-width="3"/>
      <!-- Front (C2) - CH3, CH3, H -->
      <line x1="150" y1="65" x2="150" y2="25" stroke="#f8fafc" stroke-width="3"/>
      <text x="146" y="20" fill="#f8fafc" font-size="12">H</text>
      <line x1="150" y1="65" x2="115" y2="85" stroke="#38bdf8" stroke-width="3"/>
      <text x="85" y="95" fill="#38bdf8" font-size="11" font-weight="bold">CH₃</text>
      <line x1="150" y1="65" x2="185" y2="85" stroke="#38bdf8" stroke-width="3"/>
      <text x="190" y="95" fill="#38bdf8" font-size="11" font-weight="bold">CH₃</text>
      <!-- Back (C3) - CH3, H, H -->
      <line x1="150" y1="95" x2="150" y2="115" stroke="#38bdf8" stroke-width="3"/>
      <text x="135" y="127" fill="#38bdf8" font-size="11" font-weight="bold">CH₃</text>
      <line x1="124" y1="50" x2="100" y2="35" stroke="#f8fafc" stroke-width="3"/>
      <line x1="176" y1="50" x2="200" y2="35" stroke="#f8fafc" stroke-width="3"/>
    </svg>`,
    options: [
      "קיימות שתי קונפורמציות staggered שונות אנרגטית: היציבה ביותר בעלת אינטראקציית גוש (gauche) אחת של מתיל-מתיל, והפחות יציבה בעלת שתי אינטראקציות גוש.",
      "כל קונפורמציות ה-staggered בעלות אותה אנרגיה בדיוק מאחר שאין שום מתיל במצב eclipsed.",
      "קונפורמציית anti מוחלטת (ללא שום אינטראקציית גוש) היא המינימום האנרגטי הגלובלי.",
      "הקונפורמציה היציבה ביותר היא זו שבה קבוצות המתיל נמצאות כולן במצב eclipsed על מנת למקסם קשרי ואן-דר-ואלס."
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח קונפורמציוני של 2-methylbutane לאורך קשר C2-C3:

**שלב 1: זיהוי המתמירים על פחמני הקשר**
- לפחמן הקדמי (C2) מחוברים: שתי קבוצות מתיל ($\ce{-CH3}$) ואטום מימן ($\ce{-H}$).
- לפחמן האחורי (C3) מחוברים: קבוצת מתיל אחת ($\ce{-CH3}$) ושני אטומי מימן ($\ce{-H}$).

**שלב 2: בחינת קונפורמציות ה-staggered (זווית של 60° בין המתמירים הקדמיים לאחוריים)**
כאשר נסובב את הקשר, נקבל שלושה מצבי staggered:
1. **מצב א' (המשורטט ב-SVG):** קבוצת המתיל האחורית ממוקמת בדיוק בין שתי קבוצות המתיל הקדמיות. במצב זה ישנן **שתי אינטראקציות גוש** (gauche מתיל-מתיל).
2. **מצבים ב' ו-ג' (אננטיומריים זה לזה):** קבוצת המתיל האחורית נמצאת במצב gauche לקבוצת מתיל קדמית אחת, ובמצב anti לקבוצת המתיל הקדמית השנייה. במצבים אלו יש רק **אינטראקציית גוש אחת** (gauche מתיל-מתיל).

**שלב 3: השוואת אנרגיה**
מאחר וכל אינטראקציית gauche בין שתי קבוצות מתיל מעלה את האנרגיה בכ-0.9 קק"ל/מול עקב דחייה סטרית:
- קונפורמציה עם אינטראקציית gauche אחת (מצבים ב' ו-ג') נמוכה יותר באנרגיה ויציבה יותר.
- קונפורמציה עם שתי אינטראקציות gauche (מצב א') גבוהה יותר באנרגיה ופחות יציבה.

לכן, קיימות שתי קונפורמציות staggered שונות מבחינה אנרגטית, והיציבה ביותר היא זו שמכילה רק אינטראקציית גוש אחת.`
  },
  {
    id: 55,
    category: "conformations_newman",
    title: "קביעת קונפיגורציה מרחבית מתוך היטל ניומן",
    text: "עבור היטל ניומן הבא המסתכל על קשר C2-C3 של 2-bromo-3-chlorobutane, קבעו את הקונפיגורציה המוחלטת (R/S) של פחמן C2 (הקדמי) ופחמן C3 (האחורי):",
    svg: `<svg viewBox="0 0 300 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Newman circular framework -->
      <circle cx="150" cy="65" r="30" fill="none" stroke="#f8fafc" stroke-width="3"/>
      <!-- Front carbon C2: Cl (120 deg), CH3 (0 deg), H (240 deg) -->
      <line x1="150" y1="65" x2="150" y2="25" stroke="#38bdf8" stroke-width="3"/> <!-- CH3 top -->
      <text x="140" y="20" fill="#38bdf8" font-size="11" font-weight="bold">CH₃</text>
      <line x1="150" y1="65" x2="115" y2="85" stroke="#f8fafc" stroke-width="3"/> <!-- H bottom-left -->
      <text x="100" y="95" fill="#f8fafc" font-size="12">H</text>
      <line x1="150" y1="65" x2="185" y2="85" stroke="#f43f5e" stroke-width="3"/> <!-- Cl bottom-right -->
      <text x="190" y="95" fill="#f43f5e" font-size="12" font-weight="bold">Cl</text>
      
      <!-- Back carbon C3: Br (120 deg, bottom-right of back), CH3 (240 deg, bottom-left), H (0 deg, top) -->
      <line x1="150" y1="95" x2="135" y2="120" stroke="#38bdf8" stroke-width="3"/> <!-- CH3 bottom-left back -->
      <text x="115" y="130" fill="#38bdf8" font-size="11" font-weight="bold">CH₃</text>
      <line x1="176" y1="50" x2="200" y2="35" stroke="#eab308" stroke-width="3"/> <!-- Br top-right back -->
      <text x="205" y="32" fill="#eab308" font-size="12" font-weight="bold">Br</text>
      <line x1="124" y1="50" x2="105" y2="35" stroke="#f8fafc" stroke-width="3"/> <!-- H top-left back -->
      <text x="95" y="32" fill="#f8fafc" font-size="12">H</text>
    </svg>`,
    options: [
      "2S, 3R",
      "2R, 3R",
      "2S, 3S",
      "2R, 3S"
    ],
    correctIndex: 0,
    explanation: `להלן שלבי הניתוח לקביעת קונפיגורציית R/S ישירות מהיטל ניומן:

**שלב 1: ניתוח הפחמן הקדמי (C2)**
1. **קביעת סדר קדימויות לפי חוקי CIP:**
   - $\ce{-Cl}$ הוא בעל מספר אטומי 17 ולכן מקבל עדיפות **(1)**.
   - פחמן C3 האחורי (הקשור לברום, פחמן ומימן) מקבל עדיפות **(2)**.
   - קבוצת המתיל $\ce{-CH3}$ מקבלת עדיפות **(3)**.
   - המימן $\ce{-H}$ מקבל עדיפות **(4)**.
2. **בדיקת כיוון הסיבוב:**
   - קבוצה 4 (מימן) ממוקמת בחלק השמאלי התחתון של הפחמן הקדמי (כלומר, היא בולטת אלינו במידה מסוימת).
   - נעקוב מהעדיפות הגבוהה לנמוכה: (1) $\ce{-Cl}$ (ימין מטה) ⬅️ (2) פחמן אחורי (במרכז מאחור) ⬅️ (3) $\ce{-CH3}$ (למעלה). 
   - כיוון הסיבוב 1 ⬅️ 2 ⬅️ 3 הוא עם כיוון השעון (R).
   - מכיוון שהמימן (4) נמצא מקדימה (על הפחמן הקדמי והוא אינו פונה ישר לאחור), עלינו להסתכל על המיקום שלו במרחב. דרך פשוטה היא להמיר את המבנה לקונפורמציית תלת-ממד רגילה: המימן מצויר כאן למטה ושמאלה. אם נבצע היפוך או נביט מהצד הנכון, נקבל שהקונפיגורציה של C2 היא **S**.

**שלב 2: ניתוח הפחמן האחורי (C3)**
1. **קביעת סדר קדימויות לפחמן C3:**
   - $\ce{-Br}$ (מספר אטומי 35) מקבל עדיפות **(1)**.
   - פחמן C2 הקדמי (הקשור לכלור, פחמן ומימן) מקבל עדיפות **(2)**.
   - קבוצת המתיל $\ce{-CH3}$ מקבלת עדיפות **(3)**.
   - המימן $\ce{-H}$ מקבל עדיפות **(4)**.
2. **בדיקת כיוון הסיבוב:**
   - כאן המימן (4) פונה למעלה ושמאלה.
   - סדר הקבוצות: (1) $\ce{-Br}$ (ימין למעלה) ⬅️ (2) פחמן קדמי C2 (במרכז) ⬅️ (3) $\ce{-CH3}$ (למטה).
   - מעקב מ-1 ל-2 ל-3 נותן כיוון סיבוב נגד השעון.
   - ביצוע ההשלכה המרחבית הנכונה מראה שפחמן C3 הוא בעל קונפיגורציה **R**.

לכן, הקונפיגורציה המלאה של המולקולה היא **2S, 3R**.`
  },
  {
    id: 56,
    category: "conformations_chair",
    title: "יציבות של cis ו-trans-1,3-di-tert-butylcyclohexane",
    text: "עבור האיזומרים הגיאומטריים cis ו-trans של 1,3-di-tert-butylcyclohexane, מהו המשפט הנכון לגבי היציבות וקונפורמציית הכיסא שלהם?",
    svg: `<svg viewBox="0 0 350 140" width="100%" height="140" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Representation text or schematic ring -->
      <text x="30" y="45" fill="#f8fafc" font-size="13" font-weight="bold">I. cis-1,3-di-tert-butylcyclohexane</text>
      <text x="30" y="75" fill="#94a3b8" font-size="11">שני המתמירים באותו כיוון (up, up)</text>
      <text x="30" y="105" fill="#f8fafc" font-size="13" font-weight="bold">II. trans-1,3-di-tert-butylcyclohexane</text>
      <text x="30" y="125" fill="#94a3b8" font-size="11">המתמירים בכיוונים מנוגדים (up, down)</text>
    </svg>`,
    options: [
      "איזומר ה-cis יציב משמעותית מאיזומר ה-trans, מכיוון שבו שתי קבוצות ה-tert-butyl יכולות לאמץ עמדות טרופיות (equatorial) בו-זמנית.",
      "איזומר ה-trans יציב יותר מכיוון שבקונפורמציית הכיסא שתי קבוצות ה-tert-butyl נמצאות בעמדות אקסיאליות ומפחיתות לחץ סטרי.",
      "שני האיזומרים בעלי יציבות זהה לחלוטין מכיוון ששניהם די-מותמרים בעמדות 1,3.",
      "איזומר ה-trans יציב יותר מכיוון שהוא מאמץ קונפורמציית סירה (boat) מושלמת ללא שום הפרעה סטרית."
    ],
    correctIndex: 0,
    explanation: `להלן הסבר על השפעת מתמירים נפחיים במיוחד (כמו tert-butyl) על יציבות של טבעות ציקלוהקסאן:

**1. ניתוח איזומר ה-cis (עמדות 1,3 באותו כיוון - up, up):**
- בקונפורמציית הכיסא המועדפת של איזומר ה-cis, שתי קבוצות ה-tert-butyl יכולות להיות **equatorial** בו-זמנית (עמדות 1e, 3e).
- עמדה אקווטוריאלית רחוקה מכל שאר פחמני הטבעת, ולכן קונפורמציה זו יציבה מאוד ואין בה כמעט מתח סטרי.

**2. ניתוח איזומר ה-trans (עמדות 1,3 בכיוונים מנוגדים - up, down):**
- בכיסא כלשהו של איזומר ה-trans, אחת מהקבוצות חייבת להיות equatorial והשנייה חייבת להיות **axial** (עמדות 1e, 3a או 1a, 3e).
- קבוצת tert-butyl בעמדה אקסיאלית יוצרת אינטראקציה דו-אקסיאלית (1,3-diaxial interaction) הרסנית ביותר עם המימנים האקסיאליים בעמדות 3 ו-5. המתח הסטרי הנוצר כה גבוה (מעל 5.4 קק"ל/מול) שהוא מונע מהמולקולה להימצא בקונפורמציית כיסא רגילה. המולקולה למעשה מעוותת לקונפורמציית **Twist-boat** (סירה מעוותת) על מנת להסיט את ה-tert-butyl מהעמדה האקסיאלית.

לכן, **איזומר ה-cis יציב בהרבה** (בכ-5.4 קק"ל/מול) מאיזומר ה-trans.`
  },
  {
    id: 57,
    category: "stereochemistry_centers",
    title: "קביעת קונפיגורציית R/S מהיטל פישר (Fischer)",
    text: "קבעו את הקונפיגורציה המוחלטת (R/S) של המרכז הכיראלי בהיטל פישר הבא של חומצה 2-כלורופרופנואית:",
    svg: `<svg viewBox="0 0 250 140" width="100%" height="140" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Fischer cross lines -->
      <line x1="120" y1="20" x2="120" y2="120" stroke="#f8fafc" stroke-width="3"/>
      <line x1="80" y1="70" x2="160" y2="70" stroke="#f8fafc" stroke-width="3"/>
      <!-- Substituent text labels -->
      <text x="100" y="15" fill="#f8fafc" font-size="12" font-weight="bold">COOH</text>
      <text x="105" y="132" fill="#f8fafc" font-size="12" font-weight="bold">CH₃</text>
      <text x="65" y="74" fill="#38bdf8" font-size="12" font-weight="bold">H</text>
      <text x="168" y="74" fill="#f43f5e" font-size="12" font-weight="bold">Cl</text>
    </svg>`,
    options: [
      "(R)-2-chloropropanoic acid",
      "(S)-2-chloropropanoic acid",
      "(E)-2-chloropropanoic acid",
      "(Z)-2-chloropropanoic acid"
    ],
    correctIndex: 0,
    explanation: `להלן כלל האצבע לקביעת קונפיגורציית R/S בהיטלי פישר (Fischer projections):

**שלב 1: דירוג הקבוצות לפי חוקי קאן-אינגולד-פרלוג (CIP)**
1. $\ce{-Cl}$ – מספר אטומי 17 ⬅️ עדיפות **(1)**.
2. $\ce{-COOH}$ – פחמן קשור לשלושה חמצנים (אחד כפול ואחד יחיד) ⬅️ עדיפות **(2)**.
3. $\ce{-CH3}$ – פחמן קשור לשלושה מימנים ⬅️ עדיפות **(3)**.
4. $\ce{-H}$ – מספר אטומי 1 ⬅️ עדיפות **(4)**.

**שלב 2: מעקב אחר כיוון הסיבוב מ-1 ל-2 ל-3**
- ננוע מ-$\ce{-Cl}$ (1, ימין) ⬅️ $\ce{-COOH}$ (2, למעלה) ⬅️ $\ce{-CH3}$ (3, למטה).
- כיוון סיבוב זה הוא **נגד כיוון השעון** (Counter-clockwise), שבדרך כלל מסומל כ-**S**.

**שלב 3: התחשבות במיקום קבוצה 4 (המימן)**
- בהיטל פישר, קווים אופקיים מייצגים קשרים הבולטים אל הצופה (Wedges), וקווים אנכיים מייצגים קשרים הפונים הרחק מהצופה (Dashes).
- המימן (4) נמצא על **קשר אופקי** (בצד שמאל).
- מאחר וקבוצה 4 בולטת אלינו, עלינו **להפוך** את התוצאה שקיבלנו בשלב 2:
- קיבלנו כיוון נגד השעון (S) ⬅️ התוצאה האמיתית מתהפכת ל-**R**.

לכן, שם המולקולה הנכון הוא **(R)-2-chloropropanoic acid**.`
  },
  {
    id: 58,
    category: "stereochemistry_relationships",
    title: "הקשר הסטריאוכימי בקונפורמציות של cis-1,2-dimethylcyclohexane",
    text: "מהו הקשר הסטריאוכימי בין שתי קונפורמציות הכיסא של המולקולה cis-1,2-dimethylcyclohexane המתקבלות כתוצאה מהיפוך טבעת (Ring Flip)?",
    svg: `<svg viewBox="0 0 320 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Representation text -->
      <text x="30" y="45" fill="#f8fafc" font-size="13" font-weight="bold">כיסא א' (1-axial, 2-equatorial)</text>
      <text x="145" y="75" fill="#38bdf8" font-size="18" font-weight="bold">⇌</text>
      <text x="30" y="105" fill="#f8fafc" font-size="13" font-weight="bold">כיסא ב' (1-equatorial, 2-axial)</text>
    </svg>`,
    options: [
      "שתי הקונפורמציות הן תמונות ראי לא חופפות (אננטיומרים) זו לזו, ומכיוון שהן מתחלפות במהירות בטמפרטורת החדר, המולקולה היא תרכובת מיזו דינמית.",
      "שתי הקונפורמציות הן דיאסטראומרים זו לזו, ולכן בעלות תכונות פיזיקליות שונות לחלוטין.",
      "שתי הקונפורמציות זהות לחלוטין (הומולקולות), וניתן לחפוף ביניהן על ידי סיבוב פשוט.",
      "קונפורמציה אחת היא כיראלית והשנייה אקיראלית לחלוטין (תרכובת מיזו סטטית)."
    ],
    correctIndex: 0,
    explanation: `זהו מקרה סטריאוכימי מרתק ונפוץ מאוד במבחנים:

**1. הגדרת המולקולה במרחב (במבט דו-ממדי שטוח):**
במבט דו-ממדי שטוח מלמעלה, ל-$	ext{cis-1,2-dimethylcyclohexane}$ יש מישור סימטריה העובר בדיוק במרכז הקשר בין פחמן 1 לפחמן 2. לכן המולקולה מוגדרת כתרכובת **מיזו (Meso compound)** שהיא אקיראלית ואינה פעילה אופטית.

**2. בחינת קונפורמציות הכיסא התלת-ממדיות:**
כאשר המולקולה מאמצת קונפורמציית כיסא:
- בכיסא א': מתיל אחד אקסיאלי (axial) והשני אקווטוריאלי (equatorial). קונפורמציה זו כשלעצמה **אינה סימטרית** ואינה מכילה מישור סימטריה. היא מולקולה כיראלית!
- כאשר מתרחש היפוך טבעת (Ring Flip) לקבלת כיסא ב', המתיל שהיה אקסיאלי הופך לאקווטוריאלי, והמתיל השני הופך לאקסיאלי.
- השוואה מרחבית מראה שכיסא א' וכיסא ב' הם **אננטיומרים** (תמונות ראי לא חופפות) זה של זה!

**3. השלכות דינמיות בטמפרטורת החדר:**
מאחר שהיפוך הטבעת מהיר מאוד בטמפרטורת החדר, בכל רגע נתון יש לנו תערובת שוות כמות (50:50) של שני הכיסאות האננטיומריים. פעילות אופטית של מולקולה אחת מבוטלת בדיוק על ידי השנייה.
לכן, המולקולה מוגדרת כ**תרכובת מיזו דינמית (Dynamically achiral)**.`
  },
  {
    id: 59,
    category: "reactions_cleavage",
    title: "אוזונוליזה מחזרת של מערכת דו-טבעתית מתוחה",
    text: "מהו התוצר המתקבל בתגובת האוזונוליזה המחזרת (1. O3, 2. DMS) של המולקולה Bicyclo[2.2.1]hept-2-ene (Norbornene)?",
    svg: `<svg viewBox="0 0 320 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Norbornene double bond cleavage representation -->
      <line x1="80" y1="80" x2="110" y2="110" stroke="#f8fafc" stroke-width="3"/>
      <line x1="110" y1="110" x2="160" y2="110" stroke="#f8fafc" stroke-width="5"/> <!-- double bond cleaved -->
      <line x1="113" y1="104" x2="157" y2="104" stroke="#f8fafc" stroke-width="2"/>
      <line x1="160" y1="110" x2="190" y2="80" stroke="#f8fafc" stroke-width="3"/>
      <line x1="80" y1="80" x2="135" y2="45" stroke="#f8fafc" stroke-width="3"/>
      <line x1="135" y1="45" x2="190" y2="80" stroke="#f8fafc" stroke-width="3"/>
      <!-- Cleavage line -->
      <line x1="135" y1="95" x2="135" y2="125" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
      <!-- Reagents -->
      <text x="210" y="60" fill="#38bdf8" font-size="12" font-weight="bold">1. O₃</text>
      <text x="210" y="80" fill="#38bdf8" font-size="12" font-weight="bold">2. DMS</text>
    </svg>`,
    options: [
      "cis-cyclopentane-1,3-dicarbaldehyde",
      "trans-cyclopentane-1,3-dicarbaldehyde",
      "cyclopentane-1,3-dicarboxylic acid",
      "bicyclo[2.2.1]heptane-2,3-diol"
    ],
    correctIndex: 0,
    explanation: `להלן מנגנון ביקוע הקשר הכפול בתגובת אוזונוליזה מחזרת של מערכות מתוחות:

**שלב 1: זיהוי מיקום הקשר הכפול במערכת הדו-טבעתית**
נורבורנן הוא שלד המכיל טבעת מחומשת (Cyclopentane) עם גשר מתילן ($\ce{-CH2-}$) המחבר את פחמנים 1 ו-4. הקשר הכפול נמצא בטבעת המשושה שנוצרת (בין פחמנים 2 ו-3).

**שלב 2: ביקוע הקשר הכפול (Ozonolysis Cleavage)**
האוזון גוזר את הקשר הכפול $\ce{C=C}$ לחלוטין ומחליף אותו בשתי קבוצות קרבוניל ($\ce{C=O}$).
- פחמנים 2 ו-3 של נורבורנן קשורים כל אחד למימן יחיד (אלו פחמני אלקן עם מימן).
- מאחר והתנאים הם מחזרים ($	ext{DMS}$ או $	ext{Zn/AcOH}$), שתי קבוצות ה-$\ce{C=C}$ יהפכו לאלדהידים ($\ce{-CHO}$) ולא ימשיכו להתחמצן לחומצות קרבוקסיליות.

**שלב 3: קביעת המבנה המרחבי של התוצר (Stereochemistry)**
- ביקוע הקשר הכפול פותח את הטבעת המשושה העליונה, אך משאיר את הטבעת המחומשת התחתונה ($	ext{Cyclopentane}$) שלמה לחלוטין.
- מאחר והגשר חיבר את שני פחמני הגשר באותו הצד (Cis), שתי קבוצות האלדהיד שנוצרות חייבות להישאר באותו הכיוון במרחב – כלומר הן יפנו שתיהן כלפי מעלה (Cis).

התוצר הוא אפוא **cis-cyclopentane-1,3-dicarbaldehyde**.`
  },
  {
    id: 60,
    category: "reactions_cleavage",
    title: "ביקוע אוקסידטיבי חריף של אלקן עם KMnO4 מרוכז וחם",
    text: "מהו התוצר העיקרי שיתקבל בתגובת ביקוע אוקסידטיבי של 1-methylcyclohexene עם KMnO4 מרוכז וחם בסביבה חומצית?",
    svg: `<svg viewBox="0 0 320 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- 1-methylcyclohexene representation -->
      <polygon points="100,30 140,55 140,95 100,120 60,95 60,55" fill="none" stroke="#f8fafc" stroke-width="3"/>
      <!-- Double bond between C1 and C2 (100,30 to 140,55) -->
      <line x1="102" y1="36" x2="136" y2="58" stroke="#f8fafc" stroke-width="2"/>
      <!-- Methyl at C1 (100,30) -->
      <line x1="100" y1="30" x2="100" y2="5" stroke="#38bdf8" stroke-width="3"/>
      <!-- Reagents -->
      <text x="180" y="55" fill="#38bdf8" font-size="12" font-weight="bold">KMnO₄ מרוכז</text>
      <text x="180" y="75" fill="#38bdf8" font-size="12" font-weight="bold">וחם / ⁺H</text>
    </svg>`,
    options: [
      "6-oxoheptanoic acid",
      "6-oxoheptanal",
      "heptanedioic acid",
      "1-methylcyclohexane-1,2-diol"
    ],
    correctIndex: 0,
    explanation: `להלן ההבדלים בין אוזונוליזה לביקוע אוקסידטיבי חריף עם $\ce{KMnO4}$ חם:

**שלב 1: ביקוע הקשר הכפול**
תחת תנאים חריפים של $\ce{KMnO4}$ מרוכז וחם, הקשר הכפול של האלקן מבוקע לחלוטין (כמו באוזונוליזה). הטבעת המשושה נפתחת ליצירת שרשרת פתוחה בת 7 פחמנים (6 פחמני טבעת + 1 פחמן מתיל).

**שלב 2: רמת החימצון של התוצרים**
ההבדל המרכזי מול אוזונוליזה מחזרת הוא ש-$\ce{KMnO4}$ הוא מחמצן חזק במיוחד, המביא את הפחמנים לדרגת החימצון המקסימלית האפשרית:
1. **פחמן קשר כפול שלישוני** (הפחמן הקשור למתיל) ⬅️ מתחמצן לקטון.
2. **פחמן קשר כפול שניוני** (הפחמן הקשור למימן יחיד) ⬅️ מתחמצן בתחילה לאלדהיד, אך האלדהיד מחומצן מיד בתנאים אלו ל**חומצה קרבוקסילית** ($\ce{-COOH}$).

**שלב 3: כתיבת המבנה הסופי**
- פחמן 1 (עם המתיל) הופך לקטון: $\ce{CH3-C(=O)-...}$
- פחמנים 2, 3, 4, 5, 6 מהווים את שרשרת המתילנים.
- פחמן 2 (שהיה קשור למימן) הופך לחומצה קרבוקסילית: $\ce{...-COOH}$.
השרשרת הפתוחה שמתקבלת היא חומצה קרבוקסילית בת 7 פחמנים שבפחמן 6 שלה יש קבוצת קטון (Oxo).

התוצר הוא **6-oxoheptanoic acid**.`
  },
  {
    id: 61,
    category: "reactions_cleavage",
    title: "מהירות ביקוע גליקולים (Diols) על ידי חומצה פריודית HIO4",
    text: "בהשוואת מהירות תגובת הביקוע של cis-cyclohexane-1,2-diol ו-trans-cyclohexane-1,2-diol עם חומצה פריודית (HIO4), מהו המשפט הנכון ומדוע?",
    svg: `<svg viewBox="0 0 320 130" width="100%" height="130" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- Text representation of the isomers -->
      <text x="30" y="45" fill="#f8fafc" font-size="13" font-weight="bold">I. cis-cyclohexane-1,2-diol</text>
      <text x="30" y="85" fill="#f8fafc" font-size="13" font-weight="bold">II. trans-cyclohexane-1,2-diol</text>
      <text x="180" y="65" fill="#38bdf8" font-size="16" font-weight="bold">+ HIO₄ ➔ ?</text>
    </svg>`,
    options: [
      "איזומר ה-cis מגיב מהר משמעותית מאיזומר ה-trans, מכיוון שבו שתי קבוצות ה-OH קרובות במרחב ויכולות ליצור בקלות אסטר פריודי מחזורי (cyclic periodate ester) כחומר ביניים.",
      "איזומר ה-trans מגיב מהר יותר מכיוון ששתי קבוצות ה-OH פונות לכיוונים מנוגדים ובכך מקטינות את ההפרעה הסטרית בשלב יצירת התוצר.",
      "שני האיזומרים מגיבים באותו קצב בדיוק מכיוון שמנגנון התגובה אינו תלוי בסטריאוכימיה של הדיאול השכן.",
      "חומצה פריודית מגיבה רק עם דיאולים אציקליים פתוחים, ולכן אף אחד מהאיזומרים הטבעתיים לא יגיב."
    ],
    correctIndex: 0,
    explanation: `להלן המנגנון והדרישות הסטריאוכימיות של ביקוע גליקולים (Malaprade reaction):

**שלב 1: מנגנון התגובה עם $\ce{HIO4}$**
התגובה מחייבת יצירת חומר ביניים אסטרי מחזורי חמש-איברי שבו אטום יוד ($\ce{I}$) מקושר לשני החמצנים של קבוצות ה-$\ce{-OH}$ השכנות.

**שלב 2: השפעת הסטריאוכימיה של הדיול הטבעתי**
- **באיזומר ה-cis (קבוצות ה-OH באותו צד):** שתי קבוצות ה-$\ce{-OH}$ פונות לאותו כיוון במרחב (זווית דיהדרלית של כ-60° בכיסא, או קרובות למישוריות). הן יכולות להסתובב ולהתקרב בקלות כדי ליצור את האסטר המחזורי המתוח עם אטום היוד ללא עיוות משמעותי של הטבעת. לכן התגובה מהירה ביותר.
- **באיזומר ה-trans (קבוצות ה-OH בכיוונים מנוגדים):** קבוצות ה-$\ce{-OH}$ פונות לכיוונים מנוגדים במרחב (בכיסא הן בעמדות trans-diaxial או trans-diequatorial עם זווית דיהדרלית של 180° או 60° אך פונות לכיוונים הפוכים). יצירת אסטר מחזורי דורשת קירוב של שני החמצנים לצד אחד, דבר שמאלץ את טבעת הציקלוהקסאן לעבור עיוות קיצוני ויקר אנרגטית. לכן, קצב התגובה של איזומר ה-trans איטי להפליא, ובמקרים מסוימים אינו מתרחש כלל.

לכן, **איזומר ה-cis מגיב מהר בהרבה**.`
  },
  {
    id: 62,
    category: "mechanisms_elimination",
    title: "שליטה רגיוסלקטיבית (זייצב לעומת הופמן) בתגובת אלימינציה E2",
    text: "בתגובת E2 של 2-bromo-2-methylbutane, כיצד משפיע סוג הבסיס (NaOEt לעומת t-BuOK) על היחס בין התוצרים שיתקבלו?",
    svg: `<svg viewBox="0 0 340 140" width="100%" height="140" style="background:#1e293b; border-radius:8px; direction: ltr;">
      <!-- 2-bromo-2-methylbutane -->
      <line x1="40" y1="80" x2="90" y2="50" stroke="#f8fafc" stroke-width="3"/>
      <line x1="90" y1="50" x2="140" y2="80" stroke="#f8fafc" stroke-width="3"/>
      <line x1="140" y1="80" x2="190" y2="50" stroke="#f8fafc" stroke-width="3"/>
      <!-- Methyl at C2 (90, 50) -->
      <line x1="90" y1="50" x2="90" y2="15" stroke="#f8fafc" stroke-width="3"/>
      <!-- Br at C2 (90, 50) -->
      <line x1="90" y1="50" x2="115" y2="25" stroke="#f43f5e" stroke-width="3"/>
      <text x="120" y="22" fill="#f43f5e" font-size="12" font-weight="bold">Br</text>
      <!-- Reagents arrows -->
      <text x="210" y="55" fill="#38bdf8" font-size="12" font-weight="bold">1. NaOEt/EtOH ➔ זייצב?</text>
      <text x="210" y="95" fill="#38bdf8" font-size="12" font-weight="bold">2. t-BuOK/t-BuOH ➔ הופמן?</text>
    </svg>`,
    options: [
      "השימוש בבסיס קטן (NaOEt) מניב בעיקר את תוצר זייצב היציב (2-methyl-2-butene), בעוד בסיס נפחי (t-BuOK) מניב בעיקר את תוצר הופמן הפחות מותמר (2-methyl-1-butene).",
      "השימוש ב-NaOEt מניב בעיקר את תוצר הופמן, בעוד t-BuOK מניב את תוצר זייצב עקב דחייה סטרית.",
      "שני הבסיסים מניבים את אותו יחס בדיוק (99% זייצב) מכיוון שתוצר זייצב תמיד יציב תרמודינמית.",
      "בסיס ה-t-BuOK הנפחי אינו מסוגל לעבור תגובת E2 עקב הפרעה סטרית והוא ייתן רק תוצר התמרה SN2."
    ],
    correctIndex: 0,
    explanation: `להלן ניתוח הרגיוסלקטיביות (Regioselectivity) בתגובות E2 כתלות בגודל הבסיס:

**1. הבסיסים ומאפייניהם:**
- **$\ce{NaOEt}$ (Sodium ethoxide):** בסיס חזק אך קטן ולא מופרע סטרית.
- **$\ce{t-BuOK}$ (Potassium tert-butoxide):** בסיס חזק מאוד אך גדול ונפחי במיוחד (מופרע סטרית).

**2. מנגנון E2 עם בסיס קטן ($\ce{NaOEt}$):**
מאחר והבסיס קטן, יש לו גישה חופשית לקטוף גם מימני בטא פנימיים (היושבים על פחמן שניוני מותמר יותר). קטיפת מימן פנימי מובילה ליצירת האלקן המותמר ביותר (שלשות מותמר) והיציב ביותר מבחינה תרמודינמית. זהו **תוצר זייצב (Zaitsev product)** – במקרה זה, **2-methyl-2-butene**.

**3. מנגנון E2 עם בסיס נפחי ($\ce{t-BuOK}$):**
בשל ההפרעה הסטרית העצומה שלו, הבסיס מתקשה להגיע לקטוף מימן בטא פנימי מותמר. במקום זאת, הוא קוטף במהירות רבה (שליטה קינטית) את המימנים החשופים והנגישים ביותר – המימנים של קבוצות המתילין החיצוניות (פחמן ראשוני). קטיפה זו מובילה ליצירת האלקן הפחות מותמר והפחות יציב תרמודינמית. זהו **תוצר הופמן (Hofmann product)** – במקרה זה, **2-methyl-1-butene**.

לכן, **NaOEt מניב בעיקר את תוצר זייצב, בעוד t-BuOK מניב בעיקר את תוצר הופמן**.`
  }

];

if (typeof module !== 'undefined') {
if (typeof module !== 'undefined' && module.exports) {
  module.exports = organicQuestions;
}
}
