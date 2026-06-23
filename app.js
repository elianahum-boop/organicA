// אפליקציית תרגול כימיה אורגנית א' - קוד המקור
document.addEventListener("DOMContentLoaded", () => {
  
  // --- ניהול מצב והתקדמות (State Manager) ---
  const defaultState = {
    solvedCount: 0,
    correctCount: 0,
    streak: 1,
    lastPracticeDate: "",
    scores: {
      nomenclature_alkanes: { solved: 0, correct: 0, total: 0 },
      nomenclature_functional: { solved: 0, correct: 0, total: 0 },
      resonance_structures: { solved: 0, correct: 0, total: 0 },
      acid_base: { solved: 0, correct: 0, total: 0 },
      conformations_newman: { solved: 0, correct: 0, total: 0 },
      conformations_chair: { solved: 0, correct: 0, total: 0 },
      stereochemistry_centers: { solved: 0, correct: 0, total: 0 },
      stereochemistry_relationships: { solved: 0, correct: 0, total: 0 },
      reactions_addition: { solved: 0, correct: 0, total: 0 },
      reactions_cleavage: { solved: 0, correct: 0, total: 0 },
      mechanisms_substitution: { solved: 0, correct: 0, total: 0 },
      mechanisms_elimination: { solved: 0, correct: 0, total: 0 }
    }
  };

  let appState = JSON.parse(localStorage.getItem("organic_practice_state"));
  
  if (!appState) {
    appState = defaultState;
  } else {
    // Migration: ensure scores object exists
    if (!appState.scores) {
      appState.scores = {};
    }
    // Add missing new categories
    for (let cat in defaultState.scores) {
      if (!appState.scores[cat]) {
        appState.scores[cat] = { solved: 0, correct: 0, total: 0 };
      }
    }
    // Remove old obsolete categories (if any)
    for (let cat in appState.scores) {
      if (!defaultState.scores[cat]) {
        delete appState.scores[cat];
      }
    }
  }

  // Sync state with question counts dynamically if they change
  function syncStateTotals() {
    const counts = {
      nomenclature_alkanes: 0,
      nomenclature_functional: 0,
      resonance_structures: 0,
      acid_base: 0,
      conformations_newman: 0,
      conformations_chair: 0,
      stereochemistry_centers: 0,
      stereochemistry_relationships: 0,
      reactions_addition: 0,
      reactions_cleavage: 0,
      mechanisms_substitution: 0,
      mechanisms_elimination: 0
    };
    organicQuestions.forEach(q => {
      if (counts[q.category] !== undefined) {
        counts[q.category]++;
      }
    });
    for (let cat in counts) {
      if (appState.scores[cat]) {
        appState.scores[cat].total = counts[cat];
      }
    }
  }
  syncStateTotals();

  function saveState() {
    localStorage.setItem("organic_practice_state", JSON.stringify(appState));
    updateGlobalUI();
  }

  function updateGlobalUI() {
    // Top Stats Bar
    document.getElementById("stat-solved").textContent = appState.solvedCount;
    const miniScore = document.getElementById("mini-score");
    if (miniScore) {
      miniScore.textContent = appState.solvedCount > 0 
        ? `${appState.correctCount} מתוך ${appState.solvedCount}` 
        : "0";
    }
      
    const accuracy = appState.solvedCount > 0 
      ? Math.round((appState.correctCount / appState.solvedCount) * 100) 
      : 0;
    document.getElementById("stat-accuracy").textContent = `${accuracy}%`;
    document.getElementById("stat-streak").textContent = appState.streak;
    
    const miniStreak = document.getElementById("mini-streak");
    if (miniStreak) {
      miniStreak.textContent = `🔥 ${appState.streak}`;
    }

    renderDashboardTopics();
  }

  // Handle streak increase
  function checkAndUpdateStreak() {
    const today = new Date().toDateString();
    if (appState.lastPracticeDate === "") {
      appState.streak = 1;
    } else {
      const lastDate = new Date(appState.lastPracticeDate);
      const diffTime = Math.abs(new Date() - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        appState.streak++;
      } else if (diffDays > 1) {
        appState.streak = 1;
      }
    }
    appState.lastPracticeDate = today;
  }

  // Reset progress handler
  document.getElementById("reset-progress").addEventListener("click", () => {
    if (confirm("האם את בטוחה שברצונך לאפס את כל ההתקדמות והנקודות שלך?")) {
      appState = JSON.parse(JSON.stringify(defaultState));
      syncStateTotals();
      saveState();
      location.hash = "#dashboard";
      location.reload();
    }
  });

  // --- ניתוב דפים (SPA Routing) ---
  const navItems = document.querySelectorAll(".nav-item");
  const screens = document.querySelectorAll(".screen-panel");

  function handleRouting() {
    const hash = location.hash || "#dashboard";
    
    // Deactivate all
    navItems.forEach(item => item.classList.remove("active"));
    screens.forEach(screen => screen.classList.remove("active"));
    
    // Activate current
    const activeNav = document.querySelector(`.nav-item[href="${hash}"]`);
    if (activeNav) activeNav.classList.add("active");
    
    const targetScreenId = `screen-${hash.replace("#", "")}`;
    const activeScreen = document.getElementById(targetScreenId);
    if (activeScreen) activeScreen.classList.add("active");

    // Topic-specific screen initializations
    if (hash === "#chair") {
      initChairSimulator();
    } else if (hash === "#flashcards") {
      renderFlashcard();
    } else if (hash === "#open-questions") {
      initOpenQuestionsWorkspace();
    } else if (hash === "#synthesis") {
      initSynthesisWorkspace();
    } else if (hash === "#search") {
      // Clear or trigger empty search
      triggerSearch("");
    }
  }

  window.addEventListener("hashchange", handleRouting);

  // Add explicit click listeners to bypass any file:/// protocol navigation restrictions
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const hash = item.getAttribute("href");
      if (hash && hash.startsWith("#")) {
        e.preventDefault();
        location.hash = hash;
        handleRouting();
      }
    });
  });

  // Initial routing
  handleRouting();

  // --- לוח בקרה (Dashboard Screen) ---
  const topicTitlesHebrew = {
    nomenclature_alkanes: "נומנקלטורה: אלקנים וציקלואלקנים",
    nomenclature_functional: "נומנקלטורה: קבוצות פונקציונליות",
    resonance_structures: "מבני לואיס ורזוננס",
    acid_base: "חומציות ובסיסיות (ARIO)",
    conformations_newman: "היטלי ניומן (Newman)",
    conformations_chair: "קונפורמציות כיסא ויציבות",
    stereochemistry_centers: "מרכזים כיראליים וקביעת R/S",
    stereochemistry_relationships: "קשרים סטריאוכימיים (אננטיומרים/מזו)",
    reactions_addition: "תגובות סיפוח של אלקנים",
    reactions_cleavage: "אוזונוליזה וביקוע אלקנים",
    mechanisms_substitution: "מנגנוני התמרה נוקלאופילית (SN1/SN2)",
    mechanisms_elimination: "מנגנוני אלימינציה (E1/E2 ודה-הידרציה)"
  };

  function renderDashboardTopics() {
    const container = document.getElementById("topics-progress-container");
    container.innerHTML = "";
    
    for (let cat in appState.scores) {
      let scoreInfo = appState.scores[cat];
      let percent = scoreInfo.total > 0 ? Math.round((scoreInfo.correct / scoreInfo.total) * 100) : 0;
      
      let card = document.createElement("div");
      card.className = "topic-card";
      card.innerHTML = `
        <div class="topic-header">
          <span class="topic-title">${topicTitlesHebrew[cat]}</span>
          <span class="topic-percentage">${percent}%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${percent}%"></div>
        </div>
        <div class="topic-stats-mini">
          <span>נפתרו בהצלחה: ${scoreInfo.correct}/${scoreInfo.total}</span>
        </div>
        <button class="practice-btn-sm" data-category="${cat}">תרגלי נושא 📝</button>
      `;
      container.appendChild(card);
    }

    // Bind event to the small practice buttons
    container.querySelectorAll(".practice-btn-sm").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const cat = e.target.getAttribute("data-category");
        document.getElementById("quiz-category-select").value = cat;
        startQuizCategory(cat);
        location.hash = "#quizzes";
      });
    });
  }

  // Helper function to parse simple Markdown to HTML
  function parseMarkdown(text) {
    if (!text) return "";
    
    // Escape HTML to prevent injection
    let escaped = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
      
    // Replace headers (### or ####)
    escaped = escaped.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
    escaped = escaped.replace(/^#### (.*?)$/gm, "<h4>$1</h4>");
    
    // Replace bold (**text**)
    escaped = escaped.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    
    // Replace bullet points (- text)
    escaped = escaped.replace(/^[ \t]*-[ \t]+(.*?)$/gm, "<li>$1</li>");
    
    // Wrap adjacent <li> tags in <ul>
    escaped = escaped.replace(/(<li>.*?<\/li>\s*)+/gs, (match) => {
      return "<ul>" + match + "</ul>";
    });
    
    // Convert newlines
    escaped = escaped.replace(/\n\n/g, "<br><br>");
    escaped = escaped.replace(/\n/g, "<br>");
    
    // Clean up empty lines or duplicate breaks around lists
    escaped = escaped.replace(/<br>\s*<ul>/g, "<ul>");
    escaped = escaped.replace(/<\/ul>\s*<br>/g, "</ul>");
    escaped = escaped.replace(/<br>\s*<h3>/g, "<h3>");
    escaped = escaped.replace(/<\/h3>\s*<br>/g, "</h3>");
    escaped = escaped.replace(/<br>\s*<h4>/g, "<h4>");
    escaped = escaped.replace(/<\/h4>\s*<br>/g, "</h4>");
    
    // Restore SVG tags for inline drawings in explanations
    escaped = escaped
      .replace(/&lt;svg(.*?)&gt;/g, "<svg$1>")
      .replace(/&lt;\/svg&gt;/g, "</svg>")
      .replace(/&lt;line(.*?)&gt;/g, "<line$1>")
      .replace(/&lt;\/line&gt;/g, "</line>")
      .replace(/&lt;circle(.*?)&gt;/g, "<circle$1>")
      .replace(/&lt;\/circle&gt;/g, "</circle>")
      .replace(/&lt;text(.*?)&gt;/g, "<text$1>")
      .replace(/&lt;\/text&gt;/g, "</text>")
      .replace(/&lt;polygon(.*?)&gt;/g, "<polygon$1>")
      .replace(/&lt;\/polygon&gt;/g, "</polygon>")
      .replace(/&lt;rect(.*?)&gt;/g, "<rect$1>")
      .replace(/&lt;\/rect&gt;/g, "</rect>")
      .replace(/&lt;path(.*?)&gt;/g, "<path$1>")
      .replace(/&lt;\/path&gt;/g, "</path>")
      .replace(/&lt;g(.*?)&gt;/g, "<g$1>")
      .replace(/&lt;\/g&gt;/g, "</g>")
      .replace(/&lt;defs(.*?)&gt;/g, "<defs$1>")
      .replace(/&lt;\/defs&gt;/g, "</defs>")
      .replace(/&lt;marker(.*?)&gt;/g, "<marker$1>")
      .replace(/&lt;\/marker&gt;/g, "</marker>");
      
    return escaped;
  }

  // --- מערכת בחני תרגול (Quiz Engine) ---
  let quizQuestions = [];
  let currentQuestionIndex = 0;
  let hasAnsweredCurrent = false;

  const categorySelect = document.getElementById("quiz-category-select");
  categorySelect.addEventListener("change", (e) => {
    startQuizCategory(e.target.value);
  });

  function startQuizCategory(category) {
    if (category === "all") {
      quizQuestions = [...organicQuestions].sort(() => Math.random() - 0.5); // Shuffle
    } else {
      quizQuestions = organicQuestions
        .filter(q => q.category === category)
        .sort(() => Math.random() - 0.5); // Shuffle category questions too!
    }
    currentQuestionIndex = 0;
    hasAnsweredCurrent = false;
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const prevBtn = document.getElementById("quiz-prev-btn");
    const nextBtn = document.getElementById("quiz-next-btn");
    const expCard = document.getElementById("quiz-explanation-card");
    
    expCard.style.display = "none";
    nextBtn.style.display = "none";
    
    if (quizQuestions.length === 0) {
      document.getElementById("quiz-question-title").textContent = "אין שאלות";
      document.getElementById("quiz-question-text").textContent = "לא נמצאו שאלות זמינות בקטגוריה זו.";
      document.getElementById("quiz-molecule-viewer").innerHTML = "";
      document.getElementById("quiz-options-container").innerHTML = "";
      document.getElementById("quiz-progress-text").textContent = "";
      return;
    }

    const q = quizQuestions[currentQuestionIndex];
    hasAnsweredCurrent = false;

    // Badges & Progress text
    document.getElementById("quiz-badge-category").textContent = topicTitlesHebrew[q.category];
    document.getElementById("quiz-progress-text").textContent = `שאלה ${currentQuestionIndex + 1} מתוך ${quizQuestions.length}`;

    // Title & Text
    document.getElementById("quiz-question-title").textContent = q.title;
    const qTextEl = document.getElementById("quiz-question-text");
    qTextEl.textContent = q.text;
    
    if (window.MathJax && typeof MathJax.typesetPromise === "function") {
      MathJax.typesetPromise([qTextEl]).catch(err => console.log('MathJax typeset error:', err));
    }
    
    // SVG Representation
    const viewer = document.getElementById("quiz-molecule-viewer");
    if (q.svg) {
      viewer.style.display = "flex";
      viewer.innerHTML = q.svg;
    } else {
      viewer.style.display = "none";
      viewer.innerHTML = "";
    }

    // Populate Option Buttons
    const optionsContainer = document.getElementById("quiz-options-container");
    optionsContainer.innerHTML = "";
    
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      if (/^[A-Za-z0-9(]/.test(opt)) {
        btn.classList.add("ltr-option");
      }
      btn.innerHTML = `<span>${opt}</span>`;
      btn.addEventListener("click", () => handleOptionSelected(idx));
      optionsContainer.appendChild(btn);
    });

    // Toggle Back button
    prevBtn.style.visibility = currentQuestionIndex > 0 ? "visible" : "hidden";
  }

  function handleOptionSelected(selectedIndex) {
    if (hasAnsweredCurrent) return;
    hasAnsweredCurrent = true;
    
    const q = quizQuestions[currentQuestionIndex];
    const optionsContainer = document.getElementById("quiz-options-container");
    const buttons = optionsContainer.querySelectorAll(".option-btn");
    
    const isCorrect = (selectedIndex === q.correctIndex);
    
    // Update state stats
    checkAndUpdateStreak();
    appState.solvedCount++;
    if (isCorrect) {
      appState.correctCount++;
      if (appState.scores[q.category]) {
        appState.scores[q.category].correct = Math.min(
          appState.scores[q.category].correct + 1,
          appState.scores[q.category].total
        );
      }
    }
    if (appState.scores[q.category]) {
      appState.scores[q.category].solved = Math.min(
        appState.scores[q.category].solved + 1,
        appState.scores[q.category].total
      );
    }
    saveState();

    // Style buttons
    buttons.forEach((btn, idx) => {
      btn.classList.add("disabled");
      if (idx === q.correctIndex) {
        btn.classList.add("correct");
      } else if (idx === selectedIndex) {
        btn.classList.add("incorrect");
      }
    });

    // Reveal Explanation
    const expCard = document.getElementById("quiz-explanation-card");
    const expText = document.getElementById("quiz-explanation-text");
    expText.innerHTML = parseMarkdown(q.explanation);
    expCard.style.display = "block";

    if (window.MathJax && typeof MathJax.typesetPromise === "function") {
      MathJax.typesetPromise([expText]).catch(err => console.log('MathJax typeset error:', err));
    }

    // Show Next Button
    const nextBtn = document.getElementById("quiz-next-btn");
    nextBtn.style.display = "block";
    if (currentQuestionIndex === quizQuestions.length - 1) {
      nextBtn.textContent = "סיום בוחן 🎉";
    } else {
      nextBtn.textContent = "לשאלה הבאה ➡️";
    }
  }

  // Quiz Navigation Handlers
  document.getElementById("quiz-next-btn").addEventListener("click", () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      renderQuizQuestion();
    } else {
      // End of quiz
      alert(`כל הכבוד! סיימת את המבחן.\nפתרת בהצלחה ${quizQuestions.length} שאלות.`);
      location.hash = "#dashboard";
    }
  });

  document.getElementById("quiz-prev-btn").addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuizQuestion();
    }
  });

  // Default start on category "all"
  startQuizCategory("all");


  // --- סימולטור כסאות ציקלוהקסאן (Chair Conformation Simulator) ---
  let simulatorRingState = {
    1: { sub: "H", dir: "up" },
    2: { sub: "H", dir: "up" },
    3: { sub: "H", dir: "up" },
    4: { sub: "H", dir: "up" },
    5: { sub: "H", dir: "up" },
    6: { sub: "H", dir: "up" }
  };

  let hasInitializedChair = false;

  function initChairSimulator() {
    if (hasInitializedChair) return; // Prevent double listeners
    hasInitializedChair = true;

    const controlsContainer = document.getElementById("carbon-selectors");
    controlsContainer.innerHTML = "";

    // Generate selectors for each carbon C1 - C6
    for (let c = 1; c <= 6; c++) {
      let row = document.createElement("div");
      row.className = "c-select-row";
      
      row.innerHTML = `
        <div class="c-select-header">
          <span>פחמן C${c}</span>
        </div>
        <div class="c-select-controls">
          <select class="substituent-select" data-carbon="${c}">
            <option value="H">מימן (H)</option>
            <option value="CH3">מתיל (CH3)</option>
            <option value="CH2CH3">אתיל (CH2CH3)</option>
            <option value="tBu">t-butyl (נפחי!)</option>
            <option value="Cl">כלור (Cl)</option>
            <option value="Br">ברום (Br)</option>
            <option value="OH">הידרוקסיל (OH)</option>
          </select>
          <div class="toggle-group">
            <button class="toggle-btn active" data-carbon="${c}" data-dir="up">Up</button>
            <button class="toggle-btn" data-carbon="${c}" data-dir="down">Down</button>
          </div>
        </div>
      `;
      controlsContainer.appendChild(row);
    }

    // Attach events to substituents selector dropdowns
    controlsContainer.querySelectorAll(".substituent-select").forEach(sel => {
      sel.addEventListener("change", (e) => {
        const c = parseInt(e.target.getAttribute("data-carbon"));
        simulatorRingState[c].sub = e.target.value;
        redrawChairSimulator();
      });
    });

    // Attach events to Up/Down toggles
    controlsContainer.querySelectorAll(".toggle-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const c = parseInt(e.target.getAttribute("data-carbon"));
        const dir = e.target.getAttribute("data-dir");
        
        // Remove active class from sibling toggles in this specific group
        const parent = e.target.closest(".toggle-group");
        parent.querySelectorAll(".toggle-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        
        simulatorRingState[c].dir = dir;
        redrawChairSimulator();
      });
    });

    // Initial render of SVGs & Reports
    redrawChairSimulator();
  }

  function redrawChairSimulator() {
    // Redraw SVGs
    document.getElementById("chair-svg-a").innerHTML = chairSimulator.getChairSVG(simulatorRingState, false);
    document.getElementById("chair-svg-b").innerHTML = chairSimulator.getChairSVG(simulatorRingState, true);
    
    // Calculate stability report
    const result = chairSimulator.getStabilityReport(simulatorRingState);
    
    // Style report card color based on preference
    const reportCard = document.getElementById("chair-report-container");
    if (result.stableChair === 'A') {
      reportCard.style.borderRightColor = "#38bdf8"; // Cyan for A
    } else if (result.stableChair === 'B') {
      reportCard.style.borderRightColor = "#10b981"; // Green for B
    } else {
      reportCard.style.borderRightColor = "#f59e0b"; // Amber for equal
    }
    
    document.getElementById("chair-report-text").innerHTML = result.report;
  }


  // --- מערכת כרטיסיות תגובות אלקנים (Flashcards Engine) ---
  let flashcardIndex = 0;
  const flashcardEl = document.getElementById("reaction-flashcard");
  
  // Flip event
  flashcardEl.addEventListener("click", () => {
    flashcardEl.classList.toggle("flipped");
  });

  function renderFlashcard() {
    // Reset flip status when drawing new card
    flashcardEl.classList.remove("flipped");
    
    const card = organicFlashcards[flashcardIndex];
    
    // Front side
    document.getElementById("fc-name").textContent = card.name;
    document.getElementById("fc-reagents").textContent = card.reagents;
    document.getElementById("fc-starting").textContent = card.startingMaterial;

    // Back side
    document.getElementById("fc-back-name").textContent = card.name;
    document.getElementById("fc-product").textContent = card.product;
    document.getElementById("fc-regio").textContent = card.regiochemistry;
    document.getElementById("fc-stereo").textContent = card.stereochemistry;
    document.getElementById("fc-intermediate").textContent = card.intermediate;
    document.getElementById("fc-notes").textContent = card.notes;

    // Counter
    document.getElementById("fc-counter-text").textContent = `${flashcardIndex + 1} / ${organicFlashcards.length}`;
  }

  // Navigation handlers
  document.getElementById("fc-next-btn").addEventListener("click", (e) => {
    e.stopPropagation(); // Avoid flipping the card when clicking controls
    flashcardIndex = (flashcardIndex + 1) % organicFlashcards.length;
    renderFlashcard();
  });

  document.getElementById("fc-prev-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    flashcardIndex = (flashcardIndex - 1 + organicFlashcards.length) % organicFlashcards.length;
    renderFlashcard();
  });


  // --- אתגר סינתזה רב-שלבי (Synthesis Challenge) ---
  let currentChallengeIndex = 0;
  let currentChain = [];

  function initSynthesisWorkspace() {
    const select = document.getElementById("synthesis-select");
    select.innerHTML = "";
    
    synthesisChallenges.forEach((ch, idx) => {
      let opt = document.createElement("option");
      opt.value = idx;
      opt.textContent = `${ch.id}. ${ch.title}`;
      select.appendChild(opt);
    });

    select.value = currentChallengeIndex;
    
    // selector change
    select.onchange = (e) => {
      currentChallengeIndex = parseInt(e.target.value);
      loadSynthesisChallenge();
    };

    loadSynthesisChallenge();
  }

  function loadSynthesisChallenge() {
    currentChain = [];
    updateSynthesisChain();
    
    const ch = synthesisChallenges[currentChallengeIndex];
    document.getElementById("synth-start-material").textContent = ch.start;
    document.getElementById("synth-target-material").textContent = ch.target;
    document.getElementById("synth-hint").innerHTML = `<strong>רמז:</strong> ${ch.hint}`;
    document.getElementById("synth-result-card").style.display = "none";

    // Populate Reagents Chips Palette
    // Gather all unique reagents from challenges to build a library
    const library = [
      "HBr",
      "HCl",
      "H2O/H+",
      "1. BH3/THF / 2. H2O2, OH-",
      "Br2",
      "Br2/H2O",
      "H2/Pd",
      "OsO4",
      "O3",
      "t-BuOK",
      "NaOEt",
      "NaCN"
    ];

    const palette = document.getElementById("synth-palette");
    palette.innerHTML = "";
    library.forEach(r => {
      let chip = document.createElement("div");
      chip.className = "reagent-chip";
      chip.textContent = r;
      chip.addEventListener("click", () => {
        currentChain.push(r);
        updateSynthesisChain();
      });
      palette.appendChild(chip);
    });
  }

  function updateSynthesisChain() {
    const container = document.getElementById("synth-chain-container");
    container.innerHTML = "";

    if (currentChain.length === 0) {
      container.innerHTML = `<span class="synth-chain-empty">שרשרת המגיבים ריקה. לחצי על מגיבים מהרשימה מטה כדי להוסיף.</span>`;
      return;
    }

    currentChain.forEach((r, idx) => {
      if (idx > 0) {
        let arrow = document.createElement("span");
        arrow.className = "synth-chain-arrow";
        arrow.textContent = "➡️";
        container.appendChild(arrow);
      }

      let node = document.createElement("div");
      node.className = "synth-node";
      node.innerHTML = `
        <span>${r}</span>
        <span class="synth-node-remove" data-index="${idx}">×</span>
      `;
      
      node.querySelector(".synth-node-remove").addEventListener("click", (e) => {
        const i = parseInt(e.target.getAttribute("data-index"));
        currentChain.splice(i, 1);
        updateSynthesisChain();
      });

      container.appendChild(node);
    });
  }

  document.getElementById("synth-clear-btn").addEventListener("click", () => {
    currentChain = [];
    updateSynthesisChain();
    document.getElementById("synth-result-card").style.display = "none";
  });

  document.getElementById("synth-verify-btn").addEventListener("click", () => {
    const ch = synthesisChallenges[currentChallengeIndex];
    const isCorrect = (JSON.stringify(currentChain) === JSON.stringify(ch.steps));
    const resultCard = document.getElementById("synth-result-card");
    const resultTitle = document.getElementById("synth-result-title");
    const resultText = document.getElementById("synth-result-text");

    resultCard.className = "synthesis-result-card " + (isCorrect ? "success-card" : "danger-card");
    resultCard.style.display = "block";

    if (isCorrect) {
      resultTitle.textContent = "פיתרון מושלם! 🎉";
      resultText.textContent = "כל הכבוד! הצלחת לסדר את המגיבים ברצף הסינתטי המדויק להפקה. נקודת בונוס נוספה לציון הכולל שלך.";
      
      // Add bonus score
      checkAndUpdateStreak();
      appState.solvedCount++;
      appState.correctCount++;
      // Increment alkene reactions category
      if (appState.scores.reactions) {
        appState.scores.reactions.correct = Math.min(
          appState.scores.reactions.correct + 1,
          appState.scores.reactions.total
        );
      }
      saveState();
    } else {
      resultTitle.textContent = "רצף סינתטי שגוי ❌";
      resultText.textContent = `הרצף שהצעת אינו מפיק את המולקולה הנכונה. רמז: בדקי שוב את רגיוסלקטיביות התגובות. (נסי למשל: ${ch.hint})`;
    }
  });


  // --- מערכת שאלות פתוחות למבחן (Open Questions Workspace) ---
  let filteredOpenQuestions = [];
  let currentFilteredOpenQIndex = 0;
  let isOpenQuestionsInitialized = false;

  function initOpenQuestionsWorkspace() {
    const navList = document.getElementById("open-q-nav-list");
    const categorySelect = document.getElementById("open-q-category-select");
    if (!navList || !categorySelect) return;

    function applyFiltering() {
      const selectedCat = categorySelect.value;
      if (selectedCat === "all") {
        filteredOpenQuestions = organicOpenQuestions;
      } else {
        filteredOpenQuestions = organicOpenQuestions.filter(q => q.category === selectedCat);
      }
      currentFilteredOpenQIndex = 0;
      renderOpenQuestionsList();
      renderActiveOpenQuestion();
    }

    if (!isOpenQuestionsInitialized) {
      categorySelect.addEventListener("change", () => {
        applyFiltering();
      });
      
      const hintBtn = document.getElementById("open-q-hint-btn");
      const solBtn = document.getElementById("open-q-sol-btn");
      
      hintBtn.addEventListener("click", () => {
        const hintCard = document.getElementById("open-q-hint-card");
        if (hintCard.style.display === "none") {
          hintCard.style.display = "block";
          hintBtn.textContent = "הסתר רמז 💡";
        } else {
          hintCard.style.display = "none";
          hintBtn.textContent = "הצג רמז שלב א' 💡";
        }
      });
      
      solBtn.addEventListener("click", () => {
        const solCard = document.getElementById("open-q-sol-card");
        if (solCard.style.display === "none") {
          solCard.style.display = "block";
          solBtn.textContent = "הסתר פתרון מלא ❌";
        } else {
          solCard.style.display = "none";
          solBtn.textContent = "הצג פתרון מלא רשמי ✨";
        }
      });
      
      isOpenQuestionsInitialized = true;
    }

    applyFiltering();
  }

  function renderOpenQuestionsList() {
    const navList = document.getElementById("open-q-nav-list");
    if (!navList) return;

    navList.innerHTML = "";
    if (filteredOpenQuestions.length === 0) {
      navList.innerHTML = `<div style="color: var(--text-muted); font-size: 13px; text-align: center; padding: 15px; font-style: italic;">אין שאלות בנושא זה</div>`;
      return;
    }

    filteredOpenQuestions.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.className = "open-q-nav-btn";
      if (idx === currentFilteredOpenQIndex) {
        btn.classList.add("active");
      }
      
      btn.innerHTML = `
        <span>${q.title}</span>
        <span class="open-q-nav-btn-meta">שאלה ${q.id} | ${q.points} נק'</span>
      `;
      
      btn.addEventListener("click", () => {
        currentFilteredOpenQIndex = idx;
        
        navList.querySelectorAll(".open-q-nav-btn").forEach((b, bIdx) => {
          if (bIdx === idx) b.classList.add("active");
          else b.classList.remove("active");
        });
        
        renderActiveOpenQuestion();
      });
      
      navList.appendChild(btn);
    });
  }

  function renderActiveOpenQuestion() {
    const q = filteredOpenQuestions[currentFilteredOpenQIndex];
    const hintCard = document.getElementById("open-q-hint-card");
    const solCard = document.getElementById("open-q-sol-card");
    const hintBtn = document.getElementById("open-q-hint-btn");
    const solBtn = document.getElementById("open-q-sol-btn");
    const viewer = document.getElementById("open-q-molecule-viewer");
    
    hintCard.style.display = "none";
    solCard.style.display = "none";
    hintBtn.textContent = "הצג רמז שלב א' 💡";
    solBtn.textContent = "הצג פתרון מלא רשמי ✨";

    if (!q) {
      document.getElementById("open-q-badge-num").textContent = "סיום";
      document.getElementById("open-q-title").textContent = "אין שאלות זמינות";
      document.getElementById("open-q-text").innerHTML = "אנא בחרי נושא אחר מרשימת הסינון.";
      viewer.style.display = "none";
      viewer.innerHTML = "";
      hintBtn.style.display = "none";
      solBtn.style.display = "none";
      return;
    }

    hintBtn.style.display = "block";
    solBtn.style.display = "block";

    document.getElementById("open-q-badge-num").textContent = `שאלה ${q.id}`;
    document.getElementById("open-q-title").textContent = q.title;
    
    document.getElementById("open-q-text").innerHTML = parseMarkdown(q.text);
    document.getElementById("open-q-hint-text").innerHTML = parseMarkdown(q.hint);
    document.getElementById("open-q-sol-text").innerHTML = parseMarkdown(q.solution);

    if (q.svg) {
      viewer.style.display = "flex";
      viewer.innerHTML = q.svg;
    } else {
      viewer.style.display = "none";
      viewer.innerHTML = "";
    }

    if (window.MathJax && typeof MathJax.typesetPromise === "function") {
      const workspace = document.getElementById("screen-open-questions");
      if (workspace) {
        MathJax.typesetPromise([workspace]).catch(err => console.log('MathJax typeset error:', err));
      }
    }
  }


  // --- מנוע חיפוש בסיכומי קורס (Search Engine) ---
  const searchInput = document.getElementById("summary-search-input");
  
  // Search tags click handlers
  document.querySelectorAll(".search-tag-chip").forEach(chip => {
    chip.addEventListener("click", (e) => {
      searchInput.value = e.target.textContent;
      triggerSearch(e.target.textContent);
    });
  });

  document.getElementById("summary-search-btn").addEventListener("click", () => {
    triggerSearch(searchInput.value);
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      triggerSearch(searchInput.value);
    }
  });

  function triggerSearch(query) {
    const container = document.getElementById("search-results-container");
    container.innerHTML = "";
    
    const term = query.trim().toLowerCase();

    if (term === "") {
      // Render all topics on start
      courseSummaryData.forEach(item => {
        let card = document.createElement("div");
        card.className = "result-card";
        card.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.content}</p>
        `;
        container.appendChild(card);
      });
      return;
    }

    const matches = courseSummaryData.filter(item => {
      return item.keyword.toLowerCase().includes(term) ||
             item.title.toLowerCase().includes(term) ||
             item.content.toLowerCase().includes(term);
    });

    if (matches.length === 0) {
      container.innerHTML = `<div class="no-results">לא נמצאו תוצאות עבור המונח "${query}". נסי מונח אחר או לחצי על אחד התגים המהירים מלעיל.</div>`;
      return;
    }

    // Render matches with highlighting
    matches.forEach(item => {
      let card = document.createElement("div");
      card.className = "result-card";
      
      // Highlight occurrences in content
      const regex = new RegExp(`(${term})`, "gi");
      const highlightedContent = item.content.replace(regex, "<mark>$1</mark>");
      const highlightedTitle = item.title.replace(regex, "<mark>$1</mark>");

      card.innerHTML = `
        <h3>${highlightedTitle}</h3>
        <p>${highlightedContent}</p>
      `;
      container.appendChild(card);
    });
  }

  // --- Initial execution ---
  updateGlobalUI();
});
