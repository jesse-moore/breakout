export class Ball {
    x: number
    y: number
    rad: number
    fill: 'red'

    constructor(rad: number) {
        this.x = 0
        this.y = 0
        this.rad = rad
    }

    draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
        ctx.beginPath()
        ctx.fillStyle = 'red'
        ctx.arc(x, y, this.rad, 0, 2 * Math.PI)
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fill()
        ctx.stroke()
    }
}
