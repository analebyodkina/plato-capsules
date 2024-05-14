



function popUp(){
    const openPopUp = document.getElementById('openPopUp')  
    const popUp = document.querySelector('.pop-up');    
    openPopUp.onclick = function () {
		popUp.classList.toggle('active');
		
		document.body.classList.toggle('no-scroll');		
	};
      
     
}


export default popUp;






