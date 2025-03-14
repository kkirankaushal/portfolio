import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Database,
  LineChart,
  BarChart3,
  PieChart,
  FileSpreadsheet,
  Code,
  Layers,
  Workflow,
  Users,
  MessageSquare,
} from "lucide-react"

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Technical proficiencies and professional certifications
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technical Skills</h3>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                      <Database className="mr-2 h-4 w-4 text-primary" />
                      Data Management & Analysis
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">SQL</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">NumPy</Badge>
                      <Badge variant="secondary">Pandas</Badge>
                      <Badge variant="secondary">ETL/ELT</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">Snowflake</Badge>
                      <Badge variant="secondary">Databricks</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                      <LineChart className="mr-2 h-4 w-4 text-primary" />
                      Data Visualization
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Tableau</Badge>
                      <Badge variant="secondary">Power BI</Badge>
                      <Badge variant="secondary">Google Analytics</Badge>
                      <Badge variant="secondary">Data Storytelling</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                      <BarChart3 className="mr-2 h-4 w-4 text-primary" />
                      Machine Learning & AI
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Regression</Badge>
                      <Badge variant="secondary">Clustering</Badge>
                      <Badge variant="secondary">DBSCAN</Badge>
                      <Badge variant="secondary">Forecasting</Badge>
                      <Badge variant="secondary">Anomaly Detection</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                      <FileSpreadsheet className="mr-2 h-4 w-4 text-primary" />
                      Business Intelligence
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">KPI Analysis</Badge>
                      <Badge variant="secondary">A/B Testing</Badge>
                      <Badge variant="secondary">Reporting</Badge>
                      <Badge variant="secondary">Dashboarding</Badge>
                      <Badge variant="secondary">Excel</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                      <Code className="mr-2 h-4 w-4 text-primary" />
                      Programming & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">SQL</Badge>
                      <Badge variant="secondary">Jira</Badge>
                      <Badge variant="secondary">Confluence</Badge>
                      <Badge variant="secondary">Salesforce</Badge>
                      <Badge variant="secondary">Netsuite</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Professional Skills & Certifications
            </h3>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                      <PieChart className="mr-2 h-4 w-4 text-primary" />
                      Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Tableau Desktop</Badge>
                      <Badge>Azure Data Fundamentals (DP-900)</Badge>
                      <Badge>Certified Scrum Master</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                      <Layers className="mr-2 h-4 w-4 text-primary" />
                      Methodologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Agile</Badge>
                      <Badge variant="secondary">Scrum</Badge>
                      <Badge variant="secondary">Lean Six Sigma</Badge>
                      <Badge variant="secondary">Project Management</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                      <Workflow className="mr-2 h-4 w-4 text-primary" />
                      Process Optimization
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Workflow Optimization</Badge>
                      <Badge variant="secondary">Process Improvement</Badge>
                      <Badge variant="secondary">Automation</Badge>
                      <Badge variant="secondary">Efficiency Analysis</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                      <Users className="mr-2 h-4 w-4 text-primary" />
                      Leadership & Collaboration
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Team Management</Badge>
                      <Badge variant="secondary">Cross-functional Collaboration</Badge>
                      <Badge variant="secondary">Stakeholder Management</Badge>
                      <Badge variant="secondary">Strategic Planning</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                      <MessageSquare className="mr-2 h-4 w-4 text-primary" />
                      Communication
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Data Storytelling</Badge>
                      <Badge variant="secondary">Technical Writing</Badge>
                      <Badge variant="secondary">Stakeholder Communication</Badge>
                      <Badge variant="secondary">Presentation Skills</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

