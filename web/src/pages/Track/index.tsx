import TrackInput from './TrackInput'
import TrackList from './TrackList'
import TrackProgress from './TrackProgress'

const TrackPage = () => {
  return (
    <div className='w-11/12'>
      <TrackInput />
      <TrackProgress />
      <div className='flex flex-col space-y-8'>
        <TrackList headerDate={'Today'} />
        <TrackList headerDate={'Yesterday'} />
        <TrackList headerDate={'24.04.23'} />
      </div>
    </div>
  )
}

export default TrackPage
