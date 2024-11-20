import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";
import { Rock } from "./Rock.js";

export class Hole extends Point {
    protected isFilled: boolean;
    constructor(x: number, y: number, color: string) {
        super(x, y, Shape.SQUARE, color);
        this.isFilled = false;

    }

    public setColor(color: string): string {
        return this.color = color;
    }

    public is_empty(point: Point): boolean {
        if (point.getX() && point.getY() === this.x && this.y) {
            return false;
        }
        return true;
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }



    setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getIsFilled(): boolean {
        return this.isFilled;
    }

    // public rock_filled(rock: Rock) {
    //     if (rock.getPosition() !== this.getPosition()) {
    //         return true;
    //     }
    // }

    public setIsFilled(isFilled: boolean): void {
        this.isFilled = isFilled;
    }


}