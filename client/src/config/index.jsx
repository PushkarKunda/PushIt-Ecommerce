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

export const shoppingViewHeaderMenuItems = [
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
    'beauty': "beauty",
    'fragrances': "fragrances",
    'furniture': "furniture",
    'home-decoration': "home-decoration",
    'laptops': "laptops",
    'mens-shirts': "mens-shirts",
    'mens-shoes': "mens-shoes",
    'mens-watches': "mens-watches",
    'mobile-accessories': "mobile-accessories",
    'motorcycle': "motorcycle",
    'skin-care': "skin-care",
    'smartphones': "smartphones",
    'sports-accessories': "sports-accessories",
    'sunglasses': "sunglasses",
    'tablets': "tablets",
    'tops': "tops",
    'vehicle': "vehicle",
    'womens-bags': "womens-bags",
    'womens-dresses': "womens-dresses",
    'womens-jewellery': "womens-jewellery",
    'womens-shoes': "womens-shoes",
    'womens-watches': "womens-watches"
}

export const brandOptionsMap = {
    'essence': "Essence",
    'glamour-beauty': "Glamour Beauty",
    'velvet-touch': "Velvet Touch",
    'chic-cosmetics': "Chic Cosmetics",
    'nail-couture': "Nail Couture",
    'calvin-klein': "Calvin Klein",
    'chanel': "Chanel",
    'dior': "Dior",
    'dolce-&-gabbana': "Dolce & Gabbana",
    'gucci': "Gucci",
    'annibale-colombo': "Annibale Colombo",
    'furniture-co.': "Furniture Co.",
    'knoll': "Knoll",
    'bath-trends': "Bath Trends",
    'apple': "Apple",
    'asus': "Asus",
    'huawei': "Huawei",
    'lenovo': "Lenovo",
    'dell': "Dell",
    'fashion-trends': "Fashion Trends",
    'gigabyte': "Gigabyte",
    'classic-wear': "Classic Wear",
    'casual-comfort': "Casual Comfort",
    'urban-chic': "Urban Chic",
    'nike': "Nike",
    'puma': "Puma",
    'off-white': "Off White",
    'fashion-timepieces': "Fashion Timepieces",
    'longines': "Longines",
    'rolex': "Rolex",
    'amazon': "Amazon",
    'beats': "Beats",
    'techgear': "TechGear",
    'gadgetmaster': "GadgetMaster",
    'snaptech': "SnapTech",
    'provision': "ProVision",
    'generic-motors': "Generic Motors",
    'kawasaki': "Kawasaki",
    'motogp': "MotoGP",
    'scootmaster': "ScootMaster",
    'speedmaster': "SpeedMaster",
    'attitude': "Attitude",
    'olay': "Olay",
    'vaseline': "Vaseline",
    'oppo': "Oppo",
    'realme': "Realme",
    'samsung': "Samsung",
    'vivo': "Vivo",
    'fashion-shades': "Fashion Shades",
    'fashion-fun': "Fashion Fun",
    'chrysler': "Chrysler",
    'dodge': "Dodge",
    'fashionista': "Fashionista",
    'heshe': "Heshe",
    'prada': "Prada",
    'elegance-collection': "Elegance Collection",
    'comfort-trends': "Comfort Trends",
    'fashion-diva': "Fashion Diva",
    'pampi': "Pampi",
    'fashion-express': "Fashion Express",
    'iwc': "IWC",
    'fashion-gold': "Fashion Gold",
    'fashion-co.': "Fashion Co."
}

export const filterOptions = {
  category: [
    { id: "beauty", label: "beauty" },
    { id: "fragrances", label: "fragrances" },
    { id: "furniture", label: "furniture" },
    { id: "home-decoration", label: "home-decoration" },
    { id: "laptops", label: "laptops" },
    { id: "mens-shirts", label: "mens-shirts" },
    { id: "mens-shoes", label: "mens-shoes" },
    { id: "mens-watches", label: "mens-watches" },
    { id: "mobile-accessories", label: "mobile-accessories" },
    { id: "motorcycle", label: "motorcycle" },
    { id: "skin-care", label: "skin-care" },
    { id: "smartphones", label: "smartphones" },
    { id: "sports-accessories", label: "sports-accessories" },
    { id: "sunglasses", label: "sunglasses" },
    { id: "tablets", label: "tablets" },
    { id: "tops", label: "tops" },
    { id: "vehicle", label: "vehicle" },
    { id: "womens-bags", label: "womens-bags" },
    { id: "womens-dresses", label: "womens-dresses" },
    { id: "womens-jewellery", label: "womens-jewellery" },
    { id: "womens-shoes", label: "womens-shoes" },
    { id: "womens-watches", label: "womens-watches" }
  ],
  brand: [
    { id: "essence", label: "Essence" },
    { id: "glamour-beauty", label: "Glamour Beauty" },
    { id: "velvet-touch", label: "Velvet Touch" },
    { id: "chic-cosmetics", label: "Chic Cosmetics" },
    { id: "nail-couture", label: "Nail Couture" },
    { id: "calvin-klein", label: "Calvin Klein" },
    { id: "chanel", label: "Chanel" },
    { id: "dior", label: "Dior" },
    { id: "dolce-&-gabbana", label: "Dolce & Gabbana" },
    { id: "gucci", label: "Gucci" },
    { id: "annibale-colombo", label: "Annibale Colombo" },
    { id: "furniture-co.", label: "Furniture Co." },
    { id: "knoll", label: "Knoll" },
    { id: "bath-trends", label: "Bath Trends" },
    { id: "apple", label: "Apple" },
    { id: "asus", label: "Asus" },
    { id: "huawei", label: "Huawei" },
    { id: "lenovo", label: "Lenovo" },
    { id: "dell", label: "Dell" },
    { id: "fashion-trends", label: "Fashion Trends" },
    { id: "gigabyte", label: "Gigabyte" },
    { id: "classic-wear", label: "Classic Wear" },
    { id: "casual-comfort", label: "Casual Comfort" },
    { id: "urban-chic", label: "Urban Chic" },
    { id: "nike", label: "Nike" },
    { id: "puma", label: "Puma" },
    { id: "off-white", label: "Off White" },
    { id: "fashion-timepieces", label: "Fashion Timepieces" },
    { id: "longines", label: "Longines" },
    { id: "rolex", label: "Rolex" },
    { id: "amazon", label: "Amazon" },
    { id: "beats", label: "Beats" },
    { id: "techgear", label: "TechGear" },
    { id: "gadgetmaster", label: "GadgetMaster" },
    { id: "snaptech", label: "SnapTech" },
    { id: "provision", label: "ProVision" },
    { id: "generic-motors", label: "Generic Motors" },
    { id: "kawasaki", label: "Kawasaki" },
    { id: "motogp", label: "MotoGP" },
    { id: "scootmaster", label: "ScootMaster" },
    { id: "speedmaster", label: "SpeedMaster" },
    { id: "attitude", label: "Attitude" },
    { id: "olay", label: "Olay" },
    { id: "vaseline", label: "Vaseline" },
    { id: "oppo", label: "Oppo" },
    { id: "realme", label: "Realme" },
    { id: "samsung", label: "Samsung" },
    { id: "vivo", label: "Vivo" },
    { id: "fashion-shades", label: "Fashion Shades" },
    { id: "fashion-fun", label: "Fashion Fun" },
    { id: "chrysler", label: "Chrysler" },
    { id: "dodge", label: "Dodge" },
    { id: "fashionista", label: "Fashionista" },
    { id: "heshe", label: "Heshe" },
    { id: "prada", label: "Prada" },
    { id: "elegance-collection", label: "Elegance Collection" },
    { id: "comfort-trends", label: "Comfort Trends" },
    { id: "fashion-diva", label: "Fashion Diva" },
    { id: "pampi", label: "Pampi" },
    { id: "fashion-express", label: "Fashion Express" },
    { id: "iwc", label: "IWC" },
    { id: "fashion-gold", label: "Fashion Gold" },
    { id: "fashion-co.", label: "Fashion Co." }
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];