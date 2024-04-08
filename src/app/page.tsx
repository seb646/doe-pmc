import Image from "next/image";
import Link from 'next/link';

const reqURL = 'https://pmc.srod.ca/wp-json/wp/v2/document?acf_format=standard&_fields=id,title,acf,slug';

const Home = () => {

  return (
    <>
        <main>
            <header>
                <div className="header-bg">
                    <div className="h-full w-full bg-gray-900/90 px-4 py-32 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="w-full text-4xl text-white font-bold text-center leading-snug">Facing the Fallout: The problem with using PMCs to police America’s nuclear arsenal</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="border-t border-white/10 py-14 space-y-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Introduction</h2>
                        <div className="mt-2 text-gray-400">Following widespread deployment during the Global War on Terror, private military contractors (PMCs) transitioned from overseas military engagements to domestic operations, a shift highlighted during Hurricane Katrina when Blackwater supported civilian relief and law enforcement efforts in New Orleans. This project examines the domestic use of PMCs through a case study of the U.S. Department of Energy’s Federal Protective Forces (FPF), a law enforcement agency staffed by PMCs that safeguards nuclear materials. Building upon critiques of police militarization and imperialization, the project investigates the FPF’s operational structure, legal authority, and instances of contractor misconduct. It is supported by a digital archive of government documents and a mapping analysis of contractor networks that illustrates the blurring lines between domestic law enforcement and military operations. By raising concerns about the implications of employing PMCs in civilian contexts, this project highlights the need for stronger oversight, additional training, and federalization.</div>
                        {/* <Link href="/about" className="text-gray-200 hover:text-white border-b-2 pb-1 border-transparent hover:border-white text-sm leading-6 font-semibold transition-all duration-200">Learn about the project &rarr;</Link> */}
                </div>
                <div className="max-w-4xl mx-auto">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Case Study: Federal Protective Forces</h2>
                        <div className="mt-2 mb-4 text-gray-400">The case study of the Federal Protective Forces academic literature, government documents, and journalistic investigations to present a comprehensive and multi-faceted review of the agency. It examines the agency’s structure and law enforcement authority, critiques the training contractors receive, and looks into the current value and awarding of contracts. It also explores notable incidents involving the agency’s contractors, and explores the implications of a nuclear materials spill during transportation. </div>
                        <Link href="/case-study" className="text-gray-200 hover:text-white border-b-2 pb-1 border-transparent hover:border-white text-sm leading-6 font-semibold transition-all duration-200">View case study &rarr;</Link>
                </div>
                <div className="max-w-4xl mx-auto">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Document Archive</h2>
                        <div className="mt-2 mb-4 text-gray-400">The background research for this project revealed a significant gap in sources previously uncovered by journalistic investigations. Several of these investigations referenced documents that are no longer publicly available, highlighting a need for third-party secure storage. An important component of this project was to not only reviewing the operational structure, authority, and misconduct of contractors, but also providing access to the supporting documentation outlining these findings. Accompanying the review and network map is an archive of all documents that were either used in or relate to the project, including DOE Inspector General reports, training and organizational memos and orders, records of government contracts, and more.</div>
                        <Link href="/documents" className="text-gray-200 hover:text-white border-b-2 pb-1 border-transparent hover:border-white text-sm leading-6 font-semibold transition-all duration-200">View document archive &rarr;</Link>
                </div>
                <div className="max-w-4xl mx-auto">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Network Map</h2>
                        <div className="mt-2 mb-4 text-gray-400">The contractor network map reveals an intricate web of private military employment, spanning both domestic and international roles in military, law enforcement, and protective capacities. All of the private military companies currently contracted to staff the Federal Protective Forces also maintain contracts with other federal government departments, including the Departments of Defense, Homeland Security, Justice, and State. This interconnected network reveals a complex landscape of private military use, raising pivotal questions about compatibility, oversight, and accountability.</div>
                        <Link href="/network-map" className="text-gray-200 hover:text-white border-b-2 pb-1 border-transparent hover:border-white text-sm leading-6 font-semibold transition-all duration-200">View network map &rarr;</Link>
                </div>
            </div>
    </main>
    </>
  );
}

export default Home;