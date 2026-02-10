import ShoppingFilter from "../../components/shopping/filter";


function ShoppingListing() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6">
            <ShoppingFilter/> 
            <div className="bg-background w-full rounded-lg shadow-sm p-4">
                <div className="p-4 border-b flex items-center justify-between">
                    <h2 className="text-lg font-extrabold">All Products</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-muted-foreground"></span>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default ShoppingListing;