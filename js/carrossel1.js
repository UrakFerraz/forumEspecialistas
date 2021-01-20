{



function myFunction() {
  if (sFullHD.matches) {
  	console.log('FullHD')
    corouselContruct(450, 110);
  } else if (sHD.matches) {
  	console.log('HD')
    corouselContruct(450, 110);
  } else if (sHDs.matches) {
  	console.log('SHD')
    corouselContruct(450, 190);
  } else if (sSD.matches) {
  	console.log('SD')
    corouselContruct(450, 180);
  } else if (tablet.matches) {
  	console.log('Tablet')
    corouselContruct(450, 260);
  } else if (mobileL.matches) {
  	console.log('mobileL')
    corouselContruct(450, 520);
  } else if (mobileP.matches) {
  	console.log('mobileP')
    corouselContruct(320, 520);
  }

}


var sFullHD = window.matchMedia("(min-width: 1801px)");
var sHD = window.matchMedia("(min-width: 1500px) and (max-width: 1800px)");
var sHDs = window.matchMedia("(min-width: 1200px) and (max-width: 1499px)");
var sSD = window.matchMedia("(min-width: 992px) and (max-width: 1199px)");
var tablet = window.matchMedia("(min-width: 768px) and (max-width: 991px)");
var mobileL = window.matchMedia("(min-width: 576px) and (max-width: 767px)");
var mobileP = window.matchMedia("(min-width: 320px) and (max-width: 575px)");




function corouselContruct(w,h) {
	let inner = `


<amp-carousel type="slides" width="${w}" height="${h}" layout="responsive" class="participantesSlidesContainer" controls loop data-next-button-aria-label="Go to next slide" data-previous-button-aria-label="Go to previous slide" role="region" aria-label="Looping carousel">















  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(01-12)-1Painel---LUIZ-NASCIMENTO---O-novo-jornalismo-local.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 1º painel</h4>
        </div>
        <h4>LUIZ NASCIMENTO</h4>
        <h4>O novo jornalismo local</h4>
      </div> 



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(01-12)-1-painel---Samir-Trad---O-novo-jornalismo-local.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 1º painel</h4>
        </div>
        <h4>Samir Trad</h4>
        <h4>O novo jornalismo local</h4>
      </div>



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(01-12)-1Painel---Luciane-Viegas---O-novo-jornalismo-local.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 1º painel</h4>
        </div>
        <h4>Luciane Viegas</h4>
        <h4>O novo jornalismo local</h4>
      </div>





    </div>
  </div>








  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">


      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(01-12)-2-Painel---Edvaldo-Pereira-Lima---O-futuro-agora.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 2º painel</h4>
        </div>
        <h4>Edvaldo Pereira Lima</h4>
        <h4>O futuro é agora</h4>
      </div>




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(01-12)-2-painel---Nina-Weingrill---O-futuro-agora.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 2º painel</h4>
        </div>
        <h4>Nina Weingrill</h4>
        <h4>O futuro é agora</h4>
      </div>


      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(01-12)-2-Painel---Marcelo-Santos---O-futuro-e-agora.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 2º painel</h4>
        </div>
        <h4>Marcelo Santos</h4>
        <h4>O futuro é agora</h4>
      </div>



    </div>
  </div>

















  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">



    <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/(01-12)3-Painel---Eduardo-Pugnali-Marcos---A-noticia-que-salva.jpg" layout="fill" class="cover"> </amp-img>
      </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 3º painel</h4>
        </div>
      <h4>Eduardo Pugnali Marcos</h4>
      <h4>A notícia que salva</h4>
    </div>



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(01-12)-3-painel---Vagner-de-Alencar---A-noticia-que-salva.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 3º painel</h4>
        </div>
        <h4>Vagner de Alencar</h4>
        <h4>A notícia que salva</h4>
      </div> 




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(01-12)-3-Painel---Fausto-Salvadori-Filho---A-noticia-que-salva.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 3º painel</h4>
        </div>
        <h4>Fausto Salvadori Filho</h4>
        <h4>A notícia que salva</h4>
      </div> 




  
    </div>
  </div>




















  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">




    <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/(01-12)-4Painel---Mauri-Konig---A-guerra-contra-a-imprensa.jpg" layout="fill" class="cover"> </amp-img>
      </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 4º painel</h4>
        </div>
      <h4>Mauri König</h4>
      <h4>A guerra contra a imprensa</h4>
    </div>



    <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/(01-12)-4-Painel---Wilson-Marini---A-guerra-contra-a-imprensa.jpg" layout="fill" class="cover"> </amp-img>
      </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 4º painel</h4>
        </div>
      <h4>Wilson Marini</h4>
      <h4>A guerra contra a imprensa</h4>
    </div>



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(01-12)-5-painel--Gilberto-Scofield-Junio---Todos-contra-o-fake.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 5º painel</h4>
        </div>
        <h4>Gilberto Scofield Junio</h4>
        <h4>Todos contra o fake</h4>
      </div>





    </div>
  </div>


















  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(01-12)-5-painel---Jose-Antonio-Lima---Todos-contra-o-fake.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 5º painel</h4>
        </div>
        <h4>José Antonio Lima</h4>
        <h4>Todos contra o fake</h4>
      </div>




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(01-12)-5-Painel---Jose-Lazaro-Ferreira-Barros-Junior---Todos-contra-o-fake.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 5º painel</h4>
        </div>
        <h4>José Lázaro Ferreira Barros Júnior</h4>
        <h4>Todos contra o fake</h4>
      </div>





    <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/(01-12)-6Painel---Lucas-de-Sousa-Soares---podcasts.jpg" layout="fill" class="cover"> </amp-img>
      </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 6º painel</h4>
        </div>
      <h4>Lucas de Sousa Soares</h4>
      <h4>Notícia sob demanda</h4>
    </div>


 

    </div>
  </div>



















  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">




    <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/(01-12)-6-Painel---Roberto-Luis-Brandao-Duque-Estrada---Noticia-sob-demanda.jpg" layout="fill" class="cover"> </amp-img>
      </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 6º painel</h4>
        </div>
      <h4>Roberto Luis Brandão Duque Estrada</h4>
      <h4>Notícia sob demanda</h4>
    </div>



    <div class="premiadosImgWrapper grid">
      <div class="premiadosImg shadow-6">
        <amp-img alt="" src="img/participantes/(01-12)-6-Painel---Paulinha-Carvalho---Noticia-sob-demanda.jpg" layout="fill" class="cover"> </amp-img>
      </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 6º painel</h4>
        </div>
      <h4>Paulinha Carvalho</h4>
      <h4>Notícia sob demanda</h4>
    </div>




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-1-painel---Edson-Capoano---Em-busca-da-publicidade-perdida.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 1º painel</h4>
        </div>
        <h4>Edson Capoano</h4>
        <h4>Em busca da publicidade perdida</h4>
      </div>





    </div>
  </div>









  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">






      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-1-Painel---Thiago-Araujo---Em-busca-da-publicidade-perdida.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 1º painel</h4>
        </div>
        <h4>Thiago Araújo</h4>
        <h4>Em busca da publicidade perdida</h4>
      </div>









      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-1-Painel---Luis-Fernando-Bovo---Em-busca-da-publicidade-perdida.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 1º painel</h4>
        </div>
        <h4>Luis Fernando Bovo</h4>
        <h4>Em busca da publicidade perdida</h4>
      </div>







      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-2-painel---Carlos-Cereijo---Conteudo-que-engaja.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 2º painel</h4>
        </div>
        <h4>Carlos Cereijo</h4>
        <h4>Conteudo que engaja</h4>
      </div>







    </div>
  </div>















  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-2-Painel---Tobias-Ferraz---Ainda-tem-noticia-boa.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 2º painel</h4>
        </div>
        <h4>Tobias Ferraz</h4>
        <h4>Ainda tem notícia boa</h4>
      </div>






      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-2-Painel---Roberto-Samora---Ainda-tem-noticia-boa.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 2º painel</h4>
        </div>
        <h4>Roberto Samora</h4>
        <h4>Ainda tem notícia boa</h4>
      </div>







      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-2-Painel---Camila-Rinaldi---Ainda-tem-noticia-boa.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 2º painel</h4>
        </div>
        <h4>Camila Rinaldi</h4>
        <h4>Ainda tem notícia boa</h4>
      </div>





 
    </div>
  </div>
























  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">








      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-3Painel--Ricardo-Gandour---Os-desertos-de-noticia-no-Brasil.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>01/12 - 3º painel</h4>
        </div>
        <h4>Ricardo Gandour</h4>
        <h4>Os desertos de notícia no Brasil</h4>
      </div>


      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-3Painel---Francisco-Rolfsen-Belda---Os-desertos-de-noticia-no-Brasil.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 3º painel</h4>
        </div>
        <h4>Francisco Rolfsen Belda</h4>
        <h4>Os desertos de notícia no Brasil</h4>
      </div>




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-3-painel---Sergio-Spagnuolo---Os-desertos-de-noticia-no-Brasil.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 3º painel</h4>
        </div>
        <h4>Sergio Spagnuolo</h4>
        <h4>Os desertos de notícia no Brasil</h4>
      </div>



 
    </div>
  </div>




















  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-4-painel---Andressa-Simonini---O-papel-do-impresso.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 4º painel</h4>
        </div>
        <h4>Andressa Simonini</h4>
        <h4>O papel do impresso</h4>
      </div>


      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-4-painel---Daniela-Falcao---O-papel-do-impresso.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 4º painel</h4>
        </div>
        <h4>Daniela Falcão</h4>
        <h4>O papel do impresso</h4>
      </div>

      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(01-12)-4-painel---Natalia-Viana----A-guerra-contra-a-imprensa.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 4º painel</h4>
        </div>
        <h4>Natalia Viana</h4>
        <h4>A guerra contra a imprensa</h4>
      </div>


    </div>
  </div>
















  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">


      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-4-Painel---Felipe-Gil---O-papel-do-impresso.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 4º painel</h4>
        </div>
        <h4>Felipe Gil</h4>
        <h4>O papel do impresso</h4>
      </div>



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-5Painel-Adailma-Mendes-dos-Santos---Saude-em-Pauta.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 5º painel</h4>
        </div>
        <h4>Adailma Mendes dos Santos</h4>
        <h4>Saúde em Pauta</h4>
      </div>

      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-5Painel---Fabiana-Cambricoli---Saude-em-pauta.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 5º painel</h4>
        </div>
        <h4>Fabiana Cambricoli</h4>
        <h4>Saúde em Pauta</h4>
      </div>


    </div>
  </div>












  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">


      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-6-painel---Maristela-Crispim---Noticia-sem-eco.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 6º painel</h4>
        </div>
        <h4>Maristela Crispim</h4>
        <h4>Notícia sem eco</h4>
      </div>



      
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-6-painel---Juliana-Arini---Noticia-sem-eco.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 6º painel</h4>
        </div>
        <h4>Juliana Arini</h4>
        <h4>Notícia sem eco</h4>
      </div>




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(02-12)-6-painel---Dal-Marcondes---Noticia-sem-eco.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>02/12 - 6º painel</h4>
        </div>
        <h4>Dal Marcondes</h4>
        <h4>Notícia sem eco</h4>
      </div>


    </div>
  </div>

















  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">


      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)-1-painel---Andre-Deak---O-jornalismo-pode-ser-cool.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 1º painel</h4>
        </div>
        <h4>Andre-Deak</h4>
        <h4>O jornalismo pode ser cool</h4>
      </div>


      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)-1Painel---Cristina-de-Luca---Jornalismo-pode-ser-cool.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 1º painel</h4>
        </div>
        <h4>Cristina de Luca</h4>
        <h4>Jornalismo pode ser cool</h4>
      </div>




       <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)-1Painel---TADEU-JUNGLE--Jornalismo-pode-ser-cool.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 1º painel</h4>
        </div>
        <h4>TADEU JUNGLE</h4>
        <h4>Jornalismo pode ser cool</h4>
      </div> 

    </div>
  </div>












  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)-2-painel---Antonio-de-Assiz---Radios-comunitarios-no-seculo-XXI.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 2º painel</h4>
        </div>
        <h4>Antonio de Assiz</h4>
        <h4>Notícia contra o ódio</h4>
      </div>




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)-2-Painel---Rafael-Ferraz-Carpi---Noticia-contra-o-odio.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 2º painel</h4>
        </div>
        <h4>Rafael Ferraz Carpi</h4>
        <h4>Notícia contra o ódio</h4>
      </div>





      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)-2-Painel---Marilia-Conill-Marasciulo---Noticia-contra-o-odio.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 2º painel</h4>
        </div>
        <h4>Marília Conill Marasciulo</h4>
        <h4>Notícia contra o ódio</h4>
      </div>



    </div>
  </div>









  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)-3-Painel---Carlos-Aros---Labs-&-trends.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 3º painel</h4>
        </div>
        <h4>Carlos Aros</h4>
        <h4>Labs & trends</h4>
      </div>





      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)-3-Painel-Maira-Carvalho-Labs-_Trends.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 3º painel</h4>
        </div>
        <h4>Maíra Carvalho</h4>
        <h4>Labs & trends</h4>
      </div>



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)4Painel--Georgia-Pinheiro---A-danca-das-telas.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 4º painel</h4>
        </div>
        <h4>Georgia Pinheiro</h4>
        <h4>A dança das telas</h4>
      </div>


    </div>
  </div>











  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">




      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)-5-painel---Nayara-Fernandes---Black-Lives-Matter.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 5º painel</h4>
        </div>
        <h4>Nayara Fernandes</h4>
        <h4>A vida que importa na notícia</h4>
      </div>




      
      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)-5-painel---Juca-Guimaraes---Black-Lives-Matter.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 5º painel</h4>
        </div>
        <h4>Juca Guimarães</h4>
        <h4>A vida que importa na notícia</h4>
      </div>





      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)-5-Painel---Mafoane-Odara---A-vida-que-importa-na-noticia.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 5º painel</h4>
        </div>
        <h4>Mafoane Odara</h4>
        <h4>A vida que importa na notícia</h4>
      </div>




    </div>
  </div>






  <div class="premiadosSlide flex">
    <div class="premiadosUnitsWrapper flex">



      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)-6Painel---Renata-Cafardo---Quem-ensina-faz-ao-vivo.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 6º painel</h4>
        </div>
        <h4>Renata Cafardo</h4>
        <h4>Quem ensina faz ao vivo</h4>
      </div>







      <div class="premiadosImgWrapper grid">
        <div class="premiadosImg shadow-6">
          <amp-img alt="" src="img/participantes/(03-12)-6Painel--Maria-Marta-Picarelli-Avancini---Quem-ensina-faz-ao-vivo.jpg" layout="fill" class="cover"> </amp-img>
        </div>
        <div class="line1Participantes flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 554" height="15"> <path d="M436,160H12c-6.6,0-12-5.4-12-12v-36c0-26.5,21.5-48,48-48h48V12c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h128V12 c0-6.6,5.4-12,12-12h40c6.6,0,12,5.4,12,12v52h48c26.5,0,48,21.5,48,48v36C448,154.6,442.6,160,436,160z M12,192h424 c6.6,0,12,5.4,12,12v260c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V204C0,197.4,5.4,192,12,192z M345.3,287.9l-28.2-28.4 c-4.7-4.7-12.3-4.7-17-0.1l-106,105.2l-46-46.4c-4.7-4.7-12.3-4.7-17-0.1l-28.4,28.2c-4.7,4.7-4.7,12.3-0.1,17l82.6,83.3 c4.7,4.7,12.3,4.7,17,0.1l143-141.8C349.9,300.3,350,292.7,345.3,287.9L345.3,287.9z"/> </svg>
          <h4>03/12 - 6º painel</h4>
        </div>
        <h4>Maria Marta Picarelli Avancini</h4>
        <h4>Quem ensina faz ao vivo</h4>
      </div> 



    </div>

  </div>






</amp-carousel>`;


return document.querySelector('.carouselContainer1').innerHTML = inner;


}


myFunction()

sFullHD.addListener(myFunction);

}










      // <div class="premiadosImgWrapper grid">
      //   <div class="premiadosImg shadow-6">
      //     <amp-img alt="" src="img/jornalistas/usert.png" layout="fill" class="cover"> </amp-img>
      //   </div>
      //   <h4>Nome Sobrenome</h4>
      //   <h4>Veículo</h4>
      // </div>
      // <div class="premiadosImgWrapper grid">
      //   <div class="premiadosImg shadow-6">
      //     <amp-img alt="" src="img/jornalistas/usert.png" layout="fill" class="cover"> </amp-img>
      //   </div>
      //   <h4>Nome Sobrenome</h4>
      //   <h4>Veículo</h4>
      // </div>

