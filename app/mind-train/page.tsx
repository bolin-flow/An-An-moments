import Link from "next/link";
import Image from "next/image";

export default function MindTrainPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-16">
      <h1 className="h1">I'm too stupid, let Dao teach me.</h1>

      <div className="flex gap-30 flex-row justify-center">
        {/* Section 1 Button */}
        <div className="w-full flex flex-col ">
          <button
            type="button"
            id="karma-habit-btn"
            className="mb-7 mx-auto bg-dark-100/50 border-dark-200 rounded-full p-4 hover:bg-dark-200 min-w-40"
            style={{
              boxShadow: "0 0 10px rgba(75, 72, 69, 0.96)",
            }}
          >
            <a className="font-bold" href="/mind-train/karma-habit">
              <h3>习性</h3>
            </a>
          </button>
          <Link href="/mind-train/karma-habit">
            <Image
              src="/images/mind_like_water.png"
              alt="习性"
              width={400}
              height={300}
              className="opacity-70 rounded-lg object-cover hover:opacity-80 transition"
              style={{
                boxShadow: "0 0 30px rgba(233, 174, 101, 0.96)",
              }}
            />
          </Link>
        </div>
        {/* Section 2 Button */}
        <div className="w-full flex flex-col">
          <button
            type="button"
            id="karma-habit-btn"
            className="mb-7 mx-auto bg-dark-100/50 border-dark-200 rounded-full p-4 hover:bg-dark-200 min-w-40"
            style={{
              boxShadow: "0 0 10px rgba(75, 72, 69, 0.96)",
            }}
          >
            <a className="font-bold" href="/mind-train/small-wishe">
              <h3>小愿</h3>
            </a>
          </button>
          <Image
            src="/images/small_things.png"
            alt="小愿"
            width={400}
            height={300}
            className="opacity-70 rounded-lg object-cover hover:opacity-80 transition"
            style={{
              boxShadow: "0 0 30px rgba(233, 174, 101, 0.96)",
            }}
          />
        </div>
      </div>

      <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
        <h1> Welcome to my blog</h1>
        <Link href="/mind-train/karma-habit" className="underline">
          View posts
        </Link>
      </main>
    </div>
  );
}
