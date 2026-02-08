import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "../../components/ui/button";


function AdminProductTile({product}){
    return (
        <Card className="w-full max-w-sm mx-auto">
            <div>
                <div className="relative">
                    <img 
                    src={product?.image}
                    alt={product?.title}
                    className="w-full h-[300px] object-cover rounded-t-lg"
                    />
                    <CardContent>
                        <h2 className="text-xl font-bold mb-2 mt-3">{product?.title}</h2>
                        <div className="flex justify-between items-center mb-2">
                            <span className={`${product?.salePrice > 0 ? 'line-through': ""}text-xl font-bold`}>${product?.price}</span>
                            <span className={`${product?.salePrice > 0 ? 'text-red-500': ""}text-xl font-bold`}>${product?.salePrice}</span>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </CardFooter>
                </div>
            </div>
        </Card>
    )
}

export default AdminProductTile