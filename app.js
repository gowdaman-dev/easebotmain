
window.addEventListener('keypress', (ky) => {
    Key = ky.key
    if( Key == "N" || Key == 'n'){
        console.log('REDIRECTING TO NAVIGATION SYSTEM..');
        window.location.assign("https://jahangeer7704.github.io/navigation/")
        
    }
    if( Key == "E" || Key == 'e'){
        console.log('REDIRECTING TO EASEBOT..');
        window.location.assign("https://easebot.netlify.app/")
    }
})
