import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Education & Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Academic background and professional credentials
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>M.S. in Business Analytics</CardTitle>
                    <CardDescription>North Dakota State University</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Aug 2023 - Present</span>
                    <span className="text-sm font-medium">GPA: 3.4/4.0</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Specialized in advanced data analytics, machine learning, and business intelligence applications.
                    Authorized to work full-time for any US Employer starting May 15th, 2025.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Certifications</h3>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Professional Certifications</CardTitle>
                    <CardDescription>Industry-recognized credentials</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <div>
                      <p className="font-medium">Tableau Desktop Certified</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Proficiency in creating interactive visualizations and dashboards
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <div>
                      <p className="font-medium">Microsoft Certified: Azure Data Fundamentals (DP-900)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Core knowledge of data concepts and Microsoft Azure data services
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <div>
                      <p className="font-medium">Certified Scrum Master</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Expertise in Agile methodologies and Scrum framework implementation
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

