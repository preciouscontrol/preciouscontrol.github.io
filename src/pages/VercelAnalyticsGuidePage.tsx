import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import HeroSection from "@/components/HeroSection";

const VercelAnalyticsGuidePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Getting Started with Vercel Web Analytics | Preciouscontrol</title>
        <meta
          name="description"
          content="Learn how to set up and use Vercel Web Analytics to track your visitors and page views."
        />
        <meta
          name="keywords"
          content="Vercel Web Analytics, analytics setup, visitor tracking, web analytics"
        />
        <meta property="og:title" content="Getting Started with Vercel Web Analytics | Preciouscontrol" />
        <meta
          property="og:description"
          content="Learn how to set up and use Vercel Web Analytics to track your visitors and page views."
        />
        <link rel="canonical" href="https://preciouscontrol-services.com/docs/vercel-analytics" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        title="Getting started with Vercel Web Analytics"
        subtitle="Learn how to enable, configure, and deploy analytics to track your visitors and page views"
      />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Prerequisites Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Prerequisites</h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <div>
                  <strong>A Vercel account.</strong> If you don't have one, you can{" "}
                  <a
                    href="https://vercel.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    sign up for free
                  </a>
                  .
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <div>
                  <strong>A Vercel project.</strong> If you don't have one, you can{" "}
                  <a
                    href="https://vercel.com/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    create a new project
                  </a>
                  .
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <div>
                  <strong>The Vercel CLI installed.</strong> If you don't have it, you can install it using:
                  <div className="mt-2 bg-gray-900 dark:bg-gray-800 text-white p-3 rounded font-mono text-sm overflow-x-auto">
                    npm install -g vercel
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/* Enable Web Analytics Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Enable Web Analytics in Vercel
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mb-6 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                On the{" "}
                <a
                  href="https://vercel.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  Vercel dashboard
                </a>
                , select your Project and then click the <strong>Analytics</strong> tab and click{" "}
                <strong>Enable</strong> from the dialog.
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>💡 Note:</strong> Enabling Web Analytics will add new routes (scoped at{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">
                  /_vercel/insights/*
                </code>
                ) after your next deployment.
              </p>
            </div>
          </section>

          {/* Add Package Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Add @vercel/analytics to your project
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Using the package manager of your choice, add the <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">@vercel/analytics</code> package to your
              project:
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">npm</h4>
                <div className="bg-gray-900 dark:bg-gray-800 text-white p-3 rounded font-mono text-sm overflow-x-auto">
                  npm install @vercel/analytics
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">pnpm</h4>
                <div className="bg-gray-900 dark:bg-gray-800 text-white p-3 rounded font-mono text-sm overflow-x-auto">
                  pnpm install @vercel/analytics
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">yarn</h4>
                <div className="bg-gray-900 dark:bg-gray-800 text-white p-3 rounded font-mono text-sm overflow-x-auto">
                  yarn add @vercel/analytics
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">bun</h4>
                <div className="bg-gray-900 dark:bg-gray-800 text-white p-3 rounded font-mono text-sm overflow-x-auto">
                  bun add @vercel/analytics
                </div>
              </div>
            </div>
          </section>

          {/* Add Analytics Component Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Add the Analytics component to your app
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For React applications, add the following code to your main app file:
            </p>
            <div className="bg-gray-900 dark:bg-gray-800 text-white p-4 rounded font-mono text-sm overflow-x-auto">
              <pre className="text-gray-100 whitespace-pre-wrap">{`import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics />
    </div>
  );
}`}</pre>
            </div>
          </section>

          {/* Deploy Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Deploy your app to Vercel</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Deploy your app using the following command:</p>
            <div className="bg-gray-900 dark:bg-gray-800 text-white p-3 rounded font-mono text-sm overflow-x-auto mb-4">
              vercel deploy
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you haven't already, we also recommend connecting your project's Git repository, which will enable
              Vercel to deploy your latest commits to main without terminal commands.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Once your app is deployed, it will start tracking visitors and page views.
            </p>
          </section>

          {/* Verification Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Verify Analytics is Working</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>💡 Note:</strong> If everything is set up properly, you should be able to see a Fetch/XHR
                request in your browser's Network tab from <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">/_vercel/insights/view</code> when you
                visit any page.
              </p>
            </div>
          </section>

          {/* View Data Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">View your data in the dashboard</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once your app is deployed, and users have visited your site, you can view your data in the dashboard.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To do so, go to your <a
                href="https://vercel.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                dashboard
              </a>
              , select your project, and click the <strong>Analytics</strong> tab.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              After a few days of visitors, you'll be able to start exploring your data by viewing and filtering the
              panels. Users on Pro and Enterprise plans can also add custom events to their data to track user
              interactions such as button clicks, form submissions, or purchases.
            </p>
          </section>

          {/* Resources Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Next Steps</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Now that you have Vercel Web Analytics set up, you can explore the following topics to learn more:
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <a
                  href="https://vercel.com/docs/analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  Learn about Vercel Web Analytics
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <a
                  href="https://vercel.com/docs/analytics/custom-events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  Set up custom events
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <a
                  href="https://vercel.com/docs/analytics/filtering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  Learn about filtering data
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  Read about privacy and compliance
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <a
                  href="https://vercel.com/docs/analytics/limits-and-pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  Explore pricing
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <a
                  href="https://vercel.com/docs/analytics/troubleshooting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  Troubleshooting
                </a>
              </li>
            </ul>
          </section>

          {/* Privacy Section */}
          <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Privacy & Compliance</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Vercel Web Analytics is designed with privacy and data compliance standards in mind. Learn more about how
              Vercel supports{" "}
              <a
                href="https://vercel.com/docs/analytics/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                privacy and data compliance standards
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default VercelAnalyticsGuidePage;
