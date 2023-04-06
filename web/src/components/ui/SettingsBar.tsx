import { useEffect, useState } from 'react'
import { WiDaySunny, WiNightClear } from 'react-icons/wi'
const ThmemeSwitch = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <label className='swap swap-rotate'>
      <input onClick={toggleTheme} type='checkbox' />
      <WiNightClear
        data-set-theme='dark'
        data-act-class='ACTIVECLASS'
        className='swap-on fill-current w-6 h-6'
      />
      <WiDaySunny
        data-set-theme='light'
        data-act-class='ACTIVECLASS'
        className='swap-off fill-current w-6 h-6'
      />
    </label>
  )
}
const Profile = () => {
  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
        </div>
      </label>
      <ul
        tabIndex={0}
        className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
      >
        <li>
          <a className='justify-between'>
            Profile
            <span className='badge'>New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  )
}
const SettingsBar = () => {
  return (
    <div className='flex justify-start items-start align-middle h-screen w-fit bg-base-300 flex-col'>
      <div className='flex-1 my-2 mx-1'>
        <Profile />
      </div>
      <div className='flex-none self-center flex flex-col mb-2'>
        <ThmemeSwitch />
      </div>
    </div>
  )
}

export default SettingsBar
