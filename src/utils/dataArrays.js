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
    title: "Budget",
    link: "budget",
    icon: UserIcon,
    priv_name: 0,
    children: "",
  },
  {
    title: "Income",
    link: "income",
    icon: UserIcon,
    priv_name: 0,
    children: "",
  },
  {
    title: "Goal",
    link: "goal",
    icon: UserIcon,
    priv_name: 0,
    children: "",
  },
  {
    title: "Expense",
    link: "expense",
    icon: UserIcon,
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
];

