import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip"

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

          {/* TODO: glam up this section */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl font-semibold">💻 Technical Skills</AccordionTrigger>
            <AccordionContent className="text-base text-white leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white">Programming Languages</h4>
                  <ul className="list-disc list-inside">
                  <li>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-block cursor-pointer hover:text-black transition duration-300 underline">
                            Python
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-white text-black rounded shadow-md p-2">
                          Used in my Data Structures and Algorithm courses
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                  <li>
                  <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-block cursor-pointer hover:text-black transition duration-300 underline">
                            Java
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-white text-black rounded shadow-md p-2">
                          Used in my Object Oriented Programming Classes
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </li>
                    <li>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-block cursor-pointer hover:text-black transition duration-300 underline">
                            Swift
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-white text-black rounded shadow-md p-2">
                          Programmed a Period Tracking App
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </li>
                    <li>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-block cursor-pointer hover:text-black transition duration-300 underline">
                            C
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-white text-black rounded shadow-md p-2">
                          Used in my Software Security, Computer Architecture and Operating Systems classes
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </li>
                    <li>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="inline-block cursor-pointer hover:text-black transition duration-300 underline">
                              MATLAB, R
                            </span>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="bg-white text-black rounded shadow-md p-2">
                            Used in my Engineering Numerical Analysis and Data Science classes 
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Web Technologies</h4>
                  <ul className="list-disc list-inside">
                    <li>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-block cursor-pointer hover:text-black transition duration-300 underline">
                            HTML
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-white text-black rounded shadow-md p-2">
                          Used to program this website!
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </li>
                    <li>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-block cursor-pointer hover:text-black transition duration-300 underline">
                            CSS
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-white text-black rounded shadow-md p-2">
                          Used to program this website! I'm using Tailwind
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </li>
                    <li>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-block cursor-pointer hover:text-black transition duration-300 underline">
                            JavaScript
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-white text-black rounded shadow-md p-2">
                          Used to program this website! I'm using react and next.js
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Tools & Platforms</h4>
                  <ul className="list-disc list-inside">
                    <li>ServiceNow</li>
                    <li>Neo4J</li>
                    <li>Splunk</li>
                    <li>Jira</li>
                    <li>Microsoft SQL Server</li>
                    <li>IBM Maximo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Concepts & Methodologies</h4>
                  <ul className="list-disc list-inside">
                    <li>Data Analysis & Visualisation</li>
                    <li>ITSM & ITIL</li>
                    <li>Agile</li>
                    <li>Data Structures & Algorithms</li>
                  </ul>
                </div>
              </div>
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