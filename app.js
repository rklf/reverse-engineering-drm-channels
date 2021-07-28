function initUI() {
    const video = document.getElementById('video');
    const ui = video['ui'];
    ui.configure();
    const controls = video['ui'].getControls();
    const player = controls.getPlayer();
    return { player, ui, controls };
}

async function play(player) {
    // player...(async (..., ...) => {
    //      make football free
    // });

    player.configure({
        drm: {
            servers: {
                'com.widevine.alpha': '...',
                // 'com.widevine.alpha': '',
                // 'com.apple.fps.1_0': '',
            }
        }
    });

    try {
        await player.load(channel);
        console.log('The video has now been loaded!');
    } catch (e) {
        // onError is executed if the asynchronous load fails.
        console.error('Error code' + e.code + 'object' + e);
    }
}

async function initApp() {
    const { player } = initUI();
    play(player);
}

document.addEventListener('shaka-ui-loaded', initApp);