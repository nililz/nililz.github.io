import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion"

export default function Skills() {
    return (
      <div className="flex items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Current Role</AccordionTrigger>
            <AccordionContent>
              I work as an Undergraduate Analyst in an Application Support team.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <section className="relative z-10 rounded-2xl p-10 sm:p-16 flex flex-col items-center text-center gap-8 max-w-xl w-full bg-white/70 backdrop-blur-md shadow-lg border border-white/10">
          <h1 className="text-3xl font-bold text-gray-700 drop-shadow-md">Skills & Interests</h1>
  
          {/* Current Role */}
          <div className="text-gray-700">
            <h2 className="text-xl font-semibold drop-shadow-md">👩🏽‍💻 Undergraduate Analyst</h2>
            <p className="mt-1 max-w-md mx-auto">
              Currently working as an Undergraduate Analyst in an Application Support team.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-700 drop-shadow-md"> 💻 Technical Skills</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Python, Java, Swift, C, JavaScript, MATLAB, SQL, HTML, CSS, SPL</li>
              <li>Data Analysis & Visualisation</li>
              <li>ServiceNow, Splunk, Jira, Microsoft SQL Server, IBM Maximo</li>
              <li>ITSM, ITIL</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-700 drop-shadow-md">🪴 Interests</h3>
            <p className="text-gray-700 max-w-md mx-auto">
              I'm curious in exploring how technology and data analysis can be leveraged to drive positive change in women's health. This aligns with my focus in university - I have created a Period Tracking Application, and proposed a Data Science project related to diagnosing PCOS early through wearables.
            </p>
          </div>
        </section>
      </div>
    );
  }