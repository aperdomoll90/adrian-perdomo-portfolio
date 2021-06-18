import React from 'react'
import '../styles/_main.scss'
import laptop from '../elements/laptop.png'
import portrait from '../elements/profile.png'

function Resume() {
  return (
      <>
        <div className="Stripe section ">
          <div className="featureBox featureBox-schoolSkill">
            <div className="titleBox-portfolio">Education</div>
            <div className="featureBox-schoolSkill">
              <ul>
                <li>
                  Software Engineering Career Course Boca Code 04/2020 - 06/2020
                </li>
                <li>
                  Associate in Arts Degree (Marketing) Palm Beach State College
                </li>
                <li>
                  09/2014 – Present EMT, Certification Palm Beach State College
                </li>
                <li>
                  03/2015 – 09/2015 Bachelor of Science, Information Technology
                </li>
                <li>
                  Institute Polytechnic Informatics Raul Cepero Bonilla 09/2005
                  – 07/2008
                </li>
              </ul>
            </div>
          </div>
          <div className="featureBox featureBox-schoolSkill">
            <div className="titleBox-portfolio">Skills & Tech</div>
            <div className="featureBox-schoolSkill featureBox-reskillArea">
            
              <div className="contactMe-skill contactMe-purple">JavaScript</div>
                <div className="contactMe-skill contactMe-yellow">SQL / NoSQL</div>
                <div className="contactMe-skill contactMe-red">HTML</div>
                <div className="contactMe-skill contactMe-blue">CSS</div>
                <div className="contactMe-skill contactMe-orange">CSS Frameworks</div>
                <div className="contactMe-skill contactMe-green">Node</div>
                <div className="contactMe-skill contactMe-purple">Express</div>
                <div className="contactMe-skill contactMe-yellow">React Hooks</div>
                <div className="contactMe-skill contactMe-blue">Typescript</div>
                <div className="contactMe-skill contactMe-yellow">React</div>
                <div className="contactMe-skill contactMe-green">React-Native Mobile Dev</div>
                <div className="contactMe-skill contactMe-red">Automation with Python</div>
                <div className="contactMe-skill contactMe-red">Electron Desktop Dev</div>
                <div className="contactMe-skill contactMe-blue">JQuery</div>
                <div className="contactMe-skill contactMe-yellow">DOM</div>
             
            </div>
          </div>
        </div>

        <section className="section section-bottom">
          <div className="contactMe">
            <div className="contactMe-expGrid ">
              <div className="contactMe-expTitle titleBox-portfolio">
                EXPERIENCE
              </div>
              <div className="contactMe-expContent ">
                <div>
                  <span>Home Health Intake Coordinator </span>First Choice Home
                  Health and Hospice• Harrisonburg VA • 03/2020 – 07/2020 Enter
                  the initial referral demographics and insurance information
                  into computer system for Home Care, Home Health and Hospice
                  patients. Verify insurance numbers and eligibility, obtain
                  authorization as required. Enters and maintain accurate
                  patient records of physicians, family/friends, and facilities.
                  (names, credentials, PECOS, NPI, OIG check, license expiration
                  and contact information, etc.) Compile needed paperwork to
                  send to insurance companies, staff or therapy contractors as
                  required. Order supplies for home health clients as needed or
                  requested Assistant{' '}
                </div>

                <div>
                  Medicaid Financial Analyst Change Healthcare • Boca Raton FL •
                  10/2016 – 10/2019 Responsible for managing the relationship
                  between Jackson Memorial Hospital team and Department of
                  Children and Families to ensure fulfillment of Medicaid and
                  Medicare programs assistance for eligible patients, while
                  upholding the highest integrity and providing superior
                  customer service. Met with over 120 patients and their
                  families per week to assess their needs and determine
                  government assistance eligibility. Assisted over 25 patients
                  per week with applications for federal and state programs with
                  high rates of successful outcomes. Contacted at least 60
                  discharged patients per day to ensure they are informed of
                  their coverage options and set appointments if they qualify.
                  Responsible for running the census of the Outpatient Emergency
                  Department Proficient in medical insurance verification
                  systems (ie. Emdeon office, Florida Medicaid, Flimmis) and
                  hospital procedures. Experience with Cerner Powerchart
                  Electronic Medical Records (EMR) system. Adherence to company
                  and legal standards regarding Protected Health Information
                  (PHI), Personal Identifiable Information (PII), Personnel
                  Transaction Identifier (PTI), and Health Insurance Portability
                  and Accountability Act (HIPAA).
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}

export default Resume
