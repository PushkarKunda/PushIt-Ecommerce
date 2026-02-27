import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";
import ShoppingFilter from "../../components/shopping/filter";
import { Button } from "../../components/ui/button";
import { ArrowDownWideNarrow, UserSearch } from "lucide-react";
import { sortOptions } from "../../config";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilterProducts } from "../../store/shop/products-slice";
import ShoppingProductTile from "../../components/shopping/product-tile";
import { Skeleton } from "../../components/ui/skeleton";    
import { useState} from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import ProductDetails from "../../components/shopping/products-details";
import { fetchProductDetails } from "../../store/shop/products-slice";
import { addToCart, fetchCartItems } from "../../store/shop/cart-slice";
import { toast } from "sonner";





function createSearchParamsHelper(filterParams) {
    const queryParams = [];

    for(const [key, value] of Object.entries(filterParams)){
        if(Array.isArray(value) && value.length > 0){
            const paramValue = value.join(",");
            queryParams.push(`${key}=${encodeURIComponent(paramValue)}`)
        }
    }

    return queryParams.join("&");
}

function ShoppingListing() {

    const dispatch = useDispatch();
    const {productList, productDetails} = useSelector((state) => state.shopProducts)
    const { user } = useSelector((state) => state.auth);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState(null);
    const[searchParams, setSearchParams] = useSearchParams()
    const [open, setOpen] = useState(false);


    function handleSortChange(value) {
        setSort(value);
    }

    function handleFilterChange(getSectionId, getCurrentOption) {
        let cpyFilters = { ...filters };
        const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);

        if (indexOfCurrentSection === -1) {
            cpyFilters = {
                ...cpyFilters,
                [getSectionId]: [getCurrentOption],
            };
        } else {
            const indexOfCurrentOption = cpyFilters[getSectionId].indexOf(getCurrentOption);

            if (indexOfCurrentOption === -1)
                cpyFilters[getSectionId].push(getCurrentOption);
            else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
        }

        setFilters(cpyFilters);
        sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
    }

    useEffect(() => {
        setSort("price-lowtohigh");
        
        const categoryParam = searchParams.get("category");
        if (categoryParam) {
            const categories = categoryParam.split(",");
            setFilters({ category: categories });
            sessionStorage.setItem('filters', JSON.stringify({ category: categories }));
        } else {
            setFilters(JSON.parse(sessionStorage.getItem('filters')) || {})
        }
    }, [searchParams]);

    useEffect(() => {
        if(filters !== null && sort !== null){
            dispatch(fetchAllFilterProducts({filterParams: filters, sortParams: sort}));
        }
    }, [dispatch, sort , filters]);

    useEffect(() => {
        if(filters && Object.keys(filters).length > 0){
            const createQueryString = createSearchParamsHelper(filters);
            setSearchParams(new URLSearchParams(createQueryString));
        }
    }, [filters])

    function handleGetProductDetails(id){
        dispatch(fetchProductDetails(id));
    }

    function handleAddtoCart(getCurrentProductId) {
        dispatch(
          addToCart({
            userId: user?.id,
            productId: getCurrentProductId,
            quantity: 1,
          })
        ).then((data) => {
          if (data?.payload?.success) {
            dispatch(fetchCartItems(user?.id));
            toast.success("Product is added to cart");
          }
        });
      }

    useEffect(() => {
        if(productDetails !== null){
            setOpen(true);
        }
    }, [productDetails]);

    console.log(productDetails);
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6">
            <ShoppingFilter filters={filters} handleFilterChange={handleFilterChange}/> 
            <div className="bg-background w-full rounded-lg shadow-sm p-4">
                <div className="p-4 border-b flex items-center justify-between">
                    <h2 className="text-lg font-extrabold">All Products</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-muted-foreground mr-2">{productList?.length} Products</span>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <ArrowDownWideNarrow />
                                <span>Sort by</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[200px]">
                            <DropdownMenuRadioGroup value={sort} onValueChange={handleSortChange}>
                                {
                                    sortOptions.map((option) => (
                                        <DropdownMenuRadioItem key={option.id} value={option.id}>
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
                            <ShoppingProductTile handleAddtoCart={handleAddtoCart} handleGetProductDetails={handleGetProductDetails} key={product._id} product={product} />
                        ))
                        :
                        <p>No products found</p>
                    }
                </div>  

                
            </div>
            <ProductDetails open={open} setOpen={setOpen} productDetails={productDetails} handleAddtoCart={handleAddtoCart} />
        </div>
    )
}

export default ShoppingListing;