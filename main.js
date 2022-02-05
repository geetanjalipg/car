canvas=document.getElementById("myCanvas");
cntx=canvas.getContext("2d");


greencar_width=75;
greencar_height=100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;


function add() {
	background_imgtag=new Image();
    background_imgtag.src=background_image;
    background_imgtag.onload=uploadBackground;

    greencar_imgtag=new Image();
    greencar_imgtag.src=greencar_image;
    greencar_imgtag.onload=uploadgreencar;
}

function uploadBackground() {
	cntx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	cntx.drawImage( greencar_imgtag,greencar_x,greencar_y,greencar_width,greencar_height);
	

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0){
        greencar_y=greencar_y-10;
        console.log(" greencar_x= " + greencar_x + " greencar_y= " + greencar_y);
        uploadBackground();
       uploadgreencar();

    }
}

function down()
{
	if(greencar_y<=350){
        greencar_y=greencar_y+10;
        console.log("  greencar_x= " + greencar_x + " greeencar_x= " + greencar_y);
        uploadBackground();
       uploadgreencar();

    }
}

function left()
{
	if(greencar_x>=0){
        greencar_x=greencar_x-10;
        console.log("  greencar_x= " + greencar_x + " greeencar_x= " + greencar_y);
        uploadBackground();
       uploadgreencar();

    }
}

function right()
{
	if(greencar_x<=750){
        greencar_x=greencar_x+10;
        console.log("  greencar_x= " + greencar_x + " greeencar_x= " + greencar_y);
        uploadBackground();
       uploadgreencar();

    }
}
