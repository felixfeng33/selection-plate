"use client"
import Image from "next/image"
import React, { useEffect } from "react"
import { SelectionArea } from "../internal"

let called = false

export default function Home() {
  useEffect(()=>{
    if(called) return
    called = true
    const selection = new SelectionArea({
      selectables: ["main > section > li"],
      boundaries: ["main > section"],
      container:"#scroll_container",
    })
      .on("start", ({ store, event }) => {
        if (!(event as MouseEvent).ctrlKey && !(event as MouseEvent).metaKey) {
          for (const el of store.stored) {
            el.classList.remove("selected")
          }
  
          selection.clearSelection()
        }
      })
      .on(
        "move",
        ({
          store: {
            changed: { added, removed },
          },
        }) => {
          for (const el of added) {
            el.classList.add("selected")
          }
  
          for (const el of removed) {
            el.classList.remove("selected")
          }
        }
      )
  },[])

  /* eslint-disable no-console */
  // selection
  //   .on("beforestart", (evt) => console.log("beforestart", evt))
  //   .on("start", (evt) => console.log("start", evt))
  //   .on("beforedrag", (evt) => console.log("beforedrag", evt))
  //   .on("move", (evt) => console.log("move", evt))
  //   .on("stop", (evt) => console.log("stop", evt))

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section id="scroll_container" className="relative w-[900px] p-20 h-[500px] bg-gray-200 overflow-auto [&_li]:text-center [&_li]:select-none">
      <li>item</li>
        <li className="w-[1100px]">item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </section>
    </main>
  )
}
