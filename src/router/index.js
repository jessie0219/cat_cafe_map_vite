import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Map from "../views/MapPage.vue"; //搜尋畫面
import CatCafe from "../views/CatCafePage.vue"; //捷運搜尋的貓咖啡廳select畫面
import Cafe from "../views/cafePage.vue"; //單獨咖啡廳畫面
import Navbar from "../components/CatNavbar.vue";
//登入
import Login from "../views/LoginView.vue";
import SuserSignup from "../views/userLogin/SuserSignup.vue";
import userLogin from "../views/userLogin/LoginUser.vue";
import shopLogin from "../views/shopLogin/LoginShop.vue";
import userSignup from "../views/userLogin/SignupUser.vue";
import shopSignup from "../views/shopLogin/SignupShop.vue";
import Shop from "../views/shop/ShopView.vue";
import SshopSignup from "../views/shopLogin/SshopSignup.vue";
import userSetting from "../views/user/UserSetting.vue";
import shopSetting from "../views/shop/ShopSetting.vue";
import shopHome from "../views/shop/ShopView.vue";
import cartView from "../views/user/CartView.vue";
import OrderView from "../views/user/OrderView.vue";
import LikeView from "../views/user/LikeView.vue";
import InfoView from "../views/user/InfoView.vue";
import ShopInfo from "../views/shop/ShopInfo.vue";
import ShopWrite from "../views/shop/ShopWrite.vue";


//貓咪兩三事
import allaboutcatnav from "../views/allaboutcatnav.vue";
import allaboutcat from "../components/aboutcatnav/allaboutcat.vue";
import newcat from "../components/aboutcatnav/newcat.vue";
import muchcat from "../components/aboutcatnav/muchcat.vue";
import oldcat from "../components/aboutcatnav/oldcat.vue";
import catsay from "../components/aboutcatnav/catsay.vue";
import newcatnav from "../views/newcatnav.vue";
import all from "../components/aboutnewcat/all.vue";
import before from "../components/aboutnewcat/before.vue";
import after from "../components/aboutnewcat/after.vue";
import other from "../components/aboutnewcat/other.vue";
//新增地址&距離搜尋
import CatCafeSelect from "../views/CatCafeSelectPage.vue";
import AddLocation from "../views/AddLocation.vue";
//團購
import GroupBuying from "../views/GroupBuying/GroupBuying.vue";
import Product from "../views/GroupBuying/ProductDetail.vue";
import Cart from "../views/GroupBuying/Cart.vue";
//貓咖好康
import Discount from "../views/Discount/Discount.vue";
import DiscountDetail from "../views/Discount/DiscountDetail.vue";
//使用者新增店家
import addStore from "../views/addStore.vue";
//領養
import AdoptionPage from "../views/AdoptionPage.vue";
import AdoptionAll from "../views/AdoptionAll.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/map",
    name: "map",
    component: Map,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/user_signups",
    name: "SuserSignup",
    component: SuserSignup,
  },
  {
    path: "/user_login",
    name: "userLogin",
    component: userLogin,
  },
  {
    path: "/shop_login",
    name: "shopLogin",
    component: shopLogin,
  },
  {
    path: "/user_signup",
    name: "userSignup",
    component: userSignup,
  },
  {
    path: "/shop_signup",
    name: "shopSignup",
    component: shopSignup,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },

  {
    path: "/shop_signups",
    component: SshopSignup,
  },
  {
    path: "/user_setting",
    component: userSetting,
  },
  {
    path: "/shop_setting",
    component: shopSetting,
  },
  {
    path: "/shop_home",
    component: shopHome
  },
  {
    path: "/cart",
    component: cartView
  },
  {
    path: "/order",
    component: OrderView
  },
  {
    path: "/like",
    component: LikeView
  },
  {
    path: "/info",
    component: InfoView
  },
  {
    path: "/shop_info",
    component: ShopInfo
  },
  {
    path: "/shop_home_write",
    component: ShopWrite
  },
  {
    path: "/catCafe",
    name: "catCafe",
    component: CatCafe,
  },
  {
    path: "/cafe",
    name: "cafe",
    component: Cafe,
  },

  {
    path: "/allaboutcatnav",
    name: "allaboutcatnav",
    component: allaboutcatnav,
  },
  {
    path: "/CatNavbar",
    name: "CatNavbar",
    component: Navbar,
  },
  {
    path: "/allaboutcat",
    name: "allaboutcat",
    component: allaboutcat,
  },
  {
    path: "/newcat",
    name: "newcat",
    component: newcat,
  },
  {
    path: "/muchcat",
    name: "muchcat",
    component: muchcat,
  },
  {
    path: "/oldcat",
    name: "oldcat",
    component: oldcat,
  },
  {
    path: "/catsay",
    name: "catsay",
    component: catsay,
  },

  {
    path: "/newcatnav",
    name: "newcatnav",
    component: newcatnav,
  },
  {
    path: "/all",
    name: "all",
    component: all,
  },
  {
    path: "/before",
    name: "before",
    component: before,
  },
  {
    path: "/after",
    name: "after",
    component: after,
  },
  {
    path: "/other",
    name: "other",
    component: other,
  },

  {
    path: "/addLocation",
    name: "AddLocation",
    component: AddLocation,
  },
  {
    path: "/catCafeSelect",
    name: "CatCafeSelect",
    component: CatCafeSelect,
  },
  {
    path: "/products/:id",
    name: "product",
    component: Product,
  },
  {
    path: "/cart/",
    name: "cart",
    component: Cart,
  },
  {
    path: "/discount",
    name: "discount",
    component: Discount,
  },
  {
    path: "/discountdetail",
    name: "discountdetail",
    component: DiscountDetail,
  },
  {
    path: '/newcatnav',
    name: 'newcatnav',
    component: newcatnav
  },
  {
    path: '/all',
    name: 'all',
    component: all
  },
  {
    path: '/before',
    name: 'before',
    component: before
  },
  {
    path: '/after',
    name: 'after',
    component: after
  },
  {
    path: '/other',
    name: 'other',
    component: other
  },

  {
    path: '/groupbuying',
    name: 'groupbuying',
    component: GroupBuying
  },
  {
    path: '/products/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/cart/',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/discount',
    name: 'discount',
    component: Discount
  },
  {
    path: '/discountdetail/:id',
    name: 'discountdetail',
    component: DiscountDetail
  },
  {
    path: '/addStore',
    name: 'addStore',
    component: addStore
  },
  {
    path: '/adoptionpage',
    name: 'adoptionpage',
    component: AdoptionPage
  },
  {
    path: '/AdoptionAll',
    name: 'AdoptionAll',
    component: AdoptionAll
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
