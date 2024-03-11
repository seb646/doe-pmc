import Image from "next/image";
import Link from 'next/link'

const reqURL = 'https://pmc.srod.ca/wp-json/wp/v2';

const Document = async ({ params }) => {
  const req = await fetch(`${reqURL}/document?acf_format=standard&_fields=id,title,acf&slug=${params.slug}`);
  const documents = await req.json();
  const document = documents[0];

  return (
    <>
    <div className="sticky top-0 z-40 bg-gray-900 flex overflow-x-auto border-b border-white/10 py-5 border-white/10 gap-x-2 px-4 text-sm leading-6 text-gray-400 sm:px-6 lg:px-8">
      <Link href="/documents" className="font-semibold hover:text-gray-200">Documents</Link> <span>/</span> {document.title.rendered}
    </div>
    
    <main className="grid xl:grid-cols-3">
      <div className="xl:col-span-2">
        <embed className="w-full" src={document.acf.file} height="720" type="application/pdf"></embed>
      </div>
      <div className="bg-gray-700/10 text-wrap lg:border-l lg:border-white/5">
        <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <h1 className="text-base font-semibold leading-7 text-white">{document.title.rendered}</h1>
        </header>
        <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8 text-gray-400">
          <div className="flex w-full flex-none gap-x-4 border-t border-gray-900/5">
                <dt className="flex-none">
                  <span className="sr-only">Author</span>
                  <svg className="h-6 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clip-rule="evenodd" />
                  </svg>
                </dt>
                <dd className="text-sm font-medium leading-6 text-gray-400">{document.acf.author}</dd>
          </div>
          <div className="mt-2 flex w-full flex-none gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Date</span>
                  <svg className="h-6 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
                    <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                  </svg>
                </dt>
                <dd className="text-sm leading-6 text-gray-400">
                  {document.acf.year}
                </dd>
          </div>
          <div className="mt-2 flex w-full flex-none gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Source</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>

                </dt>
                <dd className="text-sm leading-6 text-gray-400">
                  <Link target="_blank" className="hover:underline" href={document.acf.original_location}>Source URL</Link>
                </dd>
          </div>
        <div className="mt-6 text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: document.acf.description }}></div>
        </div>
      </div>
    </main>
  </>
  );
}

export default Document;