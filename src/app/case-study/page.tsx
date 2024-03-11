import Image from "next/image";
import Link from 'next/link';

const Studies = () => {

  return (
    <>
        <main>
        <nav className="sticky top-0 z-40 bg-gray-900 flex overflow-x-auto border-b border-white/10 py-5 border-white/10">
              <div >
                <ul role="list" className="flex min-w-full justify-start flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8">
                  <li>
                    <Link href="#top" className="text-white">Overview</Link>
                  </li>
                  <li>
                    <Link href="#introduction" className="">Introduction</Link>
                  </li>
                  <li>
                    <Link href="#critical-context" >Critical Context</Link>
                  </li>
                  <li>
                    <Link href="#methodology" className="">Methodology</Link>
                  </li>
                  <li>
                    <Link href="#operational-review" className="">Operational Review</Link>
                  </li>
                  <li>
                    <Link href="#incidents" className="">Incidents</Link>
                  </li>
                  <li>
                    <Link href="#conclusion" className="">Conclusion</Link>
                  </li>
                  <li>
                    <Link href="#references" className="">References</Link>
                  </li>
                </ul>
                </div>
            </nav>
            <header>
                <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-14 sm:flex-row sm:items-center sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="flex mb-4 text-4xl text-white font-bold">Case Study: Federal Protective Forces (FPF)</h1>
                        <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros.</div>
                        <div className="mt-4 text-gray-400">Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum.</div>
                    </div>
                </div>
            </header>

            <div className="border-t border-white/10 py-14 space-y-14">
              <div className="max-w-4xl mx-auto" id="introduction">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Introduction</h2>
                        <div className="mt-2 text-gray-400">Since the attacks on September 11, 2001, the United States committed to and engaged in a Global War on Terror to dismantle militant terrorist networks around the world. This engagement, although not amounting to an official declaration of war against any one nation, spans over two decades and saw an outpour of funding in troops and technology. Joining the likes of the internet and GPS, private military contractors (PMCs), who were used to augment overseas military forces and provide a deniable asset to U.S. overseas operations, have permeated domestic, civilian life. The first notable domestic emergence of PMCs was Hurricane Katrina, where military-trained employees of Blackwater arrived in New Orleans to augment the federal and local government’s response and recovery efforts. Blackwater troops were seen patrolling the streets of New Orleans, enforcing laws and purportedly maintaining order with no mandate from any government agency (Scahill, 2007). These soldiers, fresh from overseas deployments where they fought enemy combatants on the battlefield, brought their military tactics, rhetoric, and mindset to the civilian relief operation. This operation served as a demonstration of PMC’s value in domestic operations.</div>

                        <div className="mt-4 text-gray-400">Hurricane Katrina led to an endemic use of PMCs across executive-level federal agencies, particularly in response to natural disasters, immigration, democratic protests, and asset protection. Private military companies have received contracts to work for the Department of Homeland Security’s Immigration and Customs Enforcement agency and the Federal Protective Service to augment the department’s presence at the U.S.-Mexico border and to guard federal facilities, respectively. They also work for the Department of Justice’s U.S. Marshals Service, where they are often contracted to transport prisoners and guard court rooms. A lesser known yet now institutional use of PMCs is the Department of Energy (DOE)’s Federal Protective Forces (FPF). This federal agency is responsible for safeguarding the nation’s Category I special nuclear material, the weapons-grade fissile used in U.S. nuclear arsenal. This “force of highly trained fighters” has federal law enforcement credentials and are authorized to perform arrests, pursue suspects across state lines, and use lethal force––and the agency is made entirely of ex-military private contractors with special forces training (Slayton, 2022).</div>

                        <div className="mt-4 text-gray-400">This paper reviews the DOE’s Federal Protective Forces, outlining their operational structure, legal authority, tactical and law enforcement training, as well as the companies contracted to provide these services. It investigates incidents where contractors proved detrimental to the agency’s mission by abusing alcohol while on duty, purchasing and selling illegal firearms, and engaging in misconduct that jeopardized the safety of the nation’s most deadly weapon. As one of the largest and most well-armed permanent private military forces employed by the federal government, the FPF serves as a useful case study to examine and critique the government’s overall paramilitary augmentation of civilian operations. It provides insight into how PMCs migrate from overseas combat missions to domestic operations, how federal agencies negotiate contracts with PMC companies, and how private contractors receive law enforcement credentials rivaling the authority of the F.B.I. and U.S. Marshals Service. Ultimately, this paper demonstrates how PMCs are incompatible with civilian law enforcement duties and echoes calls from Congress to federalize the agency.</div>
                </div>
                <div className="max-w-4xl mx-auto" id="critical-context">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Critical Context</h2>
                        <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros. Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum. .</div>
                        <div className="mt-4 text-gray-400">Curabitur consequat sed mi in tincidunt. Sed volutpat ut orci eget tincidunt. Phasellus condimentum magna sit amet enim faucibus lobortis. Suspendisse nec scelerisque nibh. Donec scelerisque mi non sapien rutrum, non tempus ipsum euismod. Duis cursus dui nec lacinia pulvinar. Proin nunc tellus, sagittis fermentum porttitor ut, finibus vel augue. Duis et dapibus mi. Quisque vehicula, tortor in ultrices porta, sem erat gravida odio, eget ornare sem risus quis odio. Nam ultrices tristique augue, vitae auctor sapien aliquam nec. Curabitur odio tortor, scelerisque et tellus sed, congue condimentum libero. Mauris eleifend ligula enim. </div>
                </div>
                <div className="max-w-4xl mx-auto" id="methodology">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Methodology</h2>
                        <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros. Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum. .</div>
                        <div className="mt-4 text-gray-400">Curabitur consequat sed mi in tincidunt. Sed volutpat ut orci eget tincidunt. Phasellus condimentum magna sit amet enim faucibus lobortis. Suspendisse nec scelerisque nibh. Donec scelerisque mi non sapien rutrum, non tempus ipsum euismod. Duis cursus dui nec lacinia pulvinar. Proin nunc tellus, sagittis fermentum porttitor ut, finibus vel augue. Duis et dapibus mi. Quisque vehicula, tortor in ultrices porta, sem erat gravida odio, eget ornare sem risus quis odio. Nam ultrices tristique augue, vitae auctor sapien aliquam nec. Curabitur odio tortor, scelerisque et tellus sed, congue condimentum libero. Mauris eleifend ligula enim. </div>
                </div>
                <div className="max-w-4xl mx-auto" id="operational-review">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Operational Review</h2>
                        <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros. Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum. .</div>
                        <div className="mt-4 text-gray-400">Curabitur consequat sed mi in tincidunt. Sed volutpat ut orci eget tincidunt. Phasellus condimentum magna sit amet enim faucibus lobortis. Suspendisse nec scelerisque nibh. Donec scelerisque mi non sapien rutrum, non tempus ipsum euismod. Duis cursus dui nec lacinia pulvinar. Proin nunc tellus, sagittis fermentum porttitor ut, finibus vel augue. Duis et dapibus mi. Quisque vehicula, tortor in ultrices porta, sem erat gravida odio, eget ornare sem risus quis odio. Nam ultrices tristique augue, vitae auctor sapien aliquam nec. Curabitur odio tortor, scelerisque et tellus sed, congue condimentum libero. Mauris eleifend ligula enim. </div>
                </div>
                <div className="max-w-4xl mx-auto" id="incidents">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Incidents</h2>
                        <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros. Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum. .</div>
                        <div className="mt-4 text-gray-400">Curabitur consequat sed mi in tincidunt. Sed volutpat ut orci eget tincidunt. Phasellus condimentum magna sit amet enim faucibus lobortis. Suspendisse nec scelerisque nibh. Donec scelerisque mi non sapien rutrum, non tempus ipsum euismod. Duis cursus dui nec lacinia pulvinar. Proin nunc tellus, sagittis fermentum porttitor ut, finibus vel augue. Duis et dapibus mi. Quisque vehicula, tortor in ultrices porta, sem erat gravida odio, eget ornare sem risus quis odio. Nam ultrices tristique augue, vitae auctor sapien aliquam nec. Curabitur odio tortor, scelerisque et tellus sed, congue condimentum libero. Mauris eleifend ligula enim. </div>
                </div>
                <div className="max-w-4xl mx-auto" id="conclusion">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Conclusion</h2>
                        <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros. Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum. .</div>
                        <div className="mt-4 text-gray-400">Curabitur consequat sed mi in tincidunt. Sed volutpat ut orci eget tincidunt. Phasellus condimentum magna sit amet enim faucibus lobortis. Suspendisse nec scelerisque nibh. Donec scelerisque mi non sapien rutrum, non tempus ipsum euismod. Duis cursus dui nec lacinia pulvinar. Proin nunc tellus, sagittis fermentum porttitor ut, finibus vel augue. Duis et dapibus mi. Quisque vehicula, tortor in ultrices porta, sem erat gravida odio, eget ornare sem risus quis odio. Nam ultrices tristique augue, vitae auctor sapien aliquam nec. Curabitur odio tortor, scelerisque et tellus sed, congue condimentum libero. Mauris eleifend ligula enim. </div>
                </div>
                <div className="max-w-4xl mx-auto" id="references">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">References</h2>
                        <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros. Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum. .</div>
                        <div className="mt-4 text-gray-400">Curabitur consequat sed mi in tincidunt. Sed volutpat ut orci eget tincidunt. Phasellus condimentum magna sit amet enim faucibus lobortis. Suspendisse nec scelerisque nibh. Donec scelerisque mi non sapien rutrum, non tempus ipsum euismod. Duis cursus dui nec lacinia pulvinar. Proin nunc tellus, sagittis fermentum porttitor ut, finibus vel augue. Duis et dapibus mi. Quisque vehicula, tortor in ultrices porta, sem erat gravida odio, eget ornare sem risus quis odio. Nam ultrices tristique augue, vitae auctor sapien aliquam nec. Curabitur odio tortor, scelerisque et tellus sed, congue condimentum libero. Mauris eleifend ligula enim. </div>
                </div>
            </div>
    </main>
    </>
  );
}

export default Studies;