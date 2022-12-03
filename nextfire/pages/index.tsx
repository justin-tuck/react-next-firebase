import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      {/* <Link
        prefetch={true}
        href={{
          pathname: "/[username]",
          query: { username: "pjt123" },
        }}
      >
        <a>Justin's Profile</a>
      </Link> */}
      {/* <Loader show /> */}
      <button onClick={() => toast.success("hello toast!")}>Toast me</button>
    </div>
  );
}
