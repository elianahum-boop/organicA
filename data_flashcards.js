// כרטיסיות תגובות אלקנים ואתגרי סינתזה
const organicFlashcards = [
  {
    id: 1,
    name: "סיפוח HX (הידרוהלוגנציה)",
    reagents: "HX (HCl, HBr, HI)",
    startingMaterial: "אלקן",
    product: "אלקיל הליד (Alkyl Halide)",
    regiochemistry: "מרקובניקוב (ההלוגן פונה לפחמן המותמר יותר, המימן לפחמן עם יותר מימנים)",
    stereochemistry: "לא ספציפית (תערובת של מוצרים)",
    intermediate: "קרבוקטיון חופשי (Carbocation) - **ייתכנו שחלופים (shifts)!**",
    notes: "התגובה המהירה ביותר היא עם HI ולאחר מכן HBr ו-HCl. אין להשתמש בפרוקסידים אלא אם רוצים אנטי-מרקובניקוב."
  },
  {
    id: 2,
    name: "הידרציה חומצית (סיפוח מים בחומצה)",
    reagents: "H2O / H+ או H3O+",
    startingMaterial: "אלקן",
    product: "אלכוהול (Alcohol)",
    regiochemistry: "מרקובניקוב (קבוצת ה-OH נכנסת לפחמן המותמר יותר)",
    stereochemistry: "לא ספציפית",
    intermediate: "קרבוקטיון חופשי - **ייתכנו שחלופים!**",
    notes: "תגובה שיווי-משקלית. חומצה חזקה כמו H2SO4 משמשת כזרז."
  },
  {
    id: 3,
    name: "הידרובורציה-חמצון (Hydroboration-Oxidation)",
    reagents: "1. BH3/THF\n2. H2O2, OH-",
    startingMaterial: "אלקן",
    product: "אלכוהול (Alcohol)",
    regiochemistry: "אנטי-מרקובניקוב (קבוצת ה-OH נכנסת לפחמן הפחות מותמר)",
    stereochemistry: "Syn-addition (ה-H וה-OH נכנסים מאותו הצד של המישור)",
    intermediate: "מצב מעבר טבעתי מתואם בן 4 איברים (אין קרבוקטיון חופשי, **אין שחלופים!**)",
    notes: "שיטה מעולה לקבלת אלכוהול ראשוני מאלקן קצה."
  },
  {
    id: 4,
    name: "הלוגנציה (Halogenation)",
    reagents: "X2 (Br2 או Cl2) בממס אינרטי (CH2Cl2 / CCl4)",
    startingMaterial: "אלקן",
    product: "דיהליד ויצינלי (Vicinal Dihalide)",
    regiochemistry: "לא רלוונטי (שני הפחמנים מקבלים את אותו אטום הלוגן)",
    stereochemistry: "Anti-addition (שני ההלוגנים נכנסים מצדדים מנוגדים)",
    intermediate: "יון הלונטום טבעתי (Halonium Ion) - יון ברומוניום/כלורוניום טבעתי משולש. **אין שחלופים!**",
    notes: "תגובת הברומינציה משמשת גם כאינדיקציה לנוכחות קשר כפול (צבע הברום האדום נעלם)."
  },
  {
    id: 5,
    name: "יצירת הלוהידרין (Halohydrin Formation)",
    reagents: "X2 (Br2 או Cl2) יחד עם מים (H2O)",
    startingMaterial: "אלקן",
    product: "הלוהידרין (Halohydrin - פחמן אחד קשור ל-OH ופחמן סמוך ל-X)",
    regiochemistry: "קבוצת ה-OH נכנסת לפחמן המותמר יותר, וההלוגן לפחמן הפחות מותמר",
    stereochemistry: "Anti-addition (ה-OH וה-X נכנסים מצדדים מנוגדים)",
    intermediate: "יון הלונטום טבעתי מותקף ע\"י מולקולת מים (ולא ע\"י יון ההליד, כי יש הרבה יותר מים בסביבה).",
    notes: "המים תוקפים את הפחמן המותמר יותר משום שיש עליו יותר אופי חיובי במצב המעבר."
  },
  {
    id: 6,
    name: "הידרוגנציה קטליטית (חיזור אלקנים)",
    reagents: "H2 בנוכחות זרז מתכת (Pd/C, Pt, או Ni)",
    startingMaterial: "אלקן",
    product: "אלקאן (Alkane)",
    regiochemistry: "לא רלוונטי (מספח שני מימנים)",
    stereochemistry: "Syn-addition (שני המימנים מסתפחים מאותו הצד של המשטח)",
    intermediate: "ספיחה של המולקולות על פני שטח המתכת ומעבר מימנים הדרגתי.",
    notes: "הקשר הכפול נפתח במלואו והופך לקשר יחיד רווי."
  },
  {
    id: 7,
    name: "דיהידרוקסילציה סינונית (Dihydroxylation)",
    reagents: "OsO4 ולאחר מכן H2O2 (או KMnO4 קר ומדולל בבסיס)",
    startingMaterial: "אלקן",
    product: "דיול ויצינלי (Vicinal Diol / Glycol - שתי קבוצות OH סמוכות)",
    regiochemistry: "לא רלוונטי (שני הפחמנים מקבלים OH)",
    stereochemistry: "Syn-addition (שתי קבוצות ה-OH נכנסות מאותו הצד)",
    intermediate: "אסטר מחזורי משולש של האוסמיום (Osmium ester).",
    notes: "KMnO4 בתנאי חימום וחומציות יגרום לביקוע מלא של הקשר ולא לדיול."
  },
  {
    id: 8,
    name: "אוזונוליזה מחזרת (Ozonolysis)",
    reagents: "1. O3\n2. Zn / AcOH או (CH3)2S (DMS)",
    startingMaterial: "אלקן",
    product: "אלדהידים ו/או קטונים",
    regiochemistry: "ביקוע (חיתוך) מלא של הקשר הכפול",
    stereochemistry: "לא רלוונטי",
    intermediate: "אוקסאיל-אוזוניד מורכב שנחתך ועובר חיזור.",
    notes: "הדרך הטובה ביותר לדמיין זאת היא לגזור את הקשר הכפול ולשים חמצן (=O) בכל אחד מהקצוות שנחתכו."
  },
  {
    id: 9,
    name: "אלימינציה דו-מולקולרית (E2)",
    reagents: "בסיס חזק (NaOEt, NaOH, או t-BuOK)",
    startingMaterial: "אלקיל הליד (Alkyl Halide)",
    product: "אלקן (Alkene)",
    regiochemistry: "זייצב (אלקן מותמר יותר) עם בסיס קטן; הופמן (פחות מותמר) עם בסיס נפחי (t-BuOK)",
    stereochemistry: "Anti-periplanar (המימן והקבוצה העוזבת ב-180 מעלות)",
    intermediate: "מצב מעבר מתואם בשלב אחד (אין קרבוקטיון חופשי, **אין שחלופים!**)",
    notes: "בציקלוהקסאן, הדרישה הגיאומטרית מחייבת שהמימן וההלוגן יהיו שניהם אקסיאליים (trans-diaxial)."
  },
  {
    id: 10,
    name: "אלימינציה חד-מולקולרית (E1)",
    reagents: "בסיס חלש וממס פרוטי (EtOH, H2O בחימום)",
    startingMaterial: "אלקיל הליד שלישוני או שניוני",
    product: "אלקן (Alkene)",
    regiochemistry: "זייצב בלבד (האלקן היציב ביותר)",
    stereochemistry: "לא ספציפית",
    intermediate: "קרבוקטיון חופשי - **שחלופים נפוצים מאוד!**",
    notes: "תגובת E1 תמיד מתחרה עם SN1. חימום התמיסה (Delta) מעלה את האנטרופיה ומקדם אלימינציה על פני התמרה."
  },
  {
    id: 11,
    name: "דה-הידרציה של כוהל (Dehydration of Alcohols)",
    reagents: "חומצה חזקה חמה (H2SO4 או H3PO4 מרוכזת, Heat)",
    startingMaterial: "אלכוהול (Alcohol)",
    product: "אלקן (Alkene)",
    regiochemistry: "זייצב בלבד (האלקן היציב ביותר)",
    stereochemistry: "לא ספציפית",
    intermediate: "לכוהל שניוני/שלישוני: קרבוקטיון במנגנון E1 (**ייתכנו שחלופים!**); לכוהל ראשוני: מנגנון E2 ללא קרבוקטיון.",
    notes: "השלב הראשון הוא פרוטונציה מהירה של קבוצת ה-OH ליצירת מים עוזבים, שהם קבוצה עוזבת מעולה."
  }
];

// אתגרי סינתזה
const synthesisChallenges = [
  {
    id: 1,
    title: "סינתזת אלכוהול משני",
    start: "Propene (CH3-CH=CH2)",
    target: "2-Propanol (CH3-CH(OH)-CH3)",
    steps: ["H2O/H+"],
    hint: "זהו סיפוח מים רגיל לפי כלל מרקובניקוב."
  },
  {
    id: 2,
    title: "סינתזת אלכוהול ראשוני",
    start: "Propene (CH3-CH=CH2)",
    target: "1-Propanol (CH3-CH2-CH2-OH)",
    steps: ["1. BH3/THF / 2. H2O2, OH-"],
    hint: "כאן אנחנו צריכים שה-OH יכנס לפחמן הקצה (הפחות מותמר). זוהי רגיוכימיה הפוכה ממרקובניקוב."
  },
  {
    id: 3,
    title: "יצירת אלקן פחות מותמר (הופמן)",
    start: "2-Bromobutane (CH3-CHBr-CH2-CH3)",
    target: "1-Butene (CH2=CH-CH2-CH3)",
    steps: ["t-BuOK"],
    hint: "אנו רוצים לבצע אלימינציה לקבלת האלקן הפחות יציב/פחות מותמר. אנו זקוקים לבסיס נפחי ומפריע במיוחד."
  },
  {
    id: 4,
    title: "סינתזה דו-שלבית",
    start: "Propene (CH3-CH=CH2)",
    target: "1,2-Dibromopropane",
    steps: ["Br2"],
    hint: "סיפוח שני אטומי ברום לקשר הכפול בשלב יחיד."
  },
  {
    id: 5,
    title: "אתגר סינתזה דו-שלבי מתקדם",
    start: "Propene (CH3-CH=CH2)",
    target: "1-Propanol (CH3-CH2-CH2-OH) דרך אלקיל הליד",
    // start -> HBr -> 2-bromopropane -> t-BuOK -> propene -> hydroboration? 
    // Let's make a simpler 2-step one:
    // Propene -> HBr -> 2-bromopropane -> NaCN -> 2-cyanopropane
    start: "Propene (CH3-CH=CH2)",
    target: "Isopropyl cyanide (CH3-CH(CN)-CH3)",
    steps: ["HBr", "NaCN"],
    hint: "שלב 1: ספחי מימן וברום לפי מרקובניקוב. שלב 2: בצעי התמרה נוקלאופילית מהירה עם נוקלאופיל חזק."
  }
];

if (typeof module !== 'undefined') {
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { organicFlashcards, synthesisChallenges };
}
}
