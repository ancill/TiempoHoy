import { BsDot, BsPlayFill, BsStopFill, BsTagFill } from 'react-icons/bs'
import { useStopWatch } from '../../hooks/useStopWatch'

const StopWatch = () => {
  const { start, stop, time, reset, isRunning } = useStopWatch()

  return (
    <div className='flex gap-4'>
      <div>{time}</div>
      <label className='swap swap-rotate'>
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
    <div className='flex justify-between shadow-xl py-1'>
      <input
        type='text'
        placeholder='Type here'
        className='input input-primary focus:outline-none input-lg max-w-xs h-20'
      />
      <div className='flex'>
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
