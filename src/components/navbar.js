import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
return(
    <div className="fixed p-3 bg-transparent">
        <div className="flex justify-between p-2 w-80 rounded-lg bg-black bg-opacity-40">
            <Link href="#home">
        <Button className="mr-2 bg-transparent text-white hover:bg-background">
            <FaHome />
        </Button>
            </Link>
            <Link href="#about">
          <Button className="mr-2 bg-transparent text-white hover:bg-background">
            About Me
          </Button>
        </Link>
        <Link href="#contact">
          <Button className="mr-2 bg-transparent text-white hover:bg-background">
            Contact
          </Button>
        </Link>
        </div>
    </div>
)
}

export default Navbar;