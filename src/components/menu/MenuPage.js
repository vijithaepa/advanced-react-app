import React from "react";
import Menu from "./Menu";
import './menu.css';


export default function ManuPage () {
  return (
    <Menu
      buttonText="Sports"
      items={["Tennis", "Racquetball", "Pickleball", "Squash"]}
    />
  )
}
