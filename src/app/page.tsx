import ToggleMode from "@/components/ToggleMode";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main  className="txt flex gap-2 flex-col items-center justify-center w-screen h-screen text-primary">
        <span  className="txt-3xl">Hello</span>
        <ToggleMode />
      </main>
    </>
  );
}
