/*
 * Creación de un script llamado "PaintFade" en la cual hace apariciones simultáneas 
 * de forma continua y suave de colores configurados a base de tipo RGB.
 *
 * La forma GRB está formada por 3 particiones 255,255,255 
 * La primera particiones aumentará hasta 255, una vez que llegue a ese punto la segunda partición aumentará a 255
 * y por último la tercera partición aumentará hasta 255. 															
 * Mientras la tercera sube, la primera disminuirá hasta 0 y una vez eso, la segunda también al tiempo que la primer sube también.
 *
 * THINGS FOR APPLY
 * 1 - Aplicar un orden al switcher entre 0,1,2,3,4,5,6,7,8,9,10,11
 * 2 - Crear una función para el degradado
 * 
*/

var red = 0;
var green = 0;
var blue = 0;

var turn = 0;


var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";


function algorithm() {

	switch(turn){
		case(0):
			if (red >= 0 & red != 255) {
				red = red + 1;
				body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

				if (turn == 0 & red == 255) {
					turn = 1;
				}
			}
			break;

		case(1):
			if (green >= 0 & green != 255) {
				green = green + 1;
				body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

				if (turn == 1 & green == 255) {
					turn = 2;
				}
			}
			break;

		case(2):
			if (blue >= 0 & blue != 255) {
				blue = blue + 1;
				body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

				if (turn == 2 & blue == 255) {
					turn = 3;
				}
			}
			break;

		case(3):
			red = red - 1;
			body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

			if (turn == 3 & red == 50) {
				turn = 4;
			}
			break;

		case(4):
			green = green - 1;
			body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

			if (turn == 4 & green == 50) {
				turn = 5;
			}
			break;

		case(5):
			blue = blue - 1;
			body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

			if (turn == 5 & blue == 50) {
				turn = 6;
			}
			break;

		case(6):
			red = red + 1;
			blue = blue + 1;
			body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

			if (turn == 6 & red == 255 & blue == 255) {
				turn = 7;
			}
			break;

		case(7):
			red = red - 1;
			blue = blue - 1;
			body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

			if (turn == 7 & red == 50 & blue == 50) {
				turn = 8;
			}
			break;

		case(8):
			green = green + 1;
			blue = blue + 1;
			body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

			if (turn == 8 & green == 255 & blue == 255) {
				turn = 9;
			}
			break;

		case(9):
			green = green - 1;
			blue = blue - 1;
			body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

			if (turn == 9 & green == 50 & blue == 50) {
				turn = 10;
			}
			break;

		case(10):
			red = red + 1;
			green = green + 1;
			body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

			if (turn == 10 & red == 255 & green == 255) {
				turn = 11;
			}
			break;

		case(11):
			red = red - 1;
			green = green - 1;
			body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

			if (turn == 11 & red == 50 & green == 50) {
				turn = 0;
			}
			break;
	}
}

function paintFade(time) {
	setInterval("algorithm()", time);
}