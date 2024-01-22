import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function StudentInfo() {
  const name = "Mitul Dhawan";
  const github_url = "https://github.com/mitul154";
  
  // my main github is https://github.com/mitul72
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-2xl">Hello Aaron my name is {name}</h1>
      <h2 className="flex gap-2 text-xl mt-5">
        And my github is
        <Link className="mt-1" href={github_url}>
          <FaGithub />
        </Link>
      </h2>
    </div>
  );
}
