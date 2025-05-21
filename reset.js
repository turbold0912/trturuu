// LocalStorage цэвэрлэх
document.addEventListener('DOMContentLoaded', function() {
    // LocalStorage цэвэрлэх
    localStorage.removeItem('cvData');
    console.log('LocalStorage cleared!');
    
    // Админ хэсгийг хүчээр нуух
    const adminPanel = document.getElementById('admin-panel');
    const loginSection = document.getElementById('login-section');
    
    if (adminPanel) {
        adminPanel.classList.add('hidden');
        adminPanel.style.display = 'none';
    }
    
    if (loginSection) {
        loginSection.classList.add('hidden');
        loginSection.style.display = 'none';
    }
    
    console.log('Admin panels hidden forcefully!');
});

// Escape товчлуур дээр тулгуурласан хаах функц
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Админ хэсгийг нуух
        const adminPanel = document.getElementById('admin-panel');
        const loginSection = document.getElementById('login-section');
        
        if (adminPanel) {
            adminPanel.classList.add('hidden');
            adminPanel.style.display = 'none';
        }
        
        if (loginSection) {
            loginSection.classList.add('hidden');
            loginSection.style.display = 'none';
        }
        
        console.log('Escape pressed, admin panels hidden!');
    }
}); 