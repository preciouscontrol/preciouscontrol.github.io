import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

/**
 * Analytics Component
 *
 * Wrapper component for Vercel Web Analytics
 * This component integrates Vercel's web analytics tracking into the React application.
 * It provides automatic route tracking and visitor analytics.
 *
 * Usage: Add this component to your app's root layout
 */
export const Analytics = () => {
  return <VercelAnalytics />;
};

export default Analytics;
