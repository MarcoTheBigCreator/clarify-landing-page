import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ThemeProvider } from 'next-themes';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="w-full px-16 md:px-0 h-screen flex items-center justify-center ">
            <div className="bg-blue-800 border border-blue-400 dark:border-blue-600 bg-opacity-95 dark:bg-opacity-50 backdrop-blur-md flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg">
              <p
                className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-violet-400 dark:text-violet-600"
                role="heading"
                aria-level={1}
              >
                404
              </p>
              <p
                className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider mt-4 text-white"
                role="heading"
                aria-level={2}
              >
                {t('title')}
              </p>
              <p className="text-blue-200 dark:text-blue-300 mt-4 pb-4 border-b-2 text-center">
                {t('description')}
              </p>
              <Link
                href="/"
                className="flex items-center space-x-2 bg-violet-600 hover:bg-violet-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
                title="Return Home"
                aria-label="Return to home page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{t('backButton')}</span>
              </Link>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
