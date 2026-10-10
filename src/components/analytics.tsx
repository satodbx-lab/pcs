import { GoogleAnalytics } from "@next/third-parties/google";
import { site } from "@/lib/site";

/** GA4。測定ID（site.gaMeasurementId）が空の間は何も出力しない。 */
export function Analytics() {
  if (!site.gaMeasurementId) return null;
  return <GoogleAnalytics gaId={site.gaMeasurementId} />;
}
