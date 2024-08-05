
function framechanger()
{
    window.location.href = 'c:/Users/rampa/VS Web/Men in Liminal Spaces/Frames/Night/FrameNight.html';
}
function framechanger2()
{
    window.location.href = 'c:/Users/rampa/VS Web/Men in Liminal Spaces/Frames/Rain/FrameRain.html';
}


let isOriginalImage = true;

        function changeImage() 
        {
            const imageElement = document.getElementById('liminal-space-door');
            if (isOriginalImage) {
                // Change to a new image
                imageElement.src = './materials/OpenDoor.png';
                isOriginalImage = false;
            } else {
                // Redirect to another URL
                window.location.href = 'C:/Users/rampa/VS Web/Men in Liminal Spaces/Frames/Green/FrameGreen.html';
            }
        }