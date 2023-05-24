"use client";
import Link from "next/link";
import styled from "styled-components";
import css from "styled-jsx/css";

const style = css`
  h1 {
    margin-left: 1.6px;
    font-weight: 800;
    color: #323433;
    text-decoration-line: underline;
    text-decoration-style: wavy;
    padding: 1rem;
    border: 0.2rem solid #323433;
    border-radius: 0.9rem;
    background-color: #f5f5f5;
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #50482e;
  }
  button {
    margin: 0rem 3rem;
    padding: 1rem;
    border: 0.2rem solid #323433;
    border-radius: 0.9rem;
    background-color: #f5f5f5;
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #50482e;
  }
  button:hover {
    color: #f5f5f5;
    background-color: #323433;
  }
`;

const SearchGitProfile = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;

export default function Home() {
  return (
    <SearchGitProfile>
      <h1>Do you want to search GitHub username?</h1>
      <Link href={"/users"}>
        <button>GO TO SEARCH</button>
      </Link>

      <style jsx>{style}</style>
    </SearchGitProfile>
  );
}
