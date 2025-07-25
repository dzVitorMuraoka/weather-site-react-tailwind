import MenuIconComponent from "./MenuIconComponent";

type MenuLateralProps = {
  logoWeather: string;
  iconeCidades: string;
  iconeMap: string;
  iconeConfig: string;
  iconeProfile: string;
}

const MenuLateralComponent = ({ logoWeather, iconeCidades, iconeConfig, iconeMap, iconeProfile }: MenuLateralProps) => {
  return (
    <div className="flex flex-col justify-center h-screen  px-8 ">
      <aside className="bg-bg-containers w-16 h-min flex flex-col items-center gap-16 rounded-lg py-20">

        <MenuIconComponent src={logoWeather} />
        <MenuIconComponent src={iconeCidades} />
        <MenuIconComponent src={iconeMap} />
        <MenuIconComponent src={iconeProfile} />
        <MenuIconComponent src={iconeConfig} />

      </aside>
    </div>
  )
}

export default MenuLateralComponent
