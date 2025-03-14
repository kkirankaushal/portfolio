import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2 } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            5+ years of experience in data analysis, business intelligence, and fraud detection
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Gate City Bank</CardTitle>
                    <CardDescription>Fraud Detection & Spending Behavior Analysis</CardDescription>
                  </div>
                </div>
                <Badge>Jan 2025 - Present</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Streamlined ETL pipelines for data cleaning and reporting using Python and MySQL Server, saving 10+
                  hours weekly.
                </li>
                <li>
                  Developed machine learning models (DBSCAN, regression, forecasting) to detect fraud and reduce false
                  positives.
                </li>
                <li>
                  Implemented hierarchical clustering to analyze spending patterns and identify high-risk transactions.
                </li>
                <li>
                  Innovated SQL-based monetary classification to differentiate in-store vs. online purchases, improving
                  transaction monitoring and efficiency and reducing manual review time by 20%.
                </li>
                <li>Created real-time Tableau dashboards to visualize fraud trends and high-risk spending areas.</li>
                <li>
                  Evaluated location-based anomaly detection using GeoPandas and Folium to flag irregular spending
                  behaviors.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Google Operations Center</CardTitle>
                    <CardDescription>Community Performance Analyst - Google Play</CardDescription>
                  </div>
                </div>
                <Badge>Jul 2021 - Jul 2023</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Managed a global team of 10 Product Experts and led beta testing analysis for Google Play Games in Q3
                  2021.
                </li>
                <li>
                  Identified critical issues early through feedback loops, collaborated with Product Managers to refine
                  features, and drove a 25% increase in product adoption and engagement.
                </li>
                <li>
                  Executed KPI dashboards in Tableau, leveraging a 1,200+ term keyword database and automated thread
                  classification to enhance backlog analysis, improve reporting accuracy by 25%, and reduce manual
                  workload by 35%, leading to 10% YoY process improvements.
                </li>
                <li>
                  Partnered with engineering teams to analyze post-launch user behavior, delivered insights to internal
                  stakeholders, and influenced platform policies, reducing policy violations by 15% and enhancing UX.
                </li>
                <li>
                  Collaborated with Google's SAFE Team to detect fraudulent loan apps on the Play Store, flagged 1,000+
                  apps using anomaly detection, and strengthened security measures for 10M+ users across Play.
                </li>
                <li>
                  Led weekly community hangouts with Product Experts (PEs), fostering engagement and recognizing
                  contributions, contributing to a 7% productivity boost per quarter and increased community engagement.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>MarketStar</CardTitle>
                    <CardDescription>Google Ads Analyst</CardDescription>
                  </div>
                </div>
                <Badge>Jan 2020 - Jul 2021</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Refined ad campaigns for 150+ clients quarterly using SEO and predictive analytics, boosting ROI by
                  125% and generating over $10K in Q3 2020.
                </li>
                <li>
                  Conducted in-depth data analysis on advertiser business models, audience segmentation, and market
                  trends to develop custom ad strategies, increasing CTR, CPC, and conversion rates by 22% while
                  improving overall ad efficiency.
                </li>
                <li>
                  Leveraged Google Analytics to optimize ad placement, increase audience retention and client
                  satisfaction by 20%, and automate processes, cutting time-to-market for new advertising initiatives by
                  30%.
                </li>
                <li>
                  Worked cross-functionally with the Google My Business team to identify and eliminate fraudulent
                  masking by unregistered advertisers, leveraged data analysis to detect misuse patterns, and drove an
                  80% increase in local businesses registering on Google Ads.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Amazon</CardTitle>
                    <CardDescription>Seller Support Sr. Associate in TRMS</CardDescription>
                  </div>
                </div>
                <Badge>May 2017 - Sep 2019</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Investigated freight numbers and vendor payment history using Excel (VLOOKUP), reducing resolution
                  time by 20%.
                </li>
                <li>
                  Resolved 98% of chargeback disputes within SLA, improving fraud detection efficiency and vendor
                  satisfaction.
                </li>
                <li>Architected fraud prevention policies, reducing disputes by 15%.</li>
                <li>Optimized workflows by enhancing internal SOPs and streamlining fraud detection processes.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

