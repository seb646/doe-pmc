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
                            <h1 className="w-full text-5xl text-white font-bold text-center">The Ouroboros Project</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="border-t border-white/10 py-14 space-y-14">
                <div className="max-w-4xl mx-auto">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Introduction</h2>
                        <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros. Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum. .</div>
                        <div className="mt-4 mb-4 text-gray-400">Curabitur consequat sed mi in tincidunt. Sed volutpat ut orci eget tincidunt. Phasellus condimentum magna sit amet enim faucibus lobortis. Suspendisse nec scelerisque nibh. Donec scelerisque mi non sapien rutrum, non tempus ipsum euismod. Duis cursus dui nec lacinia pulvinar. Proin nunc tellus, sagittis fermentum porttitor ut, finibus vel augue. Duis et dapibus mi. Quisque vehicula, tortor in ultrices porta, sem erat gravida odio, eget ornare sem risus quis odio. Nam ultrices tristique augue, vitae auctor sapien aliquam nec. Curabitur odio tortor, scelerisque et tellus sed, congue condimentum libero. Mauris eleifend ligula enim. </div>
                        <Link href="/about" className="text-gray-200 hover:text-white border-b-2 pb-1 border-transparent hover:border-white text-sm leading-6 font-semibold">Learn about the project &rarr;</Link>
                </div>
                <div className="max-w-4xl mx-auto">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Case Study: Federal Protective Forces</h2>
                        <div className="mt-2 mb-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros. Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum. Etiam at semper massa. Sed ante magna, vehicula ac lectus sed, tincidunt molestie felis. Praesent cursus ligula eu dolor tincidunt, eu pellentesque quam porta.</div>
                        <Link href="/case-study" className="text-gray-200 hover:text-white border-b-2 pb-1 border-transparent hover:border-white text-sm leading-6 font-semibold">View case study &rarr;</Link>
                </div>
                <div className="max-w-4xl mx-auto">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Document Archive</h2>
                        <div className="mt-2 mb-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros. Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum. Etiam at semper massa. Sed ante magna, vehicula ac lectus sed, tincidunt molestie felis. Praesent cursus ligula eu dolor tincidunt, eu pellentesque quam porta.</div>
                        <Link href="/documents" className="text-gray-200 hover:text-white border-b-2 pb-1 border-transparent hover:border-white text-sm leading-6 font-semibold">View document archive &rarr;</Link>
                </div>
                <div className="max-w-4xl mx-auto">
                        <h2 className="flex mb-4 text-2xl text-white font-bold">Network Map</h2>
                        <div className="mt-2 mb-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros. Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum. Etiam at semper massa. Sed ante magna, vehicula ac lectus sed, tincidunt molestie felis. Praesent cursus ligula eu dolor tincidunt, eu pellentesque quam porta.</div>
                        <Link href="/network-map" className="text-gray-200 hover:text-white border-b-2 pb-1 border-transparent hover:border-white text-sm leading-6 font-semibold">View network map &rarr;</Link>
                </div>
            </div>
    </main>
    </>
  );
}

export default Home;