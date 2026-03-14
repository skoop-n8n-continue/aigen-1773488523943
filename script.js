/**
 * Digital Signage Display Logic
 * Non-interactive functionality for digital signage
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Digital Signage Initialized.');

    // Configuration
    // Automatically reload the page every 12 hours to ensure long-term stability
    // and fetch any potential updates to the underlying asset.
    const REFRESH_INTERVAL_HOURS = 12;
    const REFRESH_INTERVAL_MS = REFRESH_INTERVAL_HOURS * 60 * 60 * 1000;

    // Setup periodic refresh
    setTimeout(() => {
        console.log('Performing scheduled signage refresh...');
        window.location.reload();
    }, REFRESH_INTERVAL_MS);

    // In case the image fails to load, we could add a fallback logic here
    const imgElement = document.querySelector('.signage-asset');
    if (imgElement) {
        imgElement.addEventListener('error', () => {
            console.error('Failed to load the signage image asset.');
            // Optionally set a fallback image or background
            // imgElement.src = 'fallback-image.png';
        });
    }
});