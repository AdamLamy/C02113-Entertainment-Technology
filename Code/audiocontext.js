AFRAME.registerComponent('songplayer', {      
   init: function () {                
       let audiosources = Array.from(document.getElementsByClassName('musicpanel')); // Convert to array

       let musicplay = () => { 
           audiosources.forEach(element => {
            console.log("button pressed");
               if (element.components.sound) {
                   element.setAttribute('sound', 'volume', 2.0); // Increase volume
                   element.components.sound.playSound();        
               }
           });
       };  
       
       this.el.addEventListener('click', musicplay); // Attach event listener once
   }
});
