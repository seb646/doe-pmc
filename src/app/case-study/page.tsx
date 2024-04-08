'use client'

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';

const Studies = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['overview', 'introduction', 'critical-context', 'methodology', 'operational-review', 'incidents', 'references'];
  
    const handleScroll = () => {
      let currentSection = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const isInViewport = rect.top < viewportHeight && rect.bottom > 0;
  
          if (isInViewport) {
            if ((rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) || (rect.top < viewportHeight && rect.bottom > viewportHeight / 2)) {
              currentSection = section;
              break;
            }
          }
        }
      }
  
      setActiveSection(currentSection);
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  

  return (
    <>
      <main>
        <nav className="hidden sticky top-0 z-40 bg-gray-900 lg:flex overflow-x-auto border-b border-white/10 py-5 border-white/10">
          <div>
            <ul role="list" className="flex min-w-full justify-start flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8">
              {/* <li>
                <Link href="#top" className={activeSection === '' ? 'text-white' : ''}>Overview</Link>
              </li> */}
              {['introduction', 'critical-context', 'methodology', 'operational-review', 'incidents', 'references'].map((section) => (
                <li key={section}>
                  <Link href={`#${section}`} className={activeSection === section ? 'text-white' : ''}>{section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
            <header className="content-section scroll-mt-7" id="introduction">
                <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-14 sm:flex-row sm:items-center sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="flex mb-4 text-4xl text-white font-bold">Case Study: Federal Protective Forces (FPF)</h1>
                        <div className="mt-2 text-gray-400">Since the attacks on September 11, 2001, the United States committed to and engaged in a Global War on Terror to dismantle militant terrorist networks around the world. This engagement, although not amounting to an official declaration of war against any one nation, spans over two decades and saw an outpour of funding in troops and technology. Joining the likes of the internet and GPS, private military contractors (PMCs), who were used to augment overseas military forces and provide a deniable asset to U.S. overseas operations, have permeated domestic, civilian life. The first notable domestic emergence of PMCs was Hurricane Katrina, where military-trained employees of Blackwater arrived in New Orleans to augment the federal and local government’s response and recovery efforts. Blackwater troops were seen patrolling the streets of New Orleans, enforcing laws and purportedly maintaining order with no mandate from any government agency (Scahill, 2007). These soldiers, fresh from overseas deployments where they fought enemy combatants on the battlefield, brought their military tactics, rhetoric, and mindset to the civilian relief operation. This operation served as a demonstration of PMC’s value in domestic operations.</div>

                        <div className="mt-4 text-gray-400">Hurricane Katrina led to an endemic use of PMCs across executive-level federal agencies, particularly in response to natural disasters, immigration, democratic protests, and asset protection. Private military companies have received contracts to work for the Department of Homeland Security’s Immigration and Customs Enforcement agency and the Federal Protective Service to augment the department’s presence at the U.S.-Mexico border and to guard federal facilities, respectively. They also work for the Department of Justice’s U.S. Marshals Service, where they are often contracted to transport prisoners and guard court rooms. A lesser known yet now institutional use of PMCs is the Department of Energy (DOE)’s Federal Protective Forces (FPF). This federal agency is responsible for safeguarding the nation’s Category I special nuclear material, the weapons-grade fissile used in U.S. nuclear arsenal. This “force of highly trained fighters” has federal law enforcement credentials and are authorized to perform arrests, pursue suspects across state lines, and use lethal force––and the agency is made entirely of ex-military private contractors with special forces training (Slayton, 2022).</div>

                        <div className="mt-4 text-gray-400">This paper reviews the DOE’s Federal Protective Forces, outlining their operational structure, legal authority, tactical and law enforcement training, as well as the companies contracted to provide these services. It investigates incidents where contractors proved detrimental to the agency’s mission by abusing alcohol while on duty, purchasing and selling illegal firearms, and engaging in misconduct that jeopardized the safety of the nation’s most deadly weapon. As one of the largest and most well-armed permanent private military forces employed by the federal government, the FPF serves as a useful case study to examine and critique the government’s overall paramilitary augmentation of civilian operations. It provides insight into how PMCs migrate from overseas combat missions to domestic operations, how federal agencies negotiate contracts with PMC companies, and how private contractors receive law enforcement credentials rivaling the authority of the F.B.I. and U.S. Marshals Service. Ultimately, this paper demonstrates how PMCs are incompatible with civilian law enforcement duties and echoes calls from Congress to federalize the agency.</div>
                    </div>
                </div>
            </header>

            <div className="border-t border-white/10 py-14 space-y-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto scroll-mt-24" id="critical-context">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Critical Context</h2>
                        <div className="mt-2 text-gray-400">Drawing upon the fields of critical security studies, American studies, and policing, this project investigates the intersection where the privatization and militarization of police merge in the United States. It builds upon the work of scholars such as Elizabeth Joh, who argues that private police are “largely unburdened by the law of constitutional criminal procedure or by state regulation,” and Julian Go, who argues that “police borrowed tactics, techniques, and organizational templates from America’s imperial-military regime that had been developed to conquer and rule foreign populations” (Joh, 2004, p. 49; Go, 2020, p. 1193). It also draws from Joseph Masco’s The Theater of Operations to understand terror as domestic security policy and Radley Balko’s Rise of the Warrior Cop to interrogate the blurred line between policing and militarization that has created a “battlefield mentality” (Masco, 2014; Balko, 2013).</div>
                        <div className="mt-4 text-gray-400">The issue of police privatization and militarization is compounded by the growing prevalence of private military contractors in domestic security and law enforcement roles. This project translates the work of Deborah Avant and Lee Sigelman into domestic contexts, expanding upon the argument that using private military contractors has “weakened transparency” and led to “erosions” in constitutionalism, public consent, and congressional oversight (Avant & Sigelman, 2010, p. 262; p. 265). In this area, journalistic investigations provide the most insight. Jeremy Scahill’s Blackwater offers context for how Blackwater USA (which became Academi and is now Constellis) migrated from fighting overseas in the War on Terror to domestic natural disaster recovery efforts in Hurricane Katrina (Scahill, 2007). Joel Arbasetti's investigation into Blackwater’s appearance in Puerto Rico during Hurricane Maria expands on Scahill’s work and provides a second example of private military for civilian relief operations (Arbasetti, 2017). Joel Rose and Marisa Peñaloza’s investigation into private contractors detaining children in hotels at the U.S.-Mexico border further demonstrates the growing use of contractors for traditionally civil law enforcement duties (Rose and Peñaloza, 2020).</div>
                        <div className="mt-4 text-gray-400">This project merges these two concepts&mdash;privatization and militarization&mdash;to examine the Department of Energy’s Federal Protective Forces, a federal law enforcement agency staffed and operated by private military contractors. As a case study into private military’s role in domestic policing, it explores the implications of granting military contractors with the authority of a traditional law enforcement officer and considers its consequences on future protest policing, immigration, and national security efforts in America.</div>
                </div>
                <div className="max-w-4xl mx-auto scroll-mt-24" id="methodology">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Methodology</h2>
                        <div className="mt-2 text-gray-400">The methodology employed in this review takes a multidisciplinary and mixed-methods approach, examining private military through legal, economic, and social lenses. The paper integrates a combination of primary and secondary sources, drawing from academic literature, government documents, and journalistic investigations to present a comprehensive and multi-faceted review. Relevant sources were uncovered using keyword search terms, with the University of Toronto’s Libraries and Google Scholar being used for academic literature and DuckDuckGo being used for government documents and journalist investigations.</div>
                        <div className="mt-4 text-gray-400">Supporting this research were a number of journalistic investigations conducted by communities often impacted by the presence of the Federal Protective Forces. These investigations provided the context to launch a separate search for government documents and other journalism sources. </div>
                        <div className="mt-4 text-gray-400">The foundation of this research was a comprehensive review of government documents. Tracing organizational structures came from an examination of relevant Congressional acts, the U.S. Code, and the Code of Federal Regulations. Further information came from internal Department of Energy documents through the Office of Inspector General, who publicly posts their semi-annual and annual reports submitted to Congress. The names of contractors, in addition to their payment information, was found in financial reports made public by the General Services Administration. </div>
                        <div className="mt-4 text-gray-400">Privacy, security, and safety was also an important concern throughout the preliminary research phase. As the research required searching through government documents and reviewing the online presence of private military companies, a virtual private network (VPN) was deployed as a first layer to protect the location and identity of the researcher. In addition, all research was conducted through the Tor browser’s Onion network using DuckDuckGo as a search engine to prevent additional cross-site trackers, information leaks from the source computer, and other potentially revealing personal information. </div>
                </div>
                <div className="max-w-4xl mx-auto scroll-mt-24" id="operational-review">
                        <h2 className="flex mb-6 text-2xl text-white font-bold">Operational Review</h2>

                        <h3 className="flex mb-2 text-lg text-white font-semibold">Structure & Authority</h3>
                        <div className="mt-2 text-gray-400">The Federal Protective Forces (FPF) are the law enforcement and security component of the U.S. Department of Energy (DOE) responsible for protecting Category 1 special nuclear material. Unlike other federal law enforcement agencies, the FPF are staffed entirely by contractors. These contractors generally operate in three distinct roles: as Federal Officers protecting DOE facilities, as Special Agents working for the Office of Special Operations, and as Federal Agents/Nuclear Materials Couriers working for the Office of Secure Transportation. FPF officers and agents facilitate all aspects of nuclear materials protection, from guarding nuclear laboratories to transportation and quick reaction force deployment.</div>
                        <div className="mt-4 text-gray-400">The FPF are organized within the DOE’s National Nuclear Security Administration (NNSA), with each of the NNSA’s 8 field offices negotiating separate contracts with private military contractors to staff officer and special agent positions. As of 2010, each field office’s protective force had between 233 to 533 personnel, with a total agency-wide force of 2,339 officers (U.S. Government Accountability Office, 2010, p. 11). Together, these contracted protective forces from each field office form the FPF. The 8 field officers where FPF employees are stationed include (Locations, n.d.; Office of Secure Transportation, n.d.):</div>
                        <ul className="ml-10 mt-4 text-gray-400 list-disc space-y-4">
                          <li><span className="block font-bold text-gray-200">NNSA Kansas City Field Office</span>Protects the Kansas City National Security Campus in Kansas City, Missouri.</li>
                          <li><span className="block font-bold text-gray-200">NNSA Livermore Field Office</span>Protects the Lawrence Livermore National Laboratory in Livermore, California.</li>
                          <li><span className="block font-bold text-gray-200">NNSA Los Alamos Field Office</span>Protects the Los Alamos National Laboratory in Los Alamos, New Mexico</li>
                          <li><span className="block font-bold text-gray-200">NNSA Nevada Field Office</span>Protects the Nevada National Security Site north of Las Vegas, Nevada.</li>
                          <li><span className="block font-bold text-gray-200">NNSA Office of Naval Reactors</span>Protects Naval Nuclear Laboratory locations in Niskayuna and West Milton, New York, West Mifflin, Pennsylvania, and Idaho Falls, Idaho.</li>
                          <li><span className="block font-bold text-gray-200">NNSA Sandia Field Office</span>Protects the Sandia National Laboratories in Albuquerque, New Mexico. This office also serves as the headquarters for the Office of Secure Transportation in addition to overseeing the office’s Western Region of operations.</li>
                          <li><span className="block font-bold text-gray-200">NNSA Savannah River Field Office</span>Protects the Savannah River Site near Aiken, South Carolina.</li>
                          <li><span className="block font-bold text-gray-200">NNSA Production Office</span>Protects the Pantex Plant in Amarillo, Texas and the Y-12 National Security Complex in Oak Ridge, Tennessee. Both Pantex and Y-12 also serve as regional commands for the Office of Secure Transportation, with Pantext overseeing the Central Region and Y-12 overseeing the Eastern Region.</li>
                        </ul>
                        <div className="mt-4 text-gray-400">Armed employees of the FPF are authorized to make warrantless felony arrests, use deadly force, and engage in fresh pursuit (i.e., the right to pursue suspects beyond their jurisdiction). This authority stems from the Atomic Energy Act of 1954, which grants specifically armed employees&mdash;contractor or otherwise&mdash;with the powers and protections of a federal law enforcement officer (42 U.S.C. 2201(k)). Despite the relatively broad powers given to FPF employees, this authority does include limitations: unarmed employees do not possess these powers and armed employees may only exercise this authority when enforcing federal nuclear security laws. Although a clear jurisdictional boundary is in place, DOE Order 473.2A states that FPF employees may also be deputized by the U.S. Marshals Service, giving them even greater jurisdiction when enforcing federal laws (U.S. Department of Energy, 2021, p. 15).</div>

                        <h3 className="flex mt-6 mb-2 text-lg text-white font-semibold">Training</h3>
                        <div className="mt-2 text-gray-400">Members of the FPF are trained at both the Department of Energy’s National Training Center and the Department of Homeland Security’s Federal Law Enforcement Training Centers (FLETC). The training that an FPF employee receives varies depending on the person’s role––the FPF make these determinations based on internal processes called Job Analysis and Mission-Essential Task List. For example, officers assigned to the OST must pass written and practical tests on firearms use, “Law Enforcement Control Tactics,” and physical fitness and have a commercial driver’s license (U.S. Department of Energy, 2021, p. 25-26). </div>
                        <div className="mt-4 text-gray-400">The majority of training that FPF officers receive relates to the use of firearms. The courses offered by the DOE’s National Training Center almost exclusively relate to tactical strategy and firearms proficiency, except for a single 55-hour course on law enforcement and police procedure (Protective Force Training Department, n.d.). This focus on firearms training is mirrored by the DOE Order establishing the FPF, which provides specific requirements for firearms qualifications and only briefly discusses law enforcement procedure training (U.S. Department of Energy, 2021). Although the authority of FPF officers and agents stems from their ability to carry a firearm, all of the contracted companies that staff protective force roles employ former members of the military and would stand to benefit more from civilian law enforcement training. </div>
                        <div className="mt-4 text-gray-400">A 2005 report by the U.S. Government Accountability Office, which interviewed FPF personnel, underscored the flaws in the agency’s training program. The report pointed to flaws in the FPF, such as a “lack of vigor or realism” in tactical training scenarios, “unreliable” communications equipment, and “exceptions to training and equipment standards [that] create inconsistencies and gaps” (DOE/ESE Security, 2005, p. 2). The study revealed that “85 out of 105 protective force officers…identified a number of deficiencies with their training,” including a “lack of adequate firearms training” and limited tactical training opportunities (U.S. Government Accountability Office, 2005, p. 18). The study ultimately found that, even in tactical scenarios to which the FPF primarily trains, the force is unprepared due to a lack of training standardization DOE. </div>
                        <div className="mt-4 text-gray-400">As contracts for the Federal Protective Forces are negotiated at the facility level, the issue of training standardization across the agency has been a topic of debate. After the attacks on September 11, congressional hearings questioned the level of training that FPF officers receive and advocated for federalization&mdash;where contractors would be absorbed as direct employees of the DOE, bringing a greater level of training and standardization of procedures across the agency.</div>

                        <h3 className="flex mt-6 mb-2 text-lg text-white font-semibold">Contractor Network</h3>
                        <div className="mt-2 text-gray-400">As each NNSA field office negotiates separate contracts, there are several different companies who staff the FPF. The type of contractor employed varies depending on the location. Although the majority of the NNSA field offices are staffed by PMCs, offices also maintain contracts with standard, non-PMC companies for roles such as facility protection. This network analysis will specifically examine the contracts with PMC companies to reveal patterns of inter-governmental PMC use, with a specific focus on overseas military and domestic law enforcement duties.</div>
                        <div className="mt-4 text-gray-400">A review of press releases and the General Services Administration’s federal contract inventory reveals a number of PMCs employed by the DOE between 2016 to 2022, including: </div>
                        <ul className="ml-10 mt-4 text-gray-400 list-disc space-y-4">
                          <li><span className="block font-bold text-gray-200">SOC LLC</span>Provides the protective force for the NNSA Nevada Field Office. </li>
                          <li><span className="block font-bold text-gray-200">Culpepper & Associates Security Services</span>Provides a protective force for DOE headquarters in Washington, D.C.</li>
                          <li><span className="block font-bold text-gray-200">Whitestone Group</span>Provides the protective force for the NNSA Sandia Field Office. </li>
                          <li><span className="block font-bold text-gray-200">Golden SVCS</span>Provides the protective force for the NNSA Production Office at the Y-12 National Security Complex.</li>
                          <li><span className="block font-bold text-gray-200">Acadia Protective Services (a subsidiary of Kerberos International)</span>Provides a quick reaction force based at Midway Substation in Loveland, Colorado.</li>
                          <li><span className="block font-bold text-gray-200">Constellis (formerly Blackwater, Academi, and Triple Canopy)</span>Provides the protective force for the NNSA Los Alamos Field Office.</li>
                        </ul>
                        <div className="mt-4 text-gray-400">The newest member of this list is Constellis, a private military company formed by the merger of Academi (formerly Blackwater) and Triple Canopy. In 2022, Constellis was awarded a 5-year contract to provide the protective force for the NNSA Los Alamos Field Office (Constellis, 2022). The value of a contract varies depending on the office and staffing requirements, however, they are typically worth hundreds of millions of U.S. dollars. For example, SOC received over US$254 million in 2022 to staff the Nevada Field Office, and the Constellis contract is worth US$592 million over 5 years (General Services Administration, 2022; Constellis, 2022).</div>
                        <div className="mt-4 text-gray-400">In addition to working for the DOE, these companies also maintain contracts with other federal government departments, including the Departments of Defense, State, Justice, and Homeland Security. </div>
                        <Link href="/network-map" className="mt-4 inline-block text-gray-200 hover:text-white border-b-2 pb-1 border-transparent hover:border-white text-sm leading-6 font-semibold transition-all duration-200">View the contractor network map &rarr;</Link>

                </div>
                <div className="max-w-4xl mx-auto scroll-mt-24" id="incidents">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Incidents</h2>

                        <h3 className="flex mb-2 text-lg text-white font-semibold">Personnel Issues</h3>
                        <div className="mt-2 text-gray-400">Contractors working for the Federal Protective Forces have been involved in a number of incidents over the past two decades, ranging from alcohol abuse to illegal firearms sales. These incidents reveal a concerning pattern of misconduct that brings into question the effectiveness of the agency’s leadership and whether contractors are suitable for these roles. </div>
                        <div className="mt-4 text-gray-400">Notable incidents involving FPF officers and agents include:</div>
                        <ul className="ml-10 mt-4 text-gray-400 list-disc space-y-4">
                          <li>Between 2003 to 2005, Joe Sizemore, an agent for the Office of Secure Transportation at the Pantex Plant, falsified purchase orders to illegally acquire firearms, body armor, and other restricted gear. Sizemore was investigated by the FBI, ATF, and the DOE’s Inspector General on the suspicion that he “sold government property that was restricted for sale only to the military and to law enforcement.” A search of Sizemore’s home found two unregistered fully-automatic weapons, and he was subsequently indicted on 32-counts of wire fraud, theft of government property, and possession of unregistered firearms (U.S. Department of Justice, 2006). </li>
                          <li>Between 2007 to 2009, there were 16 alcohol-related incidents involving Office of Secure Transportation personnel who were actively transporting nuclear materials. One agent was arrested for public intoxication in 2007, and two others were arrested after a fight at a local bar in 2009 (U.S. Department of Energy, 2010). These two incidents occurred during “Rest Overnight Status,” where agents stop overnight during a transportation mission while still in possession of nuclear materials.</li>
                          <li>A separate alcohol incident in 2009 saw the agency’s top executive arrested after driving with a blood-alcohol concentration of 0.15%. New Mexico police charged him with drunk driving after finding him “parked on a sidewalk with an open bottle of beer” (Vartabedian & Hennigan, 2017).</li>
                          <li>In 2014, the commander of the Y-12 National Security Complex’s Office of Secure Transportation was investigated for repeated reports of altercations with other employees. The Inspector General report found that the commander had at least 7 incidents of “uncontrolled anger, hostility, and aggression,” including threats to kill a co-worker. The Inspector General was “unable to take disciplinary or other action” because none of the incidents were reported (U.S. Department of Energy, 2014a).</li>
                          <li>In 2014, the DOE Inspector General received “allegations regarding sabotage and mishandling” in relation to the Office of Secure Transportation’s Human Reliability Program, which sets physical, mental, and security standards for personnel with access to nuclear weapons. The report alleged a “blatant cover-up of a security violation” that allowed unauthorized access to nuclear weapons storage. Although the Inspector General could not confirm all of these allegations, they did find that a suspended agent was able to access secure nuclear weapons storage (U.S. Department of Energy, 2014b). </li>
                        </ul>
                        <div className="mt-4 text-gray-400">Despite the agency’s history with alcohol abuse, a 2023 report by the DOE’s Inspector General looking into the readiness of Office of Secure Transportation personnel found that “44 out of 57 [employee] records indicated that drug and alcohol testing had not been conducted” (U.S. Department of Energy, 2023, p. 2). The report also revealed that, in 2020, the department temporarily “suspend[ed] drug and alcohol testing” (ibid).</div>

                        <h3 className="flex mt-6 mb-2 text-lg text-white font-semibold">Vehicle Accidents & Spills</h3>
                        <div className="mt-2 text-gray-400">Accidents and spills during transportation are a common occurrence for the Office of Secure Transportation. Notable incidents include: in 1996, a trailer carrying two nuclear weapons flipped over on a road in Nebraska (Brooke, 1996); in 2003, two trucks transporting uranium hexafluoride, a material used to enrich nuclear bombs and reactors, rolled over in Montana and Tennessee (Weinstein, 2012); in 2004, a truck containing uranyl nitrate (also known as liquified yellowcake uranium) leaked radioactive material on I-26 near Asheville, North Carolina (Bothwell, 2004).</div>
                        <div className="mt-4 text-gray-400">An investigation by the Los Angeles Times found that the agency’s fleet of trucks is “antiquated by commercial standards,” with most of the fleet “well past its operational life” by the department’s own specifications. This investigation, released in 2017, found that the tractors used for transportation were over 15-years-old, and the office’s “high-security trailers” were even older––outdating current terrorist threats (Vartabedian & Hennigan, 2017).</div>
                        <div className="mt-4 text-gray-400">In 2002, Robert Halsted, director of Nevada’s Agency for Nuclear Projects, testified on the projected rate and impact of nuclear transportation accidents before a hearing of the U.S. Senate Committee on Energy and Natural Resources. Halsted’s testimony and report projected, based on historical data, that there would be 159 accidents involving a truck and 2,391 other accidents involving nuclear material between 2010 and 2048 (Testimony of Robert J. Halstead, 2002). His testimony stated that the DOE “systematically underestimated the consequences of severe transportation accidents,” which may include severe radiation exposure and latent cancer fatalities should members of the public be exposed (ibid). </div>
                </div>
                <div className="max-w-4xl mx-auto scroll-mt-24" id="references">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">References</h2>
                        <div className="hanging-indent text-gray-400 mb-4">Arbasetti, J. (2017). Masked and armed with rifles: Military security firms roam the streets of San Juan. Centro de Periodismo Investigativo. https://periodismoinvestigativo.com/2017/10/masked-and-armed-with-rifles-military-security-firms-roam-streets-of-san-juan</div>

                        <div className="hanging-indent text-gray-400 mb-4">Atomic Energy Act, 42 U.S.C. § 2201 (1954). https://www.law.cornell.edu/uscode/text/42/2201</div>

                        <div className="hanging-indent text-gray-400 mb-4">Avant, D., & Sigelman, L. (2010). Private Security and Democracy: Lessons from the US in Iraq. Security Studies, 19(2). https://doi.org/10.1080/09636412.2010.480906 </div>

                        <div className="hanging-indent text-gray-400 mb-4">Balko, R. (2013). Rise of the Warrior Cop: The Militarization of America’s Police Forces. PublicAffairs.</div>

                        <div className="hanging-indent text-gray-400 mb-4">othwell, C. (2004). Cake out in the rain. Mountain Xpress. https://mountainx.com/news/community-news/0707uranium-php </div>

                        <div className="hanging-indent text-gray-400 mb-4">Brooke, J. (1996). Road Mishap Puts a Focus on Shipments of A-Bombs. The New York Times. https://www.nytimes.com/1996/12/19/us/road-mishap-puts-a-focus-on-shipments-of-a-bombs.html</div>

                        <div className="hanging-indent text-gray-400 mb-4">Constellis. (2022). N2MIS, a Constellis Company Joint Venture, Wins $592M Protective Services Contract at Los Alamos National Laboratory. https://www.constellis.com/press/n2mis-wins-592m-protective-services-contract-at-los-alamos-national-lab</div>

                        <div className="hanging-indent text-gray-400 mb-4">DOE/ESE Security: How ready is the protective force: Hearing before the U.S. House Subcommittee on National Security, Emerging Threats, and International Relations of the Committee on Government Reform, 109th Cong. (2005). https://www.govinfo.gov/content/pkg/CHRG-109hhrg25259/pdf/CHRG-109hhrg25259.pdf </div>

                        <div className="hanging-indent text-gray-400 mb-4">General Services Administration. (2022). FY 2022 Service Contract Inventory. https://www.acquisition.gov/sites/default/files/page_file_uploads/FY22_GOVERNMENT_INVENTORY.xlsx </div>

                        <div className="hanging-indent text-gray-400 mb-4">Go, J. (2020). The Imperial Origins of American Policing: Militarization and imperial feedback in the early 20th Century. American Journal of Sociology, 125(5). https://doi.org/10.1086/708464 </div>

                        <div className="hanging-indent text-gray-400 mb-4">Joh, E. (2004). The Paradox of Private Policing. Journal of Criminal Law and Criminology, 95(1). https://doi.org/10.2307/3491382</div>

                        <div className="hanging-indent text-gray-400 mb-4">Locations. (n.d.). National Nuclear Security Administration. https://www.energy.gov/nnsa/locations </div>

                        <div className="hanging-indent text-gray-400 mb-4">Masco, J. (2014). The Theater of Operations: National Security Affect from the Cold War to the War on Terror. Duke University Press. </div>

                        <div className="hanging-indent text-gray-400 mb-4">Office of Secure Transportation. (n.d.). National Nuclear Security Administration. https://www.energy.gov/nnsa/office-secure-transportation </div>

                        <div className="hanging-indent text-gray-400 mb-4">Protective Force Training Department. (n.d.). U.S. Department of Energy National Training Center. https://ntc.doe.gov/student/pftd </div>

                        <div className="hanging-indent text-gray-400 mb-4">Rose, J., & Peñaloza, M. (2020). Shadow Immigration System: Migrant Children Detained In Hotels By Private Contractors. NPR. https://www.npr.org/2020/08/20/904027735/shadow-immigration-system-migrant-children-detained-in-hotels-by-private-contrac</div>

                        <div className="hanging-indent text-gray-400 mb-4">Scahill, J. (2007). Blackwater: The Rise of the World's Most Powerful Mercenary Army. Nation Books. </div>

                        <div className="hanging-indent text-gray-400 mb-4">Slayton, N. (2022). The Department of Energy had a nuclear commando task force in the 1980s that looked straight out of ‘Counter Strike.’ Task & Purpose. https://taskandpurpose.com/history/department-of-energy-security-teams-nuclear-commandos</div>

                        <div className="hanging-indent text-gray-400 mb-4">Testimony of Robert J. Halstead on S.J.Res.34: Hearing before the U.S. Senate Committee on Energy and Natural Resources, 107th Cong. (2002). Retrieved from the Internet Archive: https://web.archive.org/web/20041101094118/http://www.state.nv.us/nucwaste/news2002/nn11705.pdf </div>

                        <div className="hanging-indent text-gray-400 mb-4">U.S. Government Accountability Office. (2005). Nuclear Security: DOE's Office of the Under Secretary for Energy, Science, and Environment Needs to Take Prompt, Coordinated Action to Meet the New Design Basis Threat. https://www.govinfo.gov/content/pkg/GAOREPORTS-GAO-05-611/pdf/GAOREPORTS-GAO-05-611.pdf </div>

                        <div className="hanging-indent text-gray-400 mb-4">U.S. Government Accountability Office. (2010). Nuclear Security: DOE needs to address protective forces’ personnel system issues. https://www.gao.gov/assets/gao-10-275.pdf </div>

                        <div className="hanging-indent text-gray-400 mb-4">U.S. Department of Energy. (2010). Inspection of Allegations Relating to Irregularities in the Human Reliability Program and Alcohol Abuse within the Office of Secure Transportation. https://www.energy.gov/sites/default/files/igprod/documents/INS-L-11-01.pdf </div>

                        <div className="hanging-indent text-gray-400 mb-4">U.S. Department of Energy. (2014a). INS-O-15-02: Allegation Regarding Human Reliability Program Unsuitable Reportable Behaviors at the Office of Secure Transportation. https://www.energy.gov/ig/articles/inspection-report-ins-o-15-02 </div>

                        <div className="hanging-indent text-gray-400 mb-4">U.S. Department of Energy. (2014b). DOE/IG-0919: Management of Certain Aspects of the Human Reliability Program and Incident Reporting within the Office of Secure Transportation. https://www.energy.gov/ig/articles/inspection-report-doeig-0919 </div>

                        <div className="hanging-indent text-gray-400 mb-4">U.S. Department of Energy. (2021). DOE Order 472.2A: Protective Force Operations. https://www.directives.doe.gov/directives-documents/400-series/0473.2-BOrder-a </div>

                        <div className="hanging-indent text-gray-400 mb-4">U.S. Department of Energy. (2023). The Office of Secure Transportation’s Agent Qualifications for Work Performance and Missions. https://www.energy.gov/sites/default/files/2023-06/DOE-OIG-23-24.pdf</div>

                        <div className="hanging-indent text-gray-400 mb-4">U.S. Department of Justice. (2006). Nuclear Courier Assigned to Pantex Facility Charged in 32-Count Federal Indictment. https://justice.gov/archive/usao/txn/PressRel06/sizemore_pantex_indict_pr.html </div>

                        <div className="hanging-indent text-gray-400 mb-4">Vartabedian, R., & Hennigan, W.J. (2017). This troubled, covert agency is responsible for trucking nuclear bombs across America each day. Los Angeles Times. https://www.latimes.com/nation/la-na-nuclear-couriers-20170310-story.html </div>

                        <div className="hanging-indent text-gray-400 mb-4">Weinstein, A. (2012). Nuclear Weapons on a Highway Near You. Mother Jones. https://www.motherjones.com/politics/2012/02/nuclear-truckers</div>

                </div>
            </div>
    </main>
    </>
  );
}

export default Studies;