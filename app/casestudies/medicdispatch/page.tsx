"use client";
import React from "react";
import { navItems } from "@/data";

import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { CaseStudyOne } from "@/components/CaseStudyOne";

const StudyOne = () => {
  return (
    <section className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-4 sm:px-6 lg:px-8">
      <FloatingNav navItems={navItems} />
      <div className="pt-20 w-full">
        <CaseStudyOne />
      </div>

      {/* This is where the content of the portfolio begins */}
      <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        {[
          {
            title: "Poor Healthcare service access",
            content: `Nigeria's healthcare system has long been plagued by significant challenges - from limited access to emergency services to difficulties for both patients and providers in connecting with the right care. For many Nigerians, obtaining timely, quality healthcare has been an ongoing struggle.

            A client hired me to tackle Nigeria's healthcare system problems. As a UI/UX designer, I set out to create a platform that would improve access to medical services for patients and provide new opportunities for healthcare providers. The goal was straightforward: design a digital solution to address the major issues in Nigeria's healthcare and make it work better for everyone involved.`,
          },
          {
            title: "Healthcare Consumers and Providers",
            content: `I identified two core user groups for their project:

            Healthcare Consumers: Individuals, patients, caregivers, and families seeking convenient access to a range of healthcare services, from emergency care to routine appointments and medication procurement.

            Healthcare Providers: Pharmacies, hospitals, specialists, labs, and caregiving professionals who needed better tools to manage their operations and supplement their income.

            By addressing the unique needs and pain points of both audiences, I aimed to build a comprehensive solution that would transform the Nigerian healthcare landscape.`,
          },
          {
            title: "Would This Work?",
            content: `Beginning with extensive user research, I conducted in-depth interviews and discussions with the target audiences.

            From healthcare consumers, they uncovered common challenges such as the lack of access to emergency services and difficulty finding and booking the right providers.

            On the provider side, a key insight emerged - many healthcare professionals were struggling with low earnings in their primary roles and sought additional income opportunities. With these insights, I moved on to ideate and design a solution that could address these pressing needs.

            The result was Medic Dispatch, a mobile and web-based application that would serve as a centralized platform for accessing a wide range of healthcare services.`,
          },
          {
            title: "How I Intend To Make It Work",
            content: `The Key Features For healthcare consumers, Medic Dispatch offered the following core features: - Emergency call functionality - Booking for home care and other on-demand services - Hospital and provider search and appointment scheduling - Medication ordering and delivery On the provider side, the platform empowered users with: - Earnings tracking and management - Secure storage of patient health records - Prescription management - Appointment scheduling and patient communication tools Crucially, the team also incorporated safeguards to prevent prescription abuse, ensuring the responsible and ethical use of the platform.`,
          },
          {
            title: "Phew! It Works",
            content: `To validate their design, I conducted on-site testing with a diverse range of stakeholders, including ambulance service providers, caregivers, pharmacists, nurses, and healthcare consumers. This hands-on evaluation led to valuable feedback and iterative improvements, such as the ability for consumers to request services on behalf of their dependents.

            The results of the Medic Dispatch launch were remarkable. Within the first few months, the platform had onboarded over 200 healthcare consumers, 8 doctors, 10 ambulance service providers, 50 nurses, 68 caregivers, 4 labs, and 12 pharmacies.

            The success of the project ultimately enabled the client to secure $100,000 in funding to further expand the platform's reach and capabilities.`,
          },
          {
            title: "Conclusion",
            content: `Through this project, I gained valuable insights that will inform my future work. Most notably, I discovered the importance of paying close attention to the "silent pains" of my target audience - the unspoken challenges and needs that may not be immediately apparent but can have a profound impact on the design solution.

            By deeply understanding the experiences and struggles of both healthcare consumers and providers, I was able to create a holistic, user-centric platform that addressed the core issues plaguing Nigeria's healthcare system.

            This emphasis on empathy and a storytelling-driven design approach proved instrumental in delivering a truly transformative solution.`,
          },
        ].map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl sm:text-3xl text-center text-purple mb-4">
              {section.title}
            </h2>
            <p className="text-white-200 text-sm sm:text-base text-justify leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <Footer />
    </section>
  );
};

export default StudyOne;
