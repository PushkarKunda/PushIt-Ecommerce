import { LayoutDashboard, ShoppingBasket, ShoppingCart, HousePlug, User } from "lucide-react"

export const registerFormControls = [
    {
        name: "userName",
        label: "User Name",
        type: "text",
        placeholder: "Enter User Name",
        componentType: "input"
    },
    {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter Your Email",
        componentType: "email"
    },
    {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter Your Password",
        componentType: "password"
    }
]

export const loginFormControls = [
    {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter Your Email",
        componentType: "email"
    },
    {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter Your Password",
        componentType: "password"
    }
]

export const adminSideBarMenu = [
    {
        id: "dashboard",
        label: "Dashboard",
        path: "/admin/dashboard",
        icons: <LayoutDashboard />
    },
    {
        id: "products",
        label: "Products",
        path: "/admin/products",
        icons: <ShoppingBasket />
    },
    {
        id: "orders",
        label: "Orders",
        path: "/admin/orders",
        icons: <ShoppingCart />
    }
]

export const addProductFormElements = [
    {
        label: "Title",
        name: "title",
        componentType: "input",
        type: "text",
        placeholder: "Enter product title",
    },
    {
        label: "Description",
        name: "description",
        componentType: "textarea",
        placeholder: "Enter product description",
    },
    {
        label: "Category",
        name: "category",
        componentType: "select",
        options: [
            { id: "men", label: "Men" },
            { id: "women", label: "Women" },
            { id: "kids", label: "Kids" },
            { id: "accessories", label: "Accessories" },
            { id: "footwear", label: "Footwear" },
        ],
    },
    {
        label: "Brand",
        name: "brand",
        componentType: "select",
        options: [
            { id: "nike", label: "Nike" },
            { id: "adidas", label: "Adidas" },
            { id: "puma", label: "Puma" },
            { id: "levi", label: "Levi's" },
            { id: "zara", label: "Zara" },
            { id: "h&m", label: "H&M" },
        ],
    },
    {
        label: "Price",
        name: "price",
        componentType: "input",
        type: "number",
        placeholder: "Enter product price",
    },
    {
        label: "Sale Price",
        name: "salePrice",
        componentType: "input",
        type: "number",
        placeholder: "Enter sale price (optional)",
    },
    {
        label: "Total Stock",
        name: "totalStock",
        componentType: "input",
        type: "number",
        placeholder: "Enter total stock",
    },
];

export const shoppingHeaderMenu = [
    {
        id: "home",
        label: "Home",
        path: "/shop/home",
        icons: <HousePlug />
    },
    {
        id: "products",
        label: "Products",
        path: "/shop/products",
        icons: <ShoppingBasket />
    },
    {
        id: "orders",
        label: "Orders",
        path: "/shop/orders",
        icons: <ShoppingCart />
    }
]

export const shoppingViewHeaderMenuList = [
    {
        id: "home",
        label: "Home",
        path: "/shop/home",
        
    },
    {
        id:"men",
        label: "Men",
        path: "/shop/listing",
       
    },
    {
        id:"women",
        label: "Women",
        path: "/shop/listing",
        
    },
    {
        id:"kids",
        label: "Kids",
        path: "/shop/listing",
        
    },
    {
        id:"accessories",
        label: "Accessories",
        path: "/shop/listing",
       
    },
    {
        id:"footwear",
        label: "Footwear",
        path: "/shop/listing",
        
    }
]

export const categoryOptionsMap = {
    'men': "Men",
    'women': "Women",
    'kids': "Kids",
    'accessories': "Accessories",
    'footwear': "Footwear",
}

export const brandOptionsMap = {
    'nike': "Nike",
    'adidas': "Adidas",
    'puma': "Puma",
    'levi': "Levi's",
    'zara': "Zara",
    'h&m': "H&M",
}

export const filterOptions = {
  category: [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },
    { id: "accessories", label: "Accessories" },
    { id: "footwear", label: "Footwear" },
  ],
  brand: [
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "puma", label: "Puma" },
    { id: "levi", label: "Levi's" },
    { id: "zara", label: "Zara" },
    { id: "h&m", label: "H&M" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];