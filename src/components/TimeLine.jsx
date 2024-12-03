import { motion } from "framer-motion";
import { elements } from "../styles/styles.js";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLine = () => {
  return (
    <section id="timeline" className="p-5 overflow-x-hidden min-h-screen py-20">
      <p className="text-pink-500">Experience</p>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-2xl"
      >
        <strong className={`${elements.strongGradient}`}>Explore</strong> My
        Diverse History Via{" "}
        <strong className={`${elements.strongGradient}`}>Timeline</strong>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.25 } }}
        className="text-sm my-5 md:text-xl md:w-[50%]"
      >
        Professional Experience showcasing my journey of impactful contributions
        and expertise across diverse projects and roles
      </motion.p>
      <VerticalTimeline>
        <VerticalTimelineElement
          date={<p className="text-black md:text-white">2022 - present</p>}
          icon={
            <MdWorkHistory className="text-blue-500 bg-gray-700 rounded-full" />
          }
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
          >
            <h2 className="text-xs">Software Developer</h2>
            <h3 className="text-black text-sm mt-2">Freelance</h3>
            <p className="text-black text-xs">
              Developing cross platform fullstack applications to help the
              community and entrepreneurs succeed and produce software to push
              industries into the future
            </p>
            <ul className="text-black text-xs list-disc ml-5 mt-3">
              <li>
                Lead projects for clients that satisfy their needs by
                implementing best practices in both production & development
                environments
              </li>
              <li>
                Designing systems that function efficiently, smoothly &
                effectively making an impact on clients lives through design and
                usability which meets their standards
              </li>
              <li>
                Updating and maintaining clients databases, and both frontend &
                backend code to keep their products up to date and functioning
                in top condition
              </li>
            </ul>
          </motion.div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date={<p className="text-black md:text-white">2022 - present</p>}
          icon={
            <MdWorkHistory className="text-blue-500 bg-gray-700 rounded-full" />
          }
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
          >
            <h2 className="text-xs">My Flix</h2>
            <h3 className="text-black text-sm mt-2">Career Foundry</h3>
            <p className="text-black text-xs">
              Handling fullstack development for an application to serve movie
              data to the public via API and MongoDB and client side rendering
              React interface for a beautiful look, feel & functionality
            </p>
            <ul className="text-black text-xs list-disc ml-5 mt-3">
              <li>
                Creating developing and deploying of a fully functional Node.js
                API and Express for routing
              </li>
              <li>
                Built out a front end website with React js and connected it via
                Axios to a Node.js API for fetching and displaying data
              </li>
              <li>
                Expressed qualities in design, time management & best practices
                for developing fullstack, fully responsive websites
              </li>
            </ul>
          </motion.div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date={<p className="text-black md:text-white">2022 - present</p>}
          icon={
            <MdWorkHistory className="text-blue-500 bg-gray-700 rounded-full" />
          }
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
          >
            <h2 className="text-xs">Herreshoff Burner</h2>
            <h3 className="text-black text-sm mt-2">Premier Magnesia</h3>
            <p className="text-black text-xs">
              Operating & maintaining product quality by controlling a
              Herreshoff furnace, mill & all related equipment involved in
              grinding and cooking raw Magnesite
            </p>
            <ul className="text-black text-xs list-disc ml-5 mt-3">
              <li>
                Improve production quality by identifying faulty or
                deteriorating equipment prior to a potentially disastrous
                scenario that causes large down time
              </li>
              <li>
                Took part in creating a cleaner environment to stray away from
                hazardous conditions by introducing a scheduled cleaning list
                for employees working in the area
              </li>
              <li>
                Take leadership over crew mates when Shift Lead is not present
                by taking responsibility over production, buildings & operators
              </li>
            </ul>
          </motion.div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date={<p className="text-black md:text-white">2022 - 2022</p>}
          icon={
            <MdWorkHistory className="text-blue-500 bg-gray-700 rounded-full" />
          }
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
          >
            <h2 className="text-xs">Soap Works</h2>
            <h3 className="text-black text-sm mt-2">Freelance</h3>
            <p className="text-black text-xs">
              Building a fullstack EJS, Node.js, MongoDB & Express Ecommerce
              website for an all natural homemade hygenics business
            </p>
            <ul className="text-black text-xs list-disc ml-5 mt-3">
              <li>
                Handling server side rendering components with EJS templating
                engine an a scalable and efficient manner
              </li>
              <li>
                Managing a Stripe account and cleanly connecting a Node.js
                server to the payment system for handling financial & legal
                information
              </li>
              <li>
                Deploying the package as Monorepo application to easily manage
                and update the code base from a single source
              </li>
            </ul>
          </motion.div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date={<p className="text-black md:text-white">2016 - 2022</p>}
          icon={
            <MdWorkHistory className="text-blue-500 bg-gray-700 rounded-full" />
          }
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
          >
            <h2 className="text-xs">Lead Cook</h2>
            <h3 className="text-black text-sm mt-2">Mission Pines</h3>
            <p className="text-black text-xs">
              Taking great care in providing over 140 residents planned meals
              both for breakfast and lunch, meeting all dietary standards and
              best practices
            </p>
            <ul className="text-black text-xs list-disc ml-5 mt-3">
              <li>
                Controlled the quality of food that each patient received based
                on their physical health and dietary conditions all while
                keeping the meal flavorful and aesthetically appeasing
              </li>
              <li>
                Maintained a kitchen of high sanitation standards and
                cleanliness by frequently cleaning counters, cookware, utensils
                & all equipment to fight against infections, diseases and keep
                patients healthy
              </li>
              <li>
                Main responsibilities included leading Cook Aid's in their
                duties and taking sole responsibility over preparing, cooking
                and serving meals to over 140 residents of the care center both
                with breakfast and lunch meals
              </li>
            </ul>
          </motion.div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <a href="/ryanLargeResume.pdf" download="RyanLarge_Resume">
        <div className="text-blue-500 hover:text-pink-500 duration-200 text-center mt-10">
          <p>Download My Full Professional Resume</p>
          <AiOutlineCloudDownload className="text-3xl inline ml-3" />
        </div>
      </a>
    </section>
  );
};

export default TimeLine;
