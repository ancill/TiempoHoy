import TrackInput from './TrackInput'
import TrackList from './TrackList'
import TrackProgress from './TrackProgress'

const TrackPage = () => {
  return (
    <div className='w-11/12'>
      <TrackInput />
      <TrackProgress />
      <TrackList />
    </div>
  )
}

export default TrackPage
