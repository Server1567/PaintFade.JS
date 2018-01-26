/*
 * Creación de un script llamado "PaintFade" en la cual hace apariciones simultáneas 
 * de forma continua y suave de colores configurados a base de tipo RGBA.
 *
 *
 * La forma GRB está formada por 3 particiones 255,255,255 
 * La primera particiones aumentará hasta 255, una vez que llegue a ese punto la segunda partición aumentará a 255
 * y por último la tercera partición aumentará hasta 255.
 * 															COLOR: (82,24,146)
 * Mientras la tercera sube, la primera disminuirá hasta 0 y una vez eso, la segunda también al tiempo que la primer sube también.
 *
 * ALGORITHM
 * 
*/

var red = 0;
var green = 0;
var blue = 0;

var turn = 0;


var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = "rgba("+red+", "+green+", "+blue+", .75)";


function paintFade() {

	switch(turn){
		case(0):
			if (red >= 0 & red != 255) {
				red = red + 1;
				body.style.backgroundColor = "rgba("+red+", "+green+", "+blue+", .75)";

				if (turn == 0 & red == 255) {
					turn = 1;
				}
			}
			break;

		case(1):
			if (green >= 0 & green != 255) {
				green = green + 1;
				body.style.backgroundColor = "rgba("+red+", "+green+", "+blue+", .75)";

				if (turn == 1 & green == 255) {
					turn = 2;
				}
			}
			break;

		case(2):
			if (blue >= 0 & blue != 255) {
				blue = blue + 1;
				body.style.backgroundColor = "rgba("+red+", "+green+", "+blue+", .75)";

				if (turn == 2 & blue == 255) {
					turn = 3;
				}
			}
			break;

// ****************************** RETORNO DE COLORES ******************************

		case(3):
			red = red - 1;
			body.style.backgroundColor = "rgba("+red+", "+green+", "+blue+", .75)";

			if (turn == 3 & red == 0) {
				turn = 4;
			}
			break;


		case(4):
			green = green - 1;
			body.style.backgroundColor = "rgba("+red+", "+green+", "+blue+", .75)";

			if (turn == 4 & green == 0) {
				turn = 5;
			}
			break;


		case(5):
			blue = blue - 1;
			body.style.backgroundColor = "rgba("+red+", "+green+", "+blue+", .75)";

			if (turn == 5 & blue == 5) {
				turn = 0;
			}
			break;

	}
}

setInterval("paintFade()", 10);