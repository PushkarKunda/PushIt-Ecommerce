import { Fragment } from "react";
import { filterOptions } from "../../config";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

function ShoppingFilter() {
    return (
        <div className="bg-background rounded-lg shadow-sm">
            <div className="p-4 border-b">
                <h3 className="text-lg font-extrabold">Filters</h3>
            </div>
            <div className="p-4 space-y-4">
                {
                    Object.keys(filterOptions).map((key) => (
                        <Fragment>
                        <div key={key}>
                            <h3 className="font-medium mb-2">{key}</h3>
                            <div className="grid gap-2 mt-2">
                                {
                                    filterOptions[key].map((option) => (
                                        <Label key={option.id} className="flex items-center gap-2">
                                            <Checkbox/>
                                            {option.label}
                                        </Label>
                                    ))
                                }
                            </div>
                        </div>
                        <Separator/>
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default ShoppingFilter