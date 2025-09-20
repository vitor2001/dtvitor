// Firebase Configuration (replace with your actual config)
const firebaseConfig = {
    // Add your Firebase config here when you create the project
    // This is a placeholder configuration
    apiKey: "your-api-key",
    authDomain: "dtvitor-firebase.firebaseapp.com",
    projectId: "dtvitor-firebase",
    storageBucket: "dtvitor-firebase.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};

// Initialize Firebase (uncomment when you have the actual config)
// firebase.initializeApp(firebaseConfig);
// const analytics = firebase.analytics();

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerOffset = 70;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Server status indicator
    updateServerStatus();
    
    // Animate project cards on scroll
    observeProjectCards();
    
    // Add interactive effects
    addInteractiveEffects();
});

// Update server status
function updateServerStatus() {
    const statusElement = document.getElementById('server-status');
    
    // Simple check - if page loaded, server is online
    statusElement.textContent = 'Online';
    statusElement.className = 'status-online';
    
    // You can add more sophisticated health checks here
    // For example, checking Firebase Functions or other services
}

// Observe project cards for animation
function observeProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Add interactive effects
function addInteractiveEffects() {
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click tracking for analytics (when Firebase is configured)
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function() {
            const projectName = this.closest('.project-card').querySelector('h3').textContent;
            console.log(`Project clicked: ${projectName}`);
            
            // When Firebase Analytics is configured, you can track events like:
            // firebase.analytics().logEvent('project_view', {
            //     project_name: projectName
            // });
        });
    });
}

// Utility function to show notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 9999;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Function to test Firebase connection (when configured)
function testFirebaseConnection() {
    try {
        // This would test the Firebase connection when properly configured
        console.log('Firebase connection test would go here');
        showNotification('Firebase conectado com sucesso!', 'success');
    } catch (error) {
        console.error('Firebase connection error:', error);
        showNotification('Erro na conexão com Firebase', 'error');
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(102, 126, 234, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '';
        navbar.style.backdropFilter = '';
    }
});

// Export functions for potential use in other modules
window.DTVitorApp = {
    updateServerStatus,
    showNotification,
    testFirebaseConnection
};

console.log('DTVitor Firebase App initialized!');