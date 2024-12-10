interface InitDataInterface {
  ADMIN_KEY?: string;
  Customer?: interCustomerInterface[];
  header?: HeaderProps;
  video?: VideoProps;
  album?: AlbumProps;
  date: DateStringProps;
  store?: StoreProps;
  about?: AboutProps;
  event?: EventProps;
  couple?: CoupleProps;
  subcouple?: SubCoupleProps;
  donate?: DonateProps;
  footer?: FooterProps;
}
interface DateStringProps {
  startDate?: string;
  weddingDate?: string;
}

interface interCustomerInterface {
  id: number;
  name: string;
  phone: string;
  confirmed: boolean;
}

interface InitFormInterface {
  name: string;
  phone: string;
  message: string;
}

interface VideoProps {
  title: string;
  description: string;
  videoUrl: string;
}

interface HeaderProps {
  mainImage: string;
  subImage: string;
  title: string;
  subtitle: string;
  date: string;
  month: string;
}

interface AlbumProps {
  title: string;
  description: string;
  images: string[];
}
interface CalendarProps {
  startDate: Date;
  weddingDate: Date;
}

interface DetailStore {
  time: string;
  title: string;
  detail: string;
  srcImage: string;
}

interface StoreProps {
  title: string;
  description: string;
  storyItem: DetailStore[];
}

interface AboutProps {
  title: string;
  messages: string[];
  imageUrl: string;
}

interface EventDetails {
  name: string;
  time: string;
  location: string;
  imageUrl: string;
}

interface EventProps {
  title: string;
  message: string;
  events: EventDetails[];
}

interface PersonDetails {
  father: string;
  mother: string;
  description: string;
  imageUrl: string;
}

interface CoupleProps {
  title: string;
  groom: PersonDetails;
  bride: PersonDetails;
}

interface Person {
  name: string;
  description: string;
  imageUrl: string;
}

interface SubCoupleProps {
  title: string;
  bridesmaid: Person;
  groomsman: Person;
}

interface BankDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
  imageUrl: string;
}

interface DonateProps {
  groomBankDetails: BankDetails;
  brideBankDetails: BankDetails;
}

interface FooterProps {
  message: string;
  names: string;
}

export type {
  InitDataInterface,
  interCustomerInterface,
  InitFormInterface,
  HeaderProps,
  VideoProps,
  AlbumProps,
  CalendarProps,
  StoreProps,
  DetailStore,
  AboutProps,
  EventProps,
  CoupleProps,
  SubCoupleProps,
  DonateProps,
  FooterProps,
  DateStringProps,
  EventDetails,
  PersonDetails,
};
