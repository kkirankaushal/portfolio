import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Activity, LineChart, BarChart3 } from "lucide-react"

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Research & Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Innovative solutions and research initiatives
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary" />
                <CardTitle>AI-Driven Sports Motion Tracking System</CardTitle>
              </div>
              <CardDescription>Graduate Research Assistantship | Sep 2024 - Present</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Designed and applied a real-time multi-camera data collection system using OpenCV, TensorFlow, and
                  Python, capturing human movement and golf ball trajectories for performance analysis.
                </li>
                <li>
                  Configured a data pipeline for optimized collection, preprocessing, and storage of motion-tracking
                  data, enabling accurate analysis of speed, distance, and movement trends.
                </li>
                <li>
                  Engineered a deep-learning-based pose estimation model to extract movement data, transforming
                  unstructured video feeds into structured datasets for sports analytics and decision-making.
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
              <Badge>Python</Badge>
              <Badge>TensorFlow</Badge>
              <Badge>OpenCV</Badge>
              <Badge>Deep Learning</Badge>
              <Badge>Motion Tracking</Badge>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-primary" />
                <CardTitle>Decentralized Autonomous Organizations</CardTitle>
              </div>
              <CardDescription>Graduate Research Assistantship | Jan 2024 - May 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Analyzed governance coalitions across 64 DAOs, tracking voting power, proposal success, and token
                  distribution.
                </li>
                <li>
                  Evaluated treasury strategies for $25M+ DAOs, optimizing fund diversification, risk mitigation, and
                  capital allocation.
                </li>
                <li>
                  Assessed governance impact on voter participation, proposing improvements for decision-making
                  efficiency.
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
              <Badge>Data Analysis</Badge>
              <Badge>Blockchain</Badge>
              <Badge>Governance</Badge>
              <Badge>Financial Analysis</Badge>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <LineChart className="h-5 w-5 text-primary" />
                <CardTitle>Automated Stock Monitoring & Email Reporting</CardTitle>
              </div>
              <CardDescription>RPA Project | Mar 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Deployed an RPA bot to track Nasdaq stock fluctuations, extracting real-time data and generating daily
                  reports.
                </li>
                <li>
                  Applied stock data retrieval using Python (BeautifulSoup, Selenium), streamlining financial
                  monitoring.
                </li>
                <li>
                  Reduced manual effort by integrating web scraping and deployed reporting, enhancing market analysis
                  efficiency.
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
              <Badge>RPA</Badge>
              <Badge>Python</Badge>
              <Badge>BeautifulSoup</Badge>
              <Badge>Selenium</Badge>
              <Badge>Financial Analysis</Badge>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <CardTitle>USC Big Data Health Science Case Competition</CardTitle>
              </div>
              <CardDescription>Case Competition | Feb 7 - Feb 9, 2025</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Constructed a predictive model for disease classification of 11.5M+ healthcare records to optimize
                  treatments.
                </li>
                <li>
                  Identified key factors affecting HIV treatment outcomes using statistical analysis and BI methods.
                </li>
                <li>Presented findings and recommendations to a panel of healthcare industry experts.</li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
              <Badge>Big Data</Badge>
              <Badge>Healthcare Analytics</Badge>
              <Badge>Predictive Modeling</Badge>
              <Badge>Statistical Analysis</Badge>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

