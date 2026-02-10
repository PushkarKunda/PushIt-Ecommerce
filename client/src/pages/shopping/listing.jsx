import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";
import ShoppingFilter from "../../components/shopping/filter";
import { Button } from "../../components/ui/button";
import { ArrowDownWideNarrow } from "lucide-react";
import { sortOptions } from "../../config";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilterProducts } from "../../store/shop/products-slice";
import ShoppingProductTile from "./product-tile";
import { Skeleton } from "../../components/ui/skeleton";

function ShoppingListing() {

    const dispatch = useDispatch();
    const {productList, isLoading} = useSelector((state) => state.shopProducts)

    useEffect(() => {
        dispatch(fetchAllFilterProducts());
    }, []);

    

    return (
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6">
            <ShoppingFilter/> 
            <div className="bg-background w-full rounded-lg shadow-sm p-4">
                <div className="p-4 border-b flex items-center justify-between">
                    <h2 className="text-lg font-extrabold">All Products</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-muted-foreground mr-2">Showing 1-12 of 100 products</span>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <ArrowDownWideNarrow />
                                <span>Sort by</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[200px]">

                            <DropdownMenuRadioGroup>
                                {
                                    sortOptions.map((option) => (
                                        <DropdownMenuRadioItem key={option.id}>
                                            {option.label}
                                        </DropdownMenuRadioItem>
                                    ))
                                }
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {
                        productList && productList.length > 0 ?
                        productList.map((product) => (
                            <ShoppingProductTile key={product._id} product={product} />
                        ))
                        :
                        <p>No products found</p>
                    }
                </div>  

                
            </div>
        </div>
    )
}

export default ShoppingListing;