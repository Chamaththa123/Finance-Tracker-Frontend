import {
  UserIcon,
  ChartBarIcon,
  PresentationChartLineIcon,
  BookOpenIcon,
  BuildingStorefrontIcon,
  ArchiveBoxXMarkIcon,
  UsersIcon,
  ArrowLeftCircleIcon,
  WrenchIcon,
  CreditCardIcon,
  ChartPieIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  DocumentChartBarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import {
  InvoiceIcon,
  QuotationIcon,
  ReportIcon,
  StockIcon,
  SupplierIcon,
  WalletIcon,
  SendInvoicesIcon,
  TrackExpensesIcon,
  TrackVATIcon,
  ManageInventoryIcon,
  TrackBillsIcon,
  TrackSalesIcon,
} from "./icons";

const CustomerArray = [
  {
    title: "Add Customers",
    link: "add-customers",
    priv_name: "Customer_Management",
    icon: UserIcon,
  },
  {
    title: "List Customers",
    link: "list-customers",
    priv_name: "Customer_Management",
    icon: UserIcon,
  },
  {
    title: "Customer Credit Logs",
    link: "customer-credit-logs",
    priv_name: "Customer_Credit_Logs",
    icon: BookOpenIcon,
  },
  {
    title: "Customer Returns",
    link: "customer-returns",
    priv_name: "Customer_Returns",
    icon: ArchiveBoxXMarkIcon,
  },
];

const QuotationArray = [
  {
    title: "Quotations",
    link: "/quotation",
    priv_name: "Quotation_Management",
    icon: ChartPieIcon,
  },
  {
    title: "Add Quotation",
    link: "quotation/new",
    priv_name: "Quotation_Management",
    icon: ChartPieIcon,
  },
];

const InvoiceArray = [
  {
    title: "Invoices",
    link: "/invoices",
    priv_name: "Invoice_Management",
    icon: CreditCardIcon,
  },
  {
    title: "Add Invoice",
    link: "invoices/new",
    priv_name: "Invoice_Management",
    icon: CreditCardIcon,
  },
];

const Stocks = [
  {
    title: "Add Products",
    link: "add-products",
    priv_name: "Products_Management",
    icon: BuildingStorefrontIcon,
  },
  {
    title: "List Products",
    link: "list-products",
    priv_name: "Products_Management",
    icon: BuildingStorefrontIcon,
  },
  {
    title: "GRN",
    link: "grn",
    priv_name: "GRN",
    icon: PresentationChartLineIcon,
  },
  {
    title: "Add GRN",
    link: "grn/add",
    priv_name: "GRN",
    icon: PresentationChartLineIcon,
  },
  {
    title: "Barcodes",
    link: "barcodes",
    priv_name: "Barcodes",
    icon: PresentationChartLineIcon,
  },
  {
    title: "Damage Note",
    link: "damage-note",
    priv_name: "Damage_Note",
    icon: ArchiveBoxXMarkIcon,
  },
  {
    title: "Add Damage Note",
    link: "damage-note/add",
    priv_name: "Damage_Note",
    icon: ArchiveBoxXMarkIcon,
  },
];

const Suppliers = [
  {
    title: "Add Suppliers",
    link: "add-supplier",
    priv_name: "Suppliers_Management",
    icon: UsersIcon,
  },
  {
    title: "List Suppliers",
    link: "list-supplier",
    priv_name: "Suppliers_Management",
    icon: UsersIcon,
  },
  {
    title: "Supplier Credit Logs",
    link: "supplier-credit-logs",
    priv_name: "Supplier_Credit_Logs",
    icon: BookOpenIcon,
  },
  {
    title: "Purchase Returns",
    link: "purchase-returns",
    priv_name: "Purchase_Returns",
    icon: ArrowLeftCircleIcon,
  },
  {
    title: "Add Purchase Returns",
    link: "purchase-returns/add",
    priv_name: "Purchase_Returns",
    icon: ArrowLeftCircleIcon,
  },
];

const Salesmen = [
  {
    title: "Add Salesmen",
    link: "add-salesman",
    priv_name: "Salesmen",
    icon: UsersIcon,
  },
  {
    title: "List Salesmen",
    link: "list-salesman",
    priv_name: "Salesmen",
    icon: UsersIcon,
  },
];

const Users = [
  {
    title: "Add Staff",
    link: "users/add",
    priv_name: "Users",
    icon: UsersIcon,
  },
  {
    title: "List Staff",
    link: "users",
    priv_name: "Salesmen",
    icon: UsersIcon,
  },
];

const Settings = [
  {
    title: "Invoice Settings",
    link: "invoice-settings",
    priv_name: "Settings",
    icon: WrenchIcon,
  },
  {
    title: "System Settings",
    link: "system-settings",
    priv_name: "Settings",
    icon: WrenchIcon,
  },
];

const Reports = [
  {
    title: "Stock Report",
    link: "reports/stock-report",
    priv_name: "Reports",
    icon: ReportIcon,
  },
  {
    title: "Stock Detail Report",
    link: "reports/stock-detail-report",
    priv_name: "Reports",
    icon: ReportIcon,
  },
  {
    title: "Invoice Detail Report",
    link: "reports/invoice-detail-report",
    priv_name: "Reports",
    icon: ReportIcon,
  },
  {
    title: "Stock Card",
    link: "stock-card",
    priv_name: "Reports",
    icon: ReportIcon,
  },
  {
    title: "Profit & Lost",
    link: "pl-report",
    priv_name: "Reports",
    icon: ReportIcon,
  },
  {
    title: "Supplier Report",
    link: "reports/supplier-report",
    priv_name: "Reports",
    icon: ReportIcon,
  },
  {
    title: "Earning Report",
    link: "reports/earning",
    priv_name: "Reports",
    icon: ReportIcon,
  },
  {
    title: "Expenses Report",
    link: "reports/expenses",
    priv_name: "Reports",
    icon: ReportIcon,
  },
];
export const newNavigationItems = [
  {
    title: "Dashboard",
    link: "",
    icon: ChartBarIcon,
    priv_name: 0,
    children: "",
  },
  {
    title: "People",
    link: "#",
    icon: UserIcon,
    priv_name: 0,
    children: [
      {
        title: "Customers",
        link: "#",
        icon: UserIcon,
        priv_name: 0,
        children: CustomerArray,
      },
      {
        title: "Suppliers",
        link: "#",
        icon: SupplierIcon,
        priv_name: 0,
        children: Suppliers,
      },
      {
        title: "Staff",
        link: "#",
        icon: SupplierIcon,
        priv_name: 0,
        children: Users,
      },
    ],
  },
  {
    title: "Sales",
    link: "#",
    icon: DocumentChartBarIcon,
    priv_name: 0,
    children: [
      {
        title: "Quotation",
        link: "quotation",
        priv_name: "Quotation_Management",
        icon: QuotationIcon,
        children: QuotationArray,
      },
      {
        title: "Invoices",
        link: "invoices",
        icon: InvoiceIcon,
        priv_name: "Invoices",
        children: InvoiceArray,
      },
      {
        title: "Installment Payments",
        link: "duepayment",
        priv_name: "Due_Payments",
        icon: InvoiceIcon,
        children: "",
      },
      {
        title: "Earnings & Expenses",
        link: "wallet",
        priv_name: "Earnings_Expenses",
        icon: WalletIcon,
        children: "",
      },
    ],
  },
  {
    title: "Inventory",
    link: "#",
    priv_name: 0,
    icon: StockIcon,
    children: Stocks,
  },
  {
    title: "Reports",
    link: "#",
    priv_name: "Reports",
    icon: DocumentTextIcon,
    children: Reports,
  },
  {
    title: "Chat",
    link: "#",
    priv_name: 0,
    icon: ChatBubbleLeftRightIcon,
    children: "",
  },
  {
    title: "Project Management",
    link: "#",
    priv_name: 0,
    icon: PresentationChartLineIcon,
    children: "",
  },
  {
    title: "CRM",
    link: "#",
    priv_name: 0,
    icon: ComputerDesktopIcon,
    children: "",
  },
  {
    title: "Settings",
    link: "#",
    priv_name: "Reports",
    icon: WrenchIcon,
    children: Settings,
  },
  // {
  //   title: "Apps",
  //   link: "apps",
  //   priv_name: "Apps",
  //   icon: AppIcon,
  //   children: 0,
  // },
  // {
  //   title: "Billing",
  //   link: "billing",
  //   priv_name: "Billing",
  //   icon: BillingIcon,
  //   children: 0,
  // },
];

export const gender = [
  {
    id: "Mr",
    key: "Mr",
  },
  {
    id: "Mrs",
    key: "Mrs",
  },
  {
    id: "Ms",
    key: "Ms",
  },
];

export const product_type = [
  {
    id: "1",
    key: "Item",
  },
  {
    id: "2",
    key: "Service",
  },
];

export const branches = [
  {
    id: 1,
    key: "Klautara",
  },
  {
    id: 2,
    key: "Colombo",
  },
];

export const apps = [
  {
    icon: 1,
    key: "Klautara",
  },
  {
    id: 2,
    key: "Colombo",
  },
];

export const personalizeOptions = [
  {
    icon: SendInvoicesIcon,
    label: "Send & Track Invoices",
  },
  {
    icon: TrackExpensesIcon,
    label: "Track Receipts & Expenses",
  },
  {
    icon: TrackVATIcon,
    label: "Track Your VAT",
  },
  {
    icon: ManageInventoryIcon,
    label: "Manage Inventory",
  },
  {
    icon: TrackBillsIcon,
    label: "Track Your Bills",
  },
  {
    icon: TrackSalesIcon,
    label: "Track Sales",
  },
];

export const colors = [
  {
    code: "#FF8686",
  },
  {
    code: "#E31919",
  },
  {
    code: "#930000",
  },
  {
    code: "#E2BFA5",
  },
  {
    code: "#C57730",
  },
  {
    code: "#FFD43C",
  },
  {
    code: "#A0D859",
  },
  {
    code: "#43783E",
  },
  {
    code: "#41E39F",
  },
  {
    code: "#2B90B0",
  },
  {
    code: "#0085FF",
  },
  {
    code: "#5B01CD",
  },
  {
    code: "#DF68F2",
  },
  {
    code: "#660C7C",
  },
  {
    code: "#2B1D21",
  },
  {
    code: "#D9D9D9",
  },
];
