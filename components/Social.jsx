import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'


const socials = [
    {icon: <FaGithub />, path: 'https://github.com/Konstantin907' },
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/konstantin-ivanovic-668491262/' },
    {icon: <FaInstagram />, path: 'https://www.instagram.com/konstantin_ivanovic/' },

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
