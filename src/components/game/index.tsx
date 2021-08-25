import React, { useEffect, useRef, useState } from 'react'
import { Ball } from './Ball'
import { game } from '../../lib/game'

export default function Home() {
    const boardRef = useRef<HTMLCanvasElement>(null)
    const [ball, setBall] = useState<Ball>(new Ball(15))

    useEffect(() => {}, [])

    useEffect(() => {
        const render = () => {
            const canvas = boardRef.current
            const ctx = canvas.getContext('2d')
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ball.x++
            ball.draw(ctx, ball.x, 10)
            requestAnimationFrame(render)
        }
        render()
    }, [])

    return (
        <div>
            <button className="bg-gray-400 rounded px-4 py-2">TEST</button>
            <canvas
                className="bg-gray-200"
                width="800px"
                height="500px"
                id="board"
                ref={boardRef}
            />
        </div>
    )
}
