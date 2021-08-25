import React from "react";
import Game from "../components/game";

export default function Home() {
  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <main>
		<Game/>
      </main>
    </div>
  )
}
