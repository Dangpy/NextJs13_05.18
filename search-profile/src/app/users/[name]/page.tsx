// app > users > [name] > page.tsx

import React from "react";
import ButtonPage from "@/app/users/[name]/components/ButtonPage";

type Props = {
  params: {
    name: string;
  };
};

const fetchUserName = async (name: string) => {
  const result = await fetch(`https://api.github.com/users/${name}`);
  const user: UserType = await result.json();
  return user;
};

async function TodoId({ params: { name } }: Props) {
  const user = await fetchUserName(name);

  return (
    <div className="bg-slate-300 space-y-2 p-2 border-4 border-white-400">
      <ButtonPage />
      <img src={user.avatar_url} width="250rem" />
      <div>유저 로그인 : {user.login}</div>
      <div>유저 이름 : {user.name}</div>
      <div>유저 설명 : {user.bio}</div>
    </div>
  );
}

export default TodoId;
