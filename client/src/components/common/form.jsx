import { registerFormControls } from "@/config";

function CommonForm(formControl, formData, setFormData, onSubmit, buttonText) {

    function renderInputByComponentType(controlItem) {
        let element = null;
        const value = formData[controlItem.name] || "";


        switch (controlItem.componentType) {
            case "input":
                element = (<Input
                    name={controlItem.name}
                    type={controlItem.type}
                    placeholder={controlItem.placeholder}
                    id={controlItem.name}
                    value={value}
                    onChange={(event) => setFormData({
                        ...formData,
                        [controlItem.name]: event.target.value,
                    })}
                />
                );
                break;
            case "textarea":
                element = (
                    <Textarea
                        name={controlItem.name}
                        placeholder={controlItem.placeholder}
                        id={controlItem.name}
                        value={value}
                        onChange={(event) => setFormData({
                            ...formData,
                            [controlItem.name]: event.target.value,
                        })}
                    />
                );
                break;
            case "select":
                element = (
                    <Select onValueChange={(value) => setFormData({
                        ...formData,
                        [controlItem.name]: value,
                    })} value={value}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={controlItem.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                controlItem.options &&
                                    controlItem.options.length > 0 ?
                                    controlItem.options.map(optionItem => <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) : null
                            }
                        </SelectContent>
                    </Select>
                );
                break;
            default:
                element = (<Input
                    name={controlItem.name}
                    type={controlItem.type}
                    placeholder={controlItem.placeholder}
                    id={controlItem.name}
                    value={value}
                    onChange={(event) => setFormData({
                        ...formData,
                        [controlItem.name]: event.target.value,
                    })}
                />
                );
                break;
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                {
                    registerFormControls.map(controlItem => <div className="grid w-full gap-1.5" key={controlItem.name}>
                        <label className="mb-1">{controlItem.label}</label>
                        {
                            renderInputByComponentType(controlItem)
                        }
                    </div>)
                }
            </div>
            <Button type="submit" className="mt-3 w-full">{buttonText || "Submit"}</Button>
        </form>
    )
}

export default CommonForm;