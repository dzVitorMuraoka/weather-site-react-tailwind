type MenuIconProps ={
    src: string;
}
const MenuIconComponent = ({src}:MenuIconProps) => {
  return (
   <img
   className="w-8 h-8"
   src={src}
   />
  )
}

export default MenuIconComponent
