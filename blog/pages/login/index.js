import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const LoginPage = () => {
    return (
        <div className='login-all-container'>
            <div className="container login-container">
            <PersonIcon className='icon-login'/>
            <form action="/login" method="post" className='form-login'>
                <div className='data-login'>
                <PersonIcon />
                <input type="" placeholder='Usuario' className='input-login'></input>
                </div>
                <div className='data-login'>
                <LockIcon />
                <input type="password" placeholder='Contraseña' className='input-login'></input>
                </div>
                 <button type="submit" className='btn-login'>Enviar</button>
            </form>
        </div>
        </div>
    );
}

export default LoginPage;