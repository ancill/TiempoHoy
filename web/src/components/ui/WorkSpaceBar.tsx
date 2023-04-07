import { BsPeopleFill } from 'react-icons/bs'
import { FaBrain, FaChevronDown, FaProjectDiagram, FaReadme } from 'react-icons/fa'
import { GiTeamIdea } from 'react-icons/gi'

const ChangeWorkSpaceButton = () => {
  return (
    <div className='dropdown dropdown-bottom w-56'>
      <label
        tabIndex={0}
        className='btn m-1 w-52 btn-ghost flex flex-col px-0 font-semibold normal-case'
      >
        <div className='flex place-self-start gap-5 text-lg items-center'>
          <div>My workspace</div>
          <FaChevronDown className='text-slate-500' />
        </div>

        <div className=' text-slate-500 place-self-start uppercase text-xs'>Ancill team</div>
      </label>

      <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w3-52'>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
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
    <div className='flex flex-col'>
      <div className='uppercase  text-slate-400 text-xs font-semibold mb-2 pl-2'>{groupTitle}</div>

      {childLinks.map((link) => {
        return <WorkSpaceLinkButton {...link} key={link.title} />
      })}
    </div>
  )
}

const WorkSpaceBar = () => {
  return (
    <div className='flex h-screen bg-base-200'>
      <div className='flex flex-col'>
        <ChangeWorkSpaceButton />
        <div className='divider'></div>
        <div className='flex flex-col gap-8'>
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
