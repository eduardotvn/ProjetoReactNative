export const handleLogin = async (email, password, login) =>
{
    if(password == '' || email == '')
    {
        return({message:"Preencha ambos os campos"})
    }
    else {
        const loginFail = await login(email, password);
        if(loginFail)
        {
            return loginFail
        }
    }
}