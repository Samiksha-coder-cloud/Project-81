canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginpath();
ctx.strokestyle="Grey";
ctx.linewidth= 4;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle="Blue";
ctx.linewidth= 5;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle="Black";
ctx.linewidth= 5;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.stroke();