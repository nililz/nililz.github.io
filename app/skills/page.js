import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/accordion";

export default function Skills() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="relative z-10 rounded-3xl p-10 sm:p-16 flex flex-col items-start text-left gap-10 max-w-3xl w-full bg-white/30 backdrop-blur-md shadow-2xl border border-white/20">

        <h1 className="text-3xl font-extrabold text-whitw drop-shadow-md">Skills & Interests</h1>

        <Accordion type="multiple" className="w-full">

          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-semibold">👩🏽‍💻 Current Role</AccordionTrigger>
            <AccordionContent className="text-base text-white leading-relaxed">
              I work as an Undergraduate Analyst in an Application Support team, helping maintain critical systems and ensuring smooth operations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl font-semibold">💻 Technical Skills</AccordionTrigger>
            <AccordionContent className="text-base text-white leading-relaxed">
              <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li>Python, Java, Swift, C, JavaScript, MATLAB, SQL, HTML, CSS, SPL</li>
                <li>Data Analysis & Visualisation</li>
                <li>ServiceNow, Splunk, Jira, Microsoft SQL Server, IBM Maximo</li>
                <li>ITSM, ITIL</li>
                <li>Data Structures & Algorithms</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl font-semibold">🪴 Interests</AccordionTrigger>
            <AccordionContent className="text-base text-white leading-relaxed">
              I'm passionate about leveraging technology and data to improve women's health outcomes.
              During university, I created a Period Tracking Application in Swift and proposed a project focused on early PCOS detection using wearable data.
              I also love art, baking, and staying active!
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </section>
    </div>
  );
}