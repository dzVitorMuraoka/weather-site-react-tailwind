import BoxAuthComponent from "./BoxAuthComponent";

type LoginComponetProps = {
  googleicone: string;
  src: string;
}

const LoginComponent = ({ googleicone, src }: LoginComponetProps) => {
  return (
    <div className="">

      <BoxAuthComponent
        src={src}
        googleicone={googleicone}
      />

    </div>
  )
}

export default LoginComponent
