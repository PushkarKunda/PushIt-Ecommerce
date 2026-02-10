import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";
import ShoppingFilter from "../../components/shopping/filter";
import { Button } from "../../components/ui/button";
import { ArrowDownWideNarrow, UserSearch } from "lucide-react";
import { sortOptions } from "../../config";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilterProducts } from "../../store/shop/products-slice";
import ShoppingProductTile from "./product-tile";
import { Skeleton } from "../../components/ui/skeleton";    
import { useState} from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";





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
    const {productList, isLoading} = useSelector((state) => state.shopProducts)
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState(null);
    const[searchParams, setSearchParams] = useSearchParams()


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
        setFilters(JSON.parse(sessionStorage.getItem('filters')) || {})
    }, []);

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

    console.log(filters);
    

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