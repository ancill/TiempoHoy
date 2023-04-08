import { ColorVariants, DefaultColors, DynamicTextColor } from '../../components/Colors'

const TimeStats = ({ time, title }: { time: string; title: string }) => {
  return (
    <a className='py-1 px-2 inline-flex items-center uppercase font-semibold'>
      <span className='text-xs opacity-50'>{title}</span>
      <span className='ml-2 text-sm'>{time}</span>
    </a>
  )
}

const Chart = ({ color }: { color: DefaultColors }) => {
  return (
    <div className='mr-1 w-full'>
      <div className={DynamicTextColor[color]}>Proj 1</div>
      <progress
        className={`${ColorVariants[color]} progress w-full`}
        value='100'
        max='100'
      ></progress>
    </div>
  )
}

const TrackProgress = () => {
  return (
    <div className='grid grid-cols-2 gap-2 py-5 px-5 gap-y-4'>
      <div className='flex items-center gap-2'>
        <span className='uppercase font-semibold text-xs'>This week</span>
      </div>
      <div className='flex items-center gap-2 justify-end'>
        <div className='flex gap-8'>
          <TimeStats title='Today' time='12:00:00' />
          <TimeStats title='Week Total' time='12:00:00' />
        </div>
      </div>
      <div className='flex flex-nowrap col-span-2 w-full justify-between'>
        <Chart color='accent' />
        <Chart color='primary' />
        <Chart color='success' />
      </div>
    </div>
  )
}

export default TrackProgress
