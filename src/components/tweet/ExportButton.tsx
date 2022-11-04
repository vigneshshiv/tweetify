/**
 * Export Button
 */
import { MutableRefObject, useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import cn from 'classnames';
import { CheckIcon, ArrowDownTrayIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

const ExportButton = ({ rootRef }: { rootRef: MutableRefObject<HTMLDivElement | null> }): JSX.Element => {
  // Save & Copy Icon Hook
  const [SaveIcon, setSaveIcon] = useIcon([ArrowDownTrayIcon, CheckIcon]);
  const [CopyIcon, setCopyIcon] = useIcon([DocumentDuplicateIcon, CheckIcon]);

  const exportPNG = async () => {
    if (rootRef.current) {
      const canvas = await html2canvas(rootRef.current, {
        allowTaint: true,
        useCORS: true,
        scale: 3,
        backgroundColor: null
      });
      const img = canvas.toDataURL("image/png", 1.0);
      // Export
      const a = document.createElement("a");
      a.href = img;
      a.download = "tweet.png";
      a.click();
      a.remove();
      setSaveIcon(true);
    } 
  }

  const copyToClipboard = async () => {
    if (rootRef.current) {
      const canvas = await html2canvas(rootRef.current, {
        allowTaint: true,
        useCORS: true,
        scale: 3,
        backgroundColor: null
      });
      canvas.toBlob((blob: any) => {
        const data = [new ClipboardItem({ "image/png": blob })];
        navigator.clipboard.write(data);
      });
      setCopyIcon(true);
    }
  }

  return (
    <div
      className='group w-32 h-full flex items-center justify-center overflow-hidden rounded-full bg-black text-white transition-[width] delay-300 hover:w-56 hover:delay-[0ms] dark:bg-white dark:text-neutral-800 lg:-translate-x-24'
    >
      <div className='absolute opacity-100 transition-opacity delay-200 group-hover:opacity-0 group-hover:delay-[0ms]'>
        Export
      </div>
      <div className='w-56 h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:delay-150'>
        <div className='flex w-full h-full items-center -translate-x-[62px] transition-transform delay-1000 group-hover:translate-x-0 group-hover:delay-[0ms]'>
          <button 
            className='flex w-1/2 h-full items-center gap-x-1.5 pl-6 hover:bg-neutral-900 dark:hover:bg-neutral-200'
            onClick={exportPNG}
          >
            <SaveIcon className='w-5 h-5' />
            <span>Save</span>
          </button>
          <button
            className='flex w-1/2 h-full items-center gap-x-1.5 pl-4 hover:bg-neutral-900 dark:hover:bg-neutral-200'
            onClick={copyToClipboard}
          >
            <CopyIcon className='w-5 h-5' />
            <span>Copy</span>
          </button>
        </div>
      </div>

    </div>
  );
}

export default ExportButton;

// Icon Hook
const useIcon = (icons: any, time: number = 1000) => {
  const [showSecondIcon, setShowSecondIcon] = useState(false);
  
  useEffect(() => {
    let tm: ReturnType<typeof setTimeout>;
    if (showSecondIcon) {
      tm = setTimeout(() => setShowSecondIcon(false), time);
    }
    return () => tm && clearTimeout(tm);
  }, [showSecondIcon, time]);

  return [showSecondIcon ? icons[1] : icons[0], setShowSecondIcon];
}