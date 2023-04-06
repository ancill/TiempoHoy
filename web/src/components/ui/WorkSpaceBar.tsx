import { BsPeopleFill } from 'react-icons/bs'
import { FaBrain, FaChevronDown, FaChevronUp, FaProjectDiagram, FaReadme } from 'react-icons/fa'
import { GiTeamIdea } from 'react-icons/gi'

const ChangeWorkSpaceButton = () => {
  return (
    <>
      <div className='dropdown dropdown-bottom'>
        <label
          tabIndex={0}
          className='btn btn-ghost flex justify-between w-56 font-semibold normal-case px-2 my-2'
        >
          <div className='flex flex-col gap-2'>
            <div className='text-sm'>My workspace</div>
            <div className=' text-slate-500 uppercase text-xs mr-4'>Ancill team</div>
          </div>
          <label className='swap swap-rotate'>
            <input type='checkbox' />
            <FaChevronDown className='swap-off fill-current' />
            <FaChevronUp className='swap-on fill-current' />
          </label>
        </label>

        <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </>
  )
}

interface LinkButtonType {
  title: string
  icon: JSX.Element
}

const WorkSpaceLinkButton = ({ title, icon }: LinkButtonType) => {
  return (
    <button className='btn btn-ghost gap-2 mb-2 btn-xs place-self-start'>
      {icon}
      {title}
    </button>
  )
}

const WorkSpaceGroupButtons = ({
  groupTitle,
  childLinks,
}: {
  groupTitle: string
  childLinks: {
    title: string
    icon: JSX.Element
  }[]
}) => {
  return (
    <div className='flex flex-col w-56'>
      <div className='uppercase  text-slate-400 text-xs font-semibold mb-2 pl-2'>{groupTitle}</div>

      {childLinks.map((link) => {
        return <WorkSpaceLinkButton {...link} key={link.title} />
      })}
    </div>
  )
}

const WorkSpaceBar = () => {
  return (
    <div className='flex w-42 bg-base-200 relative'>
      <div className='flex flex-col'>
        <ChangeWorkSpaceButton />
        <div className='divider'></div>

        <div className='flex flex-col gap-y-4'>
          <WorkSpaceGroupButtons
            childLinks={[
              {
                icon: <FaReadme />,
                title: 'Reports',
              },
              {
                icon: <FaBrain />,
                title: 'Insights',
              },
            ]}
            groupTitle='Analyze'
          />
          <WorkSpaceGroupButtons
            childLinks={[
              {
                icon: <FaProjectDiagram />,
                title: 'Projects',
              },
              {
                icon: <BsPeopleFill />,
                title: 'Clients',
              },
              {
                icon: <GiTeamIdea />,
                title: 'Team',
              },
            ]}
            groupTitle='Analyze'
          />
        </div>
      </div>
    </div>
  )
}

export default WorkSpaceBar
