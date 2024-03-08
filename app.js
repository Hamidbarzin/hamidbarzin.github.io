var animatedImage = document.getElementById('animatedImage');

        animatedImage.addEventListener('click', function() {
            animatedImage.style.animation = 'moveImage 2s ease-in-out';
        });

        function resizeImage() {
            var image = document.getElementById('imageToResize');
            image.style.width = '1px'; // or any desired size
            image.style.height = '1px'; // to maintain aspect ratio
        }

        // JavaScript function to move the image
        var animatedImage = document.getElementById('animatedImage');

        animatedImage.addEventListener('click', function() {
            animatedImage.style.animation = 'moveImage 2s ease-in-out';
            resizeImage(); // Call the function to resize the image
        });

