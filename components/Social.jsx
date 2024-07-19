import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'


const socials = [
    {icon: <FaGithub />, path: '' },
    {icon: <FaLinkedinIn />, path: '' },
    {icon: <FaTwitter/>, path: '' },
    {icon: <FaInstagram />, path: '' },

]

const Social = ({containerStyle, iconStyles}) => {
  return (
    <div className={containerStyle}>
        {
            socials.map((items,index)=>(
                <Link href={items.path} key={index} 
                className={iconStyles}
                >
                    {items.icon}
                </Link>
            ))
        }
    </div>
  )
}

export default Social
