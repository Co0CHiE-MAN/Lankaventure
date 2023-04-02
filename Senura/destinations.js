// backgroundColor and fontColour 

			var i;
			function bgcolour(e){
				var x = e.style.background;
				document.body.style.backgroundColor = x;
			}

			function fontcolor(e){
			var y = e.style.background;
			var x = document.getElementsByName("text");
			for(var i = 0; i < x.length; i++){
				x[i].style.color=y;
			}
			}
			var open = true;
			function togglebg(){
				
				if(open){
					document.getElementById("background").style.display = "block";
					open = false;
				}else{
					document.getElementById("background").style.display = "none";
					open = true;
					
				}
				
				console.log(open);
			}
			
			var openx = true;
			function togglefont(){
				
				if(openx){
					document.getElementById("fontcolor").style.display = "block";
					openx = false;
				}else{
					document.getElementById("fontcolor").style.display = "none";
					openx = true;
					
				}
				
				console.log(open);
			}
			
			// Get the modal
			var modal = document.getElementById("My_Modal");

			// Get the image and insert it inside the modal - use its "alt" text as a caption
			
			var modalImg = document.getElementById("img_1");
			var captionText = document.getElementById("caption");
			
			//for Dambulla
			var img = document.getElementById("Dambulla");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for Yala
			var img = document.getElementById("Yala");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for Sigiriya
			var img = document.getElementById("Sigiriya");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for Galle
			var img = document.getElementById("Galle");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for Jaffna
			var img = document.getElementById("Jaffna");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for Nuwara Eliya
			var img = document.getElementById("Nuwara_Eliya");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for Polonnaruwa
			var img = document.getElementById("Polonnaruwa");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for Adams_Peak
			var img = document.getElementById("Adams_Peak");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for Trincomalee
			var img = document.getElementById("Trincomalee");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			  modal.style.display = "none";
			}
			
			
			//top button
			var mybutton = document.getElementById("myBtn");

		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = "block";
		  } else {
			mybutton.style.display = "none";
		  }
		}

		function topFunction() {
		  document.body.scrollTop = 0;
		  document.documentElement.scrollTop = 0;
		}
		 
		    