
window.addEventListener('keypress', (ky) => {
    Key = ky.key
    if( Key == "N" || Key == 'n'){
        console.log('REDIRECTING TO NAVIGATION SYSTEM..');
        window.location.href = "https://jahangeer7704.github.io/navigation/"
        
    }
    if( Key == "E" || Key == 'e'){
        console.log('REDIRECTING TO EASEBOT..');
        window.location.href = "https://easebot.netlify.app/"
    }
})
