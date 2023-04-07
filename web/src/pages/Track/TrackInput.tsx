import { BsDot, BsPlayFill, BsStopFill, BsTagFill } from 'react-icons/bs'
import { useStopWatch } from '../../hooks/useStopWatch'

const StopWatch = () => {
  const { start, stop, time, reset, isRunning } = useStopWatch()

  return (
    <div className='flex gap-4 items-center'>
      <div className='w-16'>{time}</div>
      <label className='swap swap-rotate '>
        <input onClick={isRunning ? stop : start} type='checkbox' />
        <div className='btn btn-circle swap-on '>
          <BsPlayFill className='fill-current w-12 h-12' />
        </div>
        <div className='btn btn-circle swap-off '>
          <BsStopFill className='fill-current w-12 h-12' />
        </div>
      </label>
    </div>
  )
}

const TrackInput = () => {
  return (
    <div className='flex shadow-xl py-1 content-center'>
      <input
        type='text'
        placeholder='Type here'
        className='grow input input-ghost focus:outline-none input-lg h-20'
      />
      <div className='flex-none flex items-center gap-4 mr-4'>
        <div className='badge badge-primary gap-2 text-lg'>
          <BsDot />
          info
        </div>
        <BsTagFill />
        <StopWatch />
      </div>
    </div>
  )
}

export default TrackInput
