import { Fragment, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, editAProduct, fetchAllProducts } from "../../store/admin/products-slice";
import { Button } from "../../components/ui/button";
import { Sheet, SheetHeader, SheetTitle, SheetContent } from "../../components/ui/sheet";
import { addProductFormElements } from "../../config";
import CommonForm from "../../components/common/form";
import ProductImageUpload from "../../components/admin/image-upload";
import { toast } from "sonner";
import AdminProductTile from "./product-tile";
import { deleteProduct } from "../../store/admin/products-slice";

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

        currentEditedId !== null ? 
        dispatch(editAProduct({
            id: currentEditedId,
            formData: {
                ...formData,
                image: uploadedImage || formData.image
            }
        })).then((data)=> {
            
            if(data?.payload?.success){
                dispatch(fetchAllProducts())
                setFormData(initialFormData)
                setopenCreateProductsDialog(false)
                setCurrentEditedId(null)
                setImageFile(null);
                setUploadedImage("");
                toast("Product Updated Successfully")
            }
        })
        : 
        dispatch(addNewProduct({
            ...formData,
            image: uploadedImage
        })).then((data)=> {
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

    function handleDelete(getCurrentProductId) {
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
        toast("Product Deleted Successfully");
      }
    });
  }

    function isFormValid() {
        return formData.title.trim() !== "" &&
            formData.description.trim() !== "" &&
            formData.category.trim() !== "" &&
            formData.brand.trim() !== "" &&
            formData.price !== "" &&
            formData.salePrice !== "" &&
            formData.totalStock !== "";
    }       

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    
    return (
        <Fragment>
            <div className="w-full flex justify-end">
                <Button onClick={() => setopenCreateProductsDialog(true)}>Add New Product</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {
                    productList?.map((product) => (
                        <AdminProductTile setUploadedImage={setUploadedImage} setCurrentEditedId={setCurrentEditedId} setopenCreateProductsDialog={setopenCreateProductsDialog} setFormData={setFormData} key={product?._id} product={product} handleDelete={handleDelete} />
                    ))
                }
            </div>
            <Sheet open={openCreateProductsDialog} onOpenChange={() => {
                setopenCreateProductsDialog(false);
                setCurrentEditedId(null)
                setFormData(initialFormData)
                setImageFile(null)
                setUploadedImage("")
            }}>
                <SheetContent side="right" className="overflow-auto pl-3">
                    <SheetHeader className="pl-0 pb-0 font-extrabold text-lg">
                        <SheetTitle>{currentEditedId !== null ? "Edit Product" : "Add New Product"}</SheetTitle>
                    </SheetHeader>
                    <ProductImageUpload imageFile={imageFile} setImageFile={setImageFile} uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} isEditMode={currentEditedId !== null} />
                    <div className="flex flex-col py-6">
                        <CommonForm onSubmit={onSubmit} formData={formData} setFormData={setFormData} buttonText={currentEditedId !== null ? "Update" : "Add"} formControl={addProductFormElements} isBtnDisabled={!isFormValid()}>

                        </CommonForm>
                    </div>
                </SheetContent>
            </Sheet>
        </Fragment>
    )
}

export default AdminProducts;