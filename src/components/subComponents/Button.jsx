import { Link } from 'react-router-dom';

function Button({link, style, cName, children}) {
  return (
    <>
        <button className={cName}>
            <Link to={link} className={style}>{children}</Link>
        </button>
    </>
  )
}

export default Button