
window.addEventListener('keypress', (ky) => {
    Key = ky.key
    if( Key == "N" || Key == 'n'){
        console.log('REDIRECTING TO NAVIGATION SYSTEM..');
        window.location.replace = "https://jahangeer7704.github.io/navigation/"
        
    }
    if( Key == "E" || Key == 'e'){
        console.log('REDIRECTING TO EASEBOT..');
        window.location.replace = "https://easebot.netlify.app/"
    }
})
