import { Link, useMatch } from "react-router-dom";
import classes from './Drawer.module.css';

const CustomLink = ({children, to, ...props}) => {

    const match = useMatch(to);
    const isClassName = match ? classes.active : "";
    
  return (
    <Link 
        to={to}
        className={isClassName}
        {...props} 
    >
        {children}
    </Link>
  )
}

export {CustomLink}