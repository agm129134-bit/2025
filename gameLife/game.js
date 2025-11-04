const LIVE=1, DEAD=0;

// var readline= require("readline-sync");//問題輸入
// var row = readline.questionInt("How many row?");//問題輸入
// var col = readline.questionInt("How many col?");//問題輸入

class life{
    constructor(_row, _col){
        this.row=_row;
        this.col=_col;
        this.grid=[]
        //dynamic 2d array

        var aryRowCol=[];//2d Array row x col
        for (let r = 0; r < _row; r++) {
            this.grid.push([]);
            for (let c = 0; c < _col; c++){
                this.grid[r].push(DEAD)//初始都死掉
            }
        }
    }
    getStatusAt = function(_row,_col){
        if(_row<0 || _col<0 || _row>=this.row || _col>=this.col){
            return DEAD;//邊界外都當死掉
        }else{
            return this.grid[_row][_col];
        }
    }
    neighborCount = function(_row,_col){
        var count=0;
        count+=this.getStatusAt(_row-1,_col-1);//左上
        count+=this.getStatusAt(_row-1,_col);//上
        count+=this.getStatusAt(_row-1,_col+1);//右上
        count+=this.getStatusAt(_row,_col-1);//左
        count+=this.getStatusAt(_row,_col+1);//右
        count+=this.getStatusAt(_row+1,_col-1);//左下
        count+=this.getStatusAt(_row+1,_col);//下
        count+=this.getStatusAt(_row+1,_col+1);//右下
        return count;
    }
    update=function(){
        //建立新陣列 duplicate grid
        var nextGrid= JSON.parse(JSON.stringify(this.grid));
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.col; c++){
                var nCount = this.neighborCount(r,c);
                    //活著的規則
                    //update
                    if (this.grid[r][c]==LIVE && (nCount<2 || nCount>3)){
                        nextGrid[r][c]=DEAD;//死掉
                    }
                    if(this.grid[r][c]==DEAD && nCount==3){
                        nextGrid[r][c]=LIVE;//復活
                }
            }
        }
        this.grid=nextGrid;
        //garbage collection
        //gc()
    }
    init=function(nlive){
        //random init
        var randomCount=nlive;
        while(randomCount>0){
            var r=Math.floor(Math.random()*this.row);
            var c=Math.floor(Math.random()*this.col);
            if(this.grid[r][c]==DEAD){
                this.grid[r][c]=LIVE;
                randomCount--;
            }
        }
    }
}

//draw board
class Board{
    constructor(_game, _canvas){
        this.game=_game;
        this.canvas = document.getElementById(_canvas).getContext("2d");
        var wsize = document.getElementById(_canvas).width/this.game.col;
        var hsize = document.getElementById(_canvas).height/this.game.row;
        this.size = Math.min(wsize,hsize)
    }
    drawpoint = function(_r,_c){
        if(this.game.grid[_r][_c]==LIVE)
            this.canvas.fillStyle="#ff0000";//red
        else
            this.canvas.fillStyle="#ffffff";//white
        //fill
        this.canvas.fillRect(_c*this.size,_r*this.size,this.size,this.size);
        //border
        this.canvas.strokeRect(_c*this.size,_r*this.size,this.size,this.size);
        this.canvas.lineStyle = "#000000";
    }
    draw = function(){
        for (let r = 0; r < this.game.row; r++) {
            for (let c = 0; c < this.game.col; c++){
                this.drawpoint(r,c);
            }
        }        
    }
}
// var myGame1= new life(20,10);
var myGame2= new life(5,5);
myGame2.init(1);//初始活1個
var myBoard = new Board(myGame2,"board");
// var myGame2= new life(row,col);//使用者輸入
// myGame1.init(10);//初始活10個
myBoard.draw();

function toNext(){
    myGame2.update();
    myBoard.draw();
}
myGame2.update();//更新1次
// console.log(myGame1)
console.log(myGame2.grid)