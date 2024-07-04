import { grid1, grid2, grid3, grid4, grid5, grid6 } from "../assets"

const FooterSocial = () => {
  return (
    <div class="container mt-5">
        <div className="h-3 w-[250px] grid grid-cols-3 gap-1">
            <img src={grid1} alt="" />
            <img src={grid2} alt="" />
            <img src={grid3} alt="" />
            <img src={grid4} alt="" />
            <img src={grid5} alt="" />
            <img src={grid6} alt="" />
        </div>
    </div>
    
  )
}

export default FooterSocial