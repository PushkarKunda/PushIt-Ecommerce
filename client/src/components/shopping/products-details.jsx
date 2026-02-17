import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";


function ProductDetails({open, setOpen, productDetails}){
console.log(productDetails)

    return(
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="grid grid-cols-2 gap-8 sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw] overflow-y-auto">

                <div className="relative overflow-hidden rounded-lg">
                    <img src={productDetails?.image} alt={productDetails?.name} className="aspect-square w-full h-full object-cover" width={600} height={600} />
                </div>
                <div className=" ">
                    <div className="mb-5">
                        <h1 className="text-3xl font-bold tracking-tight">{productDetails?.title}</h1>
                        <p className="text-muted-foreground">{productDetails?.description}</p>
                    </div>
                    <div className="flex items-center justify-between mb-5">
                        <p className={`${productDetails?.salePrice > 0 ? "line-through" : "text-lg font-semibold text-primary"}`}>${productDetails?.price}</p>                        
                        {
                            productDetails?.salePrice > 0 ? (
                                <p className="text-lg font-bold text-primary">${productDetails?.salePrice}</p>
                            ) : null
                        }
                    </div>
                    <div className="flex items-center gap-2 mb-5">
                        <StarIcon className="h-4 w-4 fill-primary"/>
                        <StarIcon className="h-4 w-4 fill-primary"/>
                        <StarIcon className="h-4 w-4 fill-primary"/>
                        <StarIcon className="h-4 w-4 fill-primary"/>
                        <StarIcon className="h-4 w-4 fill-primary"/>
                        <span className="text-sm text-muted-foreground">4.5 stars</span>
                    </div>
                    <div className="mt-5">
                        <Button className="w-full">
                            Add to Cart
                        </Button>
                    </div>  
                    <Separator className="mt-5" />
                    <div className="max-h-[300px] overflow-y-auto">
                        <h2 className="text-xl font-bold">Reviews</h2>
                        <div className="grid gap-6">
                            <div className="flex gap-4">
                                <Avatar>
                                    
                                    <AvatarFallback>SM</AvatarFallback>
                                </Avatar>
                                <div classNme="grid gap-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold">Sangam Mukherjee</h3>
                                    </div>
                                    <div className="flex items-center gap-0.5">
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        This is a great product. I would recommend it to others.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            <div className="flex gap-4">
                                <Avatar>
                                    
                                    <AvatarFallback>SM</AvatarFallback>
                                </Avatar>
                                <div classNme="grid gap-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold">Sangam Mukherjee</h3>
                                    </div>
                                    <div className="flex items-center gap-0.5">
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        This is a great product. I would recommend it to others.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            <div className="flex gap-4">
                                <Avatar>
                                    
                                    <AvatarFallback>SM</AvatarFallback>
                                </Avatar>
                                <div classNme="grid gap-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold">Sangam Mukherjee</h3>
                                    </div>
                                    <div className="flex items-center gap-0.5">
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                        <StarIcon className="h-4 w-4 fill-primary"/>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        This is a great product. I would recommend it to others.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-2">
                            <Input placeholder="Add a review" />
                            <Button>Post</Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )   
}

export default ProductDetails;