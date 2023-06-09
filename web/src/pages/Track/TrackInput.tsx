import { useState } from 'react'
import { BsDot, BsFolderFill, BsPlayFill, BsSearch, BsStopFill, BsTagFill } from 'react-icons/bs'
import { DefaultColors, DynamicBgColor, DynamicTextColor } from '../../components/Colors'
import { useStopWatch } from '../../hooks/useStopWatch'

const TagItemList = ({ tag }: { tag: string }) => (
  <li className='form-control'>
    <label className='label cursor-pointer justify-start p-1'>
      <input type='checkbox' checked className='checkbox checkbox-sm checkbox-primary' />
      <span className='label-text'>{tag}</span>
    </label>
  </li>
)

const PickTag = () => {
  const tags = ['home', 'job']

  return (
    <div className='dropdown dropdown-end '>
      <label tabIndex={0} className='btn btn-ghost m-1'>
        <BsTagFill />
      </label>
      <div
        tabIndex={0}
        className='dropdown-content menu p-4 shadow bg-base-100 rounded-box w-60 h-80 items-start'
      >
        <div className='flex-1'>
          <div className='flex justify-start items-center relative focus-within:text-primary'>
            <input
              placeholder='Pesquisar'
              className='input input-sm w-full max-w-xs pl-8 bg-base-200 focus:text-base-content'
            />
            <BsSearch className='absolute ml-2 w-3.5' />
          </div>
          <ul className=''>
            {tags.map((tag) => {
              return <TagItemList key={tag} tag={tag} />
            })}
          </ul>
        </div>
        <a className='flex-none link-primary border-t-2 w-full pt-2 cursor-pointer'>+ Add tag</a>
      </div>
    </div>
  )
}

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
const Circle = ({ color }: { color: DefaultColors }) => (
  <div className={`w-2 h-2 rounded-full mr-2 ${DynamicBgColor[color]}`}></div>
)

const ProjectItem = ({ text, color }: { text: string; color: DefaultColors }) => {
  return (
    <button
      className={`btn btn-ghost w-full justify-start btn-sm px-1 text-xs ${DynamicTextColor[color]}`}
    >
      <Circle color={color} />
      {text}
    </button>
  )
}

const SelectProject = () => {
  const tempProj = ['Home', 'Job']
  const [isSelected, setSelected] = useState(false)

  const ProjectBadge = () =>
    isSelected ? (
      <div className='badge badge-primary gap-2 text-lg'>
        <BsDot />
        info
      </div>
    ) : (
      <BsFolderFill />
    )

  return (
    <div className='dropdown dropdown-end '>
      <label tabIndex={0} className='btn btn-ghost m-1'>
        <ProjectBadge />
      </label>
      <div
        tabIndex={0}
        className='dropdown-content menu p-4 shadow bg-base-100 rounded-box w-60 h-80 items-start'
      >
        <div className='flex-1'>
          <div className='flex justify-start items-center relative focus-within:text-primary'>
            <input
              placeholder='Pesquisar'
              className='input input-sm w-full max-w-xs pl-8 bg-base-200 focus:text-base-content'
            />
            <BsSearch className='absolute ml-2 w-3.5' />
          </div>
          <ul className='mt-2'>
            <ProjectItem color='neutral' text='No project' />
            <div className='divider my-0 py-0'></div>
            {tempProj.map((tag, i) => {
              return <ProjectItem key={i} color='error' text={tag} />
            })}
          </ul>
        </div>
        <a className='flex-none link-primary text-sm border-t-2 w-full pt-2 cursor-pointer flex justify-center items-baseline'>
          <span className='mr-1'>+</span>Create a new project
        </a>
      </div>
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
        <SelectProject />
        <PickTag />
        <StopWatch />
      </div>
    </div>
  )
}

export default TrackInput
