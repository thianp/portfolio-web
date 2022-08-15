import { ClipboardIcon, MailIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = (copyText) => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <a id="contact"></a>
      <div className="grid justify-items-center">
      <h2>Get in touch!</h2>
        <div className="grid grid-cols-3 content-center gap-[12px] my-[20px]">
          <span className="col-span-2 self-center">
            <MailIcon className="w-4 h-4 inline-block" /> pthpatchara@gmail.com
          </span>
          <button
            className="border-[2px] rounded-full p-[8px] content-between w-[100px]"
            onClick={() => handleCopyClick("pthpatchara@gmail.com")}
          >
            <span>
              <ClipboardIcon className="w-4 h-4 inline-block" />{" "}
              {isCopied ? "Copied!" : "Copy"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
