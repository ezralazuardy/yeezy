import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full z-50 bg-zinc-900 text-white body-font shadow-inner shadow-2xl">
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm sm:py-2 sm:mt-0 mt-4">
          © 2022 Yeezy —
          <Link
            href="https://instagram.com/ezralazuardyy"
            className="ml-1 font-semibold"
            rel="noopener noreferrer"
            target="_blank"
          >
            @ezralazuardyy
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            href="https://instagram.com/ezralazuardyy"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ezralazuardy"
            className="ml-8"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
        </span>
      </div>
    </footer>
  );
}
