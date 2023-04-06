import SettingsBar from '../layout/SettingsBar'
import WorkSpaceBar from '../layout/WorkSpaceBar'
import TrackPage from './Track'

const Main = () => {
  return (
    <div className='flex'>
      <SettingsBar />
      <WorkSpaceBar />
      <TrackPage />
    </div>
  )
}

export default Main
