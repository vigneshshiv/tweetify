/**
 * Template Card
 */
import cn from 'classnames';
// Application
import { Template } from 'utils/types/base.types';
import { useTemplateStore } from 'utils/store/template.store';

const TemplateCard = (): JSX.Element => {
  const selectedTemplate = useTemplateStore((state) => state.selectedTemplate);
  const setSelectedTemplate = useTemplateStore((state) => state.setSelectedTemplate);

  const templateChangeHandler = (template: Template): void => {
    setSelectedTemplate(() => template);
  }

  return (
    <div className='firefox-padding-fix border-t p-5 pr-3 dark:border-[#5C5C5C]'>
      <h2 className='font-bold'>Templates</h2>
      <div className='mt-4 space-y-4'>

        {/* Standard */}
        <div
          className={cn(
            'rounded-lg p-3.5 ring-2 transition-shadow ', 
            Object.is(selectedTemplate, 'standard' as Template) 
              ? 'ring-blue-400' 
              : 'ring-gray-200 dark:ring-neutral-600'
          )}
          onClick={() => templateChangeHandler('standard' as Template)}
        >
          <div className='flex items-center gap-x-2'>
            <div className='h-6 w-6 shrink-0 rounded-full bg-gray-300 dark:bg-[#4C4C4C]'></div>
            <div className='w-full space-y-1 dark:[&>div]:bg-[#4C4C4C]'>
              <div className='h-2 w-1/2 rounded-full bg-gray-300'></div>
              <div className='h-1 w-1/3 rounded-full bg-gray-300'></div>
            </div>
          </div>
          <div className='mt-1 w-full space-y-0.5 dark:[&>div]:bg-[#4C4C4C]'>
            <div className='h-1.5 rounded-full bg-gray-300'></div>
            <div className='h-1.5 rounded-full bg-gray-300'></div>
            <div className='h-1.5 rounded-full bg-gray-300'></div>
            <div className='h-1.5 w-1/2 rounded-full bg-gray-300'></div>
          </div>
        </div>

        {/* Sleek */}
        <div className={cn(
          'rounded-lg p-3.5 ring-2 transition-shadow ',
          Object.is(selectedTemplate, 'sleek' as Template)
            ? 'ring-blue-400'
            : 'ring-gray-200 dark:ring-neutral-600'
          )}
          onClick={() => templateChangeHandler('sleek' as Template)}
        >
          <div className='flex items-center gap-x-2'>
            <div className='h-6 w-6 rounded-full shrink-0 bg-gray-300 dark:bg-[#4C4C4C]'></div>
            <div className='w-full space-y-1 dark:[&>div]:bg-[#4C4C4C]'>
              <div className='h-2 w-1/2 rounded-full bg-gray-300'></div>
              <div className='h-1 w-1/3 rounded-full bg-gray-300'></div>
            </div>
          </div>
          <div className='mt-1 w-full space-y-0.5 pl-8 dark:[&>div]:bg-[#4C4C4C]'>
            <div className='h-1.5 rounded-full bg-gray-300'></div>
            <div className='h-1.5 rounded-full bg-gray-300'></div>
            <div className='h-1.5 rounded-full bg-gray-300'></div>
            <div className='h-1.5 w-1/2 rounded-full bg-gray-300'></div>
          </div>
        </div>

        {/* Justify */}
        <div className={cn(
          'rounded-lg p-3.5 ring-2 transition-shadow ',
          Object.is(selectedTemplate, 'justify' as Template)
            ? 'ring-blue-400'
            : 'ring-gray-200 dark:ring-neutral-600'
          )}
          onClick={() => templateChangeHandler('justify' as Template)}
        >
          <div className='flex gap-x-2'>
            <div className='h-6 w-6 rounded-full shrink-0 bg-gray-300 dark:bg-[#4C4C4C]'></div>
            <div className='w-full space-y-1'>
              <div className='flex items-center gap-x-1 dark:[&>div]:bg-[#4C4C4C]'>
                <div className='h-2 w-12 rounded-full bg-gray-300'></div>
                <div className='h-1 w-10 rounded-full bg-gray-300'></div>
              </div>
              <div className='w-full space-y-0.5 pt-0.5 dark:[&>div]:bg-[#4C4C4C]'>
                <div className='h-1.5 rounded-full bg-gray-300'></div>
                <div className='h-1.5 rounded-full bg-gray-300'></div>
                <div className='h-1.5 rounded-full bg-gray-300'></div>
                <div className='h-1.5 rounded-full bg-gray-300'></div>
                <div className='h-1.5 rounded-full bg-gray-300'></div>
                <div className='h-1.5 w-1/2 rounded-full bg-gray-300'></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default TemplateCard;