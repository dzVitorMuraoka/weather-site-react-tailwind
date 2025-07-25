import ForgetfulnessComponent from "./ForgetfulnessComponent"
import GoogleLoginComponent from "./GoogleLoginComponent";
import InputsComponet from "./InputsComponet"


type BoxAuthProps = {
  src: string;
  googleicone:string;
}

const BoxAuthComponent = ({ src, googleicone }: BoxAuthProps) => {

  
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full flex items-center justify-center border rounded-2xl bg-day-mode-login dark:bg-night-mode-login">
        <div className="w-4/5">
          <div className="mt-[60px] flex items-center justify-center">
            <img src={src} alt={""}
              className="w-24 h-24" />
          </div>
          <InputsComponet />
          <ForgetfulnessComponent />
          <GoogleLoginComponent googleicone={googleicone}/>
        </div>
      </div>
    </div>
  )
}

export default BoxAuthComponent
