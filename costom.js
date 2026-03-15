// ১. স্ক্রল করলে নববার-এর কালার পরিবর্তন
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-zinc-100', 'py-4');
        navbar.classList.remove('bg-transparent', 'py-6');
    } else {
        navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-zinc-100', 'py-4');
        navbar.classList.add('bg-transparent', 'py-6');
    }
});

// ২. লুসিড আইকন রেন্ডার করা
lucide.createIcons();