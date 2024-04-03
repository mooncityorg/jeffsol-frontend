"use client"
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from "next/navigation";
export default function Home() {
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const contractAddr = '85aK246APJpCsbFFczVePJAMGRnas5Pf';
  const handleCopy = () => {

    navigator.clipboard.writeText(contractAddr)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Reset the copied state after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  };
  return (
    <main>
      <div className="fullscreen-bg flex flex-col">
        <div className="flex gap-10 mt-5 pr-5 w-full justify-end">
          <a
            href="https://t.me/+0Gs7OKSzarc4N2Q0"
            className="hover:scale-125 transition-all ease-in-out duration-150"
            target="noblank"
            rel="referrer"
          >
            <Image src="/telegram.png" alt="telegram" width={60} height={60} />
          </a>
          <a
            href="https://t.me/+0Gs7OKSzarc4N2Q0"
            className="hover:scale-125 transition-all ease-in-out duration-150"
            target="noblank"
            rel="referrer"
          >
            <Image src="/dextools.png" alt="dextools" width={60} height={60} />
          </a>
          <a
            href="https://t.me/+0Gs7OKSzarc4N2Q0"
            className="hover:scale-125 transition-all ease-in-out duration-150"
            target="noblank"
            rel="referrer"
          >
            <Image src="/dexscreener.png" alt="dexscreener" width={60} height={60} />
          </a>
        </div>
        <div className="flex w-full justify-center">
          <div className="relative flex">
            <Image src="/Contract Address.png" alt="Contract Address" width={450} height={450} />
            <p className="absolute top-1/2 text-lg left-10">{contractAddr}</p>
          </div>
          <div className="Copy-button">
            <button onClick={handleCopy}>
              <Image src="/COPY.png" alt="COPY" width={150} height={150} className="mt-[80px] -ml-10 z-10 relative" />
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}


