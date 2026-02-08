import { Fragment } from "react";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Sheet, SheetHeader, SheetTitle, SheetContent } from "../../components/ui/sheet";
import { addProductFormElements } from "../../config";
import CommonForm from "../../components/common/form";
import ProductImageUpload from "../../components/admin/image-upload";

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
    function onSubmit() {
        console.log(formData);
    }
    console.log(formData);

    return (
        <Fragment>
            <div className="w-full flex justify-end">
                <Button onClick={() => setopenCreateProductsDialog(true)}>Add New Product</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">

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