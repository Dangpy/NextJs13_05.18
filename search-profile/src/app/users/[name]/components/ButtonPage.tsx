// app > users > [name] > components > ButtonPage.tsx

"use client";

import React from "react";
import { useRouter } from "next/navigation";

function ButtonPage() {
  const router = useRouter();
  return (
    <button onClick={() => router.push(`/users`)} style={{ float: "right" }}>
      ❌
    </button>
  );
}

export default ButtonPage;
