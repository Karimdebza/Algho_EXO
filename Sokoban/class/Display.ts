import Drawer from "./Drawer.js";
import { Game } from "./Game.js";


export class Display{
     private ctx : CanvasRenderingContext2D | null;
    private scale : number;
    private drawer : Drawer;
  
    constructor(width:number, height:number, scale:number = 10) {
        this.drawer = new Drawer(width,height,scale);
        const canvas = document.createElement('canvas');
        this.ctx = canvas.getContext('2d');
        
        this.scale = scale;
        canvas.width = width * this.scale;
        canvas.height = height * this.scale;
        
    }
  
    public refreshScore(){
        let score : HTMLElement|null = document.getElementById("score");
        if(score!=null) score.innerHTML = "0";
    }
  
    public draw(game:Game):void {

    }   
    
    public drawRectangle(x:number, y:number, color:string):void {
        if(this.ctx != null){
            this.ctx.beginPath()
            this.ctx.fillStyle = color
            this.ctx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale)
        }
    }
    
    public drawCircle(x:number, y:number, color:string):void {
        if(this.ctx != null){
            this.ctx.beginPath()
            this.ctx.fillStyle = color
            this.ctx.arc(x * this.scale + this.scale / 2, y * this.scale + this.scale / 2, this.scale / 2, 0, 2 * Math.PI)
            this.ctx.fill()
        }
    }
    
}