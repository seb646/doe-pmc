import Image from "next/image";
import Link from 'next/link';

const reqURL = 'https://pmc.srod.ca/wp-json/wp/v2/document?acf_format=standard&_fields=id,title,acf,slug';

const Documents = async () => {
  const req = await fetch(reqURL);
  const documents = await req.json();

  return (
    <main>
            <div className="sticky top-0 z-40 bg-gray-900 flex overflow-x-auto border-b border-white/10 py-5 border-white/10 gap-x-2 px-4 text-sm leading-6 text-gray-400 sm:px-6 lg:px-8">
                  <Link href="/documents" className="font-semibold hover:text-gray-200">Documents</Link> <span>/</span> Index
            </div>
            <header>
                <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-14 sm:flex-row sm:items-center sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="flex mb-4 text-4xl text-white font-bold">Documents Archive</h1>
                        <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros.</div>

                        <div className="mt-4 text-gray-400">Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum.</div>
                    </div>
                </div>
            </header>

            <div className="border-t border-white/10">
                <table className="w-full whitespace-nowrap text-left">
                <thead className="border-b border-white/10 text-sm leading-6 text-white">
                    <tr>
                    <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">Document</th>
                    <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">Author</th>
                    <th scope="col" className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8">Date</th>
                    <th scope="col" className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                {documents.map(document => (
                    <tr className="hover:bg-gray-700/10">
                      <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                          <div className="flex items-center gap-x-4">
                            <Link href={`/documents/${document.slug}`} className="truncate text-sm font-medium leading-6 text-white">{document.title.rendered}</Link>
                          </div>
                          <div className="mb-2 text-xs max-w-md text-wrap wrap text-gray-400" dangerouslySetInnerHTML={{ __html: document.acf.description }}></div>
                      </td>
                      <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                          <div className="flex gap-x-3">
                          <div className="text-sm leading-6 text-gray-400">{document.acf.author}</div>
                          </div>
                      </td>
                      <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                        {document.acf.year}
                      </td>
                      <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                        <Link href={`/documents/${document.slug}`} className="text-gray-400 hover:text-white hover:bg-gray-800 group rounded-md p-3 text-sm leading-6 font-semibold">View document &rarr;</Link>
                      </td>
                    </tr>
                    
                ) )}

                </tbody>
                </table>
            </div>
    </main>
  );
}

export default Documents;