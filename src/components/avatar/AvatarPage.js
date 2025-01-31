import React from "react";
import {Avatar} from "./Avatar";
import img from './images/bob.jpg'

export function AvatarPage() {
  return (
    <>
      <Avatar src={img} alt="Bob Ziroll" />
      <br />
      <Avatar>BZ</Avatar>
      <br />
      <Avatar />
    </>
  )
}