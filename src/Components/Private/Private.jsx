import LogInpage from "../LogInPage/LogInpage";

const Private = ({children}) => {
   const { user } = UseAuth();

  if (!user) {
    return <LogInpage></LogInpage>;
  }

  return <div>{children}</div>;
  
  
};

export default Private;