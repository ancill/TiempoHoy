const TrackRow = () => {
  return (
    <tr>
      <td>
        <div>
          <div>Make this APP</div>
          <span>*</span>
          <span className='ml-2'>copy of toggl</span>
        </div>
      </td>

      <td>
        <span>09:35 - 10:01</span>
      </td>
      <td>0:24:00</td>
      <td>...</td>
    </tr>
  )
}

const TrackList = ({ headerDate }: { headerDate: 'Today' | 'Yesterday' | string }) => {
  const allTracksTime = '12:00:00'

  return (
    <div className='overflow-x-auto shadow-lg mx-2'>
      <table className='table table-fixed w-full  '>
        {/* head */}
        <thead>
          <tr>
            <th className=''>{headerDate}</th>
            <th className='w-32'></th>
            <th className='w-28 '>{allTracksTime}</th>
            <th className='w-12 '></th>
          </tr>
        </thead>
        <tbody>
          {Array(4)
            .fill(null)
            .map((row, i) => (
              <TrackRow key={i} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TrackList
