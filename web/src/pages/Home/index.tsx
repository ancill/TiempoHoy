import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import SettingsBar from '../../components/ui/SettingsBar'
import WorkSpaceBar from '../../components/ui/WorkSpaceBar'
const Home = () => {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
    <div className='flex h-full'>
      <SettingsBar />
      <WorkSpaceBar />
    </div>
  )
}

export default Home
