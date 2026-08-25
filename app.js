// app.js - Logic for Bangla Verb Conjugation App

// Verb Dataset
const verbs = [
    {
        eng: "To do", inf: "করা",
        tenses: {
            present_simple: { ami: "করি", tumi: "করো", apni: "করেন", se: "করে" },
            present_perfect: { ami: "করেছি", tumi: "করেছো", apni: "করেছেন", se: "করেছে" }
        }
    },
    {
        eng: "To go", inf: "যাওয়া",
        tenses: {
            present_simple: { ami: "যাই", tumi: "যাও", apni: "যান", se: "যায়" },
            present_perfect: { ami: "গিয়েছি", tumi: "গিয়েছো", apni: "গিয়েছেন", se: "গিয়েছে" }
        }
    },
    {
        eng: "To come", inf: "আসা",
        tenses: {
            present_simple: { ami: "আসি", tumi: "আসো", apni: "আসেন", se: "আসে" },
            present_perfect: { ami: "এসেছি", tumi: "এসেছো", apni: "এসেছেন", se: "এসেছে" }
        }
    },
    {
        eng: "To eat", inf: "খাওয়া",
        tenses: {
            present_simple: { ami: "খাই", tumi: "খাও", apni: "খান", se: "খায়" },
            present_perfect: { ami: "খেয়েছি", tumi: "খেয়েছো", apni: "খেয়েছেন", se: "খেয়েছে" }
        }
    },
    {
        eng: "To drink", inf: "পান করা",
        tenses: {
            present_simple: { ami: "পান করি", tumi: "পান করো", apni: "পান করেন", se: "পান করে" },
            present_perfect: { ami: "পান করেছি", tumi: "পান করেছো", apni: "পান করেছেন", se: "পান করেছে" }
        }
    },
    {
        eng: "To give", inf: "দেওয়া",
        tenses: {
            present_simple: { ami: "দিই", tumi: "দাও", apni: "দেন", se: "দেয়" },
            present_perfect: { ami: "দিয়েছি", tumi: "দিয়েছো", apni: "দিয়েছেন", se: "দিয়েছে" }
        }
    },
    {
        eng: "To take", inf: "নেওয়া",
        tenses: {
            present_simple: { ami: "নিই", tumi: "নাও", apni: "নেন", se: "নেয়" },
            present_perfect: { ami: "নিয়েছি", tumi: "নিয়েছো", apni: "নিয়েছেন", se: "নিয়েছে" }
        }
    },
    {
        eng: "To see", inf: "দেখা",
        tenses: {
            present_simple: { ami: "দেখি", tumi: "দেখো", apni: "দেখেন", se: "দেখে" },
            present_perfect: { ami: "দেখেছি", tumi: "দেখেছো", apni: "দেখেছেন", se: "দেখেছে" }
        }
    },
    {
        eng: "To say", inf: "বলা",
        tenses: {
            present_simple: { ami: "বলি", tumi: "বলো", apni: "বলেন", se: "বলে" },
            present_perfect: { ami: "বলেছি", tumi: "বলেছো", apni: "বলেছেন", se: "বলেছে" }
        }
    },
    {
        eng: "To hear", inf: "শোনা",
        tenses: {
            present_simple: { ami: "শুনি", tumi: "শোনো", apni: "শোনেন", se: "শোনে" },
            present_perfect: { ami: "শুনেছি", tumi: "শুনেছো", apni: "শুনেছেন", se: "শুনেছে" }
        }
    },
    {
        eng: "To know", inf: "জানা",
        tenses: {
            present_simple: { ami: "জানি", tumi: "জানো", apni: "জানেন", se: "জানে" },
            present_perfect: { ami: "জেনেছি", tumi: "জেনেছো", apni: "জেনেছেন", se: "জেনেছে" }
        }
    },
    {
        eng: "To understand", inf: "বোঝা",
        tenses: {
            present_simple: { ami: "বুঝি", tumi: "বোঝো", apni: "বোঝেন", se: "বোঝে" },
            present_perfect: { ami: "বুঝেছি", tumi: "বুঝেছো", apni: "বুঝেছেন", se: "বুঝেছে" }
        }
    },
    {
        eng: "To read", inf: "পড়া",
        tenses: {
            present_simple: { ami: "পড়ি", tumi: "পড়ো", apni: "পড়েন", se: "পড়ে" },
            present_perfect: { ami: "পড়েছি", tumi: "পড়েছো", apni: "পড়েছেন", se: "পড়েছে" }
        }
    },
    {
        eng: "To write", inf: "লেখা",
        tenses: {
            present_simple: { ami: "লিখি", tumi: "লেখো", apni: "লেখেন", se: "লেখে" },
            present_perfect: { ami: "লিখেছি", tumi: "লিখেছো", apni: "লিখেছেন", se: "লিখেছে" }
        }
    },
    {
        eng: "To sit", inf: "বসা",
        tenses: {
            present_simple: { ami: "বসি", tumi: "বসো", apni: "বসেন", se: "বসে" },
            present_perfect: { ami: "বসেছি", tumi: "বসেছো", apni: "বসেছেন", se: "বসেছে" }
        }
    },
    {
        eng: "To stand", inf: "দাঁড়ানো",
        tenses: {
            present_simple: { ami: "দাঁড়াই", tumi: "দাঁড়াও", apni: "দাঁড়ান", se: "দাঁড়ায়" },
            present_perfect: { ami: "দাঁড়িয়েছি", tumi: "দাঁড়িয়েছো", apni: "দাঁড়িয়েছেন", se: "দাঁড়িয়েছে" }
        }
    },
    {
        eng: "To sleep", inf: "ঘুমানো",
        tenses: {
            present_simple: { ami: "ঘুমাই", tumi: "ঘুমাও", apni: "ঘুমান", se: "ঘুমায়" },
            present_perfect: { ami: "ঘুমিয়েছি", tumi: "ঘুমিয়েছো", apni: "ঘুমিয়েছেন", se: "ঘুমিয়েছে" }
        }
    },
    {
        eng: "To stay", inf: "থাকা",
        tenses: {
            present_simple: { ami: "থাকি", tumi: "থাকো", apni: "থাকেন", se: "থাকে" },
            present_perfect: { ami: "থেকেছি", tumi: "থেকেছো", apni: "থেকেছেন", se: "থেকেছে" }
        }
    },
    {
        eng: "To learn", inf: "শেখা",
        tenses: {
            present_simple: { ami: "শিখি", tumi: "শেখো", apni: "শেখেন", se: "শেখে" },
            present_perfect: { ami: "শিখেছি", tumi: "শিখেছো", apni: "শিখেছেন", se: "শিখেছে" }
        }
    },
    {
        eng: "To love", inf: "ভালোবাসা",
        tenses: {
            present_simple: { ami: "ভালোবাসি", tumi: "ভালোবাসো", apni: "ভালোবাসেন", se: "ভালোবাসে" },
            present_perfect: { ami: "ভালোবেসেছি", tumi: "ভালোবেসেছো", apni: "ভালোবেসেছেন", se: "ভালোবেসেছে" }
        }
    }
];

function getVerbForms(verb, tense = selectedTense) {
    if (verb && verb.tenses && verb.tenses[tense]) {
        return verb.tenses[tense];
    }
    return {
        ami: (verb && verb.ami) || "",
        tumi: (verb && verb.tumi) || "",
        apni: (verb && verb.apni) || "",
        se: (verb && verb.se) || ""
    };
}

// App State
let currentDrillIndex = 0;
let isPlaying = false;
let playSpeed = 1.0;
let selectedGender = "female";
let selectedTense = "present_simple"; // "present_simple" or "present_perfect"
let currentAudio = null;
let drillTimeout = null;
let currentPartIndex = 0; // Tracks which segment of a verb is playing

// Pause configurations (in seconds)
let pauseRecall = 1.0;
let pauseRepeat = 0.5;
let pauseGap = 1.5;

// Quiz State
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let activeQuizAudio = null;

// DOM Elements
const themeToggle = document.getElementById("theme-toggle");
const genderRadios = document.querySelectorAll('input[name="voice-gender"]');
const tenseRadios = document.querySelectorAll('input[name="tense-select"]');
const navItems = document.querySelectorAll(".nav-item");
const screens = document.querySelectorAll(".app-screen");

// Player Elements
const drillProgressText = document.getElementById("drill-progress-text");
const drillProgressBar = document.getElementById("drill-progress-bar");
const drillDisplayEng = document.getElementById("drill-display-eng");
const drillDisplayBnInf = document.getElementById("drill-display-bn-inf");
const drillValAmi = document.getElementById("drill-val-ami");
const drillValTumi = document.getElementById("drill-val-tumi");
const drillValApni = document.getElementById("drill-val-apni");
const drillValSe = document.getElementById("drill-val-se");

const btnPrev = document.getElementById("btn-prev");
const btnPlay = document.getElementById("btn-play");
const btnNext = document.getElementById("btn-next");
const playIcon = btnPlay.querySelector(".play-icon");
const pauseIcon = btnPlay.querySelector(".pause-icon");

// Settings Elements
const settingsHeader = document.querySelector(".settings-header");
const settingsContent = document.querySelector(".settings-content");
const settingsCard = document.querySelector(".settings-card");
const speedButtons = document.querySelectorAll(".speed-btn");
const sliderPauseRecall = document.getElementById("param-pause-recall");
const sliderPauseRepeat = document.getElementById("param-pause-repeat");
const sliderPauseGap = document.getElementById("param-pause-gap");
const valPauseRecall = document.getElementById("val-pause-recall");
const valPauseRepeat = document.getElementById("val-pause-repeat");
const valPauseGap = document.getElementById("val-pause-gap");

// Search & Grid Elements
const verbSearch = document.getElementById("verb-search");
const verbsList = document.getElementById("verbs-list");

// Quiz Elements
const quizProgressText = document.getElementById("quiz-progress-text");
const quizScoreText = document.getElementById("quiz-score-text");
const quizPrompt = document.getElementById("quiz-question-prompt");
const quizAudioBtn = document.getElementById("quiz-audio-btn");
const quizOptionsContainer = document.getElementById("quiz-options-container");
const btnQuizNext = document.getElementById("btn-quiz-next");

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    // 0. Browser & Device Detection
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isMac = /Macintosh|Mac OS X/.test(ua);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    const isMobile = isIOS || /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua);

    if (isIOS) document.body.classList.add("is-ios");
    if (isMac) document.body.classList.add("is-mac");
    if (isSafari) document.body.classList.add("is-safari");
    if (isMobile) document.body.classList.add("is-mobile");
    else document.body.classList.add("is-desktop");

    // 1. Theme toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
    });

    // 2. Navigation
    const mainContent = document.querySelector('.app-main-content');
    const resetScrollToTop = () => {
        if (mainContent) mainContent.scrollTop = 0;
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        requestAnimationFrame(() => {
            if (mainContent) mainContent.scrollTop = 0;
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    };

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetScreen = item.getAttribute("data-screen");

            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");

            screens.forEach(screen => {
                screen.classList.remove("active");
                if (screen.id === targetScreen) {
                    screen.classList.add("active");
                }
            });

            // Always scroll back to top when switching tabs
            resetScrollToTop();

            // Pause drill when leaving player screen
            if (targetScreen !== "screen-drills" && isPlaying) {
                pauseDrill();
            }

            // Initialize quiz if entering quiz screen
            if (targetScreen === "screen-quiz") {
                startQuiz();
                resetScrollToTop();
            }
        });
    });

    // 3. Gender selector
    genderRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            selectedGender = e.target.value;
            if (isPlaying) {
                // Restart current segment with new voice
                stopCurrentAudio();
                playDrillSegment();
            }
        });
    });

    // 3b. Tense selector
    const tenseSelectRadios = document.querySelectorAll('input[name="tense-select"]');
    tenseSelectRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            selectedTense = e.target.value;
            if (isPlaying) {
                stopCurrentAudio();
            }
            updatePlayerView();
            renderVerbsGrid();
            if (document.getElementById("screen-quiz").classList.contains("active")) {
                startQuiz();
            }
        });
    });

    // 4. Player controls
    btnPlay.addEventListener("click", togglePlay);
    btnPrev.addEventListener("click", () => navigateDrill(-1));
    btnNext.addEventListener("click", () => navigateDrill(1));

    // 5. Settings Card toggle
    settingsHeader.addEventListener("click", () => {
        settingsCard.classList.toggle("expanded");
        settingsContent.classList.toggle("hidden");
    });

    // 6. Settings values
    speedButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            speedButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            playSpeed = parseFloat(btn.getAttribute("data-speed"));
            if (currentAudio) {
                currentAudio.playbackRate = playSpeed;
            }
        });
    });

    sliderPauseRecall.addEventListener("input", (e) => {
        pauseRecall = parseFloat(e.target.value);
        valPauseRecall.textContent = `${pauseRecall.toFixed(1)}s`;
    });
    sliderPauseRepeat.addEventListener("input", (e) => {
        pauseRepeat = parseFloat(e.target.value);
        valPauseRepeat.textContent = `${pauseRepeat.toFixed(1)}s`;
    });
    sliderPauseGap.addEventListener("input", (e) => {
        pauseGap = parseFloat(e.target.value);
        valPauseGap.textContent = `${pauseGap.toFixed(1)}s`;
    });

    // 7. Grid population & Search
    renderVerbsGrid();
    verbSearch.addEventListener("input", filterVerbs);

    // 8. Quiz Controls
    quizAudioBtn.addEventListener("click", playQuizPromptAudio);
    btnQuizNext.addEventListener("click", loadNextQuizQuestion);

    // Setup initial player view
    updatePlayerView();
});

// --- AUDIO UTILITIES & SPEECH FALLBACK ---
function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'bn-BD';
        utterance.rate = playSpeed;
        window.speechSynthesis.speak(utterance);
    }
}

function stopCurrentAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    if (drillTimeout) {
        clearTimeout(drillTimeout);
        drillTimeout = null;
    }
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}

function playFile(filePath, fallbackText) {
    return new Promise((resolve) => {
        stopCurrentAudio();

        currentAudio = new Audio(filePath);
        currentAudio.playbackRate = playSpeed;

        currentAudio.onended = () => {
            currentAudio = null;
            resolve();
        };

        currentAudio.onerror = (e) => {
            currentAudio = null;
            if (fallbackText) {
                speakText(fallbackText);
                drillTimeout = setTimeout(resolve, 1600 / playSpeed);
            } else {
                resolve();
            }
        };

        currentAudio.play().catch(err => {
            currentAudio = null;
            if (fallbackText) {
                speakText(fallbackText);
                drillTimeout = setTimeout(resolve, 1600 / playSpeed);
            } else {
                resolve();
            }
        });
    });
}

function wait(seconds) {
    return new Promise(resolve => {
        drillTimeout = setTimeout(resolve, seconds * 1000);
    });
}

// --- DRILL PLAYER CONTROLS ---
function togglePlay() {
    if (isPlaying) {
        pauseDrill();
    } else {
        startDrill();
    }
}

function startDrill() {
    isPlaying = true;
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
    playDrillSegment();
}

function pauseDrill() {
    isPlaying = false;
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
    stopCurrentAudio();

    // Remove active speaking highlights
    document.querySelectorAll(".drill-conj-item").forEach(item => {
        item.classList.remove("active-speaking");
    });
}

function navigateDrill(direction) {
    stopCurrentAudio();
    currentDrillIndex = (currentDrillIndex + direction + verbs.length) % verbs.length;
    currentPartIndex = 0; // Reset to start of verb
    updatePlayerView();
    if (isPlaying) {
        playDrillSegment();
    }
}

function updatePlayerView() {
    const verb = verbs[currentDrillIndex];
    const forms = getVerbForms(verb, selectedTense);

    // Progress
    drillProgressText.textContent = `Verb ${currentDrillIndex + 1} of ${verbs.length}`;
    drillProgressBar.style.width = `${((currentDrillIndex + 1) / verbs.length) * 100}%`;

    // Display values
    drillDisplayEng.textContent = verb.eng;
    drillDisplayBnInf.textContent = verb.inf;
    drillValAmi.textContent = forms.ami;
    drillValTumi.textContent = forms.tumi;
    drillValApni.textContent = forms.apni;
    drillValSe.textContent = forms.se;

    // Remove highlights
    document.querySelectorAll(".drill-conj-item").forEach(item => {
        item.classList.remove("active-speaking");
    });
}

/*
Drill Part Indices flow per Verb:
0: English definition
1: Recall Pause
2: Bangla Infinitive
3: Repeat Pause
4: "আমি [ami]" audio + highlight Box
5: Repeat Pause
6: "তুমি [tumi]" audio + highlight Box
7: Repeat Pause
8: "আপনি [apni]" audio + highlight Box
9: Repeat Pause
10: "সে [se]" audio + highlight Box
11: End Gap Pause -> triggers Next Verb
*/
async function playDrillSegment() {
    if (!isPlaying) return;

    const verb = verbs[currentDrillIndex];
    const forms = getVerbForms(verb, selectedTense);
    const gender = selectedGender;
    const formatIdx = String(currentDrillIndex).padStart(2, '0');
    const tenseSuffix = selectedTense === "present_perfect" ? "_pp" : "";

    try {
        switch (currentPartIndex) {
            case 0:
                await playFile(`audio/${gender}/verb_${formatIdx}_0_eng.mp3`, verb.eng);
                currentPartIndex = 1;
                playDrillSegment();
                break;

            case 1:
                await wait(pauseRecall);
                currentPartIndex = 2;
                playDrillSegment();
                break;

            case 2:
                await playFile(`audio/${gender}/verb_${formatIdx}_1_inf.mp3`, verb.inf);
                currentPartIndex = 3;
                playDrillSegment();
                break;

            case 3:
                await wait(pauseRepeat);
                highlightSpeakingBox("conj-ami");
                currentPartIndex = 4;
                playDrillSegment();
                break;

            case 4:
                await playFile(`audio/${gender}/verb_${formatIdx}_2_ami${tenseSuffix}.mp3`, `আমি ${forms.ami}`);
                currentPartIndex = 5;
                playDrillSegment();
                break;

            case 5:
                await wait(pauseRepeat);
                highlightSpeakingBox("conj-tumi");
                currentPartIndex = 6;
                playDrillSegment();
                break;

            case 6:
                await playFile(`audio/${gender}/verb_${formatIdx}_3_tumi${tenseSuffix}.mp3`, `তুমি ${forms.tumi}`);
                currentPartIndex = 7;
                playDrillSegment();
                break;

            case 7:
                await wait(pauseRepeat);
                highlightSpeakingBox("conj-apni");
                currentPartIndex = 8;
                playDrillSegment();
                break;

            case 8:
                await playFile(`audio/${gender}/verb_${formatIdx}_4_apni${tenseSuffix}.mp3`, `আপনি ${forms.apni}`);
                currentPartIndex = 9;
                playDrillSegment();
                break;

            case 9:
                await wait(pauseRepeat);
                highlightSpeakingBox("conj-se");
                currentPartIndex = 10;
                playDrillSegment();
                break;

            case 10:
                await playFile(`audio/${gender}/verb_${formatIdx}_5_se${tenseSuffix}.mp3`, `সে ${forms.se}`);
                currentPartIndex = 11;
                playDrillSegment();
                break;

            case 11:
                await wait(pauseGap);
                // Go to next verb
                currentPartIndex = 0;
                currentDrillIndex = (currentDrillIndex + 1) % verbs.length;
                updatePlayerView();
                playDrillSegment();
                break;
        }
    } catch (err) {
        console.error("Drill cycle error:", err);
    }
}

function highlightSpeakingBox(boxId) {
    document.querySelectorAll(".drill-conj-item").forEach(item => {
        item.classList.remove("active-speaking");
    });
    if (boxId) {
        document.getElementById(boxId).classList.add("active-speaking");
    }
}

// --- VERBS GRID CONTROLS ---
function renderVerbsGrid() {
    verbsList.innerHTML = "";
    verbs.forEach((verb, idx) => {
        const forms = getVerbForms(verb, selectedTense);
        const card = document.createElement("div");
        card.className = "verb-card";

        card.innerHTML = `
            <div class="verb-card-header">
                <span class="eng-title">${verb.eng}</span>
                <span class="bn-inf" onclick="playSingleCell(event, ${idx}, 1)">${verb.inf}</span>
            </div>
            <div class="verb-card-details">
                <div class="card-conj-grid">
                    <div class="card-conj-item" onclick="playSingleCell(event, ${idx}, 2)">
                        <span class="pronoun">আমি</span>
                        <span class="form">${forms.ami}</span>
                        <svg class="play-small-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                    </div>
                    <div class="card-conj-item" onclick="playSingleCell(event, ${idx}, 3)">
                        <span class="pronoun">তুমি</span>
                        <span class="form">${forms.tumi}</span>
                        <svg class="play-small-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                    </div>
                    <div class="card-conj-item" onclick="playSingleCell(event, ${idx}, 4)">
                        <span class="pronoun">আপনি</span>
                        <span class="form">${forms.apni}</span>
                        <svg class="play-small-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                    </div>
                    <div class="card-conj-item" onclick="playSingleCell(event, ${idx}, 5)">
                        <span class="pronoun">সে</span>
                        <span class="form">${forms.se}</span>
                        <svg class="play-small-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                    </div>
                </div>
            </div>
        `;

        // Expand/Collapse drawer on header click (avoid expanding if clicking infinitive directly)
        card.addEventListener("click", (e) => {
            if (e.target.classList.contains("bn-inf") || e.target.closest(".card-conj-item")) {
                return;
            }
            const isExpanded = card.classList.contains("expanded");
            document.querySelectorAll(".verb-card").forEach(c => c.classList.remove("expanded"));
            if (!isExpanded) {
                card.classList.add("expanded");
            }
        });

        verbsList.appendChild(card);
    });
}

function filterVerbs(e) {
    const query = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".verb-card");

    cards.forEach(card => {
        const eng = card.querySelector(".eng-title").textContent.toLowerCase();
        const bn = card.querySelector(".bn-inf").textContent.toLowerCase();

        if (eng.includes(query) || bn.includes(query)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

function playSingleCell(event, verbIndex, partIndex) {
    event.stopPropagation();
    const formatIdx = String(verbIndex).padStart(2, '0');
    const gender = selectedGender;
    const verb = verbs[verbIndex];
    const forms = getVerbForms(verb, selectedTense);

    const suffixMap = { 1: 'inf', 2: 'ami', 3: 'tumi', 4: 'apni', 5: 'se' };
    const textMap = {
        1: verb.inf,
        2: `আমি ${forms.ami}`,
        3: `তুমি ${forms.tumi}`,
        4: `আপনি ${forms.apni}`,
        5: `সে ${forms.se}`
    };
    const suffix = suffixMap[partIndex];
    if (!suffix) return;

    const tenseSuffix = selectedTense === "present_perfect" ? "_pp" : "";
    const path = `audio/${gender}/verb_${formatIdx}_${partIndex}_${suffix}${tenseSuffix}.mp3`;

    if (isPlaying) {
        pauseDrill();
    }

    const clickAudio = new Audio(path);
    clickAudio.play().catch(e => {
        speakText(textMap[partIndex]);
    });
}


// --- INTERACTIVE QUIZ CONTROLS ---
function startQuiz() {
    quizScore = 0;
    currentQuizIndex = 0;
    quizQuestions = generateQuizQuestions();
    loadQuizQuestion();
}

function generateQuizQuestions() {
    const list = [];
    const pronouns = [
        { label: "আমি (I)", key: "ami", prefix: "আমি" },
        { label: "তুমি (You - familiar)", key: "tumi", prefix: "তুমি" },
        { label: "আপনি (You - formal)", key: "apni", prefix: "আপনি" },
        { label: "সে (He/She)", key: "se", prefix: "সে" }
    ];

    // Choose 10 random pairings
    const indices = Array.from({ length: verbs.length }, (_, i) => i);
    indices.sort(() => Math.random() - 0.5);

    const selectedIndices = indices.slice(0, 10);

    selectedIndices.forEach((verbIdx) => {
        const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
        const verb = verbs[verbIdx];
        const forms = getVerbForms(verb, selectedTense);

        // Correct answer text
        const correctVal = forms[randomPronoun.key];
        const correctPhrase = `${randomPronoun.prefix} ${correctVal}`;

        // Find distractors
        const options = [correctPhrase];
        while (options.length < 4) {
            const randomOtherVerb = verbs[Math.floor(Math.random() * verbs.length)];
            const otherForms = getVerbForms(randomOtherVerb, selectedTense);
            const distractorPhrase = `${randomPronoun.prefix} ${otherForms[randomPronoun.key]}`;
            if (!options.includes(distractorPhrase)) {
                options.push(distractorPhrase);
            }
        }

        // Shuffle options
        options.sort(() => Math.random() - 0.5);

        list.push({
            verbIndex: verbIdx,
            englishVerb: verb.eng,
            pronounLabel: randomPronoun.label,
            pronounKey: randomPronoun.key,
            pronounPrefix: randomPronoun.prefix,
            correctPhrase: correctPhrase,
            options: options,
            audioFilePart: randomPronoun.key === "ami" ? 2 : (randomPronoun.key === "tumi" ? 3 : (randomPronoun.key === "apni" ? 4 : 5))
        });
    });

    return list;
}

function loadQuizQuestion() {
    btnQuizNext.classList.add("hidden");

    const q = quizQuestions[currentQuizIndex];
    quizProgressText.textContent = `Question ${currentQuizIndex + 1} of 10`;
    quizScoreText.textContent = `Score: ${quizScore}`;

    quizPrompt.textContent = `${q.englishVerb} (${q.pronounPrefix})`;

    // Render options buttons
    quizOptionsContainer.innerHTML = "";
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "quiz-option-btn";
        btn.innerHTML = `
            <span>${opt}</span>
            <svg class="play-small-icon hidden" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
        `;

        btn.addEventListener("click", () => handleQuizAnswer(btn, opt));
        quizOptionsContainer.appendChild(btn);
    });
}

function handleQuizAnswer(selectedBtn, answerText) {
    const q = quizQuestions[currentQuizIndex];
    const optionButtons = quizOptionsContainer.querySelectorAll(".quiz-option-btn");

    // Stop any playing prompt audio
    if (activeQuizAudio) {
        activeQuizAudio.pause();
        activeQuizAudio = null;
    }

    // Disable all options
    optionButtons.forEach(btn => {
        btn.classList.add("disabled");
        // Show correct answers
        const labelText = btn.querySelector("span").textContent;
        if (labelText === q.correctPhrase) {
            btn.classList.add("correct");
        }
    });

    // Play feedback audio
    const formatIdx = String(q.verbIndex).padStart(2, '0');
    const pronounSuffixMap = { 2: "ami", 3: "tumi", 4: "apni", 5: "se" };
    const tenseSuffix = selectedTense === "present_perfect" ? "_pp" : "";
    const pSuffix = pronounSuffixMap[q.audioFilePart] || "ami";
    const correctAudioPath = `audio/${selectedGender}/verb_${formatIdx}_${q.audioFilePart}_${pSuffix}${tenseSuffix}.mp3`;
    activeQuizAudio = new Audio(correctAudioPath);
    activeQuizAudio.play().catch(e => {
        speakText(q.correctPhrase);
    });

    if (answerText === q.correctPhrase) {
        quizScore++;
        quizScoreText.textContent = `Score: ${quizScore}`;
        // Trigger short haptic feedback on iPhone if supported
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    } else {
        selectedBtn.classList.add("incorrect");
        if (navigator.vibrate) {
            navigator.vibrate([80, 50, 80]);
        }
    }

    btnQuizNext.classList.remove("hidden");
}

function playQuizPromptAudio() {
    const q = quizQuestions[currentQuizIndex];
    const formatIdx = String(q.verbIndex).padStart(2, '0');
    const path = `audio/${selectedGender}/verb_${formatIdx}_0_eng.mp3`;

    if (activeQuizAudio) {
        activeQuizAudio.pause();
    }

    activeQuizAudio = new Audio(path);
    activeQuizAudio.play().catch(e => console.error("Quiz prompt play error:", e));
}

function loadNextQuizQuestion() {
    if (activeQuizAudio) {
        activeQuizAudio.pause();
        activeQuizAudio = null;
    }

    currentQuizIndex++;
    if (currentQuizIndex < 10) {
        loadQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    quizProgressText.textContent = "Quiz Complete!";
    quizPrompt.textContent = `Final Score: ${quizScore}/10`;
    quizOptionsContainer.innerHTML = "";

    // Feedback text
    const feedbackMsg = document.createElement("p");
    feedbackMsg.style.textAlign = "center";
    feedbackMsg.style.margin = "20px 0";
    feedbackMsg.style.fontSize = "18px";
    feedbackMsg.style.color = "var(--text-secondary)";

    if (quizScore === 10) {
        feedbackMsg.textContent = "অসাধারণ! (Amazing!) Perfect score!";
    } else if (quizScore >= 7) {
        feedbackMsg.textContent = "খুব ভালো! (Very Good!) Great effort!";
    } else {
        feedbackMsg.textContent = "আবার চেষ্টা করুন। (Try again.) Practice makes perfect!";
    }

    quizOptionsContainer.appendChild(feedbackMsg);

    btnQuizNext.textContent = "Restart Quiz";
    btnQuizNext.classList.remove("hidden");

    // Temporarily replace next button event
    const newBtn = btnQuizNext.cloneNode(true);
    btnQuizNext.parentNode.replaceChild(newBtn, btnQuizNext);

    // Restore and reference the global variable
    const restoredBtn = document.getElementById("btn-quiz-next");
    restoredBtn.addEventListener("click", () => {
        restoredBtn.textContent = "Next Question";
        // restore next question event
        restoredBtn.removeEventListener("click", this);
        restoredBtn.addEventListener("click", loadNextQuizQuestion);
        startQuiz();
    });
}
