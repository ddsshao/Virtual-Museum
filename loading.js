document.addEventListener('DOMContentLoaded', function() {
    var loading = document.querySelector('#loading');
    var scene = document.querySelector('a-scene');
  
    scene.addEventListener('loaded', function (e) {
      // hide the loading screen
      loading.style.display = 'none';
    });
  });