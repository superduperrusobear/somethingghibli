document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const video = document.getElementById('ghibli-video');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const footerBlur = document.querySelector('.footer-blur');
    
    let currentSlideIndex = 0;
    
    // Initialize the first slide as active
    slides[currentSlideIndex].classList.add('active');
    
    // Make sure video is visible and playing
    video.classList.add('active');
    video.play().catch(error => {
        console.log("Video playback prevented:", error);
    });
    
    // Function to navigate to a specific slide
    const goToSlide = (index) => {
        // Remove active class from current slide
        slides[currentSlideIndex].classList.remove('active');
        
        // Update current slide index
        currentSlideIndex = index;
        
        // Add active class to new current slide
        slides[currentSlideIndex].classList.add('active');
        
        // Update navigation button states
        updateNavButtons();
        
        // Trigger slide-specific animations
        triggerSlideAnimations(slides[currentSlideIndex].id);
    };
    
    // Update the state of navigation buttons based on current slide
    const updateNavButtons = () => {
        prevBtn.disabled = currentSlideIndex === 0;
        nextBtn.disabled = currentSlideIndex === slides.length - 1;
    };
    
    // Handle next button click
    const handleNext = () => {
        if (currentSlideIndex < slides.length - 1) {
            goToSlide(currentSlideIndex + 1);
        }
    };
    
    // Handle previous button click
    const handlePrev = () => {
        if (currentSlideIndex > 0) {
            goToSlide(currentSlideIndex - 1);
        }
    };
    
    // Add event listeners to buttons
    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrev);
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            handleNext();
        } else if (e.key === 'ArrowLeft') {
            handlePrev();
        }
    });
    
    // Set initial button states
    updateNavButtons();
    
    // Performance bar animation
    const animatePerformanceBars = () => {
        const bars = document.querySelectorAll('.bar-fill');
        bars.forEach(bar => {
            const targetWidth = bar.style.width;
            bar.style.setProperty('--width', targetWidth);
        });
    };
    
    // Partner icons carousel animation
    const animatePartnerIcons = () => {
        const partnerCarousel = document.querySelector('.partner-carousel');
        if (partnerCarousel) {
            const icons = partnerCarousel.querySelectorAll('.partner-icon');
            
            // Function to highlight a random icon
            const highlightRandom = () => {
                // Reset all icons
                icons.forEach(icon => {
                    icon.style.opacity = '0.7';
                    icon.style.filter = 'grayscale(100%)';
                    icon.style.transform = 'scale(1)';
                });
                
                // Highlight a random icon
                const randomIndex = Math.floor(Math.random() * icons.length);
                const randomIcon = icons[randomIndex];
                randomIcon.style.opacity = '1';
                randomIcon.style.filter = 'grayscale(0%)';
                randomIcon.style.transform = 'scale(1.1)';
                
                // Schedule next highlight
                setTimeout(highlightRandom, 2000);
            };
            
            // Start the animation
            highlightRandom();
        }
    };
    
    // Animate Solana stats 
    const animateSolanaStats = () => {
        const stats = document.querySelectorAll('.stat-value');
        if (stats.length > 0) {
            stats.forEach((stat, index) => {
                setTimeout(() => {
                    stat.style.opacity = '0.3';
                    setTimeout(() => {
                        stat.style.opacity = '1';
                        stat.style.textShadow = '0 0 15px rgba(106, 170, 90, 0.5)';
                        setTimeout(() => {
                            stat.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.3)';
                        }, 1000);
                    }, 300);
                }, index * 300);
            });
        }
    };
    
    // Animate community links
    const animateCommunityButtons = () => {
        const links = document.querySelectorAll('.community-link');
        if (links.length > 0) {
            links.forEach((link, index) => {
                // Set initial state
                link.style.opacity = '0';
                link.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    link.style.opacity = '1';
                    link.style.transform = 'translateY(0)';
                }, index * 200);
            });
            
            // Add hover effect to token text
            const tokenText = document.querySelector('.token-text');
            if (tokenText) {
                setTimeout(() => {
                    tokenText.style.opacity = '0.5';
                    setTimeout(() => {
                        tokenText.style.opacity = '1';
                        tokenText.style.textShadow = '0 0 10px rgba(106, 170, 90, 0.3)';
                        
                        // Animate documentation links after token text
                        setTimeout(() => {
                            animateDocumentationLinks();
                        }, 500);
                    }, 500);
                }, links.length * 200 + 200);
            }
        }
    };
    
    // Animate documentation links
    const animateDocumentationLinks = () => {
        const docLinks = document.querySelectorAll('.documentation-link');
        if (docLinks.length > 0) {
            docLinks.forEach((link, index) => {
                setTimeout(() => {
                    link.style.opacity = '0';
                    link.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        link.style.opacity = '1';
                        link.style.transform = 'translateY(0)';
                    }, 100);
                }, index * 150);
            });
        }
    };
    
    // Add CSS for loading dots animation
    const addLoadingDotsStyle = () => {
        const style = document.createElement('style');
        style.textContent = `
            .loading-dots:after {
                content: '';
                animation: dots 1.5s infinite;
            }
            
            @keyframes dots {
                0% { content: ''; }
                25% { content: '.'; }
                50% { content: '..'; }
                75% { content: '...'; }
                100% { content: ''; }
            }
        `;
        document.head.appendChild(style);
    };
    
    // Add soot sprite styles
    const addSootSpriteEffect = () => {
        const spriteContainer = document.createElement('div');
        spriteContainer.className = 'soot-sprite-container';
        
        const style = document.createElement('style');
        style.textContent = `
            .soot-sprite-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 0;
                overflow: hidden;
            }
            
            .soot-sprite {
                position: absolute;
                width: 4px;
                height: 4px;
                background-color: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                pointer-events: none;
                opacity: 0;
                animation-duration: var(--duration);
                animation-name: float;
                animation-iteration-count: infinite;
                animation-timing-function: ease-in-out;
                animation-delay: var(--delay);
            }
            
            @keyframes float {
                0% {
                    transform: translate(0, 0);
                    opacity: 0;
                }
                10% {
                    opacity: var(--opacity);
                }
                90% {
                    opacity: var(--opacity);
                }
                100% {
                    transform: translate(var(--travel-x), var(--travel-y));
                    opacity: 0;
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(spriteContainer);
        
        // Create soot sprites
        for (let i = 0; i < 15; i++) {
            createSootSprite(spriteContainer);
        }
        
        // Schedule creation of new sprites periodically
        setInterval(() => {
            if (spriteContainer.childElementCount < 30) {
                createSootSprite(spriteContainer);
            }
        }, 3000);
    };
    
    const createSootSprite = (container) => {
        const sprite = document.createElement('div');
        sprite.className = 'soot-sprite';
        
        // Random starting position along the bottom of the screen
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 10;
        
        // Random travel distance
        const travelX = (Math.random() - 0.5) * 200;
        const travelY = -1 * (window.innerHeight + 20 + Math.random() * 200);
        
        // Random duration and delay
        const duration = 15 + Math.random() * 20; // seconds
        const delay = Math.random() * 10; // seconds
        const opacity = 0.3 + Math.random() * 0.5;
        const size = 2 + Math.random() * 4;
        
        // Set sprite properties
        sprite.style.setProperty('--travel-x', `${travelX}px`);
        sprite.style.setProperty('--travel-y', `${travelY}px`);
        sprite.style.setProperty('--duration', `${duration}s`);
        sprite.style.setProperty('--delay', `${delay}s`);
        sprite.style.setProperty('--opacity', opacity);
        sprite.style.left = `${startX}px`;
        sprite.style.top = `${startY}px`;
        sprite.style.width = `${size}px`;
        sprite.style.height = `${size}px`;
        
        // Add sprite to container
        container.appendChild(sprite);
        
        // Remove sprite after animation completes
        setTimeout(() => {
            if (container.contains(sprite)) {
                container.removeChild(sprite);
            }
        }, (duration + delay) * 1000);
    };
    
    // Call the function to add loading dots style
    addLoadingDotsStyle();
    
    // Add the soot sprite effect
    addSootSpriteEffect();
    
    // Function to trigger slide-specific animations
    const triggerSlideAnimations = (slideId) => {
        switch (slideId) {
            case 'performance':
                animatePerformanceBars();
                break;
            case 'solana':
                animatePartnerIcons();
                animateSolanaStats();
                break;
            case 'community':
                animateCommunityButtons();
                break;
        }
    };
    
    // Watch for slide changes to trigger animations
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class' && mutation.target.classList.contains('active')) {
                const slideId = mutation.target.id;
                triggerSlideAnimations(slideId);
            }
        });
    });
    
    // Observe all slides for class changes
    slides.forEach(slide => {
        observer.observe(slide, { attributes: true });
    });
    
    // Optional: Auto-advance for a few seconds when page loads
    setTimeout(() => {
        if (currentSlideIndex === 0) {
            handleNext();
        }
    }, 3000);
    
    // Ensure video is always playing
    video.addEventListener('pause', () => {
        video.play().catch(error => {
            console.log("Could not resume video playback:", error);
        });
    });
}); 