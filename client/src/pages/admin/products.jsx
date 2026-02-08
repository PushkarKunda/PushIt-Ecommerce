import { Fragment, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, fetchAllProducts } from "../../store/admin/products-slice";
import { Button } from "../../components/ui/button";
import { Sheet, SheetHeader, SheetTitle, SheetContent } from "../../components/ui/sheet";
import { addProductFormElements } from "../../config";
import CommonForm from "../../components/common/form";
import ProductImageUpload from "../../components/admin/image-upload";
import { toast } from "sonner";
import AdminProductTile from "./product-tile";

const initialFormData = {
    image: null,
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    salePrice: "",
    totalStock: ""
}
function AdminProducts() {

    const [openCreateProductsDialog, setopenCreateProductsDialog] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImage, setUploadedImage] = useState("");
    const [currentEditedId, setCurrentEditedId] = useState(null);
    



    const {productList} = useSelector(state => state.adminProducts)
    const dispatch = useDispatch()

    function onSubmit(event) {
        event.preventDefault();
        dispatch(addNewProduct({
            ...formData,
            image: uploadedImage
        })).then((data)=> {
            console.log(data)
            if(data?.payload?.success){
                dispatch(fetchAllProducts())
                setImageFile(null)
                setFormData(initialFormData)
                setopenCreateProductsDialog(false)
                setImageFile(null);
                toast("Product Added Successfully")
            }
        })
    }
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    console.log(productList);
    
    return (
        <Fragment>
            <div className="w-full flex justify-end">
                <Button onClick={() => setopenCreateProductsDialog(true)}>Add New Product</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {
                    productList?.map((product) => (
                        <AdminProductTile key={product?._id} product={product} />
                    ))
                }
            </div>
            <Sheet open={openCreateProductsDialog} onOpenChange={() => {
                setopenCreateProductsDialog(false);
            }}>
                <SheetContent side="right" className="overflow-auto pl-3">
                    <SheetHeader className="pl-0 pb-0 font-extrabold text-lg">
                        <SheetTitle>Add New Product</SheetTitle>
                    </SheetHeader>
                    <ProductImageUpload imageFile={imageFile} setImageFile={setImageFile} uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
                    <div className="flex flex-col py-6">
                        <CommonForm onSubmit={onSubmit} formData={formData} setFormData={setFormData} buttonText="Add" formControl={addProductFormElements}>

                        </CommonForm>
                    </div>
                </SheetContent>
            </Sheet>
        </Fragment>
    )
}

export default AdminProducts;