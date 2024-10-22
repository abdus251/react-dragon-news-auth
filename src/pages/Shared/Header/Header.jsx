import moment from 'moment'
import logo from '../../../assets/logo.png'

const Header = () => {
  return (
    <div className='text-center mt-10'>
        <img className='mx-auto' src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p className='text-lg'>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  )
}

export default Header