import { Link } from "react-router-dom";
import { HousePlug, LogOut, Menu, ShoppingCart, User, UserCog } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { useSelector } from "react-redux";
import { shoppingViewHeaderMenuList } from "../../config";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "../ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/auth-slice";

function MenuItems(){
    return <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
        {
            shoppingViewHeaderMenuList.map((menu) => (
                <Link key={menu.id} to={menu.path} className="text-sm font-medium items-center gap-2">
                    {menu.label}
                </Link>
            ))
        }
    </nav>
}

function HeaderRightContent(){
        const {user} = useSelector(state => state.auth)
        const navigate = useNavigate()
        const dispatch = useDispatch()

        function handleLogout(){
            dispatch(logoutUser())
            navigate("/auth/login")
        }

    return <div className="flex lg:items-center lg:flex-row flex-row gap-4">
        <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-6 w-6"/>
            <span className="sr-only">Cart</span>
        </Button>
        
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="bg-black">
                    <AvatarFallback className="bg-black text-white font-extrabold">{user?.userName[0].toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="w-56">
                <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <UserCog className="mr-2 h-4 w-4"/>
                    <span>My Account</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 w-4 h-4"/>
                    <span>Logout</span>
                </DropdownMenuItem> 
            </DropdownMenuContent>
        </DropdownMenu>

    </div>
}

function ShoppingHeader() {

    const {user} = useSelector(state => state.auth)
    console.log(user);
    

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                <Link to="/shop/home" className="flex items-center gap-2" >
                    <HousePlug className="h-6 w-6"/>
                    <span className="font-bold text-xl">PushIT Ecommerce</span>
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <Menu className="h-6 w-6"/>
                            <span className="sr-only">Toggle header menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full max-w-xs p-4">
                        <HeaderRightContent /> 
                        <MenuItems />
                                               
                    </SheetContent>
                </Sheet> 
                <div className="hidden lg:block">
                    <MenuItems /> 
                </div>   
                <div className="hidden lg:block">
                    <HeaderRightContent />
                </div>
            </div>
        </header>   
    )
}

export default ShoppingHeader;
