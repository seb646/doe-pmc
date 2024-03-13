import Image from "next/image";
import Link from 'next/link';

const reqURL = 'https://pmc.srod.ca/wp-json/wp/v2/document?acf_format=standard&_fields=id,title,acf,slug&orderby=title&order=asc';

const Documents = async () => {
  const req = await fetch(reqURL);
  const documents = await req.json();

  return (
    <main>
            <div className="hidden sticky top-0 z-40 bg-gray-900 xl:flex overflow-x-auto border-b border-white/10 py-5 border-white/10 gap-x-2 px-4 text-sm leading-6 text-gray-400 sm:px-6 lg:px-8">
                  <Link href="/documents" className="font-semibold hover:text-gray-200">Documents</Link> <span>/</span> Index
            </div>
            <header>
                <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-14 sm:flex-row sm:items-center sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="flex mb-4 text-4xl text-white font-bold">Document Archive</h1>
                        <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros.</div>

                        <div className="mt-4 text-gray-400">Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum.</div>
                    </div>
                </div>
            </header>

            <div className="border-t border-white/10">
              <div className="border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                  <h2 className="text-lg font-semibold leading-7 text-white">Documents</h2>
                </div>
              </div>
              <div className="divide-y divide-white/10">
                {documents.map((document: any) => (
                <Link href={`/documents/${document.slug}`} className="block relative py-5 hover:bg-gray-700/10">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                      <div className="flex min-w-0 gap-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex-shrink-0 w-5 h-5 mt-0.5 text-white">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>

                        <div className="min-w-0 flex-auto pr-6">
                          <p className="text-sm font-semibold leading-6 text-white">{document.title.rendered}</p>
                          <div className="mt-1 flex text-xs leading-5 text-gray-400" dangerouslySetInnerHTML={{ __html: document.acf.description }}></div>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-x-4">
                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                          <p className="text-xs leading-6 text-gray-400">{document.acf.author}</p>
                          <p className="text-xs leading-5 text-gray-400">{document.acf.year}</p>
                        </div>
                        <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
                ) )}
              </div>
            </div>
    </main>
  );
}

export default Documents;