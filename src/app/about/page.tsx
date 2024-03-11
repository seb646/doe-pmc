import Image from "next/image";
import Link from 'next/link';

const About = () => {

  return (
    <>
        <main>
            <header>
                <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-14 sm:flex-row sm:items-center sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="flex mb-4 text-4xl text-white font-bold">About</h1>
                        <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros.</div>

                        <div className="mt-4 text-gray-400">Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum.</div>
                    </div>
                </div>
            </header>

            <div className="border-t border-white/10 py-14 space-y-14">
            </div>
    </main>
    </>
  );
}

export default About;