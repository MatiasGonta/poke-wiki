import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main>
      <section>
        <article className="w-full h-screen flex gap-3 justify-center items-center">
          <div className="size-28">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path stroke="rgba(221,221,221,90)" d="M4 8v-2a2 2 0 0 1 2 -2h2" />
              <path stroke="rgba(221,221,221,0.6)" d="M4 16v2a2 2 0 0 0 2 2h2" />
              <path stroke="rgba(221,221,221,0.6)" d="M16 4h2a2 2 0 0 1 2 2v2" />
              <path stroke="rgba(221,221,221,90)" d="M16 20h2a2 2 0 0 0 2 -2v-2" />
              <path stroke="rgba(221,221,221,0.6)" d="M9 10h.01" />
              <path stroke="rgba(221,221,221,90)" d="M15 10h.01" />
              <path stroke="rgba(221,221,221,0.6)" d="M9.5 15.05a3.5 3.5 0 0 1 5 0" />
            </svg>
          </div>
          <div className="text-white flex flex-col gap-2">
            <div>
              <h1 className="text-primary text-bold text-[25px]">Error</h1>
              <p role="description">The page you are looking for is not available.</p>
            </div>
            <div>
              <Link role="link" to="/" className="transition-all duration-300 text-[14px] border border-white py-1 px-2 inline-flex gap-1 items-center rounded-xl active:scale-90 hover:text-primary hover:border-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M5 12l4 4" />
                  <path d="M5 12l4 -4" />
                </svg>

                Back
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}