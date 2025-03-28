const exerciseImages = {
    // Göğüs hareketleri
    'bench_press': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/barbell-bench-press.gif',
    'incline_dumbbell_press': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/incline-dumbbell-press.gif',
    'dumbbell_flyes': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/dumbbell-flyes.gif',
    'cable_crossover': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/06/cable-crossover.gif',
    'chest_dips': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/01/chest-dip.gif',
    'pec_deck': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/04/pec-deck-fly.gif',
    
    // Sırt hareketleri
    'pull_ups': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/01/pull-up.gif',
    'barbell_rows': 'https://www.inspireusafoundation.org/wp-content/uploads/2021/12/barbell-row.gif',
    'lat_pulldown': 'https://www.inspireusafoundation.org/wp-content/uploads/2021/12/lat-pulldown.gif',
    'seated_rows': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/seated-row.gif',
    
    // Bacak hareketleri
    'squats': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/04/high-bar-squat.gif',
    'leg_press': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/06/leg-press.gif',
    'romanian_deadlift': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/romanian-deadlift.gif',
    'walking_lunges': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/01/walking-lunge.gif',
    'leg_extension': 'https://www.inspireusafoundation.org/wp-content/uploads/2021/12/leg-extension.gif',
    'calf_raises': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/01/standing-calf-raise.gif',
    
    // Omuz hareketleri
    'overhead_press': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/02/overhead-press.gif',
    'arnold_press': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/arnold-press.gif',
    'lateral_raises': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/dumbbell-lateral-raise.gif',
    'front_raises': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/front-raise.gif',
    
    // Biceps hareketleri
    'barbell_curl': 'https://www.inspireusafoundation.org/wp-content/uploads/2021/12/barbell-curl.gif',
    'hammer_curl': 'https://www.inspireusafoundation.org/wp-content/uploads/2021/12/hammer-curl.gif',
    'preacher_curl': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/preacher-curl.gif',
    
    // Triceps hareketleri
    'triceps_pushdown': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/triceps-pushdown.gif',
    'triceps_extension': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/overhead-triceps-extension.gif'
};

const alternativeExercises = {
    // Göğüs alternatifleri
    'bench_press': {
        name: 'Dumbbell Press',
        description: 'Dumbell ile göğüs egzersizi',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/04/dumbbell-bench-press.gif'
    },
    'incline_dumbbell_press': {
        name: 'Smith Machine Incline Press',
        description: 'Smith makinesi ile eğimli göğüs egzersizi',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/smith-machine-incline-bench-press.gif'
    },
    
    // Sırt alternatifleri
    'pull_ups': {
        name: 'Lat Pulldown',
        description: 'Lat pulldown makinesi ile sırt egzersizi',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/12/lat-pulldown.gif'
    },
    'barbell_rows': {
        name: 'Dumbbell Rows',
        description: 'Tek kol dumbell row',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/12/dumbbell-row.gif'
    },
    
    // Bacak alternatifleri
    'squats': {
        name: 'Hack Squat',
        description: 'Hack squat makinesi ile bacak egzersizi',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/07/hack-squat.gif'
    },
    'leg_press': {
        name: 'Bulgarian Split Squat',
        description: 'Tek bacak squat hareketi',
        image: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/04/bulgarian-split-squat.gif'
    }
};

const workoutProgram = {
    "Pazartesi": {
        title: "Göğüs ve Triceps",
        exercises: [
            {
                name: "Drop Set 1",
                details: [
                    "Bench Press: 4 set x 8-10 tekrar (İlk iki set standart, son sette drop set)"
                ]
            },
            {
                name: "Drop Set 2",
                details: [
                    "Incline Dumbbell Press: 4 set x 8-10 tekrar (İlk iki set standart, son sette drop set)"
                ]
            },
            {
                name: "Süper Set 1",
                details: [
                    "Dumbbell Flyes: 3 set x 10-12 tekrar",
                    "Cable Crossovers: 3 set x 12-15 tekrar"
                ]
            },
            {
                name: "Süper Set 2",
                details: [
                    "Chest Dips: 3 set x 8-12 tekrar",
                    "Pec Deck Machine: 3 set x 10-12 tekrar"
                ]
            },
            {
                name: "Drop Set 3",
                details: [
                    "Triceps Dips: 3 set x 10-12 tekrar (Son sette drop set ile yorgunluk)"
                ]
            },
            {
                name: "Triceps",
                details: [
                    "Triceps Pushdowns: 3 set x 12-15 tekrar"
                ]
            }
        ]
    },
    "Salı": {
        title: "Sırt ve Biceps",
        exercises: [
            {
                name: "Drop Set 1",
                details: [
                    "Pull-Ups: 4 set x 8-10 tekrar (Son sette ek ağırlıkla drop set)"
                ]
            },
            {
                name: "Drop Set 2",
                details: [
                    "Barbell Rows: 4 set x 8-10 tekrar (İlk iki set standart, son sette drop set)"
                ]
            },
            {
                name: "Süper Set 1",
                details: [
                    "Lat Pulldowns: 3 set x 10-12 tekrar",
                    "Seated Rows: 3 set x 12-15 tekrar"
                ]
            },
            {
                name: "Drop Set 3",
                details: [
                    "Barbell Curls: 3 set x 10-12 tekrar (İlk iki set standart, son sette drop set)"
                ]
            },
            {
                name: "Biceps",
                details: [
                    "Hammer Curls: 3 set x 10-12 tekrar",
                    "Preacher Curls: 3 set x 12-15 tekrar"
                ]
            }
        ]
    },
    "Çarşamba": {
        title: "Bacak",
        exercises: [
            {
                name: "Drop Set 1",
                details: [
                    "Squats: 4 set x 8-10 tekrar (İlk iki set standart, son sette drop set)"
                ]
            },
            {
                name: "Drop Set 2",
                details: [
                    "Leg Press: 4 set x 10-12 tekrar (İlk iki set standart, son sette drop set)"
                ]
            },
            {
                name: "Süper Set 1",
                details: [
                    "Romanian Deadlifts: 3 set x 10-12 tekrar",
                    "Walking Lunges: 3 set x 12-15 tekrar"
                ]
            },
            {
                name: "Bacak ve Calf",
                details: [
                    "Leg Extensions: 3 set x 12-15 tekrar",
                    "Seated Calf Raises: 3 set x 15-20 tekrar",
                    "Standing Calf Raises: 3 set x 15-20 tekrar"
                ]
            }
        ]
    },
    "Perşembe": {
        title: "Omuz ve Triceps",
        exercises: [
            {
                name: "Drop Set 1",
                details: [
                    "Overhead Press: 4 set x 8-10 tekrar (İlk iki set standart, son sette drop set)"
                ]
            },
            {
                name: "Drop Set 2",
                details: [
                    "Arnold Press: 4 set x 10-12 tekrar (İlk iki set standart, son sette drop set)"
                ]
            },
            {
                name: "Süper Set 1",
                details: [
                    "Dumbbell Lateral Raises: 3 set x 12-15 tekrar",
                    "Front Raises: 3 set x 12-15 tekrar"
                ]
            },
            {
                name: "Omuz",
                details: [
                    "Reverse Pec Deck: 3 set x 12-15 tekrar",
                    "Upright Rows: 3 set x 10-12 tekrar"
                ]
            },
            {
                name: "Triceps",
                details: [
                    "Overhead Triceps Extensions: 3 set x 10-12 tekrar (İlk iki set standart, son sette drop set)",
                    "Triceps Pushdowns: 3 set x 12-15 tekrar"
                ]
            }
        ]
    },
    "Cuma": {
        title: "Göğüs ve Biceps",
        exercises: [
            {
                name: "Drop Set 1",
                details: [
                    "Incline Bench Press: 4 set x 8-10 tekrar (İlk iki set standart, son sette drop set)"
                ]
            },
            {
                name: "Drop Set 2",
                details: [
                    "Dumbbell Bench Press: 4 set x 10-12 tekrar (İlk iki set standart, son sette drop set)"
                ]
            },
            {
                name: "Süper Set 1",
                details: [
                    "Pec Deck Machine: 3 set x 10-12 tekrar",
                    "Cable Flyes: 3 set x 12-15 tekrar"
                ]
            },
            {
                name: "Süper Set 2",
                details: [
                    "Chest Dips: 3 set x 8-12 tekrar",
                    "Push-Ups: 3 set x maksimum tekrar"
                ]
            },
            {
                name: "Biceps",
                details: [
                    "Barbell Curls: 3 set x 10-12 tekrar (İlk iki set standart, son sette drop set)",
                    "Hammer Curls: 3 set x 10-12 tekrar",
                    "Preacher Curls: 3 set x 12-15 tekrar"
                ]
            }
        ]
    },
    "Cumartesi": {
        title: "Sırt ve Bacak",
        exercises: [
            {
                name: "Drop Set 1",
                details: [
                    "Deadlifts: 4 set x 6-8 tekrar (İlk iki set standart, son sette drop set)"
                ]
            },
            {
                name: "Drop Set 2",
                details: [
                    "T-Bar Rows: 4 set x 8-10 tekrar (İlk iki set standart, son sette drop set)"
                ]
            },
            {
                name: "Süper Set 1",
                details: [
                    "Lat Pulldowns: 3 set x 10-12 tekrar",
                    "Seated Rows: 3 set x 12-15 tekrar"
                ]
            },
            {
                name: "Bacak",
                details: [
                    "Leg Press: 3 set x 10-12 tekrar",
                    "Calf Raises: 3 set x 15-20 tekrar"
                ]
            }
        ]
    },
    "Pazar": {
        title: "Dinlenme Günü",
        exercises: [
            {
                name: "Dinlenme",
                details: [
                    "Tamamen dinlenme: Vücudunun iyileşmesine izin ver.",
                    "Hafif yürüyüşler veya esneme yapabilirsin.",
                    "Ana odak dinlenme olmalı."
                ]
            }
        ]
    }
};

const infoContent = {
    dropset: `
        <h3>Drop Set Nedir?</h3>
        <p>Drop set, bir egzersizde kasları maksimum yorgunluğa ulaştırmak için kullanılan bir tekniktir.</p>
        <h4>Nasıl Yapılır?</h4>
        <ol>
            <li>Başlangıç ağırlığı ile 8-12 tekrar yapın</li>
            <li>Hemen ardından ağırlığı %20-30 azaltın</li>
            <li>Yeni ağırlıkla mümkün olduğunca tekrar yapın</li>
            <li>İsteğe bağlı olarak bir kez daha ağırlığı azaltıp devam edin</li>
        </ol>
    `,
    superset: `
        <h3>Süper Set Nedir?</h3>
        <p>Süper set, iki farklı egzersizi ara vermeden peş peşe yapma tekniğidir.</p>
        <h4>Nasıl Yapılır?</h4>
        <ol>
            <li>İlk egzersizi belirtilen tekrar sayısında tamamlayın</li>
            <li>Dinlenmeden ikinci egzersize geçin</li>
            <li>İkinci egzersizi tamamlayın</li>
            <li>30-60 saniye dinlenin ve süper seti tekrarlayın</li>
        </ol>
    `
};

// Timer class for workout tracking
class WorkoutTimer {
    constructor() {
        this.seconds = 0;
        this.interval = null;
        this.display = document.querySelector('.timer-display');
        this.startBtn = document.querySelector('.timer-btn.start');
        this.pauseBtn = document.querySelector('.timer-btn.pause');
        this.resetBtn = document.querySelector('.timer-btn.reset');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());
    }

    start() {
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.seconds++;
                this.updateDisplay();
            }, 1000);
            this.startBtn.style.display = 'none';
            this.pauseBtn.style.display = 'inline-block';
        }
    }

    pause() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            this.startBtn.style.display = 'inline-block';
            this.pauseBtn.style.display = 'none';
        }
    }

    reset() {
        this.pause();
        this.seconds = 0;
        this.updateDisplay();
    }

    updateDisplay() {
        const hours = Math.floor(this.seconds / 3600);
        const minutes = Math.floor((this.seconds % 3600) / 60);
        const secs = this.seconds % 60;
        this.display.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
}

// Local Storage Manager
class StorageManager {
    static saveNotes(day, notes) {
        const allNotes = this.getAllNotes();
        allNotes[day] = notes;
        localStorage.setItem('workoutNotes', JSON.stringify(allNotes));
    }

    static getNotes(day) {
        const allNotes = this.getAllNotes();
        return allNotes[day] || '';
    }

    static getAllNotes() {
        return JSON.parse(localStorage.getItem('workoutNotes') || '{}');
    }

    static saveCompletedExercises(day, exercises) {
        const allCompleted = this.getAllCompletedExercises();
        allCompleted[day] = exercises;
        localStorage.setItem('completedExercises', JSON.stringify(allCompleted));
    }

    static getCompletedExercises(day) {
        const allCompleted = this.getAllCompletedExercises();
        return allCompleted[day] || [];
    }

    static getAllCompletedExercises() {
        return JSON.parse(localStorage.getItem('completedExercises') || '{}');
    }

    static saveLastPerformance(day, performance) {
        const allPerformances = this.getAllPerformances();
        allPerformances[day] = {
            ...performance,
            date: new Date().toLocaleDateString()
        };
        localStorage.setItem('lastPerformance', JSON.stringify(allPerformances));
    }

    static getLastPerformance(day) {
        const allPerformances = this.getAllPerformances();
        return allPerformances[day] || null;
    }

    static getAllPerformances() {
        return JSON.parse(localStorage.getItem('lastPerformance') || '{}');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const currentDayDisplay = document.querySelector('.current-day');
    const workoutTitle = document.querySelector('.workout-title');
    const workoutContent = document.querySelector('.workout-content');
    const dayButtons = document.querySelectorAll('.day-btn');
    const infoButtons = document.querySelectorAll('.info-btn');
    const infoContentDiv = document.querySelector('.info-content');

    // Get current day and show corresponding workout
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const today = days[new Date().getDay()];
    currentDayDisplay.textContent = `Bugün: ${today}`;

    function showExerciseImage(exerciseKey) {
    const modal = document.createElement('div');
    modal.className = 'exercise-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${exerciseImages[exerciseKey]}" alt="Exercise demonstration" class="exercise-gif">
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-modal').onclick = () => {
        modal.remove();
    };

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    };
}

function showAlternativeExercise(exerciseKey) {
    if (!alternativeExercises[exerciseKey]) return;

    const modal = document.createElement('div');
    modal.className = 'exercise-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>${alternativeExercises[exerciseKey].name}</h3>
            <p>${alternativeExercises[exerciseKey].description}</p>
            <img src="${alternativeExercises[exerciseKey].image}" alt="Alternative exercise demonstration" class="exercise-gif">
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-modal').onclick = () => {
        modal.remove();
    };

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    };
}

function showWorkout(day) {
        const workout = workoutProgram[day];
        workoutTitle.textContent = `${day}: ${workout.title}`;
        
        let html = '';
        workout.exercises.forEach(exercise => {
            const exerciseKey = exercise.name.toLowerCase().replace(/ /g, '_').replace(/[^a-z0-9_]/g, '');
            html += `
                <div class="exercise-group">
                    <h3>${exercise.name}</h3>
                    ${exercise.details.map(detail => {
                        const detailKey = detail.split(':')[0].toLowerCase().replace(/ /g, '_').replace(/[^a-z0-9_]/g, '');
                        return `
                            <div class="exercise-item">
                                <input type="checkbox" class="exercise-check">
                                <span>${detail}</span>
                                <div class="exercise-buttons">
                                    <button class="show-exercise" data-exercise="${detailKey}">
                                        <i class="fas fa-eye"></i> Göster
                                    </button>
                                    ${alternativeExercises[detailKey] ? `
                                        <button class="show-alternative" data-exercise="${detailKey}">
                                            <i class="fas fa-random"></i> Alternatif
                                        </button>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        });
        
        workoutContent.innerHTML = html;

        // Add event listeners for exercise buttons
        workoutContent.querySelectorAll('.show-exercise').forEach(button => {
            button.addEventListener('click', () => {
                const exerciseKey = button.dataset.exercise;
                if (exerciseImages[exerciseKey]) {
                    showExerciseImage(exerciseKey);
                }
            });
        });

        workoutContent.querySelectorAll('.show-alternative').forEach(button => {
            button.addEventListener('click', () => {
                const exerciseKey = button.dataset.exercise;
                if (alternativeExercises[exerciseKey]) {
                    showAlternativeExercise(exerciseKey);
                }
            });
        });

        // Load saved notes
        const savedNotes = StorageManager.getNotes(day);
        document.getElementById('workout-notes-input').value = savedNotes;

        // Load completed exercises
        const completedExercises = StorageManager.getCompletedExercises(day);
        const checkboxes = workoutContent.querySelectorAll('.exercise-check');
        checkboxes.forEach((checkbox, index) => {
            if (completedExercises.includes(index)) {
                checkbox.checked = true;
                checkbox.closest('.exercise-item').classList.add('completed');
            }
        });

        // Add checkbox event listeners
        checkboxes.forEach((checkbox, index) => {
            checkbox.addEventListener('change', (e) => {
                const exerciseItem = e.target.closest('.exercise-item');
                exerciseItem.classList.toggle('completed', e.target.checked);

                // Save completed exercises
                const completed = Array.from(checkboxes)
                    .map((cb, i) => cb.checked ? i : null)
                    .filter(i => i !== null);
                StorageManager.saveCompletedExercises(day, completed);

                // Save performance when all exercises are completed
                if (completed.length === checkboxes.length) {
                    const performance = {
                        time: workoutTimer.seconds,
                        exercises: completed.length
                    };
                    StorageManager.saveLastPerformance(day, performance);
                    updateLastPerformance(day);
                }
            });
        });

        // Update active button
        dayButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.day === day);
        });

        // Update last performance display
        updateLastPerformance(day);
    }

    function updateLastPerformance(day) {
        const performance = StorageManager.getLastPerformance(day);
        const performanceContent = document.querySelector('.last-performance-content');

        if (performance) {
            const hours = Math.floor(performance.time / 3600);
            const minutes = Math.floor((performance.time % 3600) / 60);
            const seconds = performance.time % 60;
            const timeString = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            performanceContent.innerHTML = `
                <p>Tarih: ${performance.date}</p>
                <p>Süre: ${timeString}</p>
                <p>Tamamlanan Egzersiz: ${performance.exercises}</p>
            `;
        } else {
            performanceContent.innerHTML = '<p>Henüz kayıtlı performans yok</p>';
        }
    }

    // Show info content
    function showInfo(type) {
        infoContentDiv.innerHTML = infoContent[type];
        infoContentDiv.classList.add('active');
    }

    // Event listeners
    dayButtons.forEach(button => {
        button.addEventListener('click', () => {
            showWorkout(button.dataset.day);
        });
    });

    infoButtons.forEach(button => {
        button.addEventListener('click', () => {
            showInfo(button.dataset.info);
        });
    });

    // Initialize timer
    const workoutTimer = new WorkoutTimer();

    // Setup notes functionality
    const notesInput = document.getElementById('workout-notes-input');
    const saveNotesBtn = document.getElementById('save-notes');

    saveNotesBtn.addEventListener('click', () => {
        const currentDay = document.querySelector('.day-btn.active').dataset.day;
        StorageManager.saveNotes(currentDay, notesInput.value);
        alert('Notlar kaydedildi!');
    });

    // Show warmup reminder
    const warmupReminder = document.querySelector('.warmup-reminder');
    warmupReminder.style.display = 'flex';
    setTimeout(() => {
        warmupReminder.style.display = 'none';
    }, 10000);

    // Show today's workout by default
    showWorkout(today);

    // Show cooldown reminder after 45 minutes
    setTimeout(() => {
        const cooldownReminder = document.querySelector('.cooldown-reminder');
        cooldownReminder.style.display = 'flex';
        setTimeout(() => {
            cooldownReminder.style.display = 'none';
        }, 10000);
    }, 45 * 60 * 1000);
});
