// app > users > page.tsx

"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import css from "styled-jsx/css";

const style = css`
  input {
    padding: 1rem 4rem;
    border: 0.2rem solid #323433;
    border-radius: 0.9rem;
    background-color: #f5f5f5;
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #50482e;
  }
  button {
    margin: 0rem 2rem;
    padding: 1rem 1.2rem;
    border: 0.2rem solid #323433;
    border-radius: 0.9rem;
    background-color: #f5f5f5;
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #50482e;
  }
`;

type Props = {};

function SearchUser({}: Props) {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername("");
    router.push(`/users/${username}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="ml-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Input your GitHubName"
        />
        <button type="submit">Click!</button>
        <style jsx>{style}</style>
      </form>
    </div>
  );
}

export default SearchUser;
