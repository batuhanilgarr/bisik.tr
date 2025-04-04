// Reliable images for workout exercises
const exerciseImages = {
    // Chest exercises
    "Bench Press": "https://www.fitnesseducation.edu.au/wp-content/uploads/2017/03/Bench-Press.jpg",
    "Incline Dumbbell Press": "https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_419477203_1000x.jpg",
    "Dumbbell Flyes": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Fly_Main.png",
    "Cable Crossovers": "https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1282841002_1000x.jpg",
    "Chest Dips": "https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1976548902_1000x.jpg",
    "Pec Deck Machine": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pec-Deck-Fly_Main.png",
    "Incline Bench Press": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Barbell-Bench-Press_Main.png",
    "Dumbbell Bench Press": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bench-Press_Main.png",
    "Push-Ups": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Push-Up_Main.png",
    "Cable Flyes": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-Crossover_Main.png",
    
    // Back exercises
    "Pull-Ups": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_Main.png",
    "Barbell Rows": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bent-Over-Barbell-Row_Main.png",
    "Lat Pulldowns": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lat-Pulldown_Main.png",
    "Seated Rows": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_Main.png",
    "Deadlifts": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Deadlift_Main.png",
    "T-Bar Rows": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/T-Bar-Row_Main.png",
    
    // Leg exercises
    "Squats": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Squat_Main.png",
    "Leg Press": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Press_Main.png",
    "Romanian Deadlifts": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Romanian-Deadlift_Main.png",
    "Walking Lunges": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Walking-Lunge_Main.png",
    "Leg Extensions": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Extension_Main.png",
    "Seated Calf Raises": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Calf-Raise_Main.png",
    "Standing Calf Raises": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Calf-Raise_Main.png",
    "Calf Raises": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Calf-Raise_Main.png",
    
    // Shoulder exercises
    "Overhead Press": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Overhead-Press_Main.png",
    "Arnold Press": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Arnold-Press_Main.png",
    "Dumbbell Lateral Raises": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Lateral-Raise_Main.png",
    "Front Raises": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Front-Raise_Main.png",
    "Reverse Pec Deck": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Reverse-Fly_Main.png",
    "Upright Rows": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Upright-Row_Main.png",
    
    // Arm exercises
    "Triceps Dips": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Tricep-Dip_Main.png",
    "Triceps Pushdowns": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Tricep-Pushdown_Main.png",
    "Overhead Triceps Extensions": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Overhead-Tricep-Extension_Main.png",
    "Barbell Curls": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Curl_Main.png",
    "Hammer Curls": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hammer-Curl_Main.png",
    "Preacher Curls": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Preacher-Curl_Main.png",
    
    // Default image for any exercise not found
    "default": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Full-Body-Workout_600x600.png"
};

// Diet images - using more reliable sources
const dietImages = {
    "Kahvaltı": "https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_1280.jpg",
    "Öğle": "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
    "Oglen": "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
    "Akşam": "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg",
    "Aksam": "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg",
    "Ara Öğün": "https://cdn.pixabay.com/photo/2017/05/11/19/44/fruit-2305192_1280.jpg",
    "default": "https://cdn.pixabay.com/photo/2016/03/05/19/02/abstract-1238247_1280.jpg"
};

// Exercise instructions database
const exerciseInstructions = {
    "Bench Press": "1. Yat sırt üstü bench'e, ayakların yere sağlam bassın.<br>2. Barı omuz genişliğinde kavra.<br>3. Barı göğsüne doğru indir, dirsekler 90 derece.<br>4. Barı yukarı it, dirsekleri tam uzat ama kilitleme.",
    "Incline Dumbbell Press": "1. Bench'i 30-45 derece eğimli ayarla.<br>2. Dumbbell'ları omuz hizasında tut.<br>3. Dumbbell'ları yukarı doğru it, tepede birbirlerine yaklaştır.<br>4. Kontrollü bir şekilde başlangıç pozisyonuna dön.",
    "Dumbbell Flyes": "1. Sırt üstü bench'e yat, dumbbell'ları yukarıda tut.<br>2. Dirsekleri hafif bükerek kolları yanlara aç.<br>3. Göğüs kaslarını hissederek kolları aç.<br>4. Aynı yolu izleyerek kolları yukarı getir.",
    "Cable Crossovers": "1. İki cable makinesinin ortasında dur.<br>2. Kolları yanlarda, dirsekler hafif bükülü.<br>3. Göğüs kaslarını kullanarak kolları öne getir.<br>4. Kontrollü bir şekilde başlangıç pozisyonuna dön.",
    "Chest Dips": "1. Paralel barları omuz genişliğinde kavra.<br>2. Vücudu hafif öne eğ, göğsü çalıştırmak için.<br>3. Dirsekleri bükerek aşağı in.<br>4. Göğüs kaslarını kullanarak yukarı it.",
    "Pec Deck Machine": "1. Makinede otur, kollar 90 derece açıda.<br>2. Göğüs kaslarını kullanarak pedleri birbirine doğru getir.<br>3. Sıkışma noktasında 1-2 saniye tut.<br>4. Kontrollü bir şekilde başlangıç pozisyonuna dön.",
    "Pull-Ups": "1. Bar'ı omuz genişliğinden biraz daha geniş kavra.<br>2. Vücudu yukarı çek, çene bar seviyesine gelene kadar.<br>3. Sırt kaslarını sıkarak tepe noktada dur.<br>4. Kontrollü bir şekilde aşağı in.",
    "Barbell Rows": "1. Barı yerde tut, dizler hafif bükülü.<br>2. Sırtı düz tut, kalçadan öne eğil.<br>3. Barı göbeğe doğru çek, dirsekleri geriye at.<br>4. Kontrollü bir şekilde barı indirerek başla.",
    "Squats": "1. Barı omuzlara yerleştir, ayaklar omuz genişliğinde.<br>2. Dizleri bükerek kalçayı geriye at, sanki oturuyormuş gibi.<br>3. Dizler 90 derece olana kadar in.<br>4. Topukları iterek yukarı çık.",
    "Leg Press": "1. Leg press makinesine otur, ayaklar omuz genişliğinde.<br>2. Ağırlığı kontrollü bir şekilde aşağı indir, dizler 90 derece.<br>3. Topukları iterek ağırlığı yukarı it.<br>4. Tepede dizleri tam uzat ama kilitleme.",
    "Deadlifts": "1. Barın önünde dur, ayaklar omuz genişliğinde.<br>2. Dizleri bükerek barı kavra, sırt düz.<br>3. Bacak ve kalça kaslarını kullanarak barı yukarı kaldır.<br>4. Tepede kalçayı sık, sonra kontrollü şekilde indir.",
    "Overhead Press": "1. Barı göğüs hizasında tut, avuçlar öne bakacak şekilde.<br>2. Barı başın üzerine doğru it, dirsekleri tam uzat.<br>3. Tepede 1 saniye dur.<br>4. Kontrollü bir şekilde barı göğüs hizasına indir.",
    "Barbell Curls": "1. Barı omuz genişliğinde kavra, avuçlar yukarı bakacak şekilde.<br>2. Dirsekleri sabit tutarak barı omuzlara doğru kaldır.<br>3. Tepe noktada biceps'leri sık.<br>4. Kontrollü bir şekilde barı indir.",
    "Triceps Pushdowns": "1. Cable makinesinde yüksek pozisyonda dur.<br>2. V-bar veya düz barı kavra, dirsekler 90 derece.<br>3. Kolları aşağı doğru it, dirsekleri tam uzat.<br>4. Triceps'leri sıkarak tepe noktada dur, sonra kontrollü şekilde başla.",
    "default": "1. Hareketi kontrollü ve doğru formda yapın.<br>2. Nefes alışınıza dikkat edin.<br>3. Ağırlığı kaldırırken nefes verin, indirirken nefes alın.<br>4. Eklemlerinizi koruyun, ağırlıkları kontrollü indirin."
};

// Function to get exercise image
function getExerciseImage(exerciseName) {
    // Extract the exercise name from the format "Exercise Name - details"
    const baseName = exerciseName.split(' - ')[0];
    
    // Check if we have a specific image for this exercise
    for (const key in exerciseImages) {
        if (baseName.includes(key)) {
            return exerciseImages[key];
        }
    }
    
    // Return default image if no match found
    return exerciseImages.default;
}

// Function to get exercise instructions
function getExerciseInstructions(exerciseName) {
    // Extract the exercise name from the format "Exercise Name - details"
    const baseName = exerciseName.split(' - ')[0];
    
    // Check if we have specific instructions for this exercise
    for (const key in exerciseInstructions) {
        if (baseName.includes(key)) {
            return exerciseInstructions[key];
        }
    }
    
    // Return default instructions if no match found
    return exerciseInstructions.default;
}

// Function to get diet image
function getDietImage(mealType) {
    return dietImages[mealType] || dietImages.default;
}

// Progress tracking data (simulated)
const progressData = {
    weights: [
        { date: '2025-03-01', weight: 85 },
        { date: '2025-03-08', weight: 84 },
        { date: '2025-03-15', weight: 83.2 },
        { date: '2025-03-22', weight: 82.5 },
        { date: '2025-03-29', weight: 81.8 },
        { date: '2025-04-04', weight: 81.3 }
    ],
    workoutCompletions: {
        'Pazartesi': [true, true, true, true, true],
        'Sali': [true, true, true, true, false],
        'Carsamba': [true, true, false, true, true],
        'Persembe': [true, false, true, true, true],
        'Cuma': [false, true, true, true, true],
        'Cumartesi': [true, true, true, false, true],
        'Pazar': [true, true, true, true, true]
    },
    dietAdherence: [
        { date: '2025-03-29', adherence: 90 },
        { date: '2025-03-30', adherence: 85 },
        { date: '2025-03-31', adherence: 95 },
        { date: '2025-04-01', adherence: 80 },
        { date: '2025-04-02', adherence: 90 },
        { date: '2025-04-03', adherence: 85 },
        { date: '2025-04-04', adherence: 95 }
    ]
};

// Function to generate progress chart data
function getProgressChartData() {
    return progressData;
}
