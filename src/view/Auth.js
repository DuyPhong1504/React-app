import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'



const Auth = ({ authRoute }) => {
    let body
    body = (
        <>
            {
                authRoute === 'login' && <LoginForm />
            }
            {
                authRoute === 'register' && <RegisterForm />
            }
        </>
    )

    return (
        <div className="p-4 m-4" style={{ width: "100%" }}>
            <div>
                {body}
            </div>
        </div>
    )
}

export default Auth