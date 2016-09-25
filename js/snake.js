function Hero(cells,src1,src2){
	this.cells=cells;
	this.cells[0].src=src1;
	for(var i=1;i<cells.length;i++){
		this.cells[i].src=src2;
	}
};
Hero.prototype.IMGS={
	HEAD:"images/head.png",
	BODY:"images/body.png",	
};
function createHero(){
	Hero.call(this,[
	new Cell(10,26),
	new Cell(10,27),
	new Cell(10,28),
	],this.IMGS.HEAD,
	this.IMGS.BODY);
};
function Fruit(cell,src){
	this.cell=cell;
	this.cell.src=src;
}
Fruit.prototype.IMGS={
	F01:"images/fruit01.png",
	F02:"images/fruit02.png",
	F03:"images/fruit03.png",
	F04:"images/fruit04.png",
}
function F1(){
	Fruit.call(this,
		new Cell(Math.floor(Math.random()*23),
		Math.floor(Math.random()*53)),this.IMGS.F01
	);	
}
function F2(){
	Fruit.call(this,
		new Cell(Math.floor(Math.random()*23),
		Math.floor(Math.random()*53)),this.IMGS.F02
	);	
}
function F3(){
	Fruit.call(this,
		new Cell(Math.floor(Math.random()*23),
		Math.floor(Math.random()*53)),this.IMGS.F03
	);	
}
function F4(){
	Fruit.call(this,
		new Cell(Math.floor(Math.random()*23),
		Math.floor(Math.random()*53)),this.IMGS.F04
	);	
}
function Cell(r,c,src){
	this.r=r;
	this.c=c;
	this.src=src;
};
Object.setPrototypeOf(createHero.prototype,Hero.prototype);
Object.setPrototypeOf(F1.prototype,Fruit.prototype);
Object.setPrototypeOf(F2.prototype,Fruit.prototype);
Object.setPrototypeOf(F3.prototype,Fruit.prototype);
Object.setPrototypeOf(F4.prototype,Fruit.prototype);
Hero.prototype.moveUp=function(){
	for(var i=this.cells.length-1;i>0;i--){
		this.cells[i].r=this.cells[i-1].r;
		this.cells[i].c=this.cells[i-1].c;
	}this.cells[0].r--;
};
Hero.prototype.moveRight=function(){
	for(var i=this.cells.length-1;i>0;i--){
		this.cells[i].r=this.cells[i-1].r;
		this.cells[i].c=this.cells[i-1].c;
	}this.cells[0].c++;
};
Hero.prototype.moveLeft=function(){
	for(var i=this.cells.length-1;i>0;i--){
		this.cells[i].r=this.cells[i-1].r;
		this.cells[i].c=this.cells[i-1].c;
	}this.cells[0].c--;
};
Hero.prototype.moveDown=function(){	
	for(var i=this.cells.length-1;i>0;i--){
		this.cells[i].r=this.cells[i-1].r;
		this.cells[i].c=this.cells[i-1].c;
	}this.cells[0].r++;
};
//==========SNAKE============
var snake={
	RN:23,
	CN:53,
	CSIZE:24,
	OFFSETY:102,
	OFFSETX:4,
	hero:null,
	pg:null,
	timer:null,
	interval:200,
	direction:0,
	score:-3,
	fruit:null,
	start:function(){
		document.getElementById("stop").onclick=function(){console.log(111);debugger;};
		this.direction=4;
		this,timer=null;
		this.pg=document.querySelector("#playground");
		this.hero=new createHero();
		this.hero.moved=1;
		this.randomFruit();
		this.paint();
		
		document.addEventListener("keydown",function(e){
		  switch(e.keyCode){
			case 37:
			  if(this.direction!=2) this.direction=4; break;
			case 38:
			  if(this.direction!=3) this.direction=1; break;
			case 39:
			  if(this.direction!=4) this.direction=2; break;
			case 40:
			  if(this.direction!=1) this.direction=3; break;
			}
		}.bind(this));
		this.timer=setInterval(this.move.bind(this),this.interval);
	},
	paint:function(){
		this.pg.innerHTML=this.pg.innerHTML.replace(/\<img\s+[^>]*\>/g,"");
		this.paintHero();
		this.paintFruit();
	},
	paintCell(cell,frag){
		var img=new Image();
		img.src=cell.src;
		img.style.left=this.CSIZE*cell.c+this.OFFSETX+"px";
		img.style.top=this.CSIZE*cell.r+this.OFFSETY+"px";
		frag.appendChild(img);
	},
	paintHero:function(){
		var frag=document.createDocumentFragment();
		for(var i=0;i<this.hero.cells.length;i++){
			var cell=this.hero.cells[i];
			this.paintCell(cell,frag);
		}
		this.pg.appendChild(frag);
	},
	paintFruit:function(){
		var frag=document.createDocumentFragment();
		var cell=this.fruit.cell;
		this.paintCell(cell,frag);
		this.pg.appendChild(frag);
	},
	randomFruit:function(){
		var n=Math.floor(Math.random()*4);
		switch(n){
			case 0:this.fruit=new F1();break;
			case 1:this.fruit=new F2();break;
			case 2:this.fruit=new F3();break;
			case 3:this.fruit=new F4();break;
		}
		this.score+=3;
		document.getElementById("score").innerHTML=this.score;
		this.paint();
	},
	move:function(){
		switch(this.direction){
		case 1: this.hero.moveUp();break;
		case 2: this.hero.moveRight();break;
		case 3: this.hero.moveDown();break;
		case 4: this.hero.moveLeft();break;
		}
		if(this.fruit.cell.r==this.hero.cells[0].r&&this.fruit.cell.c==this.hero.cells[0].c){
			this.randomFruit();
			this.hero.cells[this.hero.cells.length]={r:-50,c:-50,src:"images/body.png"};
		}
		if(this.isGameover()==true){
			alert("Game Over");
			clearInterval(this.timer);
			this.start();
		}
		this.paint();
	},
	isGameover:function(){
		for(var i=3;i<this.hero.cells.length;i++){
			if(this.hero.cells[0].r==this.hero.cells[i].r&&this.hero.cells[0].c==this.hero.cells[i].c) 
				return true;
		}
		if(this.hero.cells[0].r<0||this.hero.cells[0].r>this.RN-1||this.hero.cells[0].c<0||this.hero.cells[0].c>this.CN-1)
			return true;
		return false;
	}
};
snake.start();